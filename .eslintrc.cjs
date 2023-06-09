module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser:'@typescript-eslint/parser',
  parserOptions: { project:'./tsconfig.json' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh','jest','@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // "jest/valid-expect":'error'
  },
}
