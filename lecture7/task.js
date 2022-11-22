// # ****Home task 1****
//
// Показати на практиці, що javascript - OOP (Інкапсуляція, Поліморфізм, Наслідування):
//
// - 5 різних класів (Геометричні фігури)
// - 5 унікальних методів
//
// # ****Home task 2****
//
// Для заданих фігур написати метод який обраховує площу перетину заданих фігур.
//
//     Приклад: Площа перетину 2 квадратів і так далі.



class Base {
    constructor(name) {
        this.name = name;
    }
}

class Shape extends Base {
    constructor(name) {
        super(name);
    }

    getArea() {
        return 0;
    }
}


class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}


class Rectangle extends Shape {
    constructor(name, a, b) {
        super(name);
        this.a = a;
        this.b = b;
    }

    getArea() {
        return this.a * this.b;
    }
}


class Square extends Rectangle {
    constructor(name, a) {
        super(name, a, a);
    }

    getArea() {
        return super.getArea();
    }
}


class Triangle extends Shape {
    constructor(name, a, b, c) {
        super(name);
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}