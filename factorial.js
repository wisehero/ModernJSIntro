function fact(n) {
  if (n <= 1) return n; // 재귀 종료
  return n * fact(n - 1); // 재귀 호출
}

// i 값을 1에서 9까지 1씩 증가시키면서 i의 팩토리얼을 콘솔에 출력
for (var i = 1; i < 10; i++) {
  console.log(i + "! = " + fact(i));
}
