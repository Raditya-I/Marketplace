var lastMod = new Date(document.lastModified);

// Format hari dan jam
var options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
var formattedDate = lastMod.toLocaleDateString('id-ID', options);

let elemen = document.getElementById("w");
elemen.innerText= "Diperbarui " + formattedDate

onload = function () {
  document.getElementById("form").style.display="none";
  document.getElementById("profil").style.display = "none";
  document.getElementById("product").style.display = "none";
}
document.getElementById("home").style.display = "block";

document.getElementById("a1").onclick = function(e) {
  e.preventDefault();
  document.getElementById("form").style.display="none";
  document.getElementById("home").style.display = "block";
  document.getElementById("profil").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("k").style.display = "none";
  document.getElementById("a1").style.borderBottom= "1px solid white";
  document.getElementById("a2").style.borderBottom= "none";
  document.getElementById("a3").style.borderBottom= "none";
}
document.getElementById("a2").onclick = function(e) {
  e.preventDefault();
  document.getElementById("form").style.display="none";
  document.getElementById("home").style.display = "none";
  document.getElementById("profil").style.display = "block";
  document.getElementById("product").style.display = "none";
  document.getElementById("k").style.display = "none";
  document.getElementById("a1").style.borderBottom= "none"
  document.getElementById("a2").style.borderBottom= "1px solid white";
  document.getElementById("a3").style.borderBottom= "none";
}
document.getElementById("a3").onclick = function(e) {
  e.preventDefault();
  document.getElementById("form").style.display="none";
  document.getElementById("home").style.display = "none";
  document.getElementById("profil").style.display = "none";
  document.getElementById("product").style.display = "block";
  document.getElementById("k").style.display = "none";
  document.getElementById("a1").style.borderBottom= "none";
  document.getElementById("a2").style.borderBottom= "none";
  document.getElementById("a3").style.borderBottom= "1px solid white";
}
function formm() {
  document.getElementById("home").style.display="none";
  document.getElementById("form").style.display ="block";
}
function konfr() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const k = document.getElementById("k");
  const hs = document.getElementById("hs");
  const ht = document.getElementById("ht");
  let Barudata = {nama, kelas}
  if (nama === "") {
    k.innerText= "NAMA TIDAK BOLEH KOSONG"
  }
  else if (kelas==="") {
      k.innerText="KELAS TIDAK BOLEH KOSONG"
    }
    else {
      k.innerText="SELAMAT DATANG!";
      hs.innerText = "Nama : " + nama;
      ht.innerText = "Kelas   : " + kelas;
      localStorage.setItem("data", JSON.stringify(Barudata))
    }
  }
  