
$(document).ready(function() {


// var dinner = ' '; 

// $  $.getJSON('http://mksrestaurantapi.herokuapp.com/menu-' + course +'.json' , function(json) {
//     $.each(json, function(index, value) {


//     });

// });


// 1. Goal: create click event handler

$('.menu-action').on('click' , function (e) {
    console.log('you clicked me!');

           var buttonChoice = $(this).attr('id');
           if ($(this).hasClass('is-active')) {

            showMenu(buttonChoice);

        } else {

            hideMenu(buttonChoice);

        }

             id = id.substring(12,id.length); // PROVIDED: "This action will save the ending of the id to back into id, so now id only equals 'breakfast','lunch',etc"

        }); 



function hideMenu(menuClass) {
        $('.' + menuClass).fadeOut();
        $('#' + menuClass).removeClass('is-active');
    }

function showMenu(menuClass) {
        $('.' + menuClass).fadeIn();
        $('#' + menuClass).addClass('is-active');
    }

});



// 2. Goal: use the ID to get JSON info from the JSON url (API)

// 3. Goal: Create an HTML string for every menu-section (iterate)

// 4. Goal: iterate through every piece of information in that HTML string 

// 5. Goal: take the final HTML string and populate the menu-section of the index.html -- using html method (do not erase and append)


