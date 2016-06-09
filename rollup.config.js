import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'lib/index.js',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        'es2015-rollup'
      ],
      plugins: [
        'transform-exponentiation-operator'
      ],
      babelrc: false
    }),
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**' })
  ],
  targets: [
    { dest: 'dist/orb.js', moduleName: 'orb', format: 'umd' },
    { dest: 'dist/orb.module.js', format: 'es6' }
  ]
}
