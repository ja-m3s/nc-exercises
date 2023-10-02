function countVeg(arrVeg, strVegType) {
    let count = 0;
    console.log("arrVeg = ",arrVeg)
    for(let veg of arrVeg){
        console.log(veg)
        if (veg.type === strVegType) {
            count += veg.quantity;
        }
    }

    return count;
}

module.exports = countVeg;
