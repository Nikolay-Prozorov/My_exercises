window.onload = function() {
    var pos = 0;

    var box = document.getElementById("box");

    var t = setInterval(move, 10);

    function move() {
        if (pos>=150) {
            clearInterval(t);
            box.style.left = 0+"px";
            box.style.top = 0+"px";
        }
        else {
            pos ++;
            box.style.left = pos+"px";
            box.style.top = pos+"px";
        }
    }   
}