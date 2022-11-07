function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.getArea = () => {
        return Math.PI * this.r ** 2;
    };
    this.getPerimeter = () => {
        return 2 * Math.PI * this.r;
    }
    this.getIntersectionArea = (circle) => {
        let d = Math.sqrt((circle.x - this.x) ** 2 + (circle.y - this.y) ** 2);
        if (d > circle.r + this.r) {
            return 0;
        } else if (d <= Math.abs(circle.r - this.r)) {
            return Math.PI * Math.min(circle.r, this.r) ** 2;
        } else {
            let a = Math.acos((this.r ** 2 + d ** 2 - circle.r ** 2) / (2 * this.r * d));
            let b = Math.acos((circle.r ** 2 + d ** 2 - this.r ** 2) / (2 * circle.r * d));
            return a * this.r ** 2 + b * circle.r ** 2 - d * this.r * Math.sin(a);
        }
    }
    this.coordinateInCircle = (x, y) => {
        return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.r;
    }
}


module.exports = Circle;