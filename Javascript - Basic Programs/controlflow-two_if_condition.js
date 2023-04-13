function checkeligibility(age){
    if(age<18){
        console.log('sorry. you are not eligible for voting');
    }
    if(age>=18){
        console.log('you are eligible to vote');

    }
}

checkeligibility(11);
checkeligibility(34);