// x번 곱하는 함수를 생성하는 함수

function makeMultplier(x) {
    return function (y) {
        return x * y;
    };
}

var multi2 = makeMultplier(2);
var mutti10 = makeMultplier(10);
console.log(multi2(3));
console.log(multi10(3));
