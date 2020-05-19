// 써로게이트 페어가 포함된 문자열을 배열로 만들기

function stringToArrya(s){
    return s.match(/[\uD800 - \uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]\/g)||[];
}