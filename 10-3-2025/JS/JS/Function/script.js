const ages = [23, 23, 35, 3];

Array.prototype.mapCustom = function(callback){
    console.log('this', this);
    
    const newArr = [];
    if(Array.isArray(this) && this.length){
      let i = 0;
      for(let element of this){
          const result = callback(element);
          newArr.push(result)
          i++;
       }
     }
     return newArr;
  }
  // const result  = ages.map((a, index))
const result = ages.mapCustom((element, index) => {
    console.log('index', index);
    return element * 2;
    
})
console.log('result', result);
