
$(document).ready(() => {

$('select').on('change', function(){
    const subSection = $('select').val();
    $('.loader-GIF').show();
    $('.loader-GIF').css("display", 'flex');
    $('.loader-GIF').css("justify-content", 'center');

    $.ajax({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/' + subSection + '.json?api-key=U6wOirdOtAR0f4wmxbgJNpGxWdrTfET7',
        // success: function() {
        //     $('select').after('<p>Your request is being processed</p>')
        // }
    })
        
    .done(function(data){
        $('.loader-GIF').hide();
        $('.mobile-start').css('animation-play-state', 'running');
        $('.nav-slide').css('height', '300px');
        let loopResults = data.results; 
        console.log(loopResults);
        $('.main ul').append('<ul></ul>');
        $('.main ul').empty();
        let titleCounter = 0
        $.each(loopResults, function(index, value){
            if (titleCounter <= 12 && value.multimedia.length !==0) {
                $('.main ul').append("<li><a href=" + value.short_url + ">" + value.title 
                + "</a> <style> a {color: #fff; text-decoration: none} </style></a></li>");
                $('.main ul li:nth-child(' + titleCounter + ')').css('background', 'url(' + value.multimedia[4].url + ')' );
                $('.main ul li:nth-child(' + titleCounter + ')').css('background-size', 'cover');
                // $('.main ul li:nth-child(' + titleCounter + ')').css('background-position', 'center');
                $('.main ul li:nth-child(' + titleCounter + ')').css('background-repeat', 'no-repeat');

                titleCounter += 1;
            }
        })
        $('.main li a').on('mouseenter', event => {
            $(event.currentTarget).css("opacity", "1");
          })
          
        $('.main li a').on('mouseleave', event => {
            $(event.currentTarget).css("opacity", "0");
          })
    })
        .fail(function(){
            $('select').after('There was an error with your request'); 
        })
    // })
})

});

