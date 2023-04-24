const { defineConfig } = require("cypress");
const fs = require('fs')
let href;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        mylog(message) {
          console.log(message)

          return `Yielding ${message}`;
        
        },
        countFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              resolve(files.length)
            })
          })
        },
        setHref: (val) => {
          return (href = val)
        },
        getHref: () => {
          return href
        },
      });
    },
  },
      });
  
    


