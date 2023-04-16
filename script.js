//1 let str = "LIGHTCODE PROGRAMMING"
// console.log( str.substring(0, 9))

//2 let str= "Максимально УЖАСНО"
// console.log( str.substring(12, 18).toLowerCase())

// 3let str="максимально УЖАСНО"
// // console.log( str.substring(0, 11).toUpperCase())

//4 let str = "максимально УЖАСНО"
// console.log(str.slice(5, 11).toLowerCase() + ' ' + str.slice(11, 18).toUpperCase())

// 5let str = "Максимально"
// let str2 = "Ужасно"
// console.log(str + str2)

// 6let str = "Максимально Ужасно"
// console.log(str.indexOf('Ужасно'))


// 7 let str = "Максимально Ужасно"
// console.log(str.indexOf('а'))

// 8 let str = "Максимально Ужасно"
//  console.log(str.lastIndexOf('о'))


// 9 let str = 'aaa bbb ccc'
// console.log(str.substring(4, 7))


function letter(str, letter) {
    if (str.indexOf(letter) === -1) {
        console.log('вообще не встречается')
    }
    else if (str.indexOf(letter) === str.lastIndexOf(letter)) {
        console.log('встречается 1 раз')
    }
    else {
        console.log('встречается более 2 раз')
    }
}

letter('САША', 'А');

 /// С А А А
 /// 0 [1] 2 [3]