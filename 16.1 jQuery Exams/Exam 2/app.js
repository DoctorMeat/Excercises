$(document).ready(function(){console.log('Wow this is an amazing "app"...')});

$('#submit-movie').on("click", function(){
    let movie = $('#movie-title').val();
    let rating = $('#rating-number').val();
    let removeBtn = $('<button />').addClass('deleteButton').text('Delete').on('click', () => (newLi).remove());
    let newLi = $('<li/>').text(movie + " | Rated: " + rating)

    $('#list').append(newLi)
    $(newLi).append(removeBtn)})