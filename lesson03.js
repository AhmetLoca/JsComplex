// OBJECTS
/* Nesne nedir?
 name : value yani isim ve değer çiftlerinden oluşan bileşik veri tipidir. */

const person = {
  name : "John", //Bu değerimiz primitive değer olabilir.
  surname : "Doe",
  age : 40,
  language : ['Turkish','English','Spanish'], // Bu değerimiz referans data type olabilir.
  //the examples of reference data types are class, interface, String, Arrays, etc.
  
  fullName : function(){ // Bu değerimiz fonksiyon olabilir.
    return this.name + ' ' + this.surname
  },
  address : { // Bu değerimiz başka bir nesne olabilir.
    city : 'Balikesir',
    district : 'Akçay'
  }
} 
//name kısmına property deniliyor. person nesnesinin 6 tane property(özellik)'si var. 
//fullName yukarıda bir fonksiyon. Fonksiyon olanlara property değilde genelde method denir.
/*
  Bir nesne ile ilişkili fonksiyonlara method denir.

  this, oluşturulan fonksiyonun kendisine referans eder.




  Bir nesne property'lerin koleksiyonundan oluşur.
  JS'de neden bir nesneye ihtiyaç duyarız?
  Biz sadece js'de değil herhangi bir programlama dilinde de belirli verilerin bir arada bulunmasını isteriz.
  Verilerin bir arada olmasını istememizden dolayı bu verileri bir obje içerisinde oluştururuz.

  veritabanına aldığımız bilgileri birbirinden bagımsız şekilde yapmak yerine birbirine ilişkili bir şekilde bir nesne içerisinde tutup o şekilde yazmak isteriz (form işlemleri)

nesne oluşturmanın temel nedeni : birbiriyle ilişkili verileri bir arada bulundurmaktır.

*/



//Object Literal

const person2 = {
  name : 'John',
  surname : 'Doe',
  age : 40,
  fulName : function(){
    return this.name + ' ' + this.surname
  }
}


console.log(person2);

//dot notation

console.log(person.name);
console.log(person.age);
console.log(person.fullName());//fonksiyonun içerisindeki değeri görmek için invoke edeceğiz.

//nesnemize yeni bir property'de ekleyebiliriz. We can add a new property our object.

person.job = "Student"; 
console.log(person);
console.log(person.job);

//Bracket Notation

console.log(person['name']);
console.log(person['fullName']()); // invoke etmek için bracket'in yanına yazıyorum.
console.log(person['na'+'me']); // 'na' + 'me' --> 'name'