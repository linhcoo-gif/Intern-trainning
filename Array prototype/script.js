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
- duyệt qua từng phần tử áp dụng tính toàn từ callback
- trả về 1 mảng mới 
- Không thay đổi giá trị mảng cũ
*/

const arr = [1, 2, 5, 123, 33];
Array.prototype.mymap = function (cb) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        resultArray.push(cb(this[i], i, this));
    }

    return resultArray;
};

const newArr = arr.mymap((item, index, array) => {
    return (item *= 2);
});

console.log(newArr);

/*
find(callback(item, index, array)):
- duyệt phần tử tứ trái qua phải 
- Trả về phần tử đầu tiên thỏa mãn hàm callback 
- nếu ko thì trả về undefined
*/

Array.prototype.myfind = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

console.log(arr.myfind((item, index, array) => item > 2));

/*
findIndex(callback(item, index, array)): 
- duyệt từ trái qua phải 
- tìm được phần tử phù hợp với callback thì trả về index của nó và dừng
- nếu ko thì trả -1
*/

Array.prototype.myfindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};
console.log(arr.myfindIndex((item, index, array) => item > 2));

/*
some(callback(item, index, array)): 
- Nếu có ít nhất 1 phần tử trong mảng đúng với điều kiện callback thì trả về true
- ko thì trả về false
*/

Array.prototype.mysome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) return true;
    }
    return false;
};

console.log(arr.mysome((item) => item % 2 == 0));

/*
reduce(callback(accumulator, currentValue, index, array), initialValue)
- duyệt qua từng phần tử của mảng và tích lỹ giá trị dựa trên hàm callback 
- trả về 2 giá trị duy nhất 
- nếu có khởi tạo giá trị ban đầu thì vòng lặp bắt đầu từ 0 
- nếu ko có thì sẽ accumulator sẽ nhận phần tử đầu tiên của mảng và vòng lặp bắt đầu từ 1 
*/

Array.prototype.myreduce = function (cb, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let start = initialValue !== undefined ? 0 : 1;

    for (let i = start; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], this);
    }

    return accumulator;
};

console.log(arr.myreduce((sum, curr) => sum + curr));
console.log(arr.myreduce((sum, curr) => sum + curr, 10));

/*
filter
- duyệt các phần tử trong mảng chọn ra giá trị phù hợp callback 
- trả về mảng mới phù hợp callback 
- ko thay đổi mảng cũ 
*/

Array.prototype.myfilter = function (cb) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) resultArray.push(this[i]);
    }
    return resultArray;
};

console.log(arr.myfilter((item, index) => item % 2 == 0));

// 1,
const course = [
    { id: 1, name: "js", price: 200 },
    { id: 2, name: "React", price: 500 },
    { id: 3, name: "PHP", price: 600 },
    { id: 4, name: "Nodejs", price: 100 },
];
//   - Biến đổi name trong mảng thêm chữ course Ví dụ :  js course
const newCourse = course.mymap((item) => {
    return { ...item, name: `${item.name} course` };
});
console.log(newCourse);
//   - Thực hiện lọc với phần tử mảng có price >= 200
const newCourse2 = course.myfilter((item) => item.price >= 200);
console.log(newCourse2);
//   - Xóa phần tử trong mảng có id= 1
const newCourse3 = course.myfilter((item) => item.id !== 1);
console.log(newCourse3);
//   - tính tổng giá các khóa học
const newCourse4 = course.myreduce((sum, curr) => sum + curr.price, 0);
console.log(newCourse4);

//  2,
const cars = [
    {
        make: "audi",
        model: "r8",
        year: "2012",
    },
    {
        make: "audi",
        model: "rs5",
        year: "2013",
    },
    {
        make: "ford",
        model: "mustang",
        year: "2012",
    },
];

// Yêu cầu ra được output như sau :
// const cars = {
//      'audi': [
//          {
//              'model': 'r8',
//              'year': '2012'
//          }, {
//              'model': 'rs5',
//              'year': '2013'
//          },
//      ],
//      'ford': [
//          {
//              'model': 'mustang',
//              'year': '2012'
//          }, {
//              'model': 'fusion',
//              'year': '2015'
//          }
// ],
//      'kia': [
//          {
//              'model': 'optima',
//             'year': '2012'
//          }
//    ]
// }
// Sử dụng 2 cách để code :
//   - Sử dụng foreach thông thường

let newCars = {};

cars.forEach(({ make, model, year }) => {
    if (!newCars[make]) {
        newCars[make] = [];
    }
    newCars[make].push({ model, year });
});

console.log(newCars);
//   - Sử dụng reduce

const newCars1 = cars.myreduce((accu, { make, model, year }) => {
    if (!accu[make]) {
        accu[make] = [];
    }

    accu[make].push({ model, year });

    return accu;
}, {});

console.log(newCars1);

const nestedArray = [1, [2, [3, [4, 5]]], 6];

function flatArray(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

const newNestedArray = nestedArray.reduce((accu, curr, index) => {
    if (Array.isArray(curr)) {
        return [...accu, ...flatArray(curr)];
    } else {
        return [...accu, curr];
    }
}, []);

function flatArrayFunc(arr) {
    return arr.reduce((accu, curr) => {
        if (Array.isArray(curr)) {
            return [...accu, ...flatArrayFunc(curr)];
        } else {
            return [...accu, curr];
        }
    }, []);
}

console.log(flatArrayFunc(nestedArray));

console.log(newNestedArray);

// console.log(newNestedArray);

const items = [
    { id: 1, parentId: null, name: "Root" },
    { id: 2, parentId: 1, name: "Child 1" },
    { id: 3, parentId: 1, name: "Child 2" },
    { id: 4, parentId: 2, name: "Grandchild 1" },
];

// const output = {
//     id: 1,
//     parentId: null,
//     name: "Root",
//     children: [
//         {
//             id: 2,
//             parentId: 1,
//             name: "Child 1",
//             children: [
//                 { id: 4, parentId: 2, name: "Grandchild 1", children: [] },
//             ],
//         },
//         { id: 3, parentId: 1, name: "Child 2", children: [] },
//     ],
// };

const buildTree = (items) => {
    return items.reduce((acc, item) => {
        // Tạo node với children trống
        const node = { ...item, children: [] };

        // Nếu là root (parentId === null), lưu vào acc.root
        if (item.parentId === null) {
            acc[item.id] = node;
        } else {
            // Nếu có parentId, tìm cha trong map và thêm node vào children của cha
            acc[item.parentId]?.children.push(node);
        }

        return acc;
    }, {});
};

const Map = {};

items.forEach((item) => {
    Map[item.id] = { ...item, children: [] };
});

const Output = items.reduce((pre, curr) => {
    if (curr.parentId === null) {
        pre = Map[curr.id];
    } else {
        Map[curr.parentId].children.push(Map[curr.id]);
    }
    return pre;
}, {});

const map = {};
const root = items.reduce((pre, item) => {
    map[item.id] = { ...item, children: [] };
    if (item.parentId === null) return map[item.id];
    map[item.parentId].children.push(map[item.id]);
    return pre;
}, null);

console.log(root);

// console.log(Output);
