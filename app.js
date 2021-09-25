let shapeContainer = document.querySelector('.shape-container');
let circleBtn = document.getElementById('circle-btn');
let triangleBtn = document.getElementById('triangle-btn');
let rectangleBtn = document.getElementById('rectangle-btn');
let squareBtn = document.getElementById('square-btn');
let userInputCircle = document.getElementById('circle-radius');
let userInputTriangle = document.getElementById('triangle-height')
let userInputRectangleHeight = document.getElementById('rectangle-height');
let userInputRectangleWidth = document.getElementById('rectangle-width');
let userInputSquare = document.getElementById('square-side');
let shapeName = document.querySelector('.shape-name');
let shapeWidth = document.querySelector('.shape-width');
let shapeHeight = document.querySelector('.shape-height');
let shapeRadius = document.querySelector('.shape-radius');
let shapeArea = document.querySelector('.shape-area');
let shapePerimeter = document.querySelector('.shape-perimeter');

// let circleRadius = userInputCircle.value;
// let triangleHeight = userInputTriangle.value
// let rectangleHeight = userInputRectangleHeight.value
// let rectangleWidth = userInputRectangleWidth.value
// let squareSide = userInputSquare.value

class Shape {
    constructor(height, width){
        this.div = document.createElement('div');
        this.name;
        this.width = `Width: ${width}`;
        this.height = `Height: ${height}`;
        this.x = Math.floor(Math.random() * (600 - (0.5 * (height + width))));
        this.y = Math.floor(Math.random() * (600 - (0.5 * (height + width))));
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            shapeName.textContent = "";
            shapeWidth.textContent = "";
            shapeHeight.textContent = "";
            shapeRadius.textContent = "";
            shapeArea.textContent = "";
            shapePerimeter.textContent = "";
        })
    }
    describe(){       
        shapeName.textContent = this.name;
        shapeWidth.textContent = this.width;
        shapeHeight.textContent = this.height;
        shapeRadius.textContent = this.radius;
        shapeArea.textContent = this.area;
        shapePerimeter.textContent = this.perimeter;
    }
}

class Circle extends Shape {
    constructor(radius){
        super(2*radius, 2*radius);
        this.name = 'Name: Circle'
        this.radius = `Radius: ${radius}`;
        this.perimeter = `Perimeter: ${Math.floor((2* 3.1415) * radius)}`;
        this.area = `Area: ${Math.floor(3.1415 * (radius*radius))}`;
        this.div.classList.add('circle', 'shape');
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }       
}

class Triangle extends Shape {
    constructor(height){
        super(1*height, 1*height) // added 1* due to type conversion needs.
        this.hypotenuse = Math.sqrt((height * height) + (height * height));
        this.name = 'Name: Triangle'
        this.area = `Area: ${0.5 * height * height}`;
        this.radius = `Radius: N/A`;
        this.perimeter = `Perimeter: ${Math.floor(this.hypotenuse) + (2 * height)}`;
        this.div.classList.add('shape');
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
        this.div.style.borderBottom =  `${height}px solid yellow`
        this.div.style.borderRight=  `${height}px solid transparent`
    }
}

class Rectangle extends Shape {
    constructor(height, width){
        super(1*height, 1*width) // added 1* due to type conversion needs.
        this.name = 'Name: Rectangle'
        this.area = `Area: ${width * height}`;
        this.radius = `Radius: N/A`;
        this.perimeter = `Perimeter: ${(2 * width) + (2 * height)}`;
        this.x = Math.floor(Math.random() * (600 - (0.5 * (2 * width))));
        this.y = Math.floor(Math.random() * (600 - (0.5 * (2 * height))));
        this.div.classList.add('rectangle', 'shape');
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }
}

class Square extends Shape {
    constructor(sideLength){
        super(1*sideLength, 1*sideLength) // added 1* due to type conversion needs.
        this.name = 'Name: Square'
        this.area = `Area: ${sideLength * sideLength}`;
        this.radius = `Radius: N/A`;
        this.perimeter = `Perimeter: ${4 * sideLength}`;
        this.div.classList.add('square', 'shape');
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }
}

circleBtn.addEventListener('click', () => {
    if(userInputCircle.value > 300){
        alert('Please enter a value of 300px or less')
        userInputCircle.value = "";
        return;
    }
    let circle = new Circle(userInputCircle.value);
    shapeContainer.append(circle.div);
    userInputCircle.value = ""
})

triangleBtn.addEventListener('click', () => {
    if(userInputTriangle.value > 600){
        alert('Please enter a value of 600px or less')
        userInputTriangle.value = "";
        return;
    }
    let triangle = new Triangle(userInputTriangle.value);
    shapeContainer.append(triangle.div);
    userInputTriangle.value = "";
})
rectangleBtn.addEventListener('click', () => {
    if(userInputRectangleHeight.value > 600){
        alert('Please enter a height value of 600px or less')
        userInputRectangleHeight.value = "";
        return;
    }
    if (userInputRectangleWidth.value > 600){
        alert('Please enter a width value of 600px or less')
        userInputRectangleWidth.value = "";
        return;
    }
    let rectangle = new Rectangle(userInputRectangleHeight.value, userInputRectangleWidth.value);
    shapeContainer.append(rectangle.div);
    userInputRectangleHeight.value = "";
    userInputRectangleWidth.value = "";
})
squareBtn.addEventListener('click', () => {
    if(userInputSquare.value > 600){
        alert('Please enter a value of 600px or less')
        userInputSquare.value = "";
        return;
    }
    let square = new Square(userInputSquare.value);
    shapeContainer.append(square.div);
    userInputSquare.value = "";
})