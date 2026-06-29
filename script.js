const scriptURL="PASTE_WEB_APP_URL";

document
.getElementById("feedbackForm")
.addEventListener("submit",e=>{

e.preventDefault();

const data={

id_feedback:document.getElementById("id_feedback").value,

mahasiswa_id:document.getElementById("mahasiswa_id").value,

mahasiswa_nama:document.getElementById("mahasiswa_nama").value,

kelas_id:document.getElementById("kelas_id").value,

pertemuan_id:document.getElementById("pertemuan_id").value,

mata_kuliah:document.getElementById("mata_kuliah").value,

dosen_pengampu:document.getElementById("dosen_pengampu").value,

nilai_kualitas:document.getElementById("nilai_kualitas").value,

nilai_kemudahan:document.getElementById("nilai_kemudahan").value,

nilai_ketepatan:document.getElementById("nilai_ketepatan").value,

komentar:document.getElementById("komentar").value,

status:document.getElementById("status").value

};

fetch(scriptURL,{
method:"POST",
body:JSON.stringify(data)
})
.then(()=>{

alert("Feedback berhasil dikirim");

document.getElementById("feedbackForm").reset();

});

});