class Circle {
  // Constructor with default values
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  // Getter for radius
  getRadius() {
    return this.radius;
  }

  // Setter for radius
  setRadius(radius) {
    this.radius = radius;
  }

  // Getter for color
  getColor() {
    return this.color;
  }

  // Setter for color
  setColor(color) {
    this.color = color;
  }

  // Method to calculate the area of the circle
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Method to calculate the circumference of the circle
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  // Method to represent the circle as a string
  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }
}

// Example usage:
const defaultCircle = new Circle();
console.log(defaultCircle.toString()); // Output: Circle[radius=1, color=red]
console.log(defaultCircle.getArea()); // Output: 3.141592653589793
console.log(defaultCircle.getCircumference()); // Output: 6.283185307179586

const customCircle = new Circle(5, "blue");
console.log(customCircle.toString()); // Output: Circle[radius=5, color=blue]
console.log(customCircle.getArea()); // Output: 78.53981633974483
console.log(customCircle.getCircumference()); // Output: 31.41592653589793
