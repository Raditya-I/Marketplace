var lastMod = new Date(document.lastModified);

// Format hari dan jam
var options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
var formattedDate = lastMod.toLocaleDateString('id-ID', options);

let elemen = document.getElementById("w");
elemen.innerText= "Diperbarui " + formattedDate

onload = function () {
  document.getElementById("profil").style.display = "none";
  document.getElementById("product").style.display = "none";
}
document.getElementById("home").style.display = "block";

document.getElementById("a1").onclick = function(e) {
  e.preventDefault();
  document.getElementById("home").style.display = "block";
  document.getElementById("profil").style.display = "none";
  document.getElementById("product").style.display = "none";
}
document.getElementById("a2").onclick = function(e) {
  e.preventDefault();
  document.getElementById("home").style.display = "none";
  document.getElementById("profil").style.display = "block";
  document.getElementById("product").style.display = "none";
}
document.getElementById("a3").onclick = function(e) {
  e.preventDefault();
  document.getElementById("home").style.display = "none";
  document.getElementById("profil").style.display = "none";
  document.getElementById("product").style.display = "block";
}