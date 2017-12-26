var beers = [];

// TO ADD BEER TO THE BEERS.array

function addBeer (name, category, raiting) {
    name = $('.beer-input').val();
    category = $('.category-input').val();
    raiting = $('#sel1').val();
    beers.push(
        {
        "name": name,
        "category": category,
        "rate": raiting
        }
    );
    $('.beer-input').val('')
    $('.category-input').val('');
    $('#sel1').val('');
}


// TO ADD BEER TO THE HTML-list

function renderBeers() {
    $('.beers-list').html('');
    for (var i=0; i<beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + ' ' + beers[i].category + '<br>Rate: ' + beers[i].rate + '</li>');
    }
}


// TO POST BEER LIST

function postBeer() {
    addBeer();
    renderBeers();
}

$('.post-beer').click(postBeer);


// TO SORT BEER LIST

var sortclick = true;

function sortBeer() {
    if(sortclick===true){
        beers.sort(function(a,b) {
             return a.rate-b.rate;
         });
        sortclick = false;
    }
    else{
        beers.sort(function(a,b) {
            return b.rate-a.rate;
        });
        sortclick = true;
    }
    renderBeers();
    
}

$('.sort-beer').click(sortBeer);

 

