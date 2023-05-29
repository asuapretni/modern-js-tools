// prettyPrice(3.50, 0.95) //3.95
const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}

console.log(prettyPrice(3.50, 99));






//My solution
/*const prettyPrice = (price, ext) => {
    if (ext >= 100) {
        return console.log('Number must be between 1 and 99');
    } else if (ext > 10) {
        ext = ext * 0.01
    } else if (ext > 0 < 10) {
        ext = ext * 0.1
    }
    let int_price = parseInt(price);
    let finalPrice = int_price + ext;
    return finalPrice;
}

console.log(prettyPrice(23.30, 99));*/