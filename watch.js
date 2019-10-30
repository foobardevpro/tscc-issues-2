const rollup = require('rollup')
const tscc = require('@tscc/rollup-plugin-tscc').default
const typescript = require('rollup-plugin-typescript')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')

const watcher = rollup.watch({
	output: {
		dir: '.'
	},
	plugins: [
		serve({
			open: true,
			watch: 'dist',
			contentBase: '.',
			port: 8080
		}),
		livereload(),
		tscc({
			specFile: 'tscc.spec.json'
		}),
		typescript({
			tsconfig: 'tsconfig.json'
		})
	]
})