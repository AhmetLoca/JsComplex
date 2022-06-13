// VAR - LET - CONST

//let, block scope ve değişebilen değişkenleri belirlemek için kullanılır.
//const ise değişmeyen ifadeler için kullanılır.
//Bir let'e başlangıç değeri vermeyebiliriz. let age2;
let age = 25;
console.log(age);

age = 26;
console.log(age); // TRUE
// --------------------------------

//const değişmeyen ifadeler de kullanılır. Ve bir const oluşturduğumuz zaman ona bir değer ataması yapmak zorundayız.

const name = "ahmet";
console.log(name);

//name = "mehmet";
//console.log(name); // WRONG

//kutuphane ve catılarda const let'ten daha sık kullanılır.Sebebi, değiştirilememe özelliğinden dolayıdır.


//let'i özel olarak DEĞİŞMESİNİ istediğimiz ifadeler için kullanırız.
let str = "";
for ( let i = 0; i<10; i++){
  str = str.concat(i) //concat : birleştirme
  console.log(str);
}

const myArr = [1,2,3];
  // burada array'in değerini değil aslında referansını ifade ediyoruz.
  /* */
console.log(myArr); //[1,2,3]
myArr.pop(); //pop : patlat.
console.log(myArr); //[1,2] Değişti?


const student = { 
  // burada array'in değerini değil aslında referansını ifade ediyoruz.
  name : "Arin",
  age : 5
  // Bilgisayar hafızasını kutulardan oluşan bir yer olarak düşünelim.
  // biz hafızada student kutusunu obje olarak alıyoruz. İçersinde name ve age özelliği var.
  // Ben o kutunun hafızada olduğu yeri tutuyorum. O kutunun içerdiği property değişebilir.  Arin ve Elis öğreğinde olduğu gibi.
}

console.log(student.name); // Arin
student.name = "Elis";
console.log(student.name); // Elis.   Değişti?


//Bu student nesnesinin içerisinde herhangi bir değişiklik olmasını istemiyorum!
//bunun için Object.freeze metodunu kullanacağız.

const student2 = {
  name : "Ahmet",
  age : 25
}

console.log(student2.name); // Ahmet
Object.freeze(student2)

student2.name = "Mehmet";
console.log(student2.name); // Ahmet



// old school : Var

/* Var, Functional Scope veya global scope olarak çalışır.*/

// VAR --> global scope / functional scope
var x = 1;
console.log(x);

if(x === 1){
  var x = 10;
  console.log(x);
}
console.log(x); // son sahip olduğu değeri koruyor.

console.log("example let")
// LET --> block scope
let y = 1;
console.log(y);

if(y === 1){ // 1
  let y = 10;
  console.log(y); // 10
}
console.log(y); // 1






//var z = 10;
//console.log(window.z); //window'u browser'da gördüğünüz her şey olarak düşünebilirsiniz. var ile oluşturduğum bir değişken window nesnesine bağlı bir property olarak görünebiliyor.


//let z = 10;
//console.log(window.z); // undefined
//çünkü let ile oluşturduğumuz bir değişkende window nesnesine bağlı olarak herhangi bir property oluşturmuyoruz. const'ta undefined verecektir. Çünkü window nesnesine bağlı olarak const ve let bir property oluşturmuyoruz.



//WHAT IS HOİSTİNG?



console.log(p);

let p = 10; 


















