function textContent(element) {
  var content = element.textContent;
  if (content !== undefined) return content;
  return element.innerText;
}

// textContent의 크로스 브라우징 대책
