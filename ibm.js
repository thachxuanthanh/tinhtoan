function tinhIMB() {
  let chieuCao = parseFloat(document.getElementById("chieuCao").value);
  let canNang = parseFloat(document.getElementById("canNang").value);
  let chiSoIMB = canNang / Math.pow(chieuCao, 2);
  document.getElementById("ketQua").innerHTML =
    "Chỉ số IMB của bạn là: " + chiSoIMB.toFixed(2);
}
