const button = document.getElementById("bouncing");


button.addEventListener("mouseover", function () {
    var changeTop = (Math.random() * 500);
    var changeLeft = (Math.random() * 500);


    $("button").css("margin-top", changeTop + "px");
    $("button").css("margin-left", changeLeft + "px");
});

