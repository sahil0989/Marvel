let dropdown = document.querySelector(".dropdown");
function myFunction() {
    dropdown.classList.toggle("dropdown_open");
}

function bio() {
    var y = document.getElementById("bio");
    if (y.style.display === "none") {
        y.style.display = "block";
    }
    document.getElementById("detailsChar").style.display = "none";
}

function hidden() {
    var x = document.getElementById("bio");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function america() {
    hidden();
    document.querySelector(".capt").classList.toggle("captain_america");
}

function iron() {
    hidden();
    document.querySelector(".ironMan").classList.toggle("iron_man");
}

function widow() {
    hidden();
    document.querySelector(".blackWidow").classList.toggle("black_widow");
}
function dr() {
    hidden();
    document.querySelector(".drStrange").classList.toggle("dr_strange");
}

function spider() {
    hidden();
    document.querySelector(".spiderMan").classList.toggle("spider_man");
}

function star() {
    hidden();
    document.querySelector(".starLord").classList.toggle("star_lord");
}

function groot() {
    hidden();
    document.querySelector(".grootMan").classList.toggle("groot_man");
}

function captain2() {
    hidden();
    document.querySelector(".captainMovies").classList.toggle("captain22");
}

function iron2() {
    hidden();
    document.querySelector(".ironMovies").classList.toggle("iron22");
}

function widow2() {
    hidden();
    document.querySelector(".widowMovies").classList.toggle("widow22");
}
function dr2() {
    hidden();
    document.querySelector(".drMovies").classList.toggle("dr22");
}
function spider2() {
    hidden();
    document.querySelector(".spiderMovies").classList.toggle("spider22");
}
function star2() {
    hidden();
    document.querySelector(".starMovies").classList.toggle("star22");
}
function groot2() {
    hidden();
    document.querySelector(".grootMovies").classList.toggle("groot22");
}

// sliding function 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".left");
hiddenElements.forEach((el) => observer.observe(el));

const ex = new IntersectionObserver((enter) => {
    enter.forEach((ent) => {
        console.log(ent);
        if (ent.isIntersecting) {
            ent.target.classList.add('up');
        }
        else {
            ent.target.classList.remove('up');
        }
    });
});

const example = document.querySelectorAll(".upper");
example.forEach((as) => ex.observe(as));

const bottom = new IntersectionObserver((enter) => {
    enter.forEach((ent) => {
        console.log(ent);
        if (ent.isIntersecting) {
            ent.target.classList.add('bt');
        }
        else {
            ent.target.classList.remove('bt');
        }
    });
});

const btm = document.querySelectorAll(".bottom");
btm.forEach((as) => bottom.observe(as));

const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('rt');
        }
        else {
            entry.target.classList.remove('rt');
        }
    });
});

const right = document.querySelectorAll(".right");
right.forEach((el) => obs.observe(el));

// -x-x-x-x-x-x-x-


// Front page animation

document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}