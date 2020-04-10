const path = require('path')
const { geteAST, getDependencies, transform } = require('./parser')

const ast = geteAST(path.join(__dirname, '../src/index.js'))
const dependencies = getDependencies(ast)
const source = transform(ast)
console.log(source)