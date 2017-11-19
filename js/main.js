// Passing it page you want to jump too, location.href (best way to go to pages) works online and locally = page you want to go to 
function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

$("#genre_button").click(function(event) {

    $("#genre_button").toggleClass("genre-active");
    $(".contain_icons").toggleClass("icon-active");

   if($(this).hasClass('genre-active')){
        $(this).removeClass('genre-non-active');
    } else {
    	$(this).addClass('genre-non-active');
    }

});


// Toggle Rating System for Stars

$("#starBtn_1").click(function(event) {
    $("#starBtn_1").toggleClass("star_1_full");

   if($(this).hasClass('star_1_full')){
        $(this).removeClass('star_1');
    } else {
      $(this).addClass('star_1');
    }
});

$("#starBtn_2").click(function(event) {
    $("#starBtn_2").toggleClass("star_2_full");

   if($(this).hasClass('star_2_full')){
        $(this).removeClass('star_2');
    } else {
      $(this).addClass('star_2');
    }
});

$("#starBtn_3").click(function(event) {
    $("#starBtn_3").toggleClass("star_3_full");

   if($(this).hasClass('star_3_full')){
        $(this).removeClass('star_3');
    } else {
      $(this).addClass('star_3');
    }
});

$("#starBtn_4").click(function(event) {
    $("#starBtn_4").toggleClass("star_4_full");

   if($(this).hasClass('star_4_full')){
        $(this).removeClass('star_4');
    } else {
      $(this).addClass('star_4');
    }
});

$("#starBtn_5").click(function(event) {
    $("#starBtn_5").toggleClass("star_5_full");

   if($(this).hasClass('star_5_full')){
        $(this).removeClass('star_5');
    } else {
      $(this).addClass('star_5');
    }
});


// Genre Selects

$("#horrorBtn_1").click(function(event) {
    $("#horrorBtn_1").toggleClass("horror_b_selected");

   if($(this).hasClass('horror_b_selected')){
        $(this).removeClass('horror_b');
    } else {
      $(this).addClass('horror_b');
    }
});


$("#comedyBtn_2").click(function(event) {
    $("#comedyBtn_2").toggleClass("comedy_b_selected");

   if($(this).hasClass('comedy_b_selected')){
        $(this).removeClass('comedy_b');
    } else {
      $(this).addClass('comedy_b');
    }
});


$("#adventureBtn_3").click(function(event) {
    $("#adventureBtn_3").toggleClass("adventure_b_selected");

   if($(this).hasClass('adventure_b_selected')){
        $(this).removeClass('adventure_b');
    } else {
      $(this).addClass('adventure_b');
    }
});


$("#actionBtn_4").click(function(event) {
    $("#actionBtn_4").toggleClass("action_b_selected");

   if($(this).hasClass('action_b_selected')){
        $(this).removeClass('action_b');
    } else {
      $(this).addClass('action_b');
    }
});


$("#romanceBtn_5").click(function(event) {
    $("#romanceBtn_5").toggleClass("romance_b_selected");

   if($(this).hasClass('romance_b_selected')){
        $(this).removeClass('romance_b');
    } else {
      $(this).addClass('romance_b');
    }
});


$("#dramaBtn_6").click(function(event) {
    $("#dramaBtn_6").toggleClass("drama_b_selected");

   if($(this).hasClass('drama_b_selected')){
        $(this).removeClass('drama_b');
    } else {
      $(this).addClass('drama_b');
    }
});


$("#fantasyBtn_7").click(function(event) {
    $("#fantasyBtn_7").toggleClass("fantasy_b_selected");

   if($(this).hasClass('fantasy_b_selected')){
        $(this).removeClass('fantasy_b');
    } else {
      $(this).addClass('fantasy_b');
    }
});


$("#cartoonBtn_8").click(function(event) {
    $("#cartoonBtn_8").toggleClass("cartoon_b_selected");

   if($(this).hasClass('cartoon_b_selected')){
        $(this).removeClass('cartoon_b');
    } else {
      $(this).addClass('cartoon_b');
    }
});


$("#sci-fiBtn_9").click(function(event) {
    $("#sci-fiBtn_9").toggleClass("sci-fi_b_selected");

   if($(this).hasClass('sci-fi_b_selected')){
        $(this).removeClass('sci-fi_b');
    } else {
      $(this).addClass('sci-fi_b');
    }
});




// Get the modal
var modal = document.getElementById('theModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    $(".modal").addClass("show");
    $(".modal").removeClass("disappear");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $(".modal").addClass("disappear");
    $(".modal").removeClass("show");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// LOCAL STORAGE FUNCTIONALITY STARTS

$(window).scroll(function(){
    $(".movie_container").css("opacity", 1 - $(window).scrollTop() / 250);
  });




$(function() {
$('.confirm').click(function(){
    var newMovie = $('<div id="movie_btn" class="movie"> <h4>Movie Title</h4> </div>');
  //newDiv.style.background = "#000";
  $('.movie_container').append(newMovie);
  $(".modal").addClass("disappear");
  $(".modal").removeClass("show");

});
});































