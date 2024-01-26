function hello() {
  return "hello";
}

async function helloAsync() {
  return "hello Async";
}
/*
console.log(hello()); //hello 출력
console.log(helloAsync()); //Promise { 'hello Async' } 출력
*/
helloAsync().then((res) => {
  console.log(res);
}); //hello Async 출력

//async를 통해 promise의 resolve의 결과값을 return하는 비동기 처리 함수를 작성할 수 있다.
