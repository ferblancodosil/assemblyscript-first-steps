export const cartesianWithArrowFunctions = (arr = []) => {
    return arr.reduce((a, b) => (
      a.map((x) => (
        b.map((y) => (
          x.concat(y)
        ))
      )).reduce((a, b) => (a.concat(b)), [])
    ), [[]])
}

export const cartesian = (matrix = []) => {
    let result = [[]];
  
    for (let i = 0; i < matrix.length; i++) {
      let currentSubarray = matrix[i];
      let tempResult = [];
  
      for (let j = 0; j < result.length; j++) {
        let currentResultSubarray = result[j];
  
        for (let k = 0; k < currentSubarray.length; k++) {
          let currentSubarrayElement = currentSubarray[k];
          tempResult.push(currentResultSubarray.concat([currentSubarrayElement]));
        }
      }
  
      result = tempResult;
    }
  
    return result;
}

export const generateRandomStringsMatrix = (rows, cols, maxLength) => {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const randomLength = Math.floor(Math.random() * maxLength) + 1;
      let randomString = "";
      const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let k = 0; k < randomLength; k++) {
        randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      }
      row.push(randomString);
    }
    matrix.push(row);
  }

  return matrix;
}