// THIS

/*This, bir fonksiyonun nasıl çağrıldığına bağlı olarak değişen söz konusu nesnedir.*/

/*
obj.func() -> this obj
this, obj'e referans veriyor.


this --> global object --> window(global)
genel olarak this global object'e referans veriyor.
*/


// console.log(this); //window nesnesi
// console.log(this.location); //window'un içerisindeki location'i gösterecek.

//  console.log(this.location.href); //http://127.0.0.1:5500/index.html
//  console.log(window.location.href); //http://127.0.0.1:5500/index.html

//  console.log(this === window); //true

 // Remember

 /*
 Fonksiyonları 2 türlü çağırıyorduk.
 function declaration
 function expression
 */

 //Function Declaration
//function func1(){
//this.name="Gurcan"; 
  /*
  Fonksiyonun içerisinde de this'e bağlı olarak yeni bir property oluşturduğum zaman direkt gidip global nesneye bağlıyor. 
  Çünkü this global nesneye(window object)'e referans veriyor.
   */
  //console.log(this);
//}

//Function Expression
//const func2 = function(){
  //console.log(this);
//}

//func1(); //window(global nesne)

//func2(); //window(global nesne)





//Literal object
const arin = {
  name : "Arin",
  age : 5,
  surname : "Çekiç",
  fullName : function(){
    console.log(this);
  },

  mother : { 
    name : "Gamze",
    age : 40,
    surname : "Çekiç",
    fullName : function(){
      console.log(this);
    }
  }
}
console.log(arin.fullName()); // Bu arin'e referans veriyor.
console.log(arin.mother.fullName()); // Bu gamze'ye referans veriyor.


const elis = {
    name : "Elis",
    funcy : function(){
      console.log(this === elis); // this elis'e referans veriyor.
    }
}
console.log(elis.funcy); // true

const funcy2 = elis.funcy; // JS'te değişkenler first class function'dır. Fonksiyonu bir değişkene atayabiliyoruz.
console.log(funcy2()); //false
/* yani buradaki this elis nesnesi değilmiş. */

//EXAMPLE -2

const elis2 = {
  name : 'Elis',
  funcy : function(){
    console.log(this === elis2); // true
    /*metot elis nesnesine ait oldugu için this consepti elis'e eşit. */
    setTimeout(function(){
      console.log(this === elis2); // false
      /*bu this artık elis değil. Buradaki function kendi başına anonim fonksiyon. Kendi başına çalışan anonim fonksiyonun this'i ilgili nesne değil. Global nesne. */
      console.log(this === window); // true
    },2000);
  }
}

console.log(elis2.funcy());