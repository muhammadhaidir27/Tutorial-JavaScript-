var tanya = true;

while ( tanya ) {



    // menentukan Pilihan Player
    var p = prompt('pilih : Gunting, Batu, Kertas');


    // menentukan pilihan Com 
    // membuat  bilangan rondom
    var comp = Math.random();

    if( comp < 0.34) {
        comp = 'Gunting';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'Batu';
    } else {
        comp = 'Kertas';
    } 

    var hasil = '';
    // menentukan Rules

    if(p == comp) {
        hasil = 'SERI';
    } else if (p == 'Gunting'){
        // if( comp == 'Kertas') {
        //     hasil = 'MENANG!';
        // }else {
        //     hasil = 'KALAH!';    
        // }
        hasil = ( comp == 'Kertas' ) ? 'MENANG!' : 'KALAH!';
    } else if (p == 'Kertas') {
        hasil = ( comp == 'Gunting' ) ? 'KALAH!' : 'MENANG!';
    } else if (p == 'Batu') {
        hasil = ( comp == 'Kertas' ) ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan Pilihan Yang Salah!';
    }




    // Tampilkan Hasil
    alert(' Kamu Memilih : ' + p + ' Dan Komputer Memilih : ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);

    tanya = confirm('Lagi Gak??');
}

alert('TERIMA KASIH SUDAH BERMAIN')