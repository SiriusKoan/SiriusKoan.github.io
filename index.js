function homepage_animation() {
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
}
