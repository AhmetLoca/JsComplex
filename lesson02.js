// Fonksiyonlar

//Fonksiyonlar belirli bir işlemi ya da görevi olan kod yapılarıdır.
// fonksiyonları 2 şekilde oluştururuz. 
// 1- Function Declaration // Function Statement'ta deniliyor.


//function square(num){  //biz fonksiyonu yazarken kullandığımız değişkenlere parametre 
  //return ( num * num );
//}
//console.log(square(3)); //fonksiyonu çalıştırırken kullandığımız değişkenlere arguman denir.
  
// () --> Invoke(davet etmek)



//Function Declaration --> HOİSTED

/* Fonksiyon satırı gelmeden de çalışturdığım zaman aynı sonucu alırız. */
//console.log(sum(5));

//function sum(num){
 // return ( num + num)
//}

// 2- Function Expression 

/* Function declaration'ı bir değişkene  atıyorsak function expression oluşturmuş oluyoruz. */

//const square = function square(num){
  //return (num * num);
//}

//console.log(square); // Bize fonksiyonun kendisini verecek

//square'i invoke edelim.
//console.log(square(3));

// Genel olarak function expression yapısında fonksiyon ismi kullanmayız.
// Yani, function name is optional. Isım kullanmadıgımız fonksiyon anonim bir ////fonksiyona dönüşür

//const sum = function(num){
 // return(num + num);
//}
//console.log(sum(4));

// Neden function expression, function declaration'dan çok daha fazla kullanılıyor?

/*
Fonksiyonu bir değişkene atıyoruz. Yani, biz bir fonksiyona bir değişkene davrandığımız gibi davranabiliyoruz.

bir fonksiyon bir değişkene atandığı zaman artık o değişkene first-class functions diyoruz.Yani yukarıdaki square ve sum "First - Class function'dır."

Peki neden böyle bir şey yapıyoruz?

bizim fonksiyonumuzun first class olması bir değişkene atanabilmesi anlamına geliyor. avantajı ne ?
 first-class function'lara bir değişken gibi davranabiliyoruz.
*/

//array'in içerisinde bir array elemanı olarak function yazabilirim. Çünkü fonksiyonlar JS'de first - class function'dır.
//const myArr = [6,"Arin", function(){console.log("hi");}]
//myArr[2](); //hi

//const myObj = {
  //age:5,
  //name:"Arin",
  //func:function(){console.log("hi")}
//};
//myObj.func(); // hi


//console.log( 20 + (function(){return 10;})());

//Summary
//JS'de fonksiyonlar first-class function'dır. Yani bir değişkene atabilir ve bir değişken gib kullanabilirim. Bir array'in elemanı olabilirler.Bir nesnenin property'tisi olabilirler. Ya da sabit bir değişkene işleme girebilirler.

/***************** */

//square(5); // cannot access 'square' before initialization hatası verecektir.

//const square = function(num){
 // return (num * num);
//}

// Function Expression is not hoisted.




//birinci parametre number ikinci parametre ilerde fonksiyon olacak bir parametre.
//const addFive = function(num, func) {
  //console.log( num + func());
//}

//addFive(10, function(){return 5;})
//Bir fonksiyonu başka bir fonksiyona arguman olarak almış oldum.







//const myFunc = function(num){
  //return function toDouble(){
    //console.log(num * 2);
  //}
//}
// bir fonksiyonu başka bir fonksiyonun return ifadesinde kullanıyorum.

//myFunc(2)();


//myFunc()(2); dediğim zaman NaN alırım. Parametreyi ben ilk fonksiyonda kullanmam lazım.
//react'ta iç içe geçen component'larda kullanacağız.


//const result = myFunc(7);
//result(); //biz myFunc'i çalıştırdığımızda bize sonuç dönmüyor bize içerdeki fonksiyonun tamamını dönüyor. O fonksiyonun sonucu görmek için result(); deyip çalıştırmamız lazım.
//Yani first-class function'in en önemli ikinci özelliği: bir fonksiyonu başka bir fonksiyon yapısının return'unde kullanabiliyormusuz. Yani bir fonksiyonun içerisinde başka bir fonksiyonu return edebiliyormuşuz.


//const sum = function(){
  //console.log(5+12);
//}

//sum();
//console.log(sum); 



// Peki biz bu fonksiyonu oluşturduğumuz an da çalıştırmak için ne yapacağız?
const sum = function(){
  console.log(5+12);
}();

console.log(sum); // undefined
// biz yukarıdaki fonksiyonu oluşturduk ve çalıştırdık. Artık herhangi bir şekilde sum değişkenine atayacagımız bir şey kalmadı.



(function(){
  console.log(5+12);
})();
/*
değişken anlamsız geldiği için sildik. Biz burada function expression kullandık. JS engine'i function anahtar kelimesini ilk başta gördü. Sanıyor ki bu function declaration. 
O nedenle bizden isim kullanmamızı istiyor. O yuzden fonksiyonun başlangıcına ve sonuna parantez koyduk.

*/



/*Fonksiyonlarda birer nesnedir. Nesnelerin property'leri olur.*/

function square(num1,num2){
  return(num1 * num2);
}
console.log(square.name); // ilgili fonksiyonun ismini ver. -> square verecektir.
console.log(square.length); // 2 dönecektir. Çünkü iki parametre alıyor