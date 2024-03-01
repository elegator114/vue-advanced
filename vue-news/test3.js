async function f() {

    let promise = function(){console.log('메롱');}

    console.log(1);



    result =  promise; // 프라미스가 이행될 때까지 기다림 (*)
    
    console.log(2);

    console.log(result);

    console.log(3);
    console.log(4);
  }
  
  f();

  console.log(5);