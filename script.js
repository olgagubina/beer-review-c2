var beers = [];

function addBeer (name, category) {
    name = $('.beer-input').val();
    category = $('.category-input').val();
    beers.push(
        {
        "name": name,
        "category": category
        }
    );
    console.log(beers);
}

function renderBeers() {
    $('.beers-list').html('');
    for (var i=0; i<beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + ' ' + beers[i].category +'</li>');
    }
}

$('.beer-form').on('click', '.post-beer', function(){
    addBeer();
    renderBeers();
});