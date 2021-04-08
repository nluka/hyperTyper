function parseBool(boolEquivalent) {
  switch (boolEquivalent.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      try {
        console.log(new Error().stack);
      } catch {}
      throw `'${boolEquivalent}' (string) cannot be converted to a bool`;
  }
}

function roundFloat(float, decimalPlaces) {
  return parseFloat(float.toFixed(decimalPlaces));
}

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function probabilityToReturnTrue(floatFromZeroToOne) {
  return (Math.random() < floatFromZeroToOne);
}

function isObjectEmpty(object) {
  return Object.keys(object).length === 0;
}