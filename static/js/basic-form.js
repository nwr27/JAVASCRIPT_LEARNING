console.log("Starting");

document.getElementById("merge-button").onclick = () => {
  const namaDepan = document.getElementById("first-name").value.trim();
  const namaBelakang = document.getElementById("last-name").value.trim();

  if (!namaDepan || !namaBelakang) {
    alert("Nama depan dan nama belakang tidak boleh kosong");
    return;
  }

  const namaLengkap = `${namaDepan} ${namaBelakang}`;

  // Kosongkan input setelah merge
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";

  // Tampilkan overlay dengan nama lengkap
  document.getElementById("full-name").textContent = namaLengkap;
  document.getElementById("overlay").classList.remove("d-none");

  // Blur konten sebelumnya
  document.querySelector(".blur-content").classList.add("blurred");
};

// Tutup overlay
document.getElementById("close-overlay").onclick = () => {
  document.getElementById("overlay").classList.add("d-none");

  // Hilangkan efek blur dari konten sebelumnya
  document.querySelector(".blur-content").classList.remove("blurred");
};
