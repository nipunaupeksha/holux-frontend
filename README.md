# Holux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

# .vscode Configurations

- Apply the following in the `.vscode/extenstions.json` file. These are minimal, battery-life conscious settings.

```
{
  "recommendations": [
    "johnpapa.angular-essentials",
    "PKief.material-icon-theme",
    "formulahendry.auto-close-tag",
    "ms-azuretools.vscode-docker",
    "eamodio.gitlens",
    "WallabyJs.quokka-vscode",
    "amatiasq.sort-imports",
    "DSKWRK.vscode-generate-getter-setter",
    "esbenp.prettier-vscode",
    "HookyQR.beautify",
    "expertly-simple.ng-evergreen",
    "msjsdiag.debugger-for-edge",
    "johnpapa.vscode-peacock",
    "ms-vscode.vscode-typescript-tslint-plugin"
  ]
}
```

- Apply the following settings in the `.vscode/settings.json` file.

```
{
    "debug.openExplorerOnEnd": true,
    "editor.tabSize": 2,
    "editor.rulers": [
      90
    ],
    "editor.autoIndent": "full",
    "editor.cursorBlinking": "solid",
    "editor.formatOnType": false,
    "editor.formatOnPaste": false,
    "editor.formatOnSave": true,
    "editor.minimap.enabled": false,
    "editor.codeActionsOnSave": {
      "source.organizeImports": false,
      "source.fixAll.tslint": true
    },
    "explorer.openEditors.visible": 0,
    "files.trimTrailingWhitespace": true,
    "files.autoSave": "onFocusChange",
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "npm.enableScriptExplorer": true,
    "typescript.tsdk": "node_modules/typescript/lib",
    "workbench.iconTheme": "material-icon-theme",
    "auto-close-tag.SublimeText3Mode": true,
    "html.autoClosingTags": false,
    "peacock.affectActivityBar": true,
    "peacock.affectStatusBar": true,
    "peacock.affectTitleBar": false,
    "workbench.colorCustomizations": {
      "activityBar.background": "#d04649",
      "activityBar.activeBackground": "#d04649",
      "activityBar.activeBorder": "#37cb34",
      "activityBar.foreground": "#e7e7e7",
      "activityBar.inactiveForeground": "#e7e7e799",
      "activityBarBadge.background": "#37cb34",
      "activityBarBadge.foreground": "#15202b",
      "statusBar.background": "#b52e31",
      "statusBarItem.hoverBackground": "#d04649",
      "statusBar.foreground": "#e7e7e7"
    },
    "peacock.color": "#b52e31",
    "gitlens.menus": {
      "editorGroup": false
    },
    "ng-evergreen.upgradeChannel": "Latest",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[html]": {
      "editor.defaultFormatter": "HookyQR.beautify"
    }
  }
```

# Scripting code styling and linting

- Execute the following commands.
    - `npm i -D prettier tslint-config-prettier tslint-plugin-prettier`
    - `npm i -D js-beautify`
    - `npm i -D import-sort import-sort-cli import-sort-parser-typescript import-sort-style-module`
    - `npm i -D tslint tslint-etc`
    - `npm i -D codelyzer`

- Edit the `package.json` by appending an `importSort` attribute at the end of the file.

```
...
"importSort":{
    ".ts, .tsx":{
        "parser": "typescript",
        "style": "module",
        "options":{}
    }
}
...
```

- Update the `tslint.json` rules for integration with `prettier` and `tslint-etc`

```
{
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier",
    "tslint-plugin-prettier",
    "tslint-etc"
  ],
  "rules": {
    "prettier": true,
    "no-unused-declaration": true,
    "array-type": false,
    "arrow-parens": false,
    "deprecation": {
      "severity": "warning"
    },
    "component-class-suffix": true,
    "contextual-lifecycle": true,
    "directive-class-suffix": true,
    "directive-selector": [
      true,
      "attribute",
      "app",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "kebab-case"
    ],
    "import-blacklist": [
      true,
      "rxjs/Rx"
    ],
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [
      false,
      90
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-consecutive-blank-lines": false,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-empty": false,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-sort-keys": false,
    "ordered-imports": false,
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "trailing-comma": false,
    "semicolon": [
      true,
      "never"
    ],
    "no-conflicting-lifecycle": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true
  },
  "rulesDirectory": [
    "codelyzer"
  ]
}
```

- Create a new file named `.jsbeautifyrc` and add the following.

```
{
  "indent_size": 2,
  "wrap_line_length": 90,
  "language": {
    "html": [
      "html"
    ]
  },
  "end_with_newline": true
}
```

- Create a new file named `.prettierrc` and add the following.

```
{
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 90,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxBracketSameLine": true
}
```

- Add a new file named `.prettierignore` and add the following.

```
**/*.html
src/polyfills.ts
src/test.ts
```

# Implementing a style checker and fixer
- Edit the `package.json` scripts attribute to add `style` and `style:fix` commands.

```
"scripts": {
    "style:fix": "import-sort --write \"**/{src,tests,e2e}/**/*.ts\" && prettier --write \"**/{src,tests,e2e}/**/*.{*css,ts}\" && js-beautify \"**/src/**/*.html\"",
    "style": "import-sort -l \"**/{src,tests,e2e}/**/*.ts\" && prettier --check \"**/{src,tests,e2e}/**/*.{*css,ts}\"",
```

- Run `npm run style` to see the files that do not adhere to styling rules.
- Execute `npm run style:fix` to update all your files to the new style.
