// var i = prompt('Masukan Angka :');

// switch( i) {
//     case '1' :
//         alert('Anda Memasukan Angka 1');
//         break;
//     case '2' :
//         alert('Anda Memasukan Angka 2');
//         break; 
//     case '3' :
//         alert('Anda Memasukan Angka 3');
//         break;
//     default :
//         alert('Angka Yang Anda Masukan Salah');
//         break;
// }

var item = prompt('Masukan Nama Makana / Minuman : \n (contoh: nasi, daging, susu,hamburger, softdrink');

switch (item) {
    case 'nasi' : 
    case 'daging' : 
    case 'susu' : 
        alert('Makanan / Minuman SEHAT!');
        break;
    case 'hamburger' : 
    case 'softdrink' : 
        alert('Makanan / Minuman TIDAK SEHAT!');
        break;
    default :
        alert ('Anda Memasukan KATALOG salah');
        break;
}













