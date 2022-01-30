// Parameter Adalah Variabel Yang Di Tulis Di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang di kirimkan saat funciton dipanggil


// Argument Adalah nilai yang dikirimkan ke parameter saat funsi di panggil

function tambah(){
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil
}

var coba = tambah(1,1,1,1,1);
console.log(coba);