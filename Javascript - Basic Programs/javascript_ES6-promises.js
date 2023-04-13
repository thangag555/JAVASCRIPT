const mypromise=()=>{
    return new Promise((resolve,reject)=>{
        resolve('hi the promise execute successfully')
    })
}
console.log(mypromise())