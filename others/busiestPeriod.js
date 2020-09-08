function busiestPeriod(data) {
  if(data.length === 0) return null;
  
  let count = 0;
  let max = 0;
  let result = data[0][0];
  for(let i = 0; i < data.length; i++) {
    if(i > 0 && data[i][0] !== data[i-1][0]) {
      if(count > max) {
        max = count;
        result = data[i-1][0];
      }
    }
    if(data[i][2] === 1) {
      count += data[i][1];
    } else {
      count -= data[i][1];
    }
  }
  if(count > max) result = data[data.length-1][0];
  
  return result;
}

