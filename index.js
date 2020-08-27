function homepage_animation() {
    // avatar
    function show_avatar() {
        avatar = document.getElementById("avatar");
        avatar.style.opacity = 1;
    }

    // typing name
    var i = 0;
    var name = "SiriusKoan";
    function typing_effect() {
        if (i < name.length) {
            document.getElementById("typing-name").innerHTML += name.charAt(i);
            i++;
            setTimeout(typing_effect, 100);
        }
    }

    // icon
    function show_icon(params) {
        document.getElementById("github").style.opacity = 1;
        document.getElementById("telegram").style.opacity = 1;
    }

    // copyright
    function show_copyright() {
        document.getElementById("copyright").style.opacity = 1;
    }

    show_avatar();
    setTimeout(typing_effect, 2000);
    setTimeout(show_icon, 3000);
    setTimeout(show_copyright, 4000);
}