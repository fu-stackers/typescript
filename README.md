# TypeScript starter

## Setup (once)
    npm install -g typescript

## Every time you code
1. Open this folder in VS Code (File > Open Folder).
2. In the terminal run:  tsc -w
3. Right-click index.html > "Open with Live Server".
4. Edit files in src/ only. Never edit build/.

## Folder structure
    ts-project/
    ├── index.html        (page, loads build/main.js)
    ├── tsconfig.json     (compiler settings)
    ├── src/main.ts       (YOUR TypeScript code)
    └── build/main.js     (auto-generated JavaScript)
