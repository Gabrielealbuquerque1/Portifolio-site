var icones = document.querySelectorAll(".hab-icon");
for (var i = 0; i<icones.length; i++) {
    icones[i].addEventListener("mouseover", function () {
        this.classList.add("colored");
    })
    icones[i].addEventListener("mouseout", function () {
        this.classList.remove("colored");
    })
}