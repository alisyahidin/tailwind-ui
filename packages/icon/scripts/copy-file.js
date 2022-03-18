const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

const packagePath = process.cwd()
const targetBuild = './dist'
const buildPath = path.join(packagePath, './dist')

const files = [
  { source: './LICENSE.md', target: `${targetBuild}/LICENSE.md` },
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


const createPackageFile = async () => {
  const packageJson = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8')

  const { scripts, devDependencies, ...newPackageJson } = JSON.parse(
    packageJson,
  )

  newPackageJson.private = false
  newPackageJson.name = '@alisyahidin/icon'
  const targetPath = path.resolve(buildPath, './package.json')

  await fse.writeFile(targetPath, JSON.stringify(newPackageJson, null, 2), 'utf8')
  console.log(`Created package.json in ${targetPath}`)

  return newPackageJson
}

createPackageFile()