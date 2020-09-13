#!/usr/bin/env node

const info = {
  Name: 'Zac Smith',
  Brand: 'Mr Zac Smith',
  NPMjs: 'https://www.npmjs.com/~mrzacsmith',
  GitHub: 'https://github.com/mrzacsmith',
  LinkedIn: 'https://www.linkedin.com/in/mrzacsmith/',
  Twitter: 'https://twitter.com/mrzacsmith',
  Email: 'zac@mrzacsmith.com',
}

console.log('')
for (const data in info) {
  console.log(`* ${data}: \t${info[data]}`)
}
console.log('')
