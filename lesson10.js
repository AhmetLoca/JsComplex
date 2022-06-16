// JS Single Thread
/* Thread : Bir işlem sırasında yapılan iş parçacığıdır. O anki çalışan kod parçacığı. */

// JS Synchronous
/* Sıralı bir şekilde çalıştırır. 
  
Asenkron JS diye bir şey var ? Callback,promise, async array yapısını duyduk.
  AJAX var Asenkron JavaScript XML
*/

//const func1 = () => {
 // alert('Alert Message');
//}
/* Alert butonuna basmadan func2 çalışmayacaktır. */
//İşlem blocklandığında yazdığın kodun yarıda kalma ihtimali var. !!

//const func2 = () => {
  //console.log("Func1 Console Log1");
//}

//func1();
//func2();

/*
let x = 10;
console.log("1. Gelen Veri", x);

setTimeout(() => {
  x = x + 5;
},1000)
console.log("2.Gelen Veri", x);

x = x + 5;
console.log("3.Gelen Veri", x);
*/

/*
1.Gelen Veri 10
2.Gelen Veri 10
3.Gelen Veri 15

senkron çalıştığı için 2.Gelen Veriyi 15 yapmadı. Bu bir sorun.
Problemler: 
  Blocklanma tehlikesi,
  Yavaş çalışma tehlikesi,
  Aldığımız verilerde gecikmeden dolayı eksik veri alma durumu

  Bundan dolayı asenkron işlemlere ihtiyaç duyarız.
  Aynı anda birden fazla işlem yapmak ve sonradan kullanacagımız verilere onları kullanmaya başlamadan önce sahip olduğumuzdan emin olmak isteriz.
*/


// Call Stack : fonksiyonların çalışma sırasını gösterir.
/*
function func1(){
  console.log("Ben birinciyim");
  func2();
  console.log("Ben tekrar birinciyim");
}

function func2(){
  console.log("Ben ikinciyim");
  func3();
  console.log("Ben tekrar ikinciyim");
}

function func3(){
  console.log("Ben üçüncüyüm");
}

func1(); 
*/
/*
  Ben birinciyim, ardından func2() çalışacak.
  Ben ikinciyim, arından func3() çalışacak.
  Ben üçüncüyüm, ardından kod kaldığı yere tekrar dönecek ve
  Ben tekrar ben ikinciyim 'i yazdıracak. Ardından
  Ben tekrar birinciyim çalışacak.
 
 */

  /*
  function add(x,y){
    return x + y;
  }

  function average(x,y){
    return add(x,y) / 2;
  }

  let x = average(6,8);
  console.log(x);
  */

console.log("1");

setTimeout( ()=> {
  console.log("2");  
},1000)

console.log("3");
console.log("4");

