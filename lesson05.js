// New Object Syntax

// 1 - Shorthand Properties
//let name = "arin", age = 5;

//const myObj = {
//   name : name,
//   age : age
// }
// console.log(myObj.name);
// console.log(myObj.age);

/* Eger nesnelerdeki ikili ifadeler aynı ise bunu 
  şu şekilde de ifade edebiliyoruz.

  let name = "arin", age = 5;
  
  const myObj = {
  name,
  age
}*/



// 2 - Computed Property Names()

/*
ES5'te bir nesneyi bir değişkenden gelen bir özellikle oluşturmak istersek önce nesneyi boş bir şekilde oluşturuyoruz sonra bu nesneye eklememiz gereken özelliği atıyoruz.
*/

let prop1 = 'name'; // bu değişkeni bir tane nesneye property olarak atayacagım

let myObj = {};

myObj[prop1] = 'arin' //bracket notation'dan faydalanıyoruz.

console.log(myObj); // {name : 'arin'}
//ES5 ile böyle yapıyoruz


//ES6
let prop2 = 'name';

let myObj2 = {
  [prop2] : 'arin2'
}

console.log(myObj2); // {name : 'arin2'}

//Değişkenden gelen property'e direkt yeni string'imizi yazdık.

/*
Summary 
ES5'te önce nesneyi oluşturmamız lazımdı.
ES6'da direkt nesneyi oluştururken bir değişkene prop olarak atayabiliyoruz.

Genelde Js kütüphanelerinde bu özellik kullanılır. Çünkü hazır kütüphaneler belirli özelliklere sahip nesneleri argüman olarak alırlar.
*/

// 3- Short Method Syntax
// const person = {
//   name :'John',
//   fullName:function(){
//     return this.name + ' ' + this.surname
//   }
// }

// const person = {
//   name :'John',
//   fullName(){
//     return this.name + ' ' + this.surname
//   }
// }


// 4 - Object Destructuring

/*
Bir nesnenin içerisindeki değerleri değişkenlere atamak için kullanırız.
*/
//const person = {
 // name :'John',
  //age : 40,
//}
/*
let myVar1 = person.name;
console.log(myVar1);

let myVar2 = person.name;
console.log(myVar2);*/

// let { name: myVar1, age:myVar2 } = person;
// console.log(myVar1);
// console.log(myVar2);

/*
Bu şekilde nesneyi destruct edip her bir parçayı farklı bir değişkene atadık.

let { name: name, age:age } = person;
Genelde bu şekilde kullanılır. O yüzden
let { name, age } = person;
console.log(name);
console.log(age);
*/

const books = [
  {
  title:'Kirmizi Pazartesi',
  author : 'Haruki Murakimi',
  pageNum : 296,
  topic : '1968-1970 yillari arasinda geçen olaylar'
  },
  {
    title:'Şeker Portakali',
    author : 'Jose Muro de Vasconselos',
    pageNum : 200,
    topic : '1990-2000 yillari arasinda geçen olaylar' 
  }
]

for(const {title,author} of books){ // burada destruct ediyoruz. Destructuring sadece objectlere  ait değil. İlk başta arrayler için kullanıldı daha sonra objectler için kullanılmaya başlandı.
  console.log(title + ': ' + author);
}

// 5- Spread Operator in Object Literals (...)

/*
Spread operatörünü

ya var olan bir nesnenin özelliklerini kopyalama da veya nesneleri birleştirme de kullanırız.

*/

const person = {
  name : 'John',
  surname:'Doe',
  age:40,
  fullName:function(){
    return this.name + ' ' + this.surname
  }
}

const person2 = {...person};
console.log(person2);

//Nesneleri birleştirme

const myObj1 = {
  name : 'arin',
  age : 6
}

const myObj3 = {
  job : 'student',
  gender : 'female'
}

const arin = {...myObj1, school : 'Zehra Baysal', ...myObj3};
console.log(arin);




// 6 - REST Operator in Object Literals

const person3 = {
  name : 'John',
  surname:'Doe',
  age:40,
  fullName:function(){
    return this.name + ' ' + this.surname
  }
}

/*
object destructing yontemi ile kalan özellikleri başka bir nesne olarak çekebiliriz.
*/

const {name,surname,age} = person3; // person3 objesinden destruct edebiliyorduk 
console.log(name); // John


const {name, ...rest} = person3;
console.log(rest); // { surname : 'Doe', age : 40, fullName : f} 

// 7 -Object Values - Object Entries


const person4 = {
  name : 'John',
  surname:'Doe',
  fullName:function(){
    return this.name + ' ' + this.surname
  }
}
/*
ES5' te bir nesneye ait olan key değerlerini bir array şeklinde dönebiliyorduk.

console.log(Object.keys(person4)); // ['name', 'surname', 'fullName']

values değerlerini de yazdırabiliyorum.

console.log(Object.values(person)); // ['John', 'Doe', f]
*/

/*
 Object Entries
 key ve value değerlerini ayrı ayrı arrayler içerisine koyuyor.

console.log(Object.entries(person)); // [Array(2),Array(2),Array(2)]
 */