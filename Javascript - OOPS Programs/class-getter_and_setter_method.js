class Programming {
    constructor() {
    console.log('Programming class is called');
    }
    // getter
    get getLanguage() {
    return this.language;
    }
    // setter
    set setLanguage(x) {
    this.language = x;
    }
    }
    let p1 = new Programming();
    console.log(p1.getLanguage);
    //output: undefined
    p1.setLanguage = 'Javascript'; // This will set the value of language to
    'Javascript'
    console.log(p1.getLanguage);
    //output: Javascript