var angka = prompt('Masukan Angka:')

if(angka % 2 == 0) {
    alert(angka + ' Adalah Angka Genap');
} else if (angka % 2 == 1) {
    alert(angka + ' Adalah Angka Ganjil');
} else {
    alert('Yang Anda Masukan Bukan Angka');
}