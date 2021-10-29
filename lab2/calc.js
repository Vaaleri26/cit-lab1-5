function quad(a, b, c) {
  if (a == 0) alert("Введён неправильный коэффициент");
  var D = b * b - 4 * a * c;
  var x1, x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) * (2 * a);
    return (
      "a=" +
      a +
      ",b=" +
      b +
      ", c=" +
      c +
      "\n x1=" +
      x1 +
      ", x2=" +
      x2 +
      "\n D=" +
      D
    );
  } else if (D == 0) {
    x1 = -b / (2 * a);
    return "a=" + a + ",b=" + b + ", c=" + c + "\n x1=" + x1 + "\n D=" + D;
  } else if (D < 0)
    return "a=" + a + ",b=" + b + ", c=" + c + "\nНет корней\nD=" + D;
}
function prog() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var result = quad(a, b, c);
  document.getElementById("result").textContent = result;
  document.getElementById("otvet").style.display = "block";
}
