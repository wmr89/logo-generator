const shapes = require('./shapes.js')



describe('Shapes', () => {
    describe('renderTriangle', () => {
      it('Renders string that produces a triangle', () => {
        const shape = new shapes.Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150 0, 265 200, 35 200" fill= "blue" />');
      });
    });
    describe('renderCircle', () => {
        it('Renders string that produces a circle', () => {
          const shape = new shapes.Circle();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill= "blue" />');
        });
      });
      describe('renderSquare', () => {
        it('Renders string that produces a square', () => {
          const shape = new shapes.Square();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill= "blue" />');
        });
      });
});