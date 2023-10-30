// Hàm tính tổng hai số
function tinhTong() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var result = number1 + number2;
  document.getElementById("result").innerHTML =
    "Kết quả phép cộng là: " + result;
}

// Hàm tính hiệu hai số
function tinhHieu() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var result = number1 - number2;
  document.getElementById("result").innerHTML =
    "Kết quả phép trừ là: " + result;
}

// Hàm tính tích hai số
function tinhTich() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var result = number1 * number2;
  document.getElementById("result").innerHTML =
    "Kết quả phép nhân là: " + result;
}

// Hàm tính thương hai số
function tinhThuong() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var result;
  if (number2 !== 0) {
    result = number1 / number2;
  } else {
    result = "Không thể chia cho 0";
  }
  document.getElementById("result").innerHTML =
    "Kết quả phép chia là: " + result;
}
