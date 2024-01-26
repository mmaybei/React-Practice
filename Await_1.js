/* 이전 코드
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  return delay(3000).then(() => {
    return "hello Async";
  });
}

helloAsync().then((res) => {
  console.log(res);
}); //helloAsync 출력
*/

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000); //return delay(3000).then(() => {});
  return "hello Async";
}

helloAsync().then((res) => {
  console.log(res);
}); //helloAsync 출력

//await을 이용하여 더 간단하게 작성할 수 있다.
//async 함수 내에서 사용할 수 있는 await은 해당 코드를 동기적 방식으로 수행하도록 한다.
