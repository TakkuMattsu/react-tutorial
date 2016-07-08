# Reactのチュートリアル(ES6版)

Reactのチュートリアルは本家は[こっち](https://facebook.github.io/react/docs/tutorial-ja-JP.html)

それのES6版
http://qiita.com/nownabe/items/2d8b92d95186c3941de0

- gulpは--save-devが必要
- `gulp` でなく `gulp server` 等コマンドを指定しないといけない

# その他

## npm関連

TODO

## VSCodeの設定

### 補完

Typingsの導入

http://kuroeveryday.blogspot.jp/2016/03/vscode-autocomplete.html

### ESLintの設定

http://qiita.com/sifue/items/2b7687268661271039f5

```js
module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      2,
      "never"
    ]
  }
};
```
