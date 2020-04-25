// 카운터 함수를 만드는 함수 (익명함수버전)



function makeCounter() {
    var count = 0;
    return function () {
        return count++
    };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());