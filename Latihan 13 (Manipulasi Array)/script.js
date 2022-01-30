// //  Manipulasi Array

// // 1. + isi Array
console.log("*** A. MANIPULASI ARRAY ***")
console.log("*** A.1.CARA TAMBAH ARRAY ***")
  var arr = [];
  arr[0] = "Tayo"
  arr[1] = "D"
  arr[2] = "Last"

  console.log(arr);

// // 2.Menghapus isi Array Secara manual
console.log("*** A.2.CARA HAPUS ARRAY SECARA MANUAL ***")
  var arr = [];
  arr[0] = "Tayo"
  arr[1] = "D"
  arr[2] = "Last"
  arr[1] = undefined

 console.log(arr);

// // 3.Menampilkan isi array
console.log("*** A.3.MENAMPILKAN ISI ARRAY ***")
  var arr = [];
  arr[0] = "Tayo"
  arr[1] = "D"
  arr[2] = "Last"

  for (var i = 0; i < arr.length; i++){
      console.log(arr[i]);
  }

// // Method Pada array
console.log("*** B.METHOD ARRAY ***")
console.log("*** B.1.METHOD JOIN PADA ARRAY ***")

 var arr =["senin","selasa","rabu","kamis","jum'at","sabtu","minggu"]
// // 1.join
  console.log(arr.join('-'));

// // 2.Push & pop
console.log("*** B.2.METHOD PUSH & POP PADA ARRAY ***")
// // arr.push('kamis') + isi array di akhir
arr.push('kamis');
// // arr.pop(); menghapus isi array di akhir
arr.pop();
  console.log(arr.join('-'));

 // 3. unshfit & shift
 console.log("*** B.3.METHOD UNSHFIT & SHIFT PADA ARRAY ***")
// // arr.unshift("minggu") + isi array di awal
arr.unshift("minggu")
// // arr.shift(); menghapus isi array pertama
arr.shift();
  console.log(arr.join('-'));

// // 4.splice
console.log("*** B.4.METHOD SPLICE PADA ARRAY ***")
// // splice(indexAwal, mauDiHapusBerapa, elementBaru1, elementBaru2,....) RUMUS
// // arr.splice(1, 0, "MENCOBA + ELEMENT BARU") + & menaghapus Element DI Tengah Atau Menentukan index pada array
arr.splice(1, 0, "MENCOBA + ELEMENT BARU")
  console.log(arr.join('-'));

// // 5.slice 
console.log("*** B.5.METHOD SLICE PADA ARRAY ***")
// //  slice(awal,akhir) RUMUS
// // var arr2 =arr.slice(3,6); Membuat array Baru Dengan Cara Menambil Bagian Array Lama Tanpa Menubah ARRAY LAMA
var arr2 =arr.slice(3,6);
console.log(arr.join('-'));
console.log(arr2.join('-'));

console.log("*** B.6.METHOD FOREACH PADA ARRAY ***")
// 6.ForEach 
var angka = [1,2,3,4,5,6,7,8];
// for biasa
// for( var i = 0; i < angka.length; i++){
//   console.log(angka[i]);
// } SAMA DENGAN CONTOH YANG DI BAWAH
angka.forEach(function(i) {
  console.log(i);
});

console.log("*** B.7.METHOD MAP PADA ARRAY ***")

// MAP
var angka = [1,2,4,7,6,9,8];
var angka2 = angka.map(function(e) {
  return e * 2;
});
console.log(angka2);
 
console.log("*** B.8.METHOD SORT PADA ARRAY ***")
// 8. sort
var angka = [1,4,2,7,6,9,8];
angka.sort();
console.log(angka.join('-'));

console.log("*** B.9.METHOD FILTER PADA ARRAY ***")
// 9.filter
var angka = [1,4,2,7,6,9,8];
var angka2 = angka.filter(function(x) {
  return x > 4;
});
console.log(angka2.join(' - '))

console.log("*** B.10.METHOD FIND PADA ARRAY ***")
// 10.find
var angka = [1,4,2,7,6,9,8];
var angka2 = angka.find(function(x) {
  return x > 4;
});
console.log(angka2)
