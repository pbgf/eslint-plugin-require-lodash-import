# eslint-plugin-require-lodash-import

使用了lodash，却没有引用lodash的检测规则

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-require-lodash-import`:

```sh
npm install eslint-plugin-require-lodash-import --save-dev
```

## Usage

Add `require-lodash-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "require-lodash-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "require-lodash-import/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


