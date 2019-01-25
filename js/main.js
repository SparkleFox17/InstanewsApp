    // $('.btn').on('click', function() {
    //     const artistName = $('#artist-name').val();
    //     // alert(artistName);
    //     const artistNameIos= artistName.split(' ').join('+');
    //     $.ajax({
    //         method: 'GET',
    //         url: 'https://itunes.apple.com/search?entity=album&limit=6&term=+' + artistNameIos,
    //         success: function() {
    //             $('.album-list').before('<p>Your request is being processed</p>')
    //         }
    //     })
        
    //     .done(function(data){
    //         const parsedCode = JSON.parse(data);
    //         let loopResults = parsedCode.results; 
    //         // console.log(loopResults[0].artistId);
    //         $.each(loopResults, function(index, value){
    //             // console.log(key);
    //             console.log(value); 
    //             // console.log(albumName);
    //             $('.album-list').append("<li>" + value.collectionName + "</li>");
    //             // console.log(thumbailImg);
    //             $('.album-list').append("<li>" + "<img src=" + value.artworkUrl100 + ">" + "</li>");

    //     })
    // })
    //     // .fail(function(){
    //     //     $('.album-list').before('There was an error with your request'); 
    //     // })
    // })
})