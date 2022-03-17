const fs = require("fs")
const fse = require("fs-extra")
const path = require('path');

const packagePath = process.cwd()
const buildPath = path.join(packagePath, './dist')

const copyFiles = () => {
  const files = [
    { source: './index.js', target: './dist/index.js' },
    { source: './LICENSE.md', target: './dist/LICENSE.md' },
    { source: './README.md', target: './dist/README.md' },
    { source: './src/colors', target: './dist/colors' },
  ]

  files.forEach(({ source, target }) => {
    if (source === './index.js') {
      copyIndexFile()
    } else {
      fse.copy(source, target, function (err) {
        if (err) {
          console.log(`An error occured while copying the ${source} file/folder.`)
          return console.error(err)
        }
        console.log(`Copy ${source} file/folder completed!`)
      });
    }
  })
}

const copyIndexFile = async () => {
  const data = await fse.readFile('./index.js', "utf-8")
  const indexFile = data.replace(/\.\/dist/g, '.')
  fs.writeFile('./dist/index.js', indexFile, err => {
    if (err) console.error(err)
    else console.log('Copy index.js file/folder completed!')
  })
}

const createPackageFile = async () => {
  const packageJson = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8')

  const { scripts, devDependencies, files, ...newPackageJson } = JSON.parse(
    packageJson,
  )

  newPackageJson.private = false
  newPackageJson.name = '@alisyahidin/core'
  const targetPath = path.resolve(buildPath, './package.json')

  await fse.writeFile(targetPath, JSON.stringify(newPackageJson, null, 2), 'utf8')
  console.log(`Created package.json in ${targetPath}`)

  return newPackageJson
}

const run = async () => {
  try {
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('dist')
    }
    copyFiles()
    await createPackageFile()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()