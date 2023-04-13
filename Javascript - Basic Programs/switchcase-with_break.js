function groceryprice(exp){
    switch(exp){
        case 'cookies':
            console.log('cookies cost 100 rupees');
        case 'milk':
            console.log('milk cost 60 rupees');
        case 'fruits':
            console.log('fruits cost 300 rupees');
            break;
        case 'corn flakes':
            console.log('corn flakes cost 150 rupees');
        default:
            console.log(exp+' is not available right now');
    }
}

groceryprice('cookies');

