/**
 * Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. 
 * In DNA, C pairs with G and T pairs with A.
 * dnaPair("G");
 *  should return [ ["G", "C"] ]
 * dnaPair("AG");
 *  should return [ ["A", "T"], ["G", "C"] ]
 * dnaPair("ATAG");
 *  should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
 */

//args: dna - String
//returns: nested array
function dnaPairs(dna) {
  const mapDNA = new Map();
  mapDNA.set('G', ['G','C']);
  mapDNA.set('A', ['A','T']);
  mapDNA.set('C', ['C','G']);
  mapDNA.set('T', ['T','A']);
  
  let arrayPairs = [];

  for (nucleotideBase of dna) {
    arrayPairs.push(mapDNA.get(nucleotideBase))
  }
  return arrayPairs
}

module.exports = dnaPairs;
