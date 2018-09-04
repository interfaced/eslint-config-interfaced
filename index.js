module.exports = {
	'parser': 'espree',
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'rules': {
		/**
		 * Restrictions
		 */

		'no-restricted-globals': [
			'off'
		],
		'no-restricted-imports': [
			'off'
		],
		'no-restricted-modules': [
			'off'
		],
		'no-restricted-properties': [
			'off'
		],
		'no-restricted-syntax': [
			'off'
		],

		/**
		 * Debugging
		 */

		'no-alert': [
			'error'
		],
		'no-console': [
			'error'
		],
		'no-debugger': [
			'error'
		],

		/**
		 * Constructor usage
		 */

		'no-array-constructor': [
			'error'
		],
		'no-new-func': [
			'error'
		],
		'no-new-object': [
			'error'
		],
		'no-new-require': [
			'error'
		],
		'no-new-symbol': [
			'error'
		],
		'no-new-wrappers': [
			'error'
		],
		'new-cap': [
			'error'
		],
		'new-parens': [
			'error'
		],
		'no-new': [
			'off'
		],

		/**
		 * Class
		 */

		'constructor-super': [
			'error'
		],
		'no-dupe-class-members': [
			'error'
		],
		'no-this-before-super': [
			'error'
		],
		'no-useless-constructor': [
			'error'
		],
		'class-methods-use-this': [
			'off'
		],

		/**
		 * Assigning
		 */

		'no-class-assign': [
			'error'
		],
		'no-const-assign': [
			'error'
		],
		'no-cond-assign': [
			'error'
		],
		'no-return-assign': [
			'error'
		],
		'no-ex-assign': [
			'error'
		],
		'no-func-assign': [
			'error'
		],
		'no-global-assign': [
			'error'
		],
		'no-param-reassign': [
			'error'
		],
		'no-self-assign': [ // Not suitable for typecasting (foo = / ** @type {T} * / (foo))
			'off'
		],
		'no-native-reassign': [ // Deprecated
			'off'
		],

		/**
		 * RegEx
		 */

		'no-control-regex': [
			'error'
		],
		'no-invalid-regexp': [
			'error', {
				'allowConstructorFlags': ['u', 'y']
			}
		],
		'no-empty-character-class': [
			'error'
		],
		'no-regex-spaces': [
			'error'
		],
		'wrap-regex': [
			'off'
		],
		'no-div-regex': [
			'off'
		],

		/**
		 * Comments
		 */

		'spaced-comment': [
			'error'
		],
		'require-jsdoc': [
			'error', {
				'require': {
					'FunctionDeclaration': false,
					'MethodDefinition': true,
					'ClassDeclaration': true,
					'ArrowFunctionExpression': false
				}
			}
		],
		'valid-jsdoc': [
			'error', {
				'prefer': {
					'arg': 'param',
					'argument': 'param',
					'virtual': 'abstract',
					'returns': 'return'
				},
				'preferType': {
					'Boolean': 'boolean',
					'Number': 'number',
					'Strung': 'string',
					'object': 'Object'
				},
				'requireReturn': false,
				'requireReturnType': true,
				'requireParamDescription': false,
				'requireReturnDescription': false
			}
		],
		'no-warning-comments': [
			'warn', {
				'terms': ['todo'],
				'location': 'anywhere'
			}
		],
		'capitalized-comments': [
			'off'
		],
		'line-comment-position': [
			'off'
		],
		'lines-around-comment': [
			'off'
		],
		'no-inline-comments': [
			'off'
		],

		/**
		 * Other formatting
		 */

		'no-extra-semi': [
			'error'
		],
		'no-mixed-spaces-and-tabs': [
			'error'
		],
		'no-multi-spaces': [
			'error'
		],
		'no-multiple-empty-lines': [
			'error', {
				'max': 2,
				'maxEOF': 1,
				'maxBOF': 0
			}
		],
		'no-spaced-func': [
			'error'
		],
		'no-trailing-spaces': [
			'error'
		],
		'no-unexpected-multiline': [
			'error'
		],
		'no-whitespace-before-property': [
			'error'
		],
		'no-irregular-whitespace': [
			'error'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'block-spacing': [
			'error',
			'never'
		],
		'brace-style': [
			'error'
		],
		'indent': [
			'error',
			'tab', {
				'SwitchCase': 1
			}
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'comma-spacing': [
			'error'
		],
		'comma-style': [
			'error',
			'last'
		],
		'eol-last': [
			'error',
			'always'
		],
		'key-spacing': [
			'error'
		],
		'keyword-spacing': [
			'error'
		],
		'max-len': [
			'error',
			120
		],
		'newline-before-return': [
			'error'
		],
		'newline-per-chained-call': [
			'error'
		],
		'curly': [
			'error'
		],
		'object-curly-spacing': [
			'error',
			'never'
		],
		'one-var': [
			'error',
			'never'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'func-call-spacing': [
			'error'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single', {
				'allowTemplateLiterals': true
			}
		],
		'semi': [
			'error',
			'always'
		],
		'computed-property-spacing': [
			'error'
		],
		'dot-location': [
			'error',
			'property'
		],
		'rest-spread-spacing': [
			'error'
		],
		'semi-spacing': [
			'error'
		],
		'space-before-blocks': [
			'error'
		],
		'space-before-function-paren': [
			'error',
			'never'
		],
		'space-in-parens': [
			'error'
		],
		'space-infix-ops': [
			'error'
		],
		'space-unary-ops': [
			'error'
		],
		'template-curly-spacing': [
			'error'
		],
		'yield-star-spacing': [
			'error'
		],
		'no-extra-parens': [
			'off'
		],
		'no-tabs': [
			'off'
		],
		'camelcase': [
			'off'
		],
		'dot-notation': [
			'off'
		],
		'lines-around-directive': [
			'off'
		],

		/**
		 * Ternary operator
		 */

		'no-unneeded-ternary': [
			'error'
		],
		'no-nested-ternary': [
			'off'
		],
		'no-ternary': [
			'off'
		],
		'multiline-ternary': [
			'off'
		],

		/**
		 * Exceptions
		 */

		'no-unsafe-finally': [
			'error'
		],
		'no-throw-literal': [
			'off'
		],
		'no-catch-shadow': [
			'off'
		],

		/**
		 * Loops, condition operators
		 */

		'no-unmodified-loop-condition': [
			'error'
		],
		'no-constant-condition': [
			'error'
		],
		'no-else-return': [
			'error'
		],
		'no-fallthrough': [
			'error'
		],
		'no-duplicate-case': [
			'error'
		],
		'no-lonely-if': [
			'error'
		],
		'no-loop-func': [
			'error'
		],
		'no-continue': [
			'off'
		],
		'no-case-declarations': [
			'off'
		],
		'default-case': [
			'off'
		],
		'no-negated-condition': [
			'off'
		],
		'no-negated-in-lhs': [ // Deprecated
			'off'
		],

		/**
		 * Labels
		 */

		'no-label-var': [
			'error'
		],
		'no-unused-labels': [
			'error'
		],
		'no-extra-label': [
			'error'
		],
		'no-labels': [
			'off'
		],

		/**
		 * Arrow function
		 */

		'arrow-body-style': [
			'error',
			'as-needed'
		],
		'arrow-parens': [
			'error',
			'always'
		],
		'arrow-spacing': [
			'error'
		],
		'prefer-arrow-callback': [
			'error', {
				'allowUnboundThis': true
			}
		],
		'no-confusing-arrow': [
			'off'
		],

		/**
		 * Other
		 */

		'no-caller': [
			'error'
		],
		'no-delete-var': [
			'error'
		],
		'no-dupe-args': [
			'error'
		],
		'no-dupe-keys': [
			'error'
		],
		'no-duplicate-imports': [
			'error'
		],
		'no-empty': [
			'error'
		],
		'no-empty-function': [
			'error'
		],
		'no-empty-pattern': [
			'error'
		],
		'no-eq-null': [
			'error'
		],
		'no-eval': [
			'error'
		],
		'no-extra-boolean-cast': [
			'error'
		],
		'no-floating-decimal': [
			'error'
		],
		'no-implied-eval': [
			'error'
		],
		'no-inner-declarations': [
			'error',
			'both'
		],
		'no-lone-blocks': [
			'error'
		],
		'no-obj-calls': [
			'error'
		],
		'no-octal': [
			'error'
		],
		'no-octal-escape': [
			'error'
		],
		'no-path-concat': [
			'error'
		],
		'no-proto': [
			'error'
		],
		'no-redeclare': [
			'error', {
				'builtinGlobals': true
			}
		],
		'no-return-await': [
			'error'
		],
		'no-script-url': [
			'error'
		],
		'no-self-compare': [
			'error'
		],
		'no-sequences': [
			'error'
		],
		'no-shadow-restricted-names': [
			'error'
		],
		'no-sparse-arrays': [
			'error'
		],
		'no-undef': [
			'error'
		],
		'no-undef-init': [
			'error'
		],
		'no-unreachable': [
			'error'
		],
		'no-unsafe-negation': [
			'error'
		],
		'no-unused-vars': [
			'error', {
				'vars': 'all',
				'args': 'none' // We need to define unused args for @override methods
			}
		],
		'no-useless-computed-key': [
			'error'
		],
		'no-useless-escape': [
			'error'
		],
		'no-useless-rename': [
			'error'
		],
		'no-useless-return': [
			'error'
		],
		'no-void': [
			'error'
		],
		'no-var': [
			'error'
		],
		'no-with': [
			'error'
		],
		'block-scoped-var': [
			'error'
		],
		'consistent-return': [
			'error'
		],
		'eqeqeq': [
			'error'
		],
		'global-require': [
			'error'
		],
		'guard-for-in': [
			'error'
		],
		'prefer-numeric-literals': [
			'error'
		],
		'prefer-const': [
			'error', {
				'ignoreReadBeforeAssign': true
			}
		],
		'prefer-rest-params': [
			'error'
		],
		'prefer-spread': [
			'error'
		],
		'radix': [
			'error'
		],
		'require-yield': [
			'error'
		],
		'use-isnan': [
			'error'
		],
		'valid-typeof': [
			'error'
		],
		'no-template-curly-in-string': [
			'error'
		],
		'handle-callback-err': [
			'off'
		],
		'id-blacklist': [
			'off'
		],
		'id-length': [
			'off'
		],
		'id-match': [
			'off'
		],
		'init-declarations': [
			'off'
		],
		'jsx-quotes': [
			'off'
		],
		'max-depth': [
			'off'
		],
		'max-lines': [
			'off'
		],
		'max-nested-callbacks': [
			'off'
		],
		'max-params': [
			'off'
		],
		'max-statements': [
			'off'
		],
		'max-statements-per-line': [
			'off'
		],
		'newline-after-var': [
			'off'
		],
		'object-curly-newline': [
			'off'
		],
		'object-property-newline': [
			'off'
		],
		'object-shorthand': [
			'off'
		],
		'one-var-declaration-per-line': [
			'off'
		],
		'operator-assignment': [
			'off'
		],
		'prefer-reflect': [ // Deprecated
			'off'
		],
		'prefer-template': [
			'off'
		],
		'quote-props': [
			'off'
		],
		'require-await': [
			'off'
		],
		'sort-keys': [
			'off'
		],
		'sort-imports': [
			'off'
		],
		'sort-vars': [
			'off'
		],
		'strict': [
			'off'
		],
		'symbol-description': [
			'off'
		],
		'unicode-bom': [
			'off'
		],
		'vars-on-top': [
			'off'
		],
		'wrap-iife': [
			'off'
		],
		'yoda': [
			'off'
		],
		'no-bitwise': [
			'off'
		],
		'no-extend-native': [
			'off'
		],
		'no-extra-bind': [
			'off'
		],
		'no-implicit-coercion': [
			'off'
		],
		'no-implicit-globals': [
			'off'
		],
		'no-invalid-this': [
			'off'
		],
		'no-iterator': [
			'off'
		],
		'no-magic-numbers': [
			'off'
		],
		'no-mixed-operators': [
			'off'
		],
		'no-mixed-requires': [
			'off'
		],
		'no-multi-str': [
			'off'
		],
		'no-plusplus': [
			'off'
		],
		'no-process-env': [
			'off'
		],
		'no-process-exit': [
			'off'
		],
		'no-prototype-builtins': [
			'off'
		],
		'no-shadow': [
			'off'
		],
		'no-sync': [
			'off'
		],
		'no-undefined': [
			'off'
		],
		'no-underscore-dangle': [ // Our naming convention requires underscore before private/protected
			'off'
		],
		'no-unused-expressions': [ // Not suitable for typedefs
			'off'
		],
		'no-use-before-define': [ // Not suitable for unsubscribe wrappers
			'off'
		],
		'no-useless-call': [
			'off'
		],
		'no-useless-concat': [
			'off'
		],
		'array-callback-return': [ // Works not only with arrays, but with every find/filter/etc... method
			'off'
		],
		'accessor-pairs': [
			'off'
		],
		'callback-return': [
			'off'
		],
		'complexity': [
			'off'
		],
		'consistent-this': [
			'off'
		],
		'func-names': [
			'off'
		],
		'func-name-matching': [
			'off'
		],
		'func-style': [
			'off'
		],
		'generator-star-spacing': [
			'off'
		]
	}
};
