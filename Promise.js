function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 4000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
});
/*
console.log("ffffffff");
console.log("ffffffff");
console.log("ffffffff");
*/
bPromiseResult
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });
