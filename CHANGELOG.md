# Change log

## 2.1.1 (release date: 25.06.2020)

* Fix syntax errors in 2.1.0 configs

## 2.1.0 (release date: 25.06.2020)

* Update to ESLint 7 (`7.3.1`)
* Added new rules: 
    - `default-case-last`
    - `no-loss-of-precision`
    - `no-promise-executor-return`
    - `no-restricted-exports`
    - `no-unreachable-loop`
    - `no-useless-backreference`

## 2.0.0 (release date: 27.12.2019)

* Enabled `jsdoc/no-undefined-types`
* Added new rules:
    - `node/no-exports-assign`
    - `default-param-last`
    - `grouped-accessor-pairs`
    - `no-constructor-return`
    - `prefer-regex-literals`
    - `no-import-assign`
    - `no-dupe-else-if`
    - `no-setter-return`
    - `function-call-argument-newline`
    - `prefer-exponentiation-operator`

## 2.0.0-beta.3 (release date: 09.09.2019)

* Disabled `no-unassigned-import`
* Re-enabled `jsdoc/valid-types`
* Disabled `require-atomic-updates`
* Configured `jsdoc/check-tag-names` with proprietary GCC tags
* Configured `prefer-promise-reject-errors` with `allowEmptyReject`: `true` 

## 2.0.0-beta.2 (release date: 09.08.2019)

* Removed 'jsdoc/no-undefined-types' rule temporally 
* Removed 'jsdoc/valid-types' rule temporally 

## 2.0.0-beta.1 (release date: 24.06.2019)

* `eslint@6.0.0`
* `eslint-plugin-import@2.17.3`
* `eslint-plugin-node@9.1.0`
* Added `eslint-plugin-jsdoc` and most of its rules
* Removed `eslint-plugin-goog`
* Removed `zombiebox` override and `goog` config
* Dropped support for node 6

* Added rules:
    - `prefer-object-spread`
    - `no-extend-native`
    - `no-extra-bind`
    - `no-invalid-this`
    - `no-iterator`
    - `no-multi-str`
    - `no-throw-literal`
    - `no-useless-catch`
    - `prefer-promise-reject-errors`
    - `handle-callback-err`
    - `no-restricted-modules` (`color`, `fs-promise`, `walk`)
    - `no-mixed-requires`
    - `import/no-unused-modules`
    - `node/prefer-global/text-decoder`
    - `node/prefer-global/text-encoder`
    - `node/file-extension-in-import`
    - `jsdoc/check-alignment` 
    - `jsdoc/check-examples` 
    - `jsdoc/check-param-names` 
    - `jsdoc/check-tag-names` 
    - `jsdoc/implements-on-classes` 
    - `jsdoc/match-description`
    - `jsdoc/no-undefined-types`
    - `jsdoc/require-hyphen-before-param-description`
    - `jsdoc/require-jsdoc`
    - `jsdoc/require-param` 
    - `jsdoc/require-param-name` 
    - `jsdoc/require-param-type` 
    - `jsdoc/require-returns` 
    - `jsdoc/require-returns-check` 
    - `jsdoc/require-returns-type` 
    - `jsdoc/valid-types` 

* Removed rules:
    - `interfaced/camelcase`
    - `interfaced/require-jsdoc`
    - `interfaced/valid-jsdoc`
    - `node/prefer-global/url`

## 1.5.0 (release date: 26.12.2018)

* `eslint-plugin-import@2.14`
* `eslint-plugin-interfaced@1.6`

* Added rules:
    - `import/no-unresolved`
    - `import/named`
    - `import/default`
    - `import/namespace`
    - `import/no-restricted-paths`
    - `import/no-absolute-path`
    - `import/no-dynamic-require`
    - `import/no-internal-modules`
    - `import/no-webpack-loader-syntax`
    - `import/no-self-import`
    - `import/no-cycle`
    - `import/no-useless-path-segments`
    - `import/no-relative-parent-imports`
    - `import/export`
    - `import/no-named-as-default`
    - `import/no-named-as-default-member`
    - `import/no-deprecated`
    - `import/no-extraneous-dependencies`
    - `import/no-mutable-exports`
    - `import/unambiguous`
    - `import/no-commonjs`
    - `import/no-amd`
    - `import/no-nodejs-modules`
    - `import/first`
    - `import/exports-last`
    - `import/no-duplicates`
    - `import/no-namespace`
    - `import/extensions`
    - `import/order`
    - `import/newline-after-import`
    - `import/prefer-default-export`
    - `import/max-dependencies`
    - `import/no-unassigned-import`
    - `import/no-named-default`
    - `import/no-default-export`
    - `import/no-named-export`
    - `import/no-anonymous-default-export`
    - `import/group-exports`
    - `import/dynamic-import-chunkname`
    - `interfaced/no-jsdoc-type-multi-spaces`
    - `interfaced/singular-enum`

* Removed rules:
    - `interfaced/prevent-unused-typedef-vars`
    - `interfaced/lines-between-statics`
    - `interfaced/statics-order`

* Renamed rules:
    - `interfaced/no-tabs-in-jsdoc-type` -> `interfaced/no-jsdoc-type-tabs`

* ESLint's rules for Node moved to `interfaced/node` [BREAKING]

## 1.4.1 (release date: 19.10.2018)

* Tracked `esm.js` file

## 1.4.0 (release date: 19.10.2018)

* `eslint-plugin-node@7.0`
* `eslint-plugin-interfaced@1.5`

* New sub configs:
    - `interfaced/node`
    - `interfaced/esm`
    - `interfaced/externs`
    - `interfaced/mocha-chai`

* Added rules:
    - `node/no-extraneous-import`
    - `node/no-extraneous-require`
    - `node/no-missing-import`
    - `node/no-missing-require`
    - `node/no-missing-require`
    - `node/no-unpublished-import`
    - `node/no-unpublished-require`
    - `node/no-unsupported-features/es-builtins`
    - `node/no-unsupported-features/es-syntax`
    - `node/no-unsupported-features/node-builtins`
    - `node/process-exit-as-throw`
    - `node/shebang`
    - `node/no-deprecated-api`
    - `node/exports-style`
    - `node/prefer-global/buffer`
    - `node/prefer-global/console`
    - `node/prefer-global/process`
    - `node/prefer-global/url-search-params`
    - `node/prefer-global/url`
    - `interfaced/prevent-unused-jsdoc-types`

## 1.3.0 (release date: 09.10.2018)

* `eslint-plugin-interfaced@1.4`

* Added rules:
    - `interfaced/jsdoc-type-indent`

## 1.2.0 (release date: 30.08.2018)

* `eslint@5.3`
* `eslint-plugin-interfaced@1.2`

* Added rules:
    - `require-unicode-regexp`
    - `require-atomic-updates`
    - `no-async-promise-executor`
    - `no-misleading-character-class`
    - `interfaced/no-param-reassign` (instead of `no-param-reassign`)

* Removed deprecated rules:
    - `no-catch-shadow`

## 1.1.0 (release date: 30.07.2018)

* `eslint-plugin-interfaced@1.1`
* `interfaced/jsdoc-type-spacing`: use new options

## 1.0.0 (release date: 03.07.2018)

* `eslint@5.0`
* `eslint-plugin-interfaced@1.0`
* `eslint-plugin-goog@1.0`
* `interfaced/valid-jsdoc`: require param type

* Added rules:
    - `max-classes-per-file`
    - `max-lines-per-function`
    - `prefer-object-spread`

## 0.7.1 (release date: 25.06.2018)

* Tracked `rule.js` file

## 0.7.0 (release date: 25.06.2018)

* `eslint@4.19`
* `eslint-plugin-interfaced@0.6`
* `wrap-iife`: set to "inside"
* `prefer-arrow-callback`: disallow unbound "this"

* Added rules:
    - `interfaced/event-const-value`

* Turned off rules:
    - `consistent-return`
    - `capitalized-comments`
    - `no-unmodified-loop-condition`

* Fixed a critical npm audit report

## 0.6.2 (release date: 22.01.2018)

* Prevent base config polluting by zombiebox config

## 0.6.1 (release date: 15.01.2018)

* Tracked `zombiebox.js` file

## 0.6.0 (release date: 15.01.2018)

* `eslint-plugin-interfaced@0.5`
* `no-unused-vars`: don't ignore args
* `interfaced/jsdoc-tags-order`: added `@suppress`, `@this`
* `goog/no-undeclared-deps`, `goog/no-unused-deps`: set "zb" domain only in zombiebox config [BREAKING]

* Added rules:
    - `interfaced/prefer-shorthand-jsdoc-types`
    - `interfaced/prevent-unused-typedef-vars`
    - `interfaced/prevent-unused-meta-params`

* Separate config for zombiebox environment
* Added zombiebox-specific globals to zombiebox config
    
## 0.5.0 (release date: 11.12.2017)

* `eslint@4.12`
* `eslint-plugin-goog@0.4`
* `eslint-plugin-interfaced@0.4`
* `interfaced/jsdoc-tags-order`: added `@deprecated`

* Added rules:
    - `implicit-arrow-linebreak`
    - `interfaced/interface-name-prefix`
    - `interfaced/abstract-class-name-prefix`
    - `interfaced/no-tabs-in-jsdoc-type`
    - `interfaced/camelcase` (instead of `camelcase`)
    - `interfaced/require-jsdoc` (instead of `require-jsdoc`)

* Described specifying of `domains` and `knownNamespaces` by shared settings instead of rules redefining

## 0.4.0 (release date: 21.11.2017)

* `npm@5`
* `eslint-plugin-interfaced@0.3`
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

* `eslint@4.9`
* `eslint-plugin-goog@0.3`
* `eslint-plugin-interfaced@0.2`

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
    - `newline-before-return`

* Use .yaml for configuration

## 0.2.0 (release date: 8.06.2017)

* `eslint-plugin-goog@0.2.0`
* `eslint-plugin-interfaced@0.1.0`

* `valid-jsdoc`: removed `@virtual` from the blacklist
* `no-empty-function`: allow methods (for extending by `interfaced/no-empty-method`)

* New rules:
    - `interfaced/space-in-typecast`
    - `interfaced/caps-const`
    - `interfaced/event-const-desc`
    - `interfaced/no-empty-method`
    - `interfaced/no-public-underscore`
    - `interfaced/no-restricted-jsdoc-tags`
    - `interfaced/newline-between-methods`
    - `interfaced/newline-between-props`
    - `interfaced/newline-between-statics`
    - `interfaced/newline-before-after-class`
    - `interfaced/methods-order`
    - `interfaced/props-order`
    - `interfaced/statics-order`
    - `interfaced/jsdoc-tags-order`
    - `goog/no-undeclared-deps`
    - `goog/no-unused-deps`
    - `goog/right-order`
    - `goog/no-duplicates`

* Added `goog` and `interfaced` to `plugins` section

## 0.1.0 (release date: 29.03.2017)

* Initial release
