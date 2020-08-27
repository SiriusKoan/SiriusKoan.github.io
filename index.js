function typing_name() {
    var i = 0;
    var name = "SiriusKoan";
    var speed = 60;

    function typing_effect() {
        if (i < name.length) {
            document.getElementById("typing-name").innerHTML += name.charAt(i);
            i++;
            setTimeout(typing_effect, speed);
        }
    }
    typing_effect();
}