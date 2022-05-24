function generateArray(num){
    let array = []
    for (let i = 0; i < 10; i++) {
        const element = array[i];
        array [i] = num + i;
    }
    return(array)
}

module.exports = generateArray;