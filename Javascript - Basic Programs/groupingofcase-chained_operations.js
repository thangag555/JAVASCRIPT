function gifts(inp){
    var output='you will get ';
    switch(inp){
        case '30':
            output+='pencils';
        case '20':
            output+='pen';
        case '10':
            output+='bag';
            console.log(output);
            break;

        default:
            console.log('unfortunately you wont get anything');
    }
}

gifts('10');

gifts('30');

gifts('20');

gifts('5');