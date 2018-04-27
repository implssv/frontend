var q = $('#q');

var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function (x) {
    return q.val();

})
    .switchMap(function (x) {
        return searchWikipedia(x);
    })
    .do(function (x) {
    })
    .map(x => {

     return createTableRow(x);

    })
    .subscribe(function (x) {


       $('table').prepend(x);

  
    });

    function createTableRow(x)
    {

        var elements = [];
           
        for (i = 0; i < x[1].length; i++) {
            var tr = document.createElement("tr");
            for (j = 1; j <= 3; j++) {
                var td = document.createElement("td");
                td.append(x[j][i]);
                tr.append(td);
            }
            
            elements.push(tr);
        
    }

    return elements;
    }

function searchWikipedia(term) {
    return $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}