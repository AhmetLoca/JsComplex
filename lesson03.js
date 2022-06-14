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



//Constructor

/*
bir tane constructor fonksiyonu yazarız o constructor fonksiyonunu oluşturacağımız nesneler için bir template olarak kullanabiliriz.


const person2 = {
  name : 'John',
  surname : 'Doe',
  age : 40,
  fulName : function(){
    return this.name + ' ' + this.surname
  }
}


*/

//constructor fonksiyonlar genelde büyük harfle başlar.
//Yukarıdaki yapının aynısını(object literal) constructor yöntemiyle oluşturuyorum.

function Person(name, surname, age){ // 3 tane parametre tanımladık.
  const obj = {}
  obj.name = name;
  obj.surname = surname;
  obj.age = age;
  obj.fullName = function(){
    return obj.name + ' ' + obj.surname
  }
  return obj;
}

/* 
Bir fonksiyon oluşturdum. 
O fonksiyonun içerisinde boş bir nesne. 
boş nesneye property olarak atama yaptım.
Ve son olarak bir fonksiyon oluşturuyorum ve onu da nesneme atıyorum.
Bana nesne dönen yapıcı fonksiyonunu oluşturdum.

Bu nesneden bir tane objemizi yazalım.
*/

const person1 = new Person("John","Doe",40); //constructor fonksiyonu yardımıyla yeni bir person oluşturdum
// ()-> invoke. Yeni bir fonksiyon çalıştır ve bu fonksiyon sonunda oluşan nesneyi person1'e ata.

console.log(person1);
/* constructor fonksiyonumuz yardımıyla nesneleri hızlıca oluşturabiliriz. */


const person3 = new Person("David","Beckham",42);
console.log(person3);
//Yapıcı fonksiyon yardımıyla birden fazla nesnemizi oluşturduk.




function Person(name, surname, age){ // 3 tane parametre tanımladık.
 
  console.log(this); // this boş bir nesneyi gösteriyor. Person {}

  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function(){
    return this.name + ' ' + this.surname 
    /* 
    O an hangi nesneyi belirtmek istiyorsak o nesneyi yazacagız. 
    O nedenle this.name ve this.surname diyoruz. obj.name ve obj.surname demiyoruz. 
    Belirgin bir obj nesnesi kullanmak yerine direkt this diyoruz.
    */
  }
  console.log(this); // Person{name : 'John', surname : 'Doe', age: 40, fullName:f}
  //Yani buradaki this person1'e referans oluyor.
  /*
    ÖZET : Buradaki this current object'e referans verir. O an hangi nesneyi oluşturuyorsan onu gösterir.
  */
}
const person1= new Person("Jon","Doe",40);
/*
Constructor fonksiyonunda bir nesne oluşturup bu nesneyi geri döneceğimizi biliyoruz.
O yuzden "const obj = {}" ifadesine gerek yok. Çünkü bir tane nesne oluşturacağımızı constructor fonksiyonu oldugu için biliyoruz.
Bir nesneyi döneceğimizi de biliyoruz o yüzden "return obj"; ifadesine de gerek yok.

*/



function Person(name, surname, age){ // 3 tane parametre tanımladık.
 
  console.log(this); // this boş bir nesneyi gösteriyor. Person {}

  this.name = name; // dinamik değer verdik.
  this.surname = surname; //dinamik bir değer.
  this.age = age; 
  this.fullName = function(){
    return this.name + ' ' + this.surname 
  }
}


//new anahtar kelimesini görür görmez js boş bir tane nesne oluşturuyor. Ve fonksiyonunu constructor fonksiyon oldugunu soyler. Fonksiyonlar bir nesnedir. 
const person1 = new Person("John","Doe",40);






// Object constructor kullanarak nesne oluşturma

const person1 = new Object(); /*Bu Js'te build in yani kendisinde olan bir constructordır. */
person1.name = 'John';
person1.surname = 'Doe';
person1.age = 40;
person1.fullName = function(){
  return this.name + ' ' + this.surname
}

console.log(person1.fullName());// Bir fonksiyonu oluşturmak bir kalem işlem onu invoke etmek farklı bir kalem işlem.(fullName())


//Object.create() ile nesne oluşturmak

// JS'de nesne oluşturulan kullanılan diğer bir yöntem ise JS nesnelerinde bulunan create metodudur.


const person = {
  name :'John',
  surname:'Doe',
  age:40,
  fullName:function(){
    return this.name + ' ' + this.surname
  }
}

console.log(person);

const arin = Object.create(person) //parametre olarak person nesnesini kullanıyorum. Yani parametre olarak oluşturduğum başka bir nesneyi alıyorum. name,surname ve age özelliklerini kullanabilirim.

arin.name = 'Arin';
arin.surname = 'Software';
arin.age = 5;

console.log(arin); //{ name : 'Arin', surname : 'Software', age:5 }

console.log(arin.fullName()); 
/*arin'e fullName metodunu atamadım ancak person nesnesi fullName metoduna ulaşabiliyor. Aralarında bir inheritance(kalıtım) var. */



//Nesne oluşturma yöntemlerini konuştuk. Başka programlama dillerinde class denilen bir şeyler görmüştük.Biz nesneleri class'lardan örneklendirerek oluşturuyorduk. Ancak Js'de neden yok?
//JS'de classlar var ancak o js'deki classların neden ihtiyaç duyuldugunu var olan constructor yöntemlerinin veya prototype'in neden yeterli olmadıgını veya class yonteminin avantajının ne oldugunu bilmek için bunları ogrenmemiz gerekiyor.