# Change log

## 0.5.0 (release date: 11.12.2017)

* Updated `eslint` to `4.12`
* Updated `eslint-plugin-goog` to `0.4`
* Updated `eslint-plugin-interfaced` to `0.4`
* Described specifying of `domains` and `knownNamespaces` by shared settings instead of rules redefining
* `interfaced/jsdoc-tags-order`: added `@deprecated`
* Added rules:
    - `implicit-arrow-linebreak`
    - `interfaced/interface-name-prefix`
    - `interfaced/abstract-class-name-prefix`
    - `interfaced/no-tabs-in-jsdoc-type`
    - `interfaced/camelcase` (instead of `camelcase`)
    - `interfaced/require-jsdoc` (instead of `require-jsdoc`)

## 0.4.0 (release date: 21.11.2017)

* Required `npm@5`
* Updated `eslint-plugin-interfaced` to `0.3`
* `valid-jsdoc`: prefer `@throws` over `@throw`
* `interfaced/jsdoc-tags-order`: added `@throws`
* Added rules:
    - `interfaced/capitalized-enum`
    - `interfaced/capitalized-typedef`
    - `interfaced/jsdoc-type-spacing`
    - `interfaced/jsdoc-type-application-dot`
    - `interfaced/valid-jsdoc` (instead of `valid-jsdoc`)
    - `interfaced/no-unused-expressions` (instead of `no-unused-expressions`)

## 0.3.0 (release date: 7.11.2017)

* Updated `eslint` to `4.9`
* Updated `eslint-plugin-goog` to `0.3`
* Updated `eslint-plugin-interfaced` to `0.2`
* Added usage of .yaml for configuration
* Added rules:
    - `prefer-promise-reject-errors`
    - `prefer-destructuring`
    - `no-buffer-constructor`
    - `for-direction`
    - `getter-return`
    - `no-await-in-loop`
    - `no-compare-neg-zero`
    - `array-bracket-newline`
    - `array-element-newline`
    - `function-paren-newline`
    - `lines-between-class-members`
    - `multiline-comment-style`
    - `no-multi-assign`
    - `nonblock-statement-body-position`
    - `padding-line-between-statements`
    - `semi-style`
    - `switch-colon-spacing`
    - `template-tag-spacing`
* Removed deprecated rules:
    - `lines-around-directive`
    - `newline-after-var`
    - `newline-before-return` [BREAKING]

## 0.2.0 (release date: 8.06.2017)

* Added `eslint-plugin-goog` and `eslint-plugin-interfaced` to peer dependencies
* Added plugins `goog` and `interfaced` to `plugins` section
* Added rules from plugin `goog`
* Added rules from plugin `interfaced`
* Allow methods in `no-empty-function` (for extending by `interfaced/no-empty-method`)
* Removed `@virtual` from `valid-jsdoc` blacklist

## 0.1.0 (release date: 29.03.2017)

* Initial release
