
var sortclick = 1;
var app = BeerReviewApp();

// TO ADD BEER TO THE BEERS.array
// function addBeer (name, category, raiting) {
//     beers.push(
//         {
//         "name": name,
//         "category": category,
//         "rate": raiting
//         }
//     );
// }

// TO ADD BEER TO THE HTML-list
// function renderBeers() {
//     $('.beers-list').html('');
//     for (var i=0; i<beers.length; i++) {
//         $('.beers-list').append('<li>' + beers[i].name + ' ' + beers[i].category + '<br>Rate: ' + beers[i].rate + '</li>');
//     }
// }

// TO GET POST NEW BEER ITEM
// function postBeer() {
//     addBeer($('.beer-input').val(), $('.category-input').val(), $('#sel1').val());
//     renderBeers();

//     $('.beer-input').val('')
//     $('.category-input').val('');
//     $('#sel1').val('');
// }

// TO SORT BEER LIST
function sortBeer() {
    beers.sort(function(a,b) {
        return ((a.rate-b.rate)*sortclick);
    });
    sortclick= -sortclick;
    renderBeers();
}

function BeerReviewApp() {
    var beers = [];
    function addBeer (name, category, raiting) {
        beers.push(
            {
            "name": name,
            "category": category,
            "rate": raiting
            }
        );
    }

    function renderBeers() {
        $('.beers-list').html('');
        for (var i=0; i<beers.length; i++) {
            $('.beers-list').append('<li>' + beers[i].name + ' ' + beers[i].category + '<br>Rate: ' + beers[i].rate + '</li>');
        }
    }

    function sortBeer() {
        beers.sort(function(a,b) {
            return ((a.rate-b.rate)*sortclick);
        });
        sortclick= -sortclick;
        renderBeers();
    }

    return {
        addBeer: addBeer,
        updateBeers: renderBeers,
        sortBeer: sortBeer
    }
}

$('.sort-beer').click(function sort() {
                        app.sortBeer();
});

$('.post-beer').click(function post(){
                        var name = $('.beer-input').val();
                        var category = $('.category-input').val();
                        var raiting = $('#sel1').val();
                        app.addBeer(name, category, raiting);
                        app.updateBeers();
                        $('.beer-input').val('')
                        $('.category-input').val('');
                        $('#sel1').val('');
});

 

