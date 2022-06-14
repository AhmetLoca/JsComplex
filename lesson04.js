//OBJECTS - PART 2

/**
Prototype nedir?

JavaScript'te hemen hemen tüm nesneler başka bir nesneden türetilerek oluşturulur.
**/

//Literal
const person = {
  name : 'John',
  surname : 'Doe',
  age : 40,
  fullName : function(){
    return this.name +' '+ this.surname;
  }
}

console.log(person);
console.log(person.name);
console.log(person.job); //undefined
console.log(person.fullName2()); // fullName2 is not a function
console.log(person.toString()); // [object,Object]
/*

Ben person nesnesini oluşturduğum zaman bu person nesnesinin prototype'i bir Object(__proto__:)

Object nesnesine ait olan tüm metotların aynısını ben person nesnesinde de kullanabilirim.


console.log(person.hasOwnProperty("name")); // true //hasOwnProperty __proto__ metodudur..


hasOwnProperty metodu inheritance edildi.
*/

const myObj = {};

console.log(myObj);
console.log(myObj.toString()); // [object, Object]
/**
 * OBJECT'i javascript'teki temel nesne olarak düşünün.
 */

 function Person(name, surname, age){ 
 
  this.name = name; 
  this.surname = surname; 
  this.age = age; 
  this.fullName = function(){
    return this.name + ' ' + this.surname 
  }
}

const arin = new Person("Arin", "Çekiç", 6);
console.log(arin);

//OBJECT + name, surname, age, fullName() ---> Person ---> arin

//arin'nin prototype'i person. Person'nın prototype'ı da OBJECT 
//Bu üçlü ifadeyi bi prototype zinciri olarak düşünebiliriz.

const elis = new Person("Elis","Çekiç",4);
console.log(elis);
elis.job = "Child";
console.log(elis);

//OBJECT + name, surname, age, fullName() ---> Person + job ---> elis

/*
elis nesnesinin prototype'i Person + job özelliğinden oluşuyor. Person nesnesinin prototype'i da OBJECT nesnesidir.

Person nesnesi bir person nesnesi  bi de contructor function diyoruz. Çünkü fonksiyonlar bir nesnedir.
*/

elis.toString = function(){
  return "ELISSS";
}

console.log(elis.toString());

//toString metotunu değiştirebiliyorum. Yani prototype'a var olan bir metodun üzerine yazabiliyorum.

/*
  JavaScript'te hemen hemen tüm nesneler başka bir nesneden(kendinden daha önce gelen bir nesneden) türetilmiştir. Kökteki nesneye de prototype diyoruz. 
 */


  function Person(name, age){ 
 
    this.name = name; 
    this.age = age; 
  }

  Person.prototype.fullName = function(){ // Tüm nesneler için çalışacak.
    return this.name + ' ' + this.surname 
  }

  Person.prototype.surname = "Çekiç"; 

  const elis = new Person("Elis", 4);
  const arin = new Person("Arin", 6);

  console.log(elis);
  console.log(arin); 

//Inheritance
/* 
Bir nesnenin özelliğinin farklı nesneler tarafından kullanılabilmesine inheritance diyoruz.

ES5 sürümü inheritance kavramını prototype inheritance olarak kullanıyor.Yani özelliği ya da metotu kendi prototype'indan alıyor.(Inheritance farklı programlama dillerinde class'lar arasındaki ilişki de kullanılır)

JS'te ise ES5 ile beraber prototype inheritance kullanılıyor.
*/

const person = {
  name : 'XXX',
  surname : 'XXX',
  age : 0,
  fullName : function(){
    return this.name + ' ' + this.surname
  }
}
/*
Object.create yöntemi ile bir nesneyi başka bir nesneden oluşturabiliyordum.
*/

const arin = Object.create(person) // person nesnesinden arin nesnesini oluşturduk.

console.log(arin); // {}. Çünkü person özelliklerini prototype'a atıyor.

arin.name = "Arin";
console.log(arin); //{name : Arin}. person özelliklerinden name'i kendim atadım. prototype'dan name'i aldık.


console.log(arin.hasOwnProperty("surname")); // false
// çünkü surname arin nesnesinde değil. Onun prototype'inda.

console.log("surname" in arin); //true


/*ES5 ile prototype inheritance yöntemini kullanarak ortak özellikleri prototype'ta toplamaya çalışır ve bir nesneyi başka bir nesneden türetmeye çalışır.

Yani ilk baştaki temel nesnemiz Object'tir.(build in)

*/
