let circleBtn = document.getElementById('circle-btn');
let shapeContainer = document.querySelector('.shape-container');
let userInputCircle = document.getElementById('circle-radius');
let userInput = 0;
let circleVal = Math.floor(Math.random() * (600 - (2 * userInputCircle.value)))

class Shape {
    constructor(width, height){
        this.div = document.createElement('div');
        this.name;
        this.width = `Width: ${width}`;
        this.height = `Height: ${height}`;
        this.x = Math.floor(Math.random() * (600 - (2 * userInputCircle.value)));
        this.y = Math.floor(Math.random() * (600 - (2 * userInputCircle.value)));
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })
    }
    describe(){
        let shapeName = document.querySelector('.shape-name');
        let shapeWidth = document.querySelector('.shape-width');
        let shapeHeight = document.querySelector('.shape-height');
        let shapeRadius = document.querySelector('.shape-radius');
        let shapeArea = document.querySelector('.shape-area');
        let shapePerimeter = document.querySelector('.shape-perimeter');
        
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
        super()
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super()
    }
}

class Square extends Shape {
    constructor(sideLength){
        super()
    }
}

circleBtn.addEventListener('click', () => {
    let circle = new Circle(userInputCircle.value);
    shapeContainer.append(circle.div);
    console.log(circle.x)
    console.log(circle.y)
    console.log(circle.perimeter);
})