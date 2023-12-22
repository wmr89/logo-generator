class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 265 200, 35 200" fill= "${this.shapeColor}" /><text x="150" y="150" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
}
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill= "${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill= "${this.shapeColor}" /><text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = {
  Triangle,
  Square,
  Circle,
};
