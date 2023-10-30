function incrementCount() {
  let count = localStorage.getItem("count");
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count);
  document.getElementById("count").innerHTML = count;
}
