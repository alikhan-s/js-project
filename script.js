// Wait for the entire HTML document (DOM) to be ready
$(document).ready(function() {

    // === Task 0: Setup Check ===
    // Check if jQuery is loaded and log a message to the console (F12)
    console.log("jQuery is ready!");

    // === PART 1: SELECTORS & CSS ===

    // --- Task 1: Selectors, .text(), .html(), .css() ---
    // We are "listening" for a click on the button with id 'btn-task1'
    $('#btn-task1').on('click', function() {
        // 1. Select by ID and change text
        $('#main-title').text('jQuery is Fun!');

        // 2. Select by class and change HTML (add <strong> tag)
        $('.highlight').html('We <strong>successfully</strong> changed this HTML.');

        // 3. Select by tag and change CSS (color)
        $('span').css('color', 'red').css('font-weight', 'bold');
        
        // Let's also change the button itself
        $(this).text('Done!');
    });

    // === PART 2: EFFECTS ===

    // --- Task 2: .hide(), .show(), .toggle() ---
    
    // Hide the paragraph
    $('#btn-hide').click(function() {
        $('#text-visibility').hide(200);
    });

    // Show the paragraph
    $('#btn-show').click(function() {
        $('#text-visibility').show(300);
    });

    // Toggle visibility
    $('#btn-toggle').click(function() {
        $('#text-visibility').toggle(300);
    });

    // --- Task 3: .fadeOut(), .fadeIn(), .fadeToggle() ---
    // Fade out (opacity)
    $('#btn-fade-out').click(function() {
        $('#fade-img').fadeOut('fast');
    });

    // Fade in
    $('#btn-fade-in').click(function() {
        $('#fade-img').fadeIn('fast');
    });

    // Toggle fade
    $('#btn-fade-toggle').click(function() {
        $('#fade-img').fadeToggle('fast');
    });

    // --- Task 4: .slideUp(), .slideDown(), .slideToggle() ---
    // For this task, I use one button (the panel header) to toggle the sliding panel
    $('#slide-header').click(function() {
        // .slideToggle() smoothly animates the element's 'height'
        $('#slide-panel').slideToggle();
    });

    // === PART 3: DOM MANIPULATION ===

    // --- Task 5: .append(), .prepend(), .remove() ---
    let itemCount = 2; // Counter for new items

    // Add to the end of the list
    $('#btn-append').click(function() {
        let newItem = '<li class="list-group-item">New Item (Appended) ' + itemCount + '</li>';
        $('#item-list').append(newItem);
        itemCount++;
    });

    // Add to the start of the list
    $('#btn-prepend').click(function() {
        let newItem = '<li class="list-group-item">New Item (Prepended) ' + itemCount + '</li>';
        $('#item-list').prepend(newItem);
        itemCount++;
    });

    // Remove the LAST <li> element from the list
    $('#btn-remove-last').click(function() {
        // Using the :last-child pseudo-selector
        $('#item-list li:last-child').remove();
    });

    // When we hover over Remove buttun it will be show which item will be removed
    $('#btn-remove-last').hover(
        function() {
            $('#item-list li:last-child').css('background', 'rgb(255, 88, 88)');
        },
        function() {
            $('#item-list li:last-child').css('background', '');
        }
    );

    // --- Task 6: Modifying Attributes .attr() ---
    let imgCount = 0;
    let linkCount = 0;

    $('#btn-change-img').click(function() {
        if (imgCount % 2 == 0) {
            // Change the 'src' (source) attribute of the image
            $('#attr-img').attr('src', 'images/porsche.jpg');
            imgCount++;
        } else {
            $('#attr-img').attr('src', 'images/fuji_mount.jpg');
            imgCount++;
        }
    });

    $('#btn-change-link').click(function() {
        if (linkCount % 2 == 0) {
            // Change the 'href' attribute of the link and its text
            $('#attr-link')
                .attr('href', 'https://www.linkedin.com/in/alikhan-serik-a32531376')
                .text('Go to LinkedIn');
            linkCount++;
        } else {
             $('#attr-link')
                .attr('href', 'https://github.com/alikhan-s')
                .text('Go to GitHub');
            linkCount++;
        }
            
    });

    // --- Task 7: Form Interaction .val() ---
    
    // For the "Name" field
    $('#input-name').on('keyup', function() {
        let name = $(this).val(); // Get the CURRENT value from the input
        $('#output-name').text(name); // Set it as the text in the <strong> tag
    });

    // For the "Email" field (can use 'input' for instant response)
    $('#input-email').on('input', function() {
        let email = $(this).val();
        $('#output-email').text(email);
    });

    // === PART 4: ANIMATIONS ===
    
    // --- Task 8: Basic Animation ---
    $('#btn-animate-basic').click(function() {
        $('#animate-box').animate({
            width: "200px",
            height: "200px",
            left: "150px" 
        }, 1000);
    });

    // --- Task 9: Sequential Animation ---
    // In jQuery, animations can be "chained"
    $('#btn-animate-seq').click(function() {
        let box = $('#animate-box');
        box.animate({ left: '300px' }, 500)      // Step 1: Move Right
           .animate({ top: '150px' }, 500)       // Step 2: Move Down
           .animate({ width: '50px', height: '50px', opacity: 0.5 }, 500) // Step 3: Shrink
           .animate({ left: '0px', top: '0px', width: '80px', height: '80px', opacity: 1 }, 1000); // Step 4: Back to origin
    });
    
    // --- Task 10: Combined Animation ---
    $('#btn-animate-combo').click(function() {
        $('#animate-box').animate({
            width: "+=50px",   // Increase by 50px
            height: "+=50px",  // Increase by 50px
            opacity: 0.3,
            left: "50px",
            top: "50px"
        }, 1000);
    });

    // --- Reset button for animations ---
    $('#btn-animate-reset').click(function() {
        // .css() is applied instantly, without animation
        $('#animate-box').css({
            width: "80px",
            height: "80px",
            left: "0px",
            top: "0px",
            opacity: 1
        });
    });

    // === PART 5: MINI-PROJECT (Accordion) ===
    
    $('.accordion-header').click(function() {
        // 1. Get the content panel that is IMMEDIATELY AFTER the clicked header
        let contentPanel = $(this).next('.accordion-content');

        // 2. Collapse (slideUp) ALL OTHER panels EXCEPT (.not()) the current one
        $('.accordion-content').not(contentPanel).slideUp('medium');
        
        // 3. Expand/Collapse (slideToggle) the CURRENT panel
        contentPanel.slideToggle('medium');

        // 4. Manage classes for styling (icon, background color)
        // Remove 'active' class from ALL OTHER headers
        $('.accordion-header').not(this).removeClass('active');
        $('.accordion-header').not(this).find('.accordion-icon').text('+').css('transform', 'rotate(0deg)');

        // 5. Toggle the 'active' class for the CURRENT header
        $(this).toggleClass('active');
        
        // 6. Change the icon
        if ($(this).hasClass('active')) {
            $(this).find('.accordion-icon').text('×'); // Using "×" instead of "+"
        } else {
            $(this).find('.accordion-icon').text('+');
        }
    });

}); // End of $(document).ready()