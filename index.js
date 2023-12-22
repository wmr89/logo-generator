const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes.js");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 letters to be added to your logo.",
    validate: function (input) {
      if (input.length > 3) {
        console.log(" ERROR: Please enter 3 or less letters");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color or hexadecimal number for your text.",
  },
  {
    type: "list",
    name: "shape",
    message: "Pick a shape for your logo.",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color or hexadecimal number for your shape.",
  },
];

const writeToFile = function (fileName, data) {
  if (!data) {
    return;
  } else {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("Generated logo.svg");
      }
    });
  }
};

function init() {
  inquirer.prompt(questions).then((answers) => {
    let choice;
    if (answers.shape === "Triangle") {
      choice = new Triangle(answers.shapeColor, answers.text, answers.textColor);
    }
    if (answers.shape === "Circle") {
      choice = new Circle(answers.shapeColor, answers.text, answers.textColor);
    }
    if (answers.shape === "Square") {
        choice = new Square(answers.shapeColor, answers.text, answers.textColor);
      }

    writeToFile("logo.svg", choice.render());
  });
}

init();