
let adder = (sum, element) => {
  let p = new Promise((resolve) => {
    resolve(sum + element);
  });

  return p;
}


export let loop = (request, h) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  const dd = new Promise((resolve) => {
    numbers.forEach((n, id) => {
      adder(sum, n)
        .then(res => {
          console.log(`Trying to add ${n}`);
          sum += res
          console.log(`Current sum is ${sum}`);
          if (id == numbers.length - 1) {
            resolve(sum)
          }
        })
    });
  }).then(function (data) {
    return data
  });
  if (dd) {
    return dd
  }
  return sum;
};


export const csv2json = (request, h) => {
  const payload = request.payload.data.trim(); //get data from input file
  const a = payload.split('\n'); 
  const keys = a.shift(0,1);
 // console.log(keys);
  const keysAry = keys.split(","); 
  console.log("keysAry...................", keysAry);
  let mergeAry = []; //array which holds data as json 
  
  a.forEach(v => {
   const jsonResp = v.split(",");
    console.log(jsonResp);
    let r = {}
    for (let i = 0; i < keysAry.length; i++) {
      r[keysAry[i]] = jsonResp[i];
    }
    mergeAry.push(r);
  })
  return mergeAry
}
