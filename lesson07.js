//JS CLASSES -2

// CLASS DECLARATION

// class Person {
//   constructor(name,surname,age){ //constructorın görevi, yeni bir nesne oluştur. Ve bize onu bağla.
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
//   fullName(){
//     return this.name + " " + this.surname;
//   }
  /* Biz class'ta kaç tane fonksiyon oluşturursak oluşturalım o fonksiyonlar her zaman proto'nun içerisinde yer alacak. */


  // static showName = "person";

  // static staMethod(){
    // console.log("Static Method Çalişiyor.")
  // }
// }
// const arin = new Person("Arin","Çekiç",5); 

// console.log(arin instanceof Person); // true
// arin Person'in instance'i.

/*
Belli metotları yalnızca o class'a ait olmasını isteriz. Bunlara statik metot ve statik özellik denir.
Statik metotlar o class'a ait olan özellik ve metotlardır.(nesneye ve instance'a değil)
*/

//console.log(arin.showName); //undefined
//console.log(arin.staMethod()); //WRONG. instance üzerinden ulaşamıyoruz.


//instance yerine class'in kendisini koydugumuz zaman

// console.log(Person.showName); //Person
// console.log(Person.staMethod()); // Static Method Çalişiyor.

/*
Summary 

static özellik ve static metotlar class'a baglı. Ve bu metot ve özelliğe instance üzerinden ulaşamıyormusuz.Yani statik özellik ve metotları class üzerinden çağırıyormuşuz.

React'te context type'e çok sık kullanılır. 
*/








/*
Neden class'a ihtiyaç duymuşuz?

OOP'de mümkün oldugu kadar problemi parçalara ayırmak bizim açımızdan işimizi çok kolaylaştırır. Class'lar kendisinden türetilecek olan nesnelerin bir şablonu görevi görürler. 
En temel kullanılma sebebi: Class'lar nesnelerin şablonudur.
*/





//INHERITANCE

// class Person {
//   constructor(name,surname,age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
//   fullName(){
//     return this.name + " " + this.surname;
//   }
// }


// class Engineer extends Person{ //extend : genişletmek
//   //Engineer -> Subclass(child)
//   //Person -> Superclass(parent)
// }

 
//const arin = new Person("Arin","Çekiç", 5) 
//const ahmet = new Engineer("Ahmet","Loca", 25)
//engineer'in __proto__:Person'dir.

//console.log(arin); // arin bir Person
//console.log(ahmet); // ahmet bir Engineer


//console.log(arin instanceof Person); // true
//console.log(gurcan instanceof Engineer); // true 
//console.log(gurcan instanceof Person); // true 
//gurcan Person'nın bir instance'i. 


//console.log(arin instanceof Engineer); // false
//Engineer subclass. arin superclass'ta.



class Person {
  constructor(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

class Engineer extends Person {
  //Herhangi bir class'in dizini yazmadan önce o class'a ait olan parent class'ın super metotunu calıstırmamız gerekir. Çünkü subclass'in dizi superclass tarafından oluşturuluyor.
  constructor(name, surname, age, job){ 
    super(name, surname, age); //name,surname ve age 'i superclass'indan al
    this.job = job;
  }
  //engineer class'inin ekstradan bir tanede metodumuz olsun.
  getMoney(){
    console.log("Earn money.");
  }
}
const ahmet = new Engineer("Ahmet","Loca",25,"engineer");
console.log(ahmet);

// OBJE + (name,surname,age) => Person
// Person + job, getMoney() => Engineer

