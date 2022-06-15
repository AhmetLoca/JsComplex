// ARROW FUNCTİON

/*
Remember

fonksiyonu 2 türlü tanımlıyorduk.
1-function declaration
2-function expression
*/

// Function Declaration

/* Function declarationda hoisting çalıştırabiliyorduk.

console.log(square(4));

function square(num){
  return (num * num);
}
*/

//function square(num){
  //return (num * num);
//}
//console.log(square(4));

// Function Expression ( bir değişkene atıyoruz)
/*Function expression yonteminde hoisting çalışmayacaktır.*/

//const square2 = function(num){ 
  //return (num * num)
//}

//console.log(square2(6));



// Arrow Function Expression 

/* arrow fonksiyonu daima function expression olarak yazılır. */

//const square3 = function(num){ return (num * num) };

/* Artık fonksiyon anahtar kelimesine ihtiyacım yok. 
Aldıgımız parametrelerden sonra ok işaretini kullanıyorum.*/
//const square3 = (num) => { return (num * num) };


/* tek satır oldugu için bu direkt oldugu satırı geri dönüyor. O nedenle return ve süslü parantezlerden kurtuluyoruz. ve tek bir tane parametre aldıgım için parantezlerden de kurtuldum. */
//const square3 = num => (num * num);
//console.log(square3(8));

/* Arrow function'nı kullanmanızın tek sebebi basit bir syntax'a sahip olması değil. En temel sebep : ok function'nın this kavramı ile olan ilişkisi. */



// window.name = "Arin";
// function tellName(){
//   console.log(this); // window nesnesi
//   console.log(this.name); // Arin
// }
// tellName();


// const person = {
//   name : "elis",
//   tellName : function(){
//     console.log(this); // buradaki this person nesnesine bağlı o yüzden {name :"elis", tellName :f }
//     console.log(this.name); // elis
//   }
// }
//person.tellName();



//Arrow function

//window.name = "Arin";
//ilk ifade function expression. İkinci ifade parametremiz(boş). Üçüncü ifade ise ok'umuz.
//const tellName = () => {
  //console.log(this); // window nesnesi
  //console.log(this.name); // Arin
//}
//tellName();
/* Burada ilk yaptığımızdan farklı değil. Yani normal fonksiyonla arrow fonksiyon arasında bir fark yok diyoruz. Ama bir de ikinci örneğe bakalım.*/



//const person = {
    //name : "elis",
    //tellName : () => {
      //console.log(this); // window nesnesi 
       //console.log(this.name); // Arin 
       /* Önceki örneğimizde {name :"elis", tellName :f } ve elis'ti. 
          Yani person nesnesinin içini ve elis'ti vermişti. Ancak burada window nesnesi ve Arin'i veriyor.

          Normal fonksiyonlar this'i ilgili oldugu konsepte gore gosterir. Ancak arrow function'in ok fonksiyonun kendisine ait olan bir this'i yoktur. o nedenle o this'i dışarıdan alıyor.
       */
     //}
   //}
  //person.tellName();


// Ornek
//window.name ="arin";

// const person = {
//   name :'elis',
//   tellName : function() {
//    console.log(this); // {name : 'elis', tellName:f}
//    console.log(this.name); // elis

    //setTimeout( ()=>{
   //   console.log(this); // {name : 'elis', tellName:f}
     // console.log(this.name); // elis
   // },2000)
    /*arrow function'nin kendisine ait this'i olmadıgı için bu this'i bir dışarıdan alacak.
    
    Genelde arrow function'ı callback'lerde kullanırız. İlk fonksiyon belirttiğimizde kullanmayız.

    arrow function'in kullanılma nedeni this ile ilgili olan ilişkisidir.
    */
  //}
//}

//person.tellName();


/* constructor function'i arrow function olarak yazamayız.
cunku arrow fonksiyonunun kendisine ait this'i yok.
Yani arrow function contructor function olamaz.
*/

const Person = (name,surname) => { //hata verecektir.
  this.name = name;
  this.surname = surname;
}

const person1 = new Person("Ahmet","Loca");

console.log(person1);



//ORNEK
/* arrow fonksiyonları bir nesnenin metodu olarak kullanmak problemlidir. */

//const myObj = {
  //year : 2020,
  //showYear1 : function(){
    //console.log(this.year, this)
  //},
  //showYear2 : () => console.log(this.year,this)
//}



//myObj.showYear1(); // 2020, {year: 2020, showYear1 : f, showYear2:f}
//myObj.showYear2(); // undefined, window 
// undefined veriyor çünkü ilk olarak dışarıya gidiyor.




// CALL : fonksiyonu ve metodu ilgili oldugu nesnelerden farklı bir nesnede kullanmamızı sağlar.


const student = {
  examResult : function(){
    return this.name + ' ' + this.grade
  }
}

const student1 = {
  name :"arin",
  grade : 50
}

const student2 = {
  name :"elis",
  grade : 90
}


console.log(student.examResult.call(student1)); //arin 50
console.log(student.examResult.call(student2)); //elis 90
