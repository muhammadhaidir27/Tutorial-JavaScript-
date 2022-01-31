// Membuat OBJECT
// object Literal
var namaBarang1 = {
    nama_barang : "Aqua 600ml",
    barcode : "8239223",
    satuan : "Karton @24botol",
    harga : "79000"
};

var namaBarang2 = {
    nama_barang : "Buku Sidu",
    barcode : "5236914",
    satuan : "Pack @10pcs",
    harga : "32000"
};

// function declaration 
function buatObjectNamaBarang(nama_barang, barcode, satuan, harga) {
    var namaBarang = {};
    namaBarang.nama_barang = nama_barang;
    namaBarang.barcode = barcode;
    namaBarang.satuan = satuan;
    namaBarang.harga = harga;
    return namaBarang;
}

var namabarang3 = buatObjectNamaBarang('Pulpel snowman V-1', '13216363','Pack @ 12 pcs', '21000');

var namabarang4 = buatObjectNamaBarang('Papan Tulis 120 x 240', '2782346235','pcs', '134000');


// constructor 
function NamaBarang(nama_barang, barcode, satuan, harga) {
    this.nama_barang = nama_barang;
    this.barcode = barcode;
    this.satuan = satuan;
    this.harga = harga;
} 

var namabarang5 = new NamaBarang ('maizon', '1464524','karton @ 12botol', '42000');

var namabarang6 = new NamaBarang ('Baygon', '24521876','karton @ 12botol', '65000');















