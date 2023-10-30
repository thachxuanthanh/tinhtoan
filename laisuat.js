function tinhLaiSuat() {
  let goc = parseFloat(document.getElementById("goc").value);
  let laiSuat = parseFloat(document.getElementById("laiSuat").value);
  let soThang = parseFloat(document.getElementById("soThang").value);

  let laiSuatHangThang = (goc * (laiSuat / 100)) / 12;
  let tongGocLai = goc + laiSuatHangThang * soThang;

  document.getElementById("ketQua").innerHTML =
    "Tổng số tiền gốc và lãi sau " +
    soThang +
    " tháng là: " +
    tongGocLai.toLocaleString() +
    " VNĐ";
}
