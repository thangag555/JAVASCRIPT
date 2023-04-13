const patient={
    name:'isabel',
    height:164,
    weight:60,
    disease:'hypertension'
}
for(let key in patient)
{
    console.log(`${key} => ${patient[key]}`);
}


const patients=['isabel','marie','skylar'];
for(let element of patients){
    console.log(element);
}