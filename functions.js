// avatar
function show_avatar() {
    avatar = document.getElementById("avatar");
    avatar.style.opacity = 1;
}

// icon
function show_icon() {
    document.getElementById("github").style.opacity = 1;
    document.getElementById("telegram").style.opacity = 1;
}

// copyright
function show_copyright() {
    document.getElementById("copyright").style.opacity = 1;
}

// show specific element
function show_content(id) {
    document.getElementById(id).style.opacity = 1;
}