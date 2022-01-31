// this
// var a = 10;
// console.log(this.a);

// membuat object

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('tayo');
// }
// halo();
// this pada function declaration mengambalikan object global 

// cara 2 - object literal
// var obj = {a : 10, nama : 'Baka'};
// obj.halo = function() {
//     console.log(this);
//     console.log('Tayo');
// }
// obj.halo();
// this pada object literal  mengambalikan object yang bersangkutan


// cara 3 - constructor 
// function Halo() {
//     console.log(this);
//     console.log('Tayoo');
// }
// new Halo();
// this pada constructor mengambilakn object yang baru di buat