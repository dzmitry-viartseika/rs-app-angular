module.exports = {
  ignorePatterns: [
    "/**/*.html",
  ],
  overrides: [
    {
      files: ["*.ts", "*.html"],
      parserOptions: {
        "parser": "@babel/eslint-parser",
        "sourceType": "module",
        "ecmaVersion": "latest",
        "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
        },
        "requireConfigFile": false,
        project: [
          "tsconfig.*?.json",
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
      ],
      rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          }
        ]
      },
    },
  ]
}