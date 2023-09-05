module.exports = {
  // 실행될 환경 지정
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  // ECMAScripnt 버전 지정
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  // 사용할 규칙 적용
  extends: ['plugin:prettier/recommended', 'prettier'],
  // 특정 규칙 적용
  rules: {
    'max-depth': ['error', 2], // 최대 중첩
    // 'max-lines-per-function': ['error', 16], // 최대라인수
    'operator-linebreak': ['error', 'before'], // 연산자가 라인 끝에 오도록 강제
    'no-unused-expressions': ['error', { allowTernary: true }], // 삼항 연산자를 사용한 미사용 표현식을 허용
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-restricted-syntax': 'off',
  },
};

// install

/**
 * npm i --save-dev eslint
 * npm i --save-dev prettier
 * npm i --save-dev eslint-plugin-prettier eslint-config-prettier
 *
 * // eslint-plugin-prettier은 prettier와 겹치는 규칙을 비활성화한다.
 * // eslint-config-prettier은 eslint에 prettier의 규칙을 추가할 수 있게 한다.
 * // https://velog.io/@rkio/Javascript-eslint%EC%99%80-prettier
 */
