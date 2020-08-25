class Shape {
    constructor(description) {
        this.description = description;
    }
}

class shapeFactory {
    createShape(shapeType) {
        switch(shapeType) {
            case 'square':
                return new Shape('Square shape');
            case 'rectangle':
                return new Shape('Rectangle shape');
            case 'circle':
                return new Shape('Circle shape');
        }
    }
}

const factory = new shapeFactory();
const circle = factory.createShape('circle');
const square = factory.createShape('square');
const rectangle = factory.createShape('rectangle');

console.log(circle); // Shape {description: 'Circle shape'}
console.log(square); // Shape {description: 'Square shape'}
console.log(rectangle); // Shape {description: 'Rectangle shape'}
