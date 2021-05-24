function homepage_animation() {
    show_avatar();

    var name = "SiriusKoan";
    var i = 0;
    function typing_effect() {
        if (i < name.length) {
            document.getElementById("typing-name").innerHTML += name.charAt(i);
            i++;
            setTimeout(typing_effect, 100);
        }
    }
    setTimeout(typing_effect, 2000);

    setTimeout(show_icon, 3000);
}

function about_animation() {
    show_avatar();
    setTimeout(function() {show_content("about-content")}, 2000);
}