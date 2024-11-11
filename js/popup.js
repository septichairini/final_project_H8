// Mendapatkan button popup, elemen popup, dan tombol close
var popupBtn = document.getElementById("popup-btn");
var popup = document.querySelector(".popup");
var closeBtn = document.querySelector(".close");

// Menambahkan event listener pada button popup untuk menampilkan popup
popupBtn.addEventListener("click", function () {
  popup.style.display = "block";
});

// Menambahkan event listener pada tombol close untuk menyembunyikan popup
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// Menambahkan event listener pada dokumen untuk menyembunyikan popup jika user mengklik diluar popup
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
