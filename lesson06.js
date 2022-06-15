// JS CLASSES

//constructor function 
function Person(name,surname,age){
  this.name = name;
  this.surname = surname;
  this.age = age;
  //this.fullName = fullName // global olarak oluşturduğum fonksiyonu çağır.
}
/* 
Biz herbir nesne oluştururken farklı fonksiyonlar çalıştırıyoruz.
Bu gereğinden fazla hafıza kullanımına yol açar. Yani programımızda yavaşlığa neden olur.
*/

// function fullName(){
//   return this.name + ' ' + this.surname
// }

/*
bu durum fonksiyonların çok fazla olmasını sağlar.
ana dosyamızda bağımsız bir şekilde olduğu zaman bu kod yazımına uymaz. Bunu ayrı ayrı global fonksiyon şeklinde değilde ilgili constructor fonksiyonuna prototype olarak ekleyebilirim.
*/

Person.prototype.fullName = function fullName(){
  return this.name + ' ' + this.surname
}
/*prototype'a fullName adında yeni bir özellik ekliyorum 

Dezavantaj: 
Referans veri tipleri kullandığımızda prototype problem oluyor.
*/

Person.prototype.friends = ["Ela","Rüzgar"]


//nesnelerimizi oluştururken contructor function'dan faydalandık.
const arin = new Person ("Arin","Çekiç",5);
const elis = new Person ("Elis","Çekiç",3);


arin.friends.push("Çinar"); //prototype'a eklediğimiz için çınar global olarak eklendi.
console.log(arin.friends);
console.log(elis.friends); // Elis'e çınar'ı eklemediğimiz halde ["Ela","Rüzgar","Çinar"] olarak gösterdi. 

/*
Yani 2 tane nesne oluşturduğumuzda bu nesneye birkaç tane yeni özellik vermeye başladığımızdan itibaren işlerimiz karışmaya başlıyor. İşte burada devreye class'lar giriyor.

prototype'a yazaraksak işler karmaşıklaşıyor. Bunu class'lar yardımıyla çözeceğiz.
*/