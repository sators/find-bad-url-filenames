#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const getAllFiles = function(dirPath, arrayOfFiles) {
  var files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(filename) {
    if (fs.statSync(dirPath + "/" + filename).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + filename, arrayOfFiles)
    } else {
      arrayOfFiles.push({dir: path.join(dirPath, "/"), filename })
    }
  })

  return arrayOfFiles
}

const workingDirectory = argv._[0] ? path.resolve(argv._[0]) : process.cwd()

const files = getAllFiles(workingDirectory)

var illegalRe = /[\/\?<>\(\)\\:\*\|"!@#$%^&]/g;
var controlRe = /[\x00-\x1f\x80-\x9f]/g;
var reservedRe = /^\.+$/;
var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
var windowsTrailingRe = /[\. ]+$/;

const badFiles = files.filter(file => (
  illegalRe.test(file.filename) ||
  controlRe.test(file.filename) ||
  reservedRe.test(file.filename) ||
  windowsReservedRe.test(file.filename) ||
  windowsTrailingRe.test(file.filename)
))

if (badFiles.length){
    console.error("Found bad filenames:")
    console.error(badFiles.map(file => path.join(file.dir, file.filename)))
    process.exit(1)
} else {
    process.exit(0);
}
