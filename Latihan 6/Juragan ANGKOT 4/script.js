var jmlAngkot = 10;
var angkotBeroperasi =6;
var noAngkot = 1;

for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++) 
{
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi.');
    } 
}
