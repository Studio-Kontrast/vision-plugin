<p align="center">
  <img src="logo.png" alt="Explore Claude Code" width="360">
</p>

<p align="center">
  <strong>Learn Claude Code by exploring it.</strong>
</p>

<p align="center">
  <a href="https://exploreclaudecode.com"><img src="https://img.shields.io/badge/live%20demo-exploreclaudecode.com-c47a50?style=flat-square" alt="Live Demo"></a>
  <a href="https://github.com/LukeRenton/explore-claude-code/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LukeRenton/explore-claude-code?style=flat-square&color=8e82ad" alt="License"></a>
  <a href="https://github.com/LukeRenton/explore-claude-code/stargazers"><img src="https://img.shields.io/github/stars/LukeRenton/explore-claude-code?style=flat-square&color=b8965e" alt="Stars"></a>
  <img src="https://img.shields.io/badge/zero%20dependencies-vanilla%20JS-3a3632?style=flat-square" alt="Zero Dependencies">
</p>

---

A simulated Claude Code workspace you can click through. The site now focuses on a single `example-project` repo that looks like a small TypeScript workspace with an installed plugin under `.claude/plugins/vision-plugin/`.

Every file and folder in the sidebar is a real Claude Code concept in context: project memory, project settings, installed plugin files, and application source code living side by side in one simulated workspace.

<p align="center">
  <img src="current.png" alt="Screenshot" width="820">
</p>

## 📚 What You'll Learn

| Folder / File | Feature |
|---|---|
| `CLAUDE.md` | Project-specific memory for the simulated workspace |
| `.claude/settings.json` | Project-level Claude settings and local plugin usage |
| `.claude/plugins/vision-plugin/` | What the installed plugin files look like inside a project |
| `.claude/plugins/vision-plugin/agents/` | Installed review subagents |
| `.claude/plugins/vision-plugin/skills/` | Installed reusable skills |
| `.claude/plugins/vision-plugin/hooks/` | Installed hook config and scripts |
| `.mcp.json` | Project-level MCP config that complements the installed plugin |
| `src/` | Minimal TypeScript source code showing where normal app code lives next to the plugin |

Every piece of content in the explorer is written as if it were a real config file in a real repo. You're not reading *about* the config, you're reading *the config itself*, annotated so you understand every line. When you're done exploring, you can copy the scaffolding straight into your own projects.

## 🚀 Try It

The fastest way to get started is the live site:

**👉 [exploreclaudecode.com](https://exploreclaudecode.com)**

No install, no signup, no build step. Just open it and start clicking.

If you want to run it locally, clone the repo and point any static server at the `site/` directory:

```bash
git clone https://github.com/LukeRenton/explore-claude-code.git
cd explore-claude-code

npx serve site
# or
python -m http.server -d site 8080
# or just open site/index.html directly in your browser
```
## 🏗️ Project Structure

The entire site is static HTML, CSS, and vanilla JavaScript. Zero build steps, zero frameworks, zero bundlers.

```
explore-claude-code/
├── site/
│   ├── index.html            # Single-page app entry point
│   ├── data/
│   │   ├── projects.json     # Single workspace registry
│   │   └── example-project.json
│   ├── content/              # Source markdown and config files
│   ├── js/
│   │   ├── app.js            # Main controller, routing, keyboard nav
│   │   ├── file-explorer.js  # Sidebar tree with animated canvas connectors
│   │   ├── content-loader.js # Custom markdown parser and renderer
│   │   ├── terminal.js       # Interactive terminal panel
│   │   ├── progress.js       # Feature completion tracking (localStorage)
│   │   └── icons.js          # Hand-crafted SVG icon library
│   └── css/                  # Variables, layout, components, syntax, terminal, void
├── logo.png
└── README.md
```

The workspace tree is defined in `site/data/example-project.json`, and `site/data/projects.json` points the app at that dataset. The file content itself lives in `site/content/`.

## 🤝 Contributing

Contributions are welcome! Here are some areas where help would be great:

- **Content** for new Claude Code features as they ship
- **Accessibility** improvements (keyboard nav, screen readers, ARIA)
- **Mobile** experience refinements
- **Translations** into other languages

If you'd like to add or update educational content, the two places to look are:
1. `site/data/*.json` for project manifests and tree metadata
2. `site/content/` for the actual markdown and config files

Feel free to open an issue if you have ideas or spot something that could be better.

## ⭐ Support

If you found this useful, consider giving it a star! It helps others discover the project.

## 📄 License

[MIT](LICENSE)
