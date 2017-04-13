/*jshint maxlen:false */

define({
    // ACTION:                             "Action",
    // TODO: localize ACTION to zh-cn
    // ADD_ENDLINE_TO_THE_END_OF_FILE:     "Add endline at the end of file",
    ADD_ENDLINE_TO_THE_END_OF_FILE:        "在文件末尾添加空行",
    // ADD_TO_GITIGNORE:                   "Add to .gitignore",
    ADD_TO_GITIGNORE:                      "添加到 .gitignore",
    // ADVANCED_FEATURES_WARNING:          "This features are not recommended for basic Git users as they may cause you to lose code that has been already commited if used inproperly. Use with caution.",
    ADVANCED_FEATURES_WARNING:             "这些特性并不推荐普通用户使用，因为它们有可能导致数据的丢失。",
    // AMEND_COMMIT:                       "Amend last commit",
    AMEND_COMMIT:                          "修改上一次提交",
    // AMEND_COMMIT_FORBIDDEN:             "Cannot amend commit when there are no unpushed commits",
    AMEND_COMMIT_FORBIDDEN:                "不能修改已经上传的提交",
    // _ANOTHER_BRANCH:                    "another branch",
    _ANOTHER_BRANCH:                       "其他分支",
    // AUTHOR:                             "Author",
    AUTHOR:                                "作者",
    // AUTHORS_OF:                         "Authors of",
    // TODO: localize AUTHORS_OF to zh-cn
    // AVATAR_TYPE:                        "Avatar type",
    AVATAR_TYPE:                           "头像类型",
    // BASH_NOT_AVAILABLE:                 "Bash is not available or properly configured",
    BASH_NOT_AVAILABLE:                    "Bash 不存在或者配置有误",
    // BASIC_CONFIGURATION:                "Basic configuration",
    BASIC_CONFIGURATION:                   "基本设置",
    // BLACK_WHITE_AVATAR:                 "Black and white avatar",
    BLACK_WHITE_AVATAR:                    "黑白头像",
    // BRACKETS_GIT_ERROR:                 "Brackets Git encountered an error\u2026",
    BRACKETS_GIT_ERROR:                    "Brackets Git 遇到了一个错误\u2026",
    // BRANCH_NAME:                        "Branch name",
    BRANCH_NAME:                           "分支名称",
    // BUTTON_CANCEL:                      "Cancel",
    BUTTON_CANCEL:                         "取消",
    // BUTTON_CHANGELOG:                   "Show changelog",
    BUTTON_CHANGELOG:                      "显示更改（Changelog）",
    // BUTTON_CHECKOUT_COMMIT:             "Checkout",
    BUTTON_CHECKOUT_COMMIT:                "检出（Checkout）",
    // BUTTON_CLONE:                       "Clone",
    BUTTON_CLONE:                          "克隆远程 Git 仓库",
    // BUTTON_CLOSE:                       "Close",
    BUTTON_CLOSE:                          "关闭",
    // BUTTON_COMMIT:                      "Commit",
    BUTTON_COMMIT:                         "提交",
    // BUTTON_DEFAULTS:                    "Restore defaults",
    BUTTON_DEFAULTS:                       "重置默认值",
    // BUTTON_FIND_CONFLICTS:              "Find conflicts\u2026",
    BUTTON_FIND_CONFLICTS:                 "寻找冲突位置\u2026",
    // BUTTON_INIT:                        "Init",
    BUTTON_INIT:                           "初始化 Git 仓库",
    // BUTTON_MERGE_ABORT:                 "Abort merge",
    BUTTON_MERGE_ABORT:                    "停止合并",
    // BUTTON_OK:                          "OK",
    BUTTON_OK:                             "确认",
    BUTTON_REBASE_ABORT:                   "停止",
    // BUTTON_REBASE_CONTINUE:             "Continue rebase",
    BUTTON_REBASE_CONTINUE:                "继续重定向基址",
    // BUTTON_REBASE_SKIP:                 "Skip",
    BUTTON_REBASE_SKIP:                    "跳过",
    // BUTTON_REPORT:                      "Report",
    BUTTON_REPORT:                         "报告错误",
    // BUTTON_RESET:                       "Reset index",
    BUTTON_RESET:                          "重置索引（reset）",
    // BUTTON_RESET_HARD:                  "Reset to this commit and discard the changes that came after it. (reset --hard)",
    BUTTON_RESET_HARD:                     "重置到此提交并忽略此提交以后的更改 (reset --hard)",
    // BUTTON_RESET_MIXED:                 "Reset to this commit and retain changes that came after it unstaged. (reset --mixed)",
    BUTTON_RESET_MIXED:                    "重置到此提交并保留此提交以后的更改 (reset --mixed)",
    // BUTTON_RESET_SOFT:                  "Reset to this commit and retain changes that came after it staged for a new commit. (reset --soft)",
    BUTTON_RESET_SOFT:                     "重置到此提交并把次提交以后的设置为待提交状态 (reset --soft)",
    // BUTTON_SAVE:                        "Save",
    BUTTON_SAVE:                           "保存",
    // CANCEL:                             "Cancel",
    CANCEL:                                "取消",
    // CHANGELOG:                          "Changelog",
    CHANGELOG:                             "更改记录（Changelog）",
    // CHANGE_USER_EMAIL:                  "Change git email",
    CHANGE_USER_EMAIL:                     "更改 git email",
    // CHANGE_USER_NAME:                   "Change git username",
    CHANGE_USER_NAME:                      "更改 git 用户名",
    // CHECK_GIT_SETTINGS:                 "Failed to launch Git executable - fix Git settings and restart Brackets",
    CHECK_GIT_SETTINGS:                    "检查 Git 设置",
    // CLONE_REPOSITORY:                   "Clone repository",
    CLONE_REPOSITORY:                      "克隆远程仓库",
    // CODE_INSPECTION_PROBLEMS:           "Code inspection problems:",
    CODE_INSPECTION_PROBLEMS:              "代码检测器检测出的问题：",
    // COLLAPSE_ALL:                       "Collapse all",
    COLLAPSE_ALL:                          "折叠所有",
    // COLORED_AVATAR:                     "Colored avatar",
    COLORED_AVATAR:                        "带颜色的头像",
    // COMMAND_ARGUMENTS:                  "Command arguments",
    COMMAND_ARGUMENTS:                     "命令行参数",
    // COMMIT:                             "Commit",
    COMMIT:                                "提交",
    // COMMIT_ALL_SHORTCUT:                "Commit all files",
    COMMIT_ALL_SHORTCUT:                   "提交所有修改",
    // COMMIT_CURRENT_SHORTCUT:            "Commit current file",
    COMMIT_CURRENT_SHORTCUT:               "提交当前文件",
    // COMMIT_MESSAGE_PLACEHOLDER:         "Enter commit message here\u2026",
    COMMIT_MESSAGE_PLACEHOLDER:            "在此编辑提交信息\u2026",
    // CREATE_NEW_BRANCH:                  "Create new branch\u2026",
    CREATE_NEW_BRANCH:                     "新建分支",
    // CREATE_NEW_GITFTP_SCOPE:            "Create new Git-FTP remote\u2026",
    CREATE_NEW_GITFTP_SCOPE:               "创建新的 Git-FTP 远程地址\u2026",
    // CREATE_NEW_REMOTE:                  "Create new remote\u2026",
    CREATE_NEW_REMOTE:                     "创建新的远程地址\u2026",
    // CURRENT_TRACKING_BRANCH:            "Current tracking branch",
    CURRENT_TRACKING_BRANCH:               "当前跟踪的分支",
    // _CURRENT_TRACKING_BRANCH:           "current tracking branch",
    _CURRENT_TRACKING_BRANCH:              "当前跟踪的分支",
    // CUSTOM_TERMINAL_COMMAND:            "Custom terminal command (sample: gnome-terminal or complete path to executable)",
    CUSTOM_TERMINAL_COMMAND:               "自定义终端命令（例如 gnome-terminal --window --working-directory=$1）",
    // CUSTOM_TERMINAL_COMMAND_HINT:       "Sample arguments: --window --working-directory=$1<br>$1 in arguments will be replaced by current project directory.",
    CUSTOM_TERMINAL_COMMAND_HINT:          "样例参数: --window --working-directory=$1<br>参数中的 $1 会被替换为当前目录。",
    // DATE_FORMAT:                        "MM/DD/YYYY HH:mm:ss",
    DATE_FORMAT:                           "MM/DD/YYYY HH:mm:ss",
    // DATE_MODE_0:                        "Formatted using local date format",
    DATE_MODE_0:                           "使用本地日期形式显示",
    // DATE_MODE_1:                        "Relative time",
    DATE_MODE_1:                           "相对时间",
    // DATE_MODE_2:                        "Intelligent mode (relative/formatted)",
    DATE_MODE_2:                           "智能模式 (混合使用相对时间和格式化时间)",
    // DATE_MODE_3:                        "Formatted using your own format",
    DATE_MODE_3:                           "使用自定义日期格式",
    // DATE_MODE_4:                        "Original Git date",
    DATE_MODE_4:                           "原始 Git 日期",
    // DEBUG:                              "Debug",
    DEBUG:                                 "调试",
    // DEBUG_MODE_SETTING:                 "DEBUG mode &mdash; Leave this OFF unless you need to find a problem with the extension. All Git communication will be forwarded to Brackets console!",
    DEBUG_MODE_SETTING:                    "启用调试模式",
    // DELETE_FILE:                        "Delete file",
    DELETE_FILE:                           "删除文件",
    // DELETE_LOCAL_BRANCH:                "Delete local branch",
    DELETE_LOCAL_BRANCH:                   "删除本地分支",
    // DELETE_LOCAL_BRANCH_NAME:           "Do you really wish to delete local branch \"{0}\"?",
    DELETE_LOCAL_BRANCH_NAME:              "真的希望删除名为“{0}”的本地分支吗？",
    // DELETE_REMOTE:                      "Delete remote",
    DELETE_REMOTE:                         "删除远程地址",
    // DELETE_REMOTE_NAME:                 "Do you really wish to delete remote \"{0}\"?",
    DELETE_REMOTE_NAME:                    "真的希望删除远程地址“{0}”吗？",
    // DIALOG_CHECKOUT:                    "When checking out a commit, the repo will go into a DETACHED HEAD state. You can't make any commits unless you create a branch based on this.",
    DIALOG_CHECKOUT:                       "当检出一个提交时，代码库将会进入分离状态（DETACHED HEAD）。除非您创建了一个分支，否则您不能作出任何提交。",
    // DIALOG_PULL_TITLE:                  "Pull from remote",
    DIALOG_PULL_TITLE:                     "从远程地址拉取",
    // DIALOG_PUSH_TITLE:                  "Push to remote",
    DIALOG_PUSH_TITLE:                     "推送到远程地址",
    // DIALOG_RESET_HARD:                  "You will lose all changes after this commit!",
    DIALOG_RESET_HARD:                     "此提交以后的所有更改都将丢失！",
    // DIALOG_RESET_MIXED:                 "Changes after this commit will be unstaged.",
    DIALOG_RESET_MIXED:                    "此提交以后的更改都将进入非提交状态。",
    // DIALOG_RESET_SOFT:                  "Changes after this commit will be staged for a new commit.",
    DIALOG_RESET_SOFT:                     "此提交以后的更改都将进入提交状态。",
    // DIFF:                               "Diff",
    DIFF:                                  "运行 Diff 查看更改",
    // DIFFTOOL:                           "Diff with difftool",
    // TODO: localize DIFFTOOL to zh-cn
    // DIFF_FAILED_SEE_FILES:              "Git diff failed to provide diff results. This is the list of staged files to be commited:",
    DIFF_FAILED_SEE_FILES:                 "Git diff 尝试提供差异结果但失败了。下面是待提交的文件列表：",
    // ENABLE_ADVANCED_FEATURES:           "Enable advanced features",
    ENABLE_ADVANCED_FEATURES:              "启用高级特性",
    // ENTER_GITFTP_SCOPE_NAME:            "Enter name of the new Git-FTP remote:",
    ENTER_GITFTP_SCOPE_NAME:               "输入新的 Git-FTP 远程地址：",
    // ENTER_GITFTP_SCOPE_URL:             "Enter FTP URL of the new Git-FTP remote specifing username and password:",
    ENTER_GITFTP_SCOPE_URL:                "输入新的 Git-FTP 远程地址，并指定用户名和密码：",
    // ENTER_NEW_USER_EMAIL:               "Enter email",
    ENTER_NEW_USER_EMAIL:                  "输入 email",
    // ENTER_NEW_USER_NAME:                "Enter username",
    ENTER_NEW_USER_NAME:                   "输入用户名",
    // ENTER_PASSWORD:                     "Enter password:",
    ENTER_PASSWORD:                        "输入密码：",
    // ENTER_REMOTE_GIT_URL:               "Enter Git URL of the repository you want to clone:",
    ENTER_REMOTE_GIT_URL:                  "输入远程 Git 地址",
    // ENTER_REMOTE_NAME:                  "Enter name of the new remote:",
    ENTER_REMOTE_NAME:                     "输入新的远程地址的名字：",
    // ENTER_REMOTE_URL:                   "Enter URL of the new remote:",
    ENTER_REMOTE_URL:                      "输入新的远程地址的网络地址：",
    // ENTER_USERNAME:                     "Enter username:",
    ENTER_USERNAME:                        "输入用户名：",
    // ERROR_CONNECT_NODEJS:               "Failed to connect to NodeJS. If you've just updated the extension then close all instances of Brackets and try starting again.",
    ERROR_CONNECT_NODEJS:                  "尝试连接到 NodeJS 失败。如果您刚更新这个插件，那么请关闭所有 Brackets 程序窗口，然后尝试重新启动。",
    // ERROR_TERMINAL_NOT_FOUND:           "Terminal was not found for your OS, you can define a custom Terminal command in the settings",
    ERROR_TERMINAL_NOT_FOUND:              "在您的系统里找不到预设置的终端，您可以在设置中手动定义终端命令。",
    // EXPAND_ALL:                         "Expand all",
    EXPAND_ALL:                            "展开所有",
    // EXTENDED_COMMIT_MESSAGE:            "EXTENDED",
    EXTENDED_COMMIT_MESSAGE:               "扩展提交信息",
    // EXTENSION_WAS_UPDATED_TITLE:        "The extension was updated to {0}",
    EXTENSION_WAS_UPDATED_TITLE:           "扩展已经更新到 {0} 版本",
    // FEATURES:                           "Features",
    FEATURES:                              "特性",
    // FILE_ADDED:                         "New file",
    FILE_ADDED:                            "新加入",
    // FILE_COPIED:                        "Copied",
    FILE_COPIED:                           "已复制",
    // FILE_DELETED:                       "Deleted",
    FILE_DELETED:                          "已删除",
    // FILE_IGNORED:                       "Ignored",
    FILE_IGNORED:                          "已忽略",
    // FILE_MODIFIED:                      "Modified",
    FILE_MODIFIED:                         "已修改",
    // FILE_RENAMED:                       "Renamed",
    FILE_RENAMED:                          "重命名",
    // FILE_STAGED:                        "Staged",
    FILE_STAGED:                           "被跟踪",
    // FILE_UNMERGED:                      "Unmerged",
    FILE_UNMERGED:                         "未合并",
    // FILE_UNMODIFIED:                    "Unmodified",
    FILE_UNMODIFIED:                       "未修改",
    // FILE_UNTRACKED:                     "Untracked",
    FILE_UNTRACKED:                        "未跟踪",
    // FOR_MAC_LINUX_USERS:                "For Mac/Linux users",
    FOR_MAC_LINUX_USERS:                   "对于 Mac/Linux 用户",
    // FOR_WINDOWS_USERS:                  "For Windows users",
    FOR_WINDOWS_USERS:                     "对于 Windows 用户",
    // GITFTP_PUSH_RESPONSE:               "Git-FTP Push response",
    GITFTP_PUSH_RESPONSE:                  "Git-FTP 推送的响应信息",
    // GITFTP_SCOPES:                      "Git-FTP remotes",
    GITFTP_SCOPES:                         "Git-FTP 设置的远程地址",
    // GIT_COMMIT:                         "Git commit\u2026",
    GIT_COMMIT:                            "Git 提交\u2026",
    // GIT_CONFIGURATION:                  "Git configuration",
    GIT_CONFIGURATION:                     "Git 配置",
    // GIT_DIFF:                           "Git diff &mdash;",
    GIT_DIFF:                              "Git diff &mdash;",
    // GIT_PULL_RESPONSE:                  "Git Pull response",
    GIT_PULL_RESPONSE:                     "Git Pull 的回应",
    // GIT_PUSH_RESPONSE:                  "Git Push response",
    GIT_PUSH_RESPONSE:                     "Git Push 的回应",
    // GIT_REMOTES:                        "Git remotes",
    GIT_REMOTES:                           "Git 远程仓库地址",
    // GIT_SETTINGS:                       "Git Settings\u2026",
    GIT_SETTINGS:                          "Git 设置\u2026",
    // GOTO_NEXT_GIT_CHANGE:               "Go to next Git change",
    GOTO_NEXT_GIT_CHANGE:                  "跳到下一个修改位置",
    // GOTO_PREVIOUS_GIT_CHANGE:           "Go to previous Git change",
    GOTO_PREVIOUS_GIT_CHANGE:              "回到前一个修改位置",
    // GUTTER_CLICK_DETAILS:               "Click for more details",
    GUTTER_CLICK_DETAILS:                  "点击查看更多细节",
    // HIDE_UNTRACKED:                     "Hide untracked",
    HIDE_UNTRACKED:                        "隐藏未被跟踪的",
    // HISTORY:                            "History",
    HISTORY:                               "历史记录",
    // HISTORY_COMMIT_BY:                  "by",
    // TODO: localize HISTORY_COMMIT_BY to zh-cn
    // IDENTICON:                          "Identicon (www.gravatar.com)",
    // TODO: localize IDENTICON to zh-cn
    // INIT_GITFTP_SCOPE:                  "Initialize Git-FTP remote",
    INIT_GITFTP_SCOPE:                     "初始化 Git-FTP 远程地址",
    // INIT_GITFTP_SCOPE_NAME:             "Initialize Git-FTP remote \"{0}\"?",
    INIT_GITFTP_SCOPE_NAME:                "初始化 Git-FTP 远程地址“{0}”？",
    // LAUNCH_BASH_SHORTCUT:               "Bash/Terminal shortcut",
    LAUNCH_BASH_SHORTCUT:                  "运行终端的快捷键",
    // LINES:                              "Lines",
    LINES:                                 "行数",
    // _LINES:                             "lines",
    _LINES:                                "行",
    // LIST_MODIFIED_FILES:                "Modified files",
    LIST_MODIFIED_FILES:                   "列出修改的文件",
    // LOADING:                            "Loading\u2026",
    LOADING:                               "加载中\u2026",
    // MARK_MODIFIED_FILES_IN_TREE:        "Mark modified files in file tree",
    MARK_MODIFIED_FILES_IN_TREE:           "在文件树（File tree）中标记修改的文件",
    // MERGE_BRANCH:                       "Merge branch",
    MERGE_BRANCH:                          "合并分支",
    // MERGE_MESSAGE:                      "Merge message",
    MERGE_MESSAGE:                         "合并信息",
    // MERGE_RESULT:                       "Merge result",
    MERGE_RESULT:                          "合并结果",
    // MORE_INFO:                          "More information\u2026",
    MORE_INFO:                             "更多信息\u2026",
    // NORMALIZE_LINE_ENDINGS:             "Normalize line endings (to \\n)",
    NORMALIZE_LINE_ENDINGS:                "正规化行尾（使用 \\n 作为行尾）",
    // NOTHING_TO_COMMIT:                  "Nothing to commit, working directory clean.",
    NOTHING_TO_COMMIT:                     "没有更改，不需要提交。",
    // OK:                                 "OK",
    OK:                                    "确定",
    // OPERATION_IN_PROGRESS_TITLE:        "Git operation in progress\u2026",
    OPERATION_IN_PROGRESS_TITLE:           "操作正在进行中\u2026",
    // ORIGIN_BRANCH:                      "Origin branch",
    ORIGIN_BRANCH:                         "原始分支",
    // PANEL_COMMAND:                      "Show Git panel",
    PANEL_COMMAND:                         "显示 Git 面板",
    // PANEL_SHORTCUT:                     "Toggle panel",
    PANEL_SHORTCUT:                        "显示/关闭 Git 面板",
    // PASSWORD:                           "Password",
    PASSWORD:                              "密码",
    // PASSWORDS:                          "Passwords",
    PASSWORDS:                             "密码",
    // PATH_TO_GIT_EXECUTABLE:             "Path to Git executable",
    PATH_TO_GIT_EXECUTABLE:                "Git 执行文件路径",
    // PATH_TO_GIT_MSYSGIT:                "Path to msysgit folder",
    PATH_TO_GIT_MSYSGIT:                   "msysgit 的路径",
    // PICTURE:                            "Gravatar (www.gravatar.com)",
    // TODO: localize PICTURE to zh-cn
    // PULL_AVOID_MERGING:                 "Avoid manual merging",
    PULL_AVOID_MERGING:                    "避免手动合并",
    // PULL_DEFAULT:                       "Default merge",
    PULL_DEFAULT:                          "默认合并",
    // PULL_FROM:                          "Pull from",
    // TODO: localize PULL_FROM to zh-cn
    // PULL_MERGE_NOCOMMIT:                "Merge without commit",
    PULL_MERGE_NOCOMMIT:                   "合并但不提交",
    // PULL_REBASE:                        "Use rebase",
    PULL_REBASE:                           "使用基址重建（rebase）",
    // PULL_RESET:                         "Use soft reset",
    PULL_RESET:                            "使用 soft reset",
    // PULL_SHORTCUT:                      "Pull from remote repository",
    PULL_SHORTCUT:                         "Git Pull",
    // PUSH_DEFAULT:                       "Default push",
    PUSH_DEFAULT:                          "默认推送",
    // PUSH_DELETE_BRANCH:                 "Delete remote branch",
    PUSH_DELETE_BRANCH:                    "删除远程分支",
    // PUSH_FORCED:                        "Forced push",
    PUSH_FORCED:                           "强制推送",
    // PUSH_SHORTCUT:                      "Push to remote repository",
    PUSH_SHORTCUT:                         "推送到远程代码库",
    // PUSH_TO:                            "Push to",
    PUSH_TO:                               "推送到",
    // Q_DELETE_FILE:                      "Are you sure you wish to delete the file <span class='dialog-filename'>{0}</span>?",
    Q_DELETE_FILE:                         "你确认要删除 <span class='dialog-filename'>{0}</span> 文件吗？",
    // Q_RESTART_BRACKETS:                 "Do you wish to restart Brackets to apply new settings?",
    Q_RESTART_BRACKETS:                    "希望现在重启 Brackets 并应用更改吗？",
    // Q_UNDO_CHANGES:                     "Reset changes to file <span class='dialog-filename'>{0}</span>?",
    Q_UNDO_CHANGES:                        "确认重置对 <span class='dialog-filename'>{0}</span> 文件的更改？",
    // REBASE_RESULT:                      "Rebase result",
    REBASE_RESULT:                         "基址重建（Rebase）结果",
    // REMOVE_BOM:                         "Remove BOM from files",
    REMOVE_BOM:                            "删除所有文件的 BOM",
    // REMOVE_FROM_GITIGNORE:              "Remove from .gitignore",
    REMOVE_FROM_GITIGNORE:                 "从 .gitignore 中删除",
    // REQ_INTERNET:                       "Requires internet connection",
    REQ_INTERNET:                          "需要 Internet 链接",
    // RESET_LOCAL_REPO:                   "Discard all changes since last commit",
    RESET_LOCAL_REPO:                      "放弃自最后提交以来的所有更改",
    // RESET_LOCAL_REPO_CONFIRM:           "Do you wish to discard all changes done since last commit? This action can't be reverted.",
    RESET_LOCAL_REPO_CONFIRM:              "确认放弃所有更改？这个操作不能后退。",
    // RESTART:                            "Restart",
    RESTART:                               "重新启动",
    // SAVE_CREDENTIALS_HELP:              "You don't need to fill out username/password if your credentials are managed elsewhere. Use this only when your operation keeps timing out.",
    SAVE_CREDENTIALS_HELP:                 "如果使用别的工具管理用户名和密码，这里不需要填写任何资料。但是如果操作还是超时，请考虑填写。",
    // SAVE_CREDENTIALS_IN_URL:            "Save credentials to remote url (in plain text)",
    SAVE_CREDENTIALS_IN_URL:               "保存用户名和密码（明文）",
    // SAVE_PASSWORD_QUESTION:             "Save username/password?",
    SAVE_PASSWORD_QUESTION:                "保存用户名和密码？",
    // SET_ORIGIN_URL:                     "Set origin URL",
    SET_ORIGIN_URL:                        "设置 origin 的地址",
    // SET_THIS_BRANCH_AS_TRACKING:        "Set this branch as a new tracking branch",
    SET_THIS_BRANCH_AS_TRACKING:           "设置该分支为新的跟踪分支",
    // SHORTCUTS:                          "Shortcuts",
    SHORTCUTS:                             "快捷键",
    // SHORTCUTS_HINT:                     "Separate keys with dash, like this: Ctrl-Alt-G<br>You can use the english key identifiers Ctrl, Cmd (Mac), Alt and Shift.",
    SHORTCUTS_HINT:                        "提示：用“-”分割按键",
    // SHOWN_DATE_FORMAT:                  "Format of commit dates in history",
    SHOWN_DATE_FORMAT:                     "历史记录中的日期格式",
    // SHOW_BASH_TERMINAL_BUTTON:          "Show Bash/Terminal button in the panel",
    SHOW_BASH_TERMINAL_BUTTON:             "在面板中显示终端按钮",
    // SHOW_UNTRACKED:                     "Show untracked",
    SHOW_UNTRACKED:                        "显示未被跟踪的文件",
    // STRIP_WHITESPACE_FROM_COMMITS:      "Strip trailing whitespace from commits",
    STRIP_WHITESPACE_FROM_COMMITS:         "去除提交信息后的空白字符",
    // TARGET_BRANCH:                      "Target branch",
    TARGET_BRANCH:                         "目标分支",
    // TITLE_CHECKOUT:                     "Do you really wish to checkout this commit?",
    TITLE_CHECKOUT:                        "确认检出此提交？",
    // TITLE_RESET:                        "Do you really wish to reset?",
    TITLE_RESET:                           "确认重置到此提交？",
    // TOOLTIP_CHECKOUT_COMMIT:            "Checkout a specific commit",
    TOOLTIP_CHECKOUT_COMMIT:               "检出一个特定的提交",
    // TOOLTIP_CLONE:                      "Clone existing repository",
    TOOLTIP_CLONE:                         "克隆远程仓库",
    // TOOLTIP_CLOSE_NOT_MODIFIED:         "Close files not modified in Git",
    TOOLTIP_CLOSE_NOT_MODIFIED:            "关闭没有修改的文件",
    // TOOLTIP_COMMIT:                     "Commit the selected files",
    TOOLTIP_COMMIT:                        "提交所选择的文件",
    // TOOLTIP_FIND_CONFLICTS:             "Starts a search for Git merge/rebase conflicts in the project",
    TOOLTIP_FIND_CONFLICTS:                "开始搜索 Git 合并/基址重建的冲突。",
    // TOOLTIP_GITPUSH:                    "Git-FTP Push",
    TOOLTIP_GITPUSH:                       "Git-FTP 推送",
    // TOOLTIP_HIDE_FILE_HISTORY:          "Hide file history",
    TOOLTIP_HIDE_FILE_HISTORY:             "隐藏文件历史记录",
    // TOOLTIP_HIDE_HISTORY:               "Hide history",
    TOOLTIP_HIDE_HISTORY:                  "隐藏历史记录",
    // TOOLTIP_INIT:                       "Initialize repository",
    TOOLTIP_INIT:                          "初始化 Git 仓库",
    // TOOLTIP_MERGE_ABORT:                "Abort the merge operation and reset HEAD to the last local commit",
    TOOLTIP_MERGE_ABORT:                   "停止合并操作并重置到最后的本地提交",
    // TOOLTIP_MORE:                       "More actions\u2026",
    TOOLTIP_MORE:                          "更多操作\u2026",
    // TOOLTIP_OPEN_BASH:                  "Open Bash/Terminal console",
    TOOLTIP_OPEN_BASH:                     "打开终端",
    // TOOLTIP_PICK_REMOTE:                "Pick preferred remote",
    TOOLTIP_PICK_REMOTE:                   "选择首选的远程地址",
    // TOOLTIP_PULL:                       "Git Pull",
    TOOLTIP_PULL:                          "从远程拉取代码",
    // TOOLTIP_PUSH:                       "Git Push",
    TOOLTIP_PUSH:                          "推送到远程服务器",
    // TOOLTIP_REBASE_ABORT:               "Abort the rebase operation and reset HEAD to the original branch",
    TOOLTIP_REBASE_ABORT:                  "停止基址重建操作并重置到最后的本地提交",
    // TOOLTIP_REBASE_CONTINUE:            "Restart the rebasing process after having resolved a merge conflict",
    TOOLTIP_REBASE_CONTINUE:               "解决合并冲突后重启基址重建过程",
    // TOOLTIP_REBASE_SKIP:                "Restart the rebasing process by skipping the current patch",
    TOOLTIP_REBASE_SKIP:                   "跳过当前补丁以重启基址重建过程",
    // TOOLTIP_REFRESH_PANEL:              "Refresh panel",
    TOOLTIP_REFRESH_PANEL:                 "刷新面板",
    // TOOLTIP_SHOW_FILE_HISTORY:          "Show file history",
    TOOLTIP_SHOW_FILE_HISTORY:             "显示文件历史",
    // TOOLTIP_SHOW_HISTORY:               "Show history",
    TOOLTIP_SHOW_HISTORY:                  "显示历史记录",
    // UNDO_CHANGES:                       "Discard changes",
    UNDO_CHANGES:                          "撤销更改",
    // UNDO_LAST_LOCAL_COMMIT:             "Undo last local (not pushed) commit",
    UNDO_LAST_LOCAL_COMMIT:                "撤销最后一次本地提交（在未推送的情况下）",
    // URL:                                "URL",
    URL:                                   "地址",
    // USERNAME:                           "Username",
    USERNAME:                              "用户名",
    // USER_ABORTED:                       "User aborted!",
    USER_ABORTED:                          "用户停止了该操作！",
    // USER_DATE_FORMAT:                   "Own date format (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntax</a>)",
    USER_DATE_FORMAT:                      "自定义日期格式 (<a href='http://momentjs.com/docs/#/displaying/format/'>语法</a>)",
    // USE_CODE_INSPECTION:                "Use Code inspection",
    USE_CODE_INSPECTION:                   "使用代码检查",
    // USE_GITFTP:                         "Use Git-FTP",
    USE_GITFTP:                            "启用 Git-FTP",
    // USE_GIT_GUTTER:                     "Use Git gutter marks",
    USE_GIT_GUTTER:                        "使用 Git gutter 标记修改记录",
    // USE_REBASE:                         "Use REBASE",
    USE_REBASE:                            "启用基址重建（REBASE）",
    // USE_VERBOSE_DIFF:                   "Show verbose output in diffs",
    USE_VERBOSE_DIFF:                      "显示 diffs 的详细输出",
    // USE_DIFFTOOL:                       "Use difftool for diffs",
    // TODO: localize USE_DIFFTOOL to zh-cn
    // USING_GIT_VERSION:                  "Git version",
    USING_GIT_VERSION:                     "Git 版本",
    // VIEW_AUTHORS_FILE:                  "View authors of file",
    VIEW_AUTHORS_FILE:                     "查看文件的作者",
    // VIEW_AUTHORS_SELECTION:             "View authors of selection"
    VIEW_AUTHORS_SELECTION:                "查看选定行的作者"
});