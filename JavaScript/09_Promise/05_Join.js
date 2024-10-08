function happy(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}

function sad(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}

// 先呼叫，再等待它的結果
async function living() { // 下面執行的秒數有重疊 =>平行處理 非同步 
    var promise1 = happy(200, 2000);
    var promise2 = sad(-100, 3000);
    var result1 = await promise1;
    var result2 = await promise2;

    var total = result1 + result2;
    console.log("total:", total);
}

living();

