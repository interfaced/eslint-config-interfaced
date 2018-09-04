# Change log

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
