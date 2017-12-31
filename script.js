//just learning git branches
var beers = [];
var sortclick = 1;

// TO ADD BEER TO THE BEERS.array
function addBeer (name, category, raiting) {
    beers.push(
        {
        "name": name,
        "category": category,
        "rate": raiting
        }
    );
}

// TO ADD BEER TO THE HTML-list
function renderBeers() {
    $('.beers-list').html('');
    for (var i=0; i<beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + ' ' + beers[i].category + '<br>Rate: ' + beers[i].rate + '</li>');
    }
}

// TO GET POST NEW BEER ITEM
function postBeer() {
    addBeer($('.beer-input').val(), $('.category-input').val(), $('#sel1').val());
    renderBeers();

    $('.beer-input').val('')
    $('.category-input').val('');
    $('#sel1').val('');
}

// TO SORT BEER LIST
function sortBeer() {
    beers.sort(function(a,b) {
        return ((a.rate-b.rate)*sortclick);
    });
    sortclick= -sortclick;
    renderBeers();
}

$('.sort-beer').click(sortBeer);
$('.post-beer').click(postBeer);

 

