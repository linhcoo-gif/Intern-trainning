/* 
Rest parameter

function sum(...numbers) {
    let sum = 0;
    for (let item in numbers) {
        sum += item;
    }
    return sum;
}
*/

/*
map(callback( phần tử hiện tại , index, array gọi map )): 
- trả về 1 mảng mới 
- Không thay đổi giá trị mảng cũ
*/

Array.prototype.mymap = function (cb) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        resultArray.push(cb(this[i], i, this));
    }

    return resultArray;
};

const arr = [1, 2, 3, 4, 5];
const newArr = arr.mymap((item, index, array) => {
    return (item *= 2);
});

console.log(newArr);
