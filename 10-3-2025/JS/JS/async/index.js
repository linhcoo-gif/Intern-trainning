// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// setTimeout(() => {
//     console.log(2);
// },4000)
// console.log(3)

//VD 2
// setTimeout(() => {
//   console.log(123);
//   let a = 10;
//   setTimeout(() => {
//     console.log(456); 
//     console.log(a);
//   },3000)
  
// },2000)

function getUser(id) {
    return new Promise(function(reslove) {
        console.log('first run');
        
        setTimeout(() => {
            reslove({id: id, userName: 'Linh_bui'})
        }, 2000)
    })
}
function getRepo(userName) {
    //promise đồng bộ
    return new Promise(function(reslove,reject) {
        // web api quyết định
        setTimeout(() => {
            if(userName === "Linh_bui"){
                reslove(['repo1','repo2','repo3'])
            } else {
                reject('Error')
            }
        }, 2000)
    })
}
// setLoading(false)
// //call api
// setLoading(true)
// getUser(1).then((data) => {
//     return getRepo(data.userName).then((data2) => {
//         console.log('data 2', data2)
//     }).catch(err => {

//     }).finally(() => {})
// }).catch((err) => {

// }).finally(() => {
//     console.log();
    
// })
// getUser(1).then((data) => {
//     return getRepo(data.userName)
// })
// .then((data) => {
//     console.log('data', data);
// }) //.then tương đương reslove (sẽ được chạy trong queue callback) trước đó vẫn là promise pending nằm trong queue callback
// //Flow
// /**
//  * 1,Chạy tuần tự 
//  * console.log(1) chạy trước vào call stack sau đó được ra ngoài
//  * setimtout (bất đồng bộ sẽ chạy vào web api)==> do web api quyết định
//  * sau khi chờ 2 giây ==> call back console.log trong settimeout sẽ được chạy vào queue callback xếp hàng chờ
//  * khi call stack rỗng thì callback trong queue sẽ đươc đưa lên callstack để chạy
//  * nếu có nhiều bất đồng bộ thì bất đồng bộ sau chờ của bđb trước
//  */
// /**
//  * 2, chạy song song 
//  * các kết quả ko phụ thuộc nnhau ==> promise all
//  */

// // async - await === promise convert

const getUserById = async () => {
    const response = await getUser(1).then(async (data) => {
        if(data) {
            const response2 =  await getRepo(data.userName)
        }
    });

}