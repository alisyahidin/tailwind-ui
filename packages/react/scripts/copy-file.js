const fs = require('fs')
const fse = require('fs-extra')

const packagePath = process.cwd()
const targetBuild = './dist'

const files = [
  { source: require.resolve('@alisyahidin/core/dist/themes.css'), target: `${targetBuild}/themes.css` },
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
  newPackageJson.name = '@alisyahidin/react'
  const targetPath = path.resolve(buildPath, './package.json')

  await fse.writeFile(targetPath, JSON.stringify(newPackageJson, null, 2), 'utf8')
  console.log(`Created package.json in ${targetPath}`)

  return newPackageJson
}

createPackageFile()