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


hasOwnProperty metodu inhetance edildi.
*/

const myObj = {};

console.log(myObj);
console.log(myObj.toString()); // [object, Object] __proto__ temelde object.

// OBJECT --> myObj, myObj nesnesinin proto'i ne? Object. Ek özellik vermiyoruz.


// OBJECT + name,surname,age,fullName() ---> person. Buradaki person nesnesinin proto'i ne ? Object. Ve person nesnesine name,surname,age, fullName() gibi ek özellikler veriyoruz.


/**
 * OBJECT'i javascript'teki temel nesne olarak düşünün.
 */

 function Person(name, surname, age){ 
 
  console.log(this); 

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

/**
 * JavaScript'te hemen hemen tüm nesneler başka bir nesneden(kendinden daha önce gelen bir nesneden) türetilmiştir. Kökteki nesneye de prototype diyoruz. 
 */




