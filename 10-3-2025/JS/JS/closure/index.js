//   function makeFunc() {
//     const name = "Mozilla";
//     console.log('name', name);
    
//     function displayName() { 
//       console.log(name); // scope chainning
//     }
//     // }
//     console.dir(displayName)
//   }
  
// makeFunc();


  // khi function display được tạo ra thì trog body hàm có sử dụng biến name ( nhưng không đc khai báo trogn scope nên sẽ move up ra ngoài )
  // Tính chất của scope chainning
  // Closure được tạo ra khi function displayname được tạo ra
  // Closure giống ooop

  function counter(){
    let counter = 0;

    function increament(){
      counter = counter + 1
    }

    function getCounter(){
      return counter;
    }
    // console.dir(increament)
    // console.dir(getCounter)
    return {
      increament: increament,
      getCounter: getCounter
    }
  }
  // const counterInstead = counter()
  // console.log(counterInstead.getCounter())
  // counterInstead.increament()
  // counterInstead.increament()
  // console.log(counterInstead.getCounter()) /// 2
  // const counterInstead2 = counter()
  // console.log(counterInstead2.getCounter())
  // counterInstead2.increament()
  // counterInstead2.increament()
  // counterInstead2.increament()
  // console.log(counterInstead2.getCounter())

function a(x) {
  x++;
  console.log('x outside', x)
  return function(){
    console.log(++x);
    console.log('x inner', x)
    // console.log('x', x);
  }
}
// a(1) () // 3
// a(1) () // 3
// a(1) ()  // 3

let x = a(1);
x() // 3
x() // 4
x() // 5