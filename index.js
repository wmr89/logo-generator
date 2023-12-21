const fs = require('fs');
const inquirer = require('inquirer')
const generateLogo = require("./lib/shapes.js")

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 letters to be added to your logo.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color or hexadecimal number for your text.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo.',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexadecimal number for your shape.',
    },
]

const writeToFile = function (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error')
        }
    })
}

function init() {
    inquirer
        .prompt(questions).then((answers) => {
            writeToFile('logo.svg', generateLogo(answers))
        })
}

init();