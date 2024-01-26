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
}); //hello Async 출력

//promise 객체를 생성하고 then 메소드를 통해 접근할 수 있다.
