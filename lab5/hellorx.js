var Rx = require('rxjs/Rx');

// var myObservable = Rx.Observable.range(0,10);

// var myObserver = {

//     next: item => console.log(`Next ${item}`),
//     error: ex => console.log('Exception ${ex}'),
//     complete: () => console.log("COMPLETED")


// };

// myObservable.subscribe(myObserver);



// Rx.Observable.range(0,10).map(item=>item*2).filter(item=>item>10).subscribe({

//     next: item => console.log('Next' + item),
//     error: ex => console.log('Exception ${ex}'),
//     complete: () => console.log("COMPLETED")

// });


Rx.Observable.range(0,5).map(item => Rx.Observable.range(0,item)).switchMap(item => item).subscribe({

    next: item => console.log(`Next ${item}`),
    error: ex => console.log(`Exception ${ex}`),
    complete: () => console.log("COMPLETED")

});


// te dane z api jakos tam posortowac ladnie,
// zad 2 to ga punkt na divie ktory sobie zasuwa losowo gora dol lewo rpawo co 1s,
//wszystko w rx


