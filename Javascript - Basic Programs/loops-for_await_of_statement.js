async function main(){
    for await(const x of ['apple','mango']){
        console.log(x);
    }
}

main();
