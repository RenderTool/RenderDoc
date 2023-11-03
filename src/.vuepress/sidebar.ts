import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        {
            text: "目录",
            //icon: "laptop-code",
            prefix: "Fontend/",
            link: "Fontend/",
            children: "structure",
        },
    ],
    "/language/": [
        {
            text: "目录",
            prefix: "",
            link: "",
            children: "structure",
        }
    ],
    "/tools/": [
        {
            text: "目录",
            prefix: "",
            link: "",
            children: "structure",
        }
    ],
    "/unreal/": [
        {
            text: "目录",
            prefix: "",
            link: "",
            children: "structure",
        }
    ],
    // "/tools/git/": [
    //     {
    //         "text": "GIT",
    //         "children": [
    //             "README.md",
    //             "commit-message.md",
    //             "gitignore.md",
    //             "repo-tool.md",
    //             "submodule.md"
    //         ]
    //     }
    // ],
    // "/tools/github/": [
    //     {
    //         "text": "GITHUB",
    //         "children": [
    //             "README.md",
    //             "dns-resolve-github-pages.md",
    //             "download-huge-project-from-github.md",
    //             "how-to-deploy-private-gitlab.md",
    //             "switch-multiple-github-accounts.md",
    //             "sync-a-fork.md"
    //         ]
    //     }
    // ],
    // "/tools/vscode/": [
    //     {
    //         "text": "VSCODE",
    //         "children": [
    //             "README.md",
    //             "errors.md",
    //             "fix-todo-highlight-links.md",
    //             "format-with-eslint.md",
    //             "identify-alias.md",
    //             "set-the-font.md",
    //             "settings-sync.md",
    //             "share-code-snippet.md",
    //             "vetur.md",
    //             "vscode-markdown-copilot-tab-do-not-work.md"
    //         ]
    //     }
    // ],
    
});
