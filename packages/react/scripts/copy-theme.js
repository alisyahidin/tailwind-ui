const fs = require('fs')

fs.copyFile(require.resolve('@alisyahidin/core/styles/themes.css'), './themes.css', (err) => {
  if (err) throw err
  console.log('themes.css from @alisyahidin/core was copied')
})