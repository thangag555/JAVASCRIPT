function getname(name)
{
    return name?name:'no argument was passed';
}

console.log(getname('mark'));
console.log(getname());