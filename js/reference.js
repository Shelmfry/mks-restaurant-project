$(document).ready(function() {


    /*
     * @name Menu
     * @description The goal of this section to get the menu information from the JSON.
     *              Go to http://mksrestaurantapi.herokuapp.com/menu-dinner.json to see an example of what the JSON looks like.
     * @steps
     *      1. Get the event information from a click handler.
     *      2. Use that event info to get the JSON from the API.
     *      3. Iterate through the array in 2 steps:
     *          1. Iterate through the array of sections and create the HTML string per section
     *          2. Within each section, iterate through each piece of menu info and create the HTML string.
     *      4. Take the finalized HTML string and populate the menu section of the site.
     * using html method takes whatever's inside and replaces it (without needing to erase and append)
     */

    /*
     * @name populateMenu
     * @description Populate individual items of the menu
     */


    var populatePieces = function(json) {

        // @TODO Create empty string variable
        var html = "";

        // @TODO Iterate through array that was passed through the parameter 
        for (var x = 0; x < json.length; x++) {
            //var html = '<div class="menu-item"><div class="menu-item-name">' + json[x].dish + '</div><p class="menu-item-description">' + json[x].ingredients + '</p> <div class="menu-item-price">' + json[x].price + '</div></div>';
            // html = html + '<div class="menu-item">';
            // html = html + '<div class="menu-item-name">' + json[x].dish + '</div>' + '<p class="menu-item-description">' + json[x].ingredients + '</p> <div class="menu-item-price">' + json[x].price + '</div>';
            // html = html + '</div>';

            if (json[x].ingredients) {
                html = html + '<div class="menu-item">';
                html = html + '<div class="menu-item-name">' + json[x].dish + '</div>' + '<p class="menu-item-description">' + json[x].ingredients + '</p> <div class="menu-item-price">' + json[x].price + '</div>';
                html = html + '</div>';

            } else {
                html = html + '<div class="menu-item">';
                html = html + '<div class="menu-item-name">' + json[x].dish + '</div> <div class="menu-item-price">' + json[x].price + '</div>';
                html = html + '</div>';

            }

            /*
             * @TODO Create HTML string based on the original HTML. Final sting should look like this:
             *       <div class="menu-item">
             *            <div class="menu-item-name">malpeque oyster</div>
             *            <p class="menu-item-description">prince edward island, canada</p>
             *            <div class="menu-item-price">3</div>
             *       </div>
             */
        }
        // @TODO Return the created string
        return html;

    };


    /*
     * @TODO Extension: Notice how on wine, there are undefined ingredients
     *            Goal: Check if the ingredient section exists.
     *                   If it doesn't, remove the ingredients section and
     *                   add a new CSS class to the menu item name to make the price
     *                   show up next to it.
     */





    /*
     * @name populateSections
     * @description Populate sections of the menu and add that to the HTML.
     */

    var populateSections = function(json) {

        // var test = "bananas";
        // console.log(test);
        // return test;

        // @TODO Create empty string variable
        var html = "";

        /*
         * @TODO Create HTML string based on the original HTML.
         *       YOU WILL NEED TO PASS populatePieces() into this loop in order to get the string for the individual pieces.
         *
         *  Final sting should look like this:
         *  <div id="menu-section-content" class="menu-section-content menu-dinner is-active">
         *        <div class="menu-group columns small-12 medium-4">
         *            <h4>Raw Bar</h4>
         *               ...
         *        </div>
         *         ...
         *  </div>
         */

        // @TODO Iterate through array that was passed through the parameter and create the HTML string -- using a for loop
        for (var x = 0; x < json.length; x++) {
            html = html + '<div class="menu-group columns small-12 medium-4"> <h4>' + json[x].section + '</h4>';
            html = html + populatePieces(json[x].content);
            html = html + '</div>';
            // html = json[x].section;

            // somewhere here we need to get all the menuitems by calling populatePieces();
            //</div>'; 

        }
        // html = html + "bananas";
        // console.log(html);

        // @TODO Use a jQuery function to insert the HTML string into the menu section content area
        $("#menu-section-content").html(html);

    };

    /*
     * @name getMenu
     * @description Get menu items from the API.
     * @param course - this parameter is used to get the specific course section, ie 'breakfast', 'lunch', 'wine'
     */

    var getMenu = function(course) {

        /*
         * @TODO Extension: Replace $.getJSON() with $.ajax(). If done properly, you will have made your first AJAX command!
         *                   Google 'jQuery json' to learn more about how to use it.
         */

        // Get the JSON from the API.
        $.getJSON('http://mksrestaurantapi.herokuapp.com/menu-' + course + '.json', function(json) {

            // Once that happens, run populateSections() and pass in the JSON.
            populateSections(json);

        });

    };


    /*
     * @name Event Handler
     * @description This event handler will pick up event information from the menu actions. Use this to pass the course to getMenu.
     */


    // @TODO Create an event handler to get event information for menu actions
    var getId = $('.menu-action').on('click', function(e) {

        // @TODO Get the id attribute from what was clicked.
        var id = $(this).attr('id');
        // @TODO Console.log id. Notice how the end of the ID has 'breakfast','lunch', etc. 
        // This action will save the ending of the id to back into id, so now id only equals 'breakfast','lunch',etc
        id = id.substring(12, id.length);
        // console.log(id);
        // @TODO Pass the id into getMenu() to begin the process of getting the JSON and populating the data
        getMenu(id);
        // console.log(id);

        // @TODO Remove the class 'is-active' from all menu actions

        // @TODO Add 'is-active' to this specific action that was clicked. 'is-active provides the visual cue for what's active via CSS


    });



    /*
     * @name init
     * @description This function will run when site loads to get dinner information first.
     */
    var init = function() {
        getMenu('dinner');
        $(".menu-action").removeClass('is-active');
        $("#menu-action-dinner").addClass('is-active');
    };

    // Run init() to make whatever happens in init run.
    init();

});