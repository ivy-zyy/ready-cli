#!/usr/bin/env node
const program = require('commander')

// 调用自定义指令
const createCommandsPage = require('./lib/core/create')
createCommandsPage.createCommands()

// 执行
program.parse(process.argv)

// const inquirer = require('inquirer')

// inquirer.createPromptModule([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Your name',
//         default: 'hello word'
//     }
// ]).then(answers => {
//     console.log(answers)
// })