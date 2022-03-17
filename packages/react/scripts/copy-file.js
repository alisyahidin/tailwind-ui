const fs = require('fs')

const targetBuild = './dist'

const files = [
  { source: require.resolve('@alisyahidin/core/dist/themes.css'), target: `${targetBuild}/themes.css` },
  { source: './package.json', target: `${targetBuild}/package.json` }
]

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('dist')
}

files.forEach(item => {
  fs.copyFile(item.source, item.target, (err) => {
    if (err) throw err
    console.log(`${item.source} succesfully copied`)
  })
})
