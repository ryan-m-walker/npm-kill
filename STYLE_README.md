## Stylelint

[www.npmjs.com/package/stylelint](https://www.npmjs.com/package/stylelint)

### Configure Stylelint for Visual Studio Code:

https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint

Installation

    Execute Extensions: Install Extensions command from Command Palette.
    Type @sort:installs stylelint into the search form and install the topmost one.

Read the extension installation guide for more details.
Optional (but recommended) setup
duplicate messages from both the built-in linter and vscode-stylelint

To prevent both the editor built-in linters [css] [less] [scss] and this extension [stylelint] from reporting essentially the same errors like in the screenshot, disable the built-in ones in User or Workspace setting:

```
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

## Prettier

[marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Format On Save

Respects editor.formatOnSave setting.

You can turn on format-on-save on a per-language basis by scoping the setting:

```
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[scss]": {
    "editor.formatOnSave": true
}
```


## Prettier-Stylelint

To get Prettier to work with stylelint add this to your settings:

```
"prettier.stylelintIntegration": true
```


## CLI

