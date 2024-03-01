async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 3000)
    });
    console.log(1);

    let result = promise
    console.log(result);


    result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    
    console.log(2);

    console.log(result);

    console.log(3);
    console.log(4);
  }
  
  f();

  console.log(5);