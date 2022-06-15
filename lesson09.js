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

function square(num){
  return (num * num);
}
console.log(square(4));

// Function Expression ( bir değişkene atıyoruz)
/*Function expression yonteminde hoisting çalışmayacaktır.*/

const square2 = function(num){ 
  return (num * num)
}

console.log(square2(6));



// Arrow Function Expression 

/* arrow fonksiyonu daima function expression olarak yazılır. */

//const square3 = function(num){ return (num * num) };

/* Artık fonksiyon anahtar kelimesine ihtiyacım yok. 
Aldıgımız parametrelerden sonra ok işaretini kullanıyorum.*/
//const square3 = (num) => { return (num * num) };


/* tek satır oldugu için bu direkt oldugu satırı geri dönüyor. O nedenle return ve süslü parantezlerden kurtuluyoruz. ve tek bir tane parametre aldıgım için parantezlerden de kurtuldum. */
const square3 = num => (num * num);
console.log(square3(8));

/* Arrow function'nı kullanmanızın tek sebebi basit bir syntax'a sahip olması değil. En temel sebep : ok function'nın this kavramı ile olan ilişkisi. */

















