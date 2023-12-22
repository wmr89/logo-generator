class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.shapeColor = color;
  }
  setText(textInput) {
    this.text = textInput;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<polygon points="150 0, 265 200, 35 200" fill= ${this.shapeColor}  />`;
  }
  renderText() {
    return `<text x="150" y="150" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

// let logo = new Triangle();
// logo.setColor("black");
// logo.setText("WMR");
// logo.setTextColor("white");
// console.log(logo);

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
  renderText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
  }
  renderText() {
    return `<text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

const generateLogo = function (data) {
  if (data.shape === "Circle") {
    const logo = new Circle();
    logo.setColor(data.shapeColor);
    logo.setText(data.text);
    logo.setTextColor(data.textColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${logo.render()}

${logo.renderText()}

</svg>`;
  }
  if (data.shape === "Triangle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150 0, 265 200, 35 200" fill="${data.shapeColor}"  />

<text x="150" y="150" font-size="45" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg> `;
  }
  if (data.shape === "Square") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="75" y="25" width="150" height="150" fill="${data.shapeColor}" />

<text x="150" y="120" font-size="55" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg> `;
  }
};

module.exports = generateLogo;
