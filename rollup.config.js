// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js', // 입력 파일의 경로를 수정하세요
  output: {
    file: 'dist/bundle.js', // 출력 파일의 경로를 수정하세요
    format: 'esm', // ESM 형식으로 빌드 설정
  },
  plugins: [
    commonjs(), //commonJS형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌
    resolve(), //node_modules에서 모듈을 불러올수 있도록 해줌, ts/tsx 파일도 불러올수 있음

    terser(), //생성된 es번들을 최소화하기 위한 플러그인
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
    }), //babel을 사용 할 수 있게 해줌
  ],
};

// npm i -D rollup
// @rollup/plugin-babel
// @rollup/plugin-node-resolve
// @rollup/plugin-commonjs
// @rollup-plugin-terser
