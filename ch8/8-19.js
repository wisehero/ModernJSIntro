function partial(f) {
    // 중첩 함수에서 arguments를 사용하기 위해 저장해둠

    var args = arguments;
    return function () {
        // 외부 함수의 두 번째 인수를 변수 a에 복사
        var a = Array.prototype.slice.call(args, 1);
        for (var i = 0, j = 0; i < a.length; i++) {
            // 외부 함수의 두 번째 인수가 undefined면 이 함수의 arguments를 사용한다.
            if (a[i] == undefined) a[i] = arguments[j++];

        }
        return f.apply(this, a);
    };
}

var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, .5);
var cubicroot = partial(Math.pow, undefined, 1 / 3);
var exp = partial(Math.pow, Math.E, undefined);