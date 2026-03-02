// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'

const entryPoints = [
  'build',
  'get-plan',
  'model',
  'plan-integration',
  'plan-scan',
  'plan',
  'publish',
  'utils'
]

const configs = entryPoints.map((entry) => ({
  input: `src/${entry}.ts`,
  output: {
    esModule: true,
    file: `dist/${entry}/index.js`,
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript(),
    json(),
    nodeResolve({ preferBuiltins: true }),
    commonjs()
  ]
}))

export default configs
