// 카운터 함수를 만드는 함수

function makeCounter() {
    var count = 0;
    return f;
    function f() {
        return count++
    }
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());