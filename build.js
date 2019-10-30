const tscc = require('@tscc/tscc').default

tscc({
	specFile: './tscc.spec.json'
}, './tsconfig.json')