// Fonksiyonlar

//Fonksiyonlar belirli bir işlemi ya da görevi olan kod yapılarıdır.
// fonksiyonları 2 şekilde oluştururuz. 
// 1- Function Declaration // Function Statement'ta deniliyor.


function square(num){  //biz fonksiyonu yazarken kullandığımız değişkenlere parametre 
  return ( num * num );
}
console.log(square(3)); //fonksiyonu çalıştırırken kullandığımız değişkenlere arguman denir.
  
// () --> Invoke(davet etmek)



//Function Declaration --> HOİSTED

/* Fonksiyon satırı gelmeden de çalışturdığım zaman aynı sonucu alırız. */
console.log(sum(5));

function sum(num){
  return ( num + num)
}

// 2- Function Expression 

/* Function declaration'ı bir değişkene  atıyorsak function expression oluşturmuş oluyoruz. */

const square = function square(num){
  return (num * num);
}

console.log(square); // Bize fonksiyonun kendisini verecek

//square'i invoke edelim.
console.log(square(3));

// Genel olarak function expression yapısında fonksiyon ismi kullanmayız.
// Yani, function name is optional. Isım kullanmadıgımız fonksiyon anonim bir ////fonksiyona dönüşür

const sum = function(num){
  return(num + num);
}
console.log(sum(4));

// Neden function expression, function declaration'dan çok daha fazla kullanılıyor?

/*
Fonksiyonu bir değişkene atıyoruz. Yani, biz bir fonksiyona bir değişkene davrandığımız gibi davranabiliyoruz.

bir fonksiyon bir değişkene atandığı zaman artık o değişkene first-class functions diyoruz.Yani yukarıdaki square ve sum "First - Class function'dır."

Peki neden böyle bir şey yapıyoruz?

bizim fonksiyonumuzun first class olması bir değişkene atanabilmesi anlamına geliyor. avantajı ne ?
 first-class function'lara bir değişken gibi davranabiliyoruz.
*/

//array'in içerisinde bir array elemanı olarak function yazabilirim. Çünkü fonksiyonlar JS'de first - class function'dır.
const myArr = [6,"Arin", function(){console.log("hi");}]
myArr[2](); //hi

const myObj = {
  age:5,
  name:"Arin",
  func:function(){console.log("hi")}
};
myObj.func(); // hi


console.log( 20 + (function(){return 10;})());

//Summary
//JS'de fonksiyonlar first-class function'dır. Yani bir değişkene atabilir ve bir değişken gib kullanabilirim. Bir array'in elemanı olabilirler.Bir nesnenin property'tisi olabilirler. Ya da sabit bir değişkene işleme girebilirler.

/***************** */


console.log( 20 + (function(){return 10;})());
//IIFE Ornegi.


















