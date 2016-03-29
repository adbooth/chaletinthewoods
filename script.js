/* js/script.js */
function put_scene(elem){
    // Remove previous active scene
    $('.nav-entry').removeClass('active');
    $('.scene').addClass('hidden');

    // Get name of scene
    var name = elem.id.split('_')[0];
    // Get corresponding nav entry and scene
    var nav_entry = $('#' + name + '_nav-entry');
    var scene = $('#' + name + '_scene');
    // Make scene active
    nav_entry.addClass('active');
    scene.removeClass('hidden');
}

function put_contact(){
    put_scene(document.getElementById('Contact_scene'));
}

function put_about(){
    put_scene(document.getElementById('Home_scene'));
}

$(function(){
    // Add raised photo effect on mouseover
    $('.gallery-row img').hover(function(){
        // Mouse over
        $(this).addClass('raised-photo');
    }, function(){
        // Mouse off
        $(this).removeClass('raised-photo');
    });

});
