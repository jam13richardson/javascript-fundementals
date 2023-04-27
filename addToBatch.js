array = [1, 2, 6, 5]
number = 2


const addToBatch = (array, number) => {
    if (array.length >= 5) {
        console.log(array)
    } else {
         return array.concat(number)
    }

};