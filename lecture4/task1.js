// **Квадрат**
//
// Знайдіть периметр та площу квадрата.
//
// **Вхідні дані**
//
// Довжина сторони квадрата **n** (**1** ≤ **n** ≤ **1000**).
//
// **Вихідні дані**
//
// Для кожного теста виведіть в одному рядку периметр та площу квадрата.


function calcPerimeterAndAreaFromTriangle(n) {
    if (1 <= n && n < 1000) {
        const perimeter = 4 * n;
        const area = n * n;
        return `${perimeter} ${area}`;
    } else {
        return "Введіть число від 1 до 1000!";
}}


module.exports = calcPerimeterAndAreaFromTriangle;