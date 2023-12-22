const {Triangle, Circle, Square} = require('./shapes.js')



describe('Shapes', () => {
    describe('renderTriangle', () => {
      it('Renders string that produces a triangle', () => {
        const shape = new Triangle("blue", "AAA", "white");
     
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 265 200, 35 200" fill= "blue" /><text x="150" y="150" font-size="45" text-anchor="middle" fill="white">AAA</text></svg>`);
      });
    });
    describe('renderCircle', () => {
      it('Renders string that produces a circle', () => {
        const shape = new Circle("blue", "AAA", "white");
     
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill= "blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AAA</text></svg>`);
      });
    });
    describe('renderSquare', () => {
      it('Renders string that produces a square', () => {
        const shape = new Square("blue", "AAA", "white");
     
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill= "blue" /><text x="150" y="120" font-size="55" text-anchor="middle" fill="white">AAA</text></svg>`);
      });
    });
});