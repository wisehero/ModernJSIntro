function norm(x) {
    var sum2 = sumSquare();
    return Math.sqrt(sum2);
    function sumSquare() {
        sum = 0;

        // 중첩 함수는 외부 함수의 인수와 지역 변수에 접근 가능하다. 아래의 중첩 함수는 x에 접근하고 있다.
        for (var i = 0; i < x.length; i++) {
            sum = 0;
            for (var i = 0; i < x.length; i++) sum += x[i] * x[i];
            return sum;
        }
    }
}