var jmlAngkot = 10;
var angkotBeroperasi =6;
var noAngkot = 1;

for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++) 
{
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
    } else if (noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi.');
    } 
}
