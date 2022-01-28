// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

function jumlahVolumeKubus (a, b ) {
    var volumeA;
    var volumeB;
    var total;
    
    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total
}


console.log(jumlahVolumeKubus(8, 3));
console.log(jumlahVolumeKubus(18, 13));
