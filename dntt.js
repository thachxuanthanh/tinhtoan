function subtract() {
  // Lấy giá trị từ hai ô input
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  // Thực hiện phép trừ
  let result = num1 - num2;

  // Hiển thị kết quả
  document.getElementById("result").innerHTML =
    "Điện năng tiêu thụ của bạn là: " + result + " kWh ";
}
