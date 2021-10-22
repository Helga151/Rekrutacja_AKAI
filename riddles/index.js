// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  // uzupełnij tutaj
    var reversed = 0, rev = 0;
    while(number > 0) {
        rev = number % 10;
        reversed = reversed * 10 + rev;
        number = Math.floor(number / 10);
    }
    return reversed;
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  // uzupełnij tutaj
    var sum = 0;
    tab.forEach(i => {
       if(i % 2 == 0) sum += i; 
    });
    return sum;
}

console.log("2.", addEven(tab));
