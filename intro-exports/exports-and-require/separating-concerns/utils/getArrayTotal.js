function getArrayTotal(arr) {
  const total = arr.reduce((total, num) => {
    return total + num;
  }, 0);
  return total;
}

module.exports = getArrayTotal;