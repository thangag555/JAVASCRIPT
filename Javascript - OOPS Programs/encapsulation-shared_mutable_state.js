let arrayOfThree = function(){
    let data = [1,2,3]
    let obj={
    multiplyByTwo:function(){
      data=data.map(it=>it*2)
      console.log("After Multiply", data)
    },
    divideByTwo:function(){
      data=data.map(it=>it/2)
      console.log("After Divide", data)
    }
    }
    return obj
    }
    let first = arrayOfThree()
    let second = arrayOfThree()
    setTimeout(first.divideByTwo,3000)
    setTimeout(second.multiplyByTwo,5000)
    /*
    Output:
    After Divide (3) [0.5, 1, 1.5]
    After Multiply (3) [2, 4, 6]
    */