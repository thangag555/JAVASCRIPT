function groceryprice(exp){
    switch(exp){
        case 'cookies':
        case 'milk':
        case 'fruits':
            console.log('it costs 100 rupees');
            break;
        case 'corn flakes':
            console.log('corn flakes cost 150 rupees');
        default:
            console.log(exp+' is not available right now');
    }
}

groceryprice('cookies');

groceryprice('fruits');

groceryprice('corn flakes');



