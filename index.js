#!/usr/bin/env node

const welcome = require('cli-welcome')
const pkgJSON = require('./package.json')

welcome({
  title: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
  version: pkgJSON.version,
})

console.log(`
Zac Smith - MrZacSmith

Node engineer that researchs secure and efficient microserivce back-ends using Node.js, \nExpress.js, MongoDb, and Google Cloud.

🐦 Twitter:  https://twitter.com/mrzacsmith
💻 GitHub:   https://github.com/mrzacsmith
🎱 NPMjs:    https://www.npmjs.com/~mrzacsmith 
🧐 LinkedIn: https://www.linkedin.com/in/mrzacsmith/
🎬 YouTube:  https://www.youtube.com/c/CodeShockDev
📧 Email:    zac@codeshock.dev

`)
