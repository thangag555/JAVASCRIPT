function groceryprice(exp){
    switch(exp){
        case 'cookies':
            console.log('cookies cost 100 rupees');
            break;
        case 'milk':
            console.log('milk cost 60 rupees');
            break;
        case 'fruits':
            console.log('fruits cost 300 rupees');
            break;
        case 'corn flakes':
            console.log('corn flakes cost 150 rupees');
            break;
        default:
            console.log(exp+' is not available right now');
    }
}

groceryprice('cookies');

groceryprice('fruits');

groceryprice('peanut');