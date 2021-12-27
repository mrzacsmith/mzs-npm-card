#!/usr/bin/env node

const welcome = require('cli-welcome')
const colors = require('colors')
const pkgJSON = require('./package.json')
const log = console.log

welcome({
  title: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
  version: pkgJSON.version,
})

log(`
${colors.cyan.bold(`Zac Smith`)} - ${colors.dim.italic(`MrZacSmith`)}

${colors.dim(
  `Node engineer that researchs secure and efficient microserivce back-ends using Node.js, \nExpress.js, MongoDb, and Google Cloud.`
)}

🐦 ${colors.bold(`Twitter:`)}  ${colors.dim(`https://twitter.com/mrzacsmith`)}
💻 ${colors.bold(`GitHub:`)}   ${colors.dim(`https://github.com/mrzacsmith`)}
🎱 ${colors.bold(`NPMjs:`)}    ${colors.dim(
  `https://www.npmjs.com/~mrzacsmith`
)}
🧐 ${colors.bold(`LinkedIn:`)} ${colors.dim(
  `https://www.linkedin.com/in/mrzacsmith/`
)}
🎬 ${colors.bold(`YouTube:`)}  ${colors.dim(
  `https://www.youtube.com/c/CodeShockDev`
)}
📧 ${colors.bold(`Email:`)}    ${colors.dim(`zac@codeshock.dev`)}

`)
