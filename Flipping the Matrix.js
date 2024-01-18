function flippingMatrix(mat) {
  const n = Math.floor(mat.length/2);
  
  const reverseRow = row => {
      for (let i=0; i<n; i++){
          [mat[row][i], mat[row][mat.length - i - 1]] = 
          [mat[row][mat.length - i - 1], mat[row][i]];
      }
  }
  
  const reverseCol = col => {
      for (let i=0; i<n; i++){
          [mat[i][col], mat[mat.length - i - 1][col]] = 
          [mat[mat.length - i - 1][col], mat[i][col]];
      }
  }
  
  const reverseQuadrant = (row1, row2) =>{
      [mat[row1], mat[row2]] = 
        [
          [...mat[row2].slice(n).reverse(), ...mat[row1].slice(n)],
          [...mat[row2].slice(0, n), ...mat[row1].slice(0, n).reverse()]
        ];
  }
  
  const getMaxCorrEl = (row, col) => {
      const row1 = row;
      const row2 = mat.length - row - 1;
      const col1 = col;
      const col2 = mat.length - col - 1;

      let maxRow = row;
      let maxCol = col;
      let quad = 0;
      
      if (mat[row1][col2] > mat[maxRow][maxCol]){
          maxRow = row1;
          maxCol = col2;
          quad = 3;
      }
      
      if (mat[row2][col2] > mat[maxRow][maxCol]){
          maxRow = row2;
          maxCol = col2;
          quad = 2;
      }
      
      if (mat[row2][col1] > mat[maxRow][maxCol]){
          maxRow = row2;
          maxCol = col1;
          quad = 1;
      }
      
      return {row1, row2, col1, col2, quad}
  }
  
  for (let i=0; i<n; i++){
      for (let j=0; j<n; j++){
          const {row1, row2, col1, col2, quad} = getMaxCorrEl(i, j);
          if (quad > 0){
              switch (quad){
                  case 1:
                      reverseRow(row2);
                      reverseCol(col2);
                      reverseRow(row1);
                      reverseQuadrant(row1, row2);
                      reverseCol(col2);
                      reverseRow(row1);
                      break;
                  case 2:
                      reverseCol(col2);
                      reverseRow(row1);
                      reverseQuadrant(row1, row2);
                      reverseCol(col2);
                      reverseRow(row1);
                      break;
                  case 3:
                      reverseRow(row1);
                      reverseQuadrant(row1, row2);
                      reverseCol(col2);
                      reverseRow(row1);
                      break;
                  default:
                      break;
              }
          }
      }
  }
  
  let sum = 0;
  for (let i=0; i<n; i++){
      for (let j=0; j<n; j++){
          sum+=mat[i][j];
      }
  }

  return sum;
}
