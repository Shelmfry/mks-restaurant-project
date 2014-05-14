
$(document).ready(function() {

	$('#slides').slidesjs({
        navigation: {
            effect: "fade"
        },
        pagination: {
            active: false
        },
        play: {
            active: false,
            auto: true,
            interval: 7000,
            swap: true,
            effect: "fade"
        }
    });

// 1. Goal: create click event handler

 $('.menu-action').on('click' , function (e) {
           console.log($(this).attr('id'));
            id = id.substring(12,id.length); // PROVIDED: "This action will save the ending of the id to back into id, so now id only equals 'breakfast','lunch',etc"

        }); 


});

// 2. Goal: use the ID to get JSON info from the JSON url (API)

// 3. Goal: Create an HTML string for every menu-section (iterate)

// 4. Goal: iterate through every piece of information in that HTML string 

// 5. Goal: take the final HTML string and populate the menu-section of the index.html -- using html method (do not erase and append)