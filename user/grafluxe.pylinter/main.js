/**
 * @author Leandro Silva | Grafluxe, 2016
 * @license MIT
 */

/*global define, brackets, $ */
//jshint esversion:6, browser:true, devel:true

define((require, exports, module) => {
  "use strict";

  let AppInit = brackets.getModule("utils/AppInit"),
      DocumentManager,
      EditorManager,
      Dialogs,

      fileChange,
      setup,
      definePrefs,
      createPanel,
      parseOutput,
      setClickListeners,
      onLintComplete,
      onLintFail,
      onLintMsg,
      execNode,
      clean,

      init,
      ran,
      nodeDomain,
      panel,
      parsed,
      editor,
      $panelTitle,
      $panelCloseBtn,
      $panelBody,
      lastFileWasPy,
      pylintPath,
      outputPattern;

  const DEFAULT_PYLINT_PATH = (navigator.platform.includes("Mac") ? "/usr/local/bin/pylint" : "path\\to\\pylint"),
        DEFAULT_OUTPUT_PATTERN = "{msg_id} > {msg} [{symbol} @ {line},{column}]";

  init = () => {
    let MainViewManager = brackets.getModule("view/MainViewManager");

    DocumentManager = brackets.getModule("document/DocumentManager");

    MainViewManager.on("currentFileChange", fileChange);
    fileChange();
  };

  fileChange = () => {
    let currDoc = DocumentManager.getCurrentDocument();

    if (panel) {
      panel.hide();
    }

    if (currDoc && currDoc.getLanguage().getName() === "Python") {
      if (!ran) {
        ran = true;

        setup();
        definePrefs();
        createPanel();
      }

      editor = EditorManager.getActiveEditor();

      $panelBody.find("a").off("click");

      if (!lastFileWasPy) {
        lastFileWasPy = true;

        nodeDomain.on("lintComplete", onLintComplete);
        nodeDomain.on("lintFail", onLintFail);
        nodeDomain.on("lintMsg", onLintMsg);
        DocumentManager.on("documentSaved", execNode);
      }

      execNode();
    } else {
      clean();
    }
  };

  setup = () => {
    let NodeDomain = brackets.getModule("utils/NodeDomain"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    ExtensionUtils.loadStyleSheet(module, "view/style.css");

    EditorManager = brackets.getModule("editor/EditorManager");
    Dialogs = brackets.getModule("widgets/Dialogs");
    nodeDomain = new NodeDomain("nodeLogic", ExtensionUtils.getModulePath(module, "node-context"));
  };

  definePrefs = () => {
    let PreferencesManager = brackets.getModule("preferences/PreferencesManager"),
        prefs = PreferencesManager.getExtensionPrefs("pylinter");

    pylintPath = prefs.get("pylintPath");
    outputPattern = prefs.get("outputPattern");

    if (!pylintPath) {
      pylintPath = DEFAULT_PYLINT_PATH;
      prefs.set("pylintPath", pylintPath);
    }

    if (!outputPattern) {
      outputPattern = DEFAULT_OUTPUT_PATTERN;
      prefs.set("outputPattern", outputPattern);
    }
  };

  createPanel = () => {
    let WorkspaceManager = brackets.getModule("view/WorkspaceManager");

    panel = WorkspaceManager.createBottomPanel("pylint-panel", $(require("text!view/panel.html")), 55);

    $panelTitle = $("#pylint-panel > .toolbar > .title");
    $panelCloseBtn = $("#pylint-panel > .toolbar > .close");
    $panelBody = $("#pylint-body");

    $panelCloseBtn.click(() => panel.hide());
  };

  onLintComplete = (e, msg) => {
    let html;

    if (msg) {
      parsed = parseOutput(msg);
      html = "";

      parsed.out.forEach((el, i) => {
        html += `
          <tr data-pylint-el="${i}" class="pylint-line">
            <td class="line-number">${el.line + 1}</td>
            <td class="line-text">${el.txt}</td>
            <td><a href="#" data-pylint-id="${el.msgId}" class="pylint-more"></a></td>
          </tr>
        `;
      });

      $panelTitle.text(`${parsed.issueCount} Pylint Problem${parsed.issueCount > 1 ? "s" : ""}`);
      $panelBody.html(html);

      setClickListeners();

      panel.show();
    } else {
      $panelTitle.text("0 Pylint Problems");
      $panelBody.find("a").off("click").html("No Issues");
      panel.hide();
    }
  };

  onLintFail = (e, err) => {
    Dialogs.showModalDialog(
      null,
      "Pylinter",
      "<b>Pylint can't be found!</b><br>Please confirm you have Pylint installed and that the property 'pylinter.pylintPath' in your Brackets preference file is correct. Once you edit your preference file, please restart Brackets."
    );

    console.error("[Pylinter] Node Error: ", err);
  };

  onLintMsg = (e, msg) => {
    let [, title, info, desc] = msg.match(/:(.+):(\s\*.+\*)?([\s|\S]+)/);

    Dialogs.showModalDialog(
      null,
      "Pylinter",
      `<h4>${title}</h4><p>${info || ""}</p><p>${desc}</p>`
    );
  };

  parseOutput = (input) => {
    let out,
        splt;

    out = input.replace(/\r\n/g, "\n").replace(/^\D.+\n/mg, "").split(/\n/);

    out.pop();

    out = out.map((el, i) => {
      splt = el.match(/^(-?\d+),(-?\d+);(.+?)\?/);

      return {
        txt: $("<p>" + el.substr(el.indexOf("?") + 1) + "</p>").text(),
        line: Number(splt[1]) - 1,
        col: Math.max(Number(splt[2]), 0),
        msgId: splt[3]
      };
    });

    return {
      out,
      issueCount: out.length
    };
  };

  setClickListeners = () => {
    $panelBody.find(".pylint-line").click((e) => {
      let indx = e.currentTarget.dataset.pylintEl,
          el = parsed.out[indx];

      e.preventDefault();

      editor.setCursorPos(el.line, el.col, true);
      editor.focus();
    });

    $panelBody.find(".pylint-more").click((e) => {
      e.preventDefault();

      nodeDomain.exec("getMsg", pylintPath, e.currentTarget.dataset.pylintId);
    });
  };

  execNode = () => {
    nodeDomain.exec("lintIt", pylintPath, DocumentManager.getCurrentDocument().file.fullPath, outputPattern);
  };

  clean = () => {
    lastFileWasPy = false;

    if (nodeDomain) {
      nodeDomain.off("lintComplete", onLintComplete);
      nodeDomain.off("lintFail", onLintFail);
      nodeDomain.off("lintMsg", onLintMsg);
    }

    DocumentManager.off("documentSaved", execNode);
  };

  AppInit.appReady(init);
});
