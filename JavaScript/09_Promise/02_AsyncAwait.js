function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(200) : reject(errorMessage);
        }, 1000);
    })
} 

// 方法一
async function usingLongTimeWork() {
    // var result = await longTimeWork(true, "test");
    var p = longTimeWork(true, "test");
    var result = await p ;
    console.log(result);
}

// 方法二
// async function usingLongTimeWork() {
//     try {
//         var result = await longTimeWork(false, "test");
//         console.log(result);
//     }
//     catch (e) {
//         console.log(e);
//     }
    
// }

usingLongTimeWork();
