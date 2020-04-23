// 순차 검색

function linearSearch(x, a) {
  var i = 0;
  var n = a.length;
  while (i < n && x > a[i]) i++;
  if (x == a[i]) return i;
  return null;
}
