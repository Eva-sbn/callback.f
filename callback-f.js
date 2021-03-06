// 1 Создай функцию, которая принимает два параметра - один произвольный, а второй коллбэк. Коллбэк должен вывести в консоль первый параметр.

function f (item,callback) {
console.log(callback(item))
};


// 2 Создать функцию, которая принимает 3 параметра - два числа и один коллбэк.
// Коллбэк должен вернуть сумму первых двух параметров, а сама функция вывести их в консоль.

function clb(a,b,callback) {
    return callback(a,b) 
}
 console.log(clb(3,4,(a,b) => {
   return a + b 
 }))

 // 3 Создать функцию которая будет работать подобно методу filter(). То есть функция примет два параметра, массив и коллбэк функцию.
 // Коллбэк функция должна возвращать true или false в зависимости от заданного условия.
  //А сама функция будет добавлять в новый массив элементы для которых коллбэк вернула true, а затем возвращать этот массив.

  function clb2(arr,callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
        newArr.push(arr[i])
    }
    } 
    return newArr
  };

// 4 Создать функцию которая будет работать подобно методу map`()`.То есть функция примет два параметра, массив и коллбэк функцию. 
//Коллбэк функция может возвращать любое значение. А сама функция будет добавлять в новый массив значения которая вернула коллбэк функция.

function clb3(arr,callback){
    let arr2 = [];
    for( let i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
    }
    return arr2
}
console.log(clb3([4,7,8],(item) => {
    return item
}))
