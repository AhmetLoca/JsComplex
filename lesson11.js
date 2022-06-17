// PROMISE

/*Asenkron işlemin nihai sonucunu temsil eden bir JS NESNESİDİR.Bir yer tutucu işlevini görüyor.*/

// 2 tane parametre alıyor. Bunlar resolve ve reject.

//const promise1 = new Promise(function(resolve,reject){
  //resolve('DATA'); // başarılıysa 'resolve' dönecek.
    //reject('ERROR'); // başarısızsa 'reject' dönecek.

  /*Bir promise'in state'ini bir kere belirlediğimizde(resolve veya reject) o state
  o promise içerisinde o state oluşturulurken tekrar değiştirilemez. Ya resolvedur ya da reject. */
  //})

//console.log(promise1); // PromiseState : 'fullfilled'
/*Bir veri alındı ve bize DATA verisi dönüldü. */

/*
3 tane promise state durumumuz var.
1-pending (undefined)
İlk durumda biz bir promise oluşturduğumuzda o promise değerinin ne olduğunu bilmiyoruz.

2-fullfilled

3-rejected
*/

//const promise1 = new Promise(function(resolve,reject){
/*const promise1 = new Promise((resolve,reject) => {
  resolve();
 // reject();
})*/

//console.log(promise1.value);.//undefined. 

//Başarılı durumlar için then yapısını kullanırız.


//Clasic function
/*promise1.then(function(value){
  console.log(value); // resolve'un içerisindeki veriyi yazdırır.
})*/


//Arrow Function
/*promise1.then((value)=>{
  console.log(value)
})*/

//Arrow Function shorthand

//promise1.then(value => console.log(value));

//hataları catch ile yakalıyoruz.
//promise1.catch(reason => console.log(reason));

/*
promise1
  .then( ()=> {
    console.log('Veriler Alindi');
  })
  .catch( ()=> {
    console.log('Veriler Alinmadi');
  })
  .finally(()=> {
    console.log(" Her durumda finally sonucu döner.");
  })*/
  /*ES 2018 ile gelen finally durumu. */
  

  //reject durumunu then'de yakalama

  /*const promise1 = new Promise((resolve, reject) => {
    resolve();
  })

  promise1.then( () => {
    console.log('Veriler Alindi');
  },() => {
    console.log('Veriler ALİNMADİ');
  })
  */
  /* Genelde bu kullanılmaz. then ve catch zincirleme dizini şeklinde kullanılır. */



//callback yöntemi
/*
const books = [
  {name : 'A', author: 'X'},
  {name : 'B', author: 'Y'},
  {name : 'C', author: 'Z'},

]

const listBooks = () => {
  books.map((book,index) => {
    console.log(book,index)
  })
}
*/
/*
const addNewBook = (newBook,callback) => {
  books.push(newBook)
  callback();
}*/

/*
const addNewBook =(newBook) => {
  const promise1 = new Promise((resolve,reject) =>{
    books.push(newBook)
    resolve(books)
    //reject('Hata')
  })
  return promise1 
}*/

//callback yöntemi
/*addNewBook({name:'D', author :'T'},listBooks);*/

/*
//promise yöntemi
addNewBook({name:'D', author :'T'})
.then(()=>{
  console.log('Yeni List');
  listBooks();
})
.catch((reason)=>{
  console.log(reason)
})*/



const addTwoNumbers = (num1,num2) => {
  const promise2 = new Promise((resolve,reject) => {
    const sum = num1 + num2;
    (typeof num1 !== 'number' || typeof num2 !== 'number')
    ? reject('İki sayi girmeniz gerekir')
    : resolve(sum)
  })
  return promise2
}

addTwoNumbers(4,8)
.then((value)=>{
  console.log('Toplam:',value)
})
.catch((reason)=>{
  console.log(reason)
})