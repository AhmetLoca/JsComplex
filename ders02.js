// Fonksiyonlar
//Fonksiyonlar belirli bir işlemi ya da görevi olan kod yapılarıdır.

// fonksiyonları 2 şekilde oluştururuz. 

// 1- Function Declaration // Function Statement'ta deniliyor.

function square(num){
  return ( num * num );
}
console.log(square(3)); // () --> Invoke(davet etmek)





//Function Declaration --> HOİSTED

/* Fonksiyon satırı gelmeden de çalışturdığım zaman aynı sonucu alırız. */

console.log(sum(5));

function sum(num){
  return ( num + num)
}

