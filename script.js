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

    var jumbotron = document.getElementsByClassName('jumbotron')[0];
    var scrollY = jumbotron.offsetTop + jumbotron.offsetHeight;

    setTimeout(function(){
        window.scrollTo(0, scrollY);
    }, 1);
}

function put_contact(){
    put_scene(document.getElementById('Contact_scene'));
}
