let companyName = 'Scuber'
const fs = require ('fs')
const path = require('path')

const js = fs.readFileSynce(path.resolve(_dirname, '..','index.js'), 'utf-8')