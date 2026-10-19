let currentSlide = 1;

let isTransitioning = false;

const clover = document.querySelector(".clover");

function nextSlide() {
    if (isTransitioning || currentSlide >= 9) return;
    isTransitioning = true;
    if (currentSlide === 1) {
        const music = document.getElementById("bgMusic");

        if (music) {
            music.volume = 0.25;
            music.play().catch(function(error) {
                console.log("Không thể phát nhạc:", error);
            });
        }
    }

    document.body.classList.add("show-universe");
    document.body.classList.add("show-light");
    startUniverse();

    const current = document.getElementById("slide" + currentSlide);

    if (!current) {
        isTransitioning = false;
        return;
    }

    if (currentSlide === 3) {
    eyes.classList.add("pause-looking-around");
    }

    current.classList.add("leaving");

    setTimeout(function () {
        current.classList.remove("active");
        current.classList.remove("leaving");
        currentSlide++;

        eyes.classList.remove("slide7-wink");

        eyes.classList.remove("surprised");

        eyes.classList.remove("closing", "closed");

        if (currentSlide === 8) {
            clover.classList.add("show-clover");
            eyes.classList.add("move-left-down");
        } else {
            clover.classList.remove("show-clover");
            eyes.classList.remove("move-left-down");
        }

        isTransitioning = false;

        if (currentSlide === 1) {
            eyes.classList.add("hide-blush");
        } else {
            eyes.classList.remove("hide-blush");
        }

        const next = document.getElementById("slide" + currentSlide);
        if (next) {
    next.classList.add("active");
    eyes.classList.remove("shy");

    if (currentSlide === 3) {
        eyes.classList.add("looking-around");
        eyes.classList.remove("pause-looking-around");
        eyes.classList.remove("happy");
        eyes.classList.remove("excited");
    } else if (currentSlide === 4) {
        animateSlide4Eyes();
    }   else if (currentSlide === 5) {
        eyes.classList.remove("looking-around");
        eyes.classList.remove("pause-looking-around");
        eyes.classList.add("happy");
        eyes.classList.remove("excited");
    } else if (currentSlide === 9) {
        eyes.classList.remove("looking-around");
        eyes.classList.remove("pause-looking-around");
        eyes.classList.remove("happy");
        eyes.classList.remove("sparkly");
        eyes.classList.add("excited");

        startFallingClovers();
    }  else if (currentSlide === 6 || currentSlide === 7) {
        eyes.classList.remove("looking-around");
        eyes.classList.remove("pause-looking-around");
        eyes.classList.remove("happy");
        eyes.classList.remove("excited");
        eyes.classList.add("sparkly"); 
        if (currentSlide === 7) {
        startSlide7EyeEffect();
        }
    }  else {
        eyes.classList.remove("looking-around");
        eyes.classList.remove("pause-looking-around");
        eyes.classList.remove("happy");
        eyes.classList.remove("excited");
        eyes.classList.remove("sparkly");
        eyes.classList.remove("shy");
    } 

    if (currentSlide === 2) {
        eyes.classList.remove("show-blush");

        setTimeout(function () {
            eyes.classList.add("surprised");

            setTimeout(function () {
                eyes.classList.add("show-blush");
            }, 1000);
        }, 700);
    }
}
}, 400);
}

function prevSlide() {
    if (isTransitioning || currentSlide <= 1) return;

    isTransitioning = true;

    const current = document.getElementById("slide" + currentSlide);

    if (!current) {
        isTransitioning = false;
        return;
    }

    if (currentSlide === 3) {
    eyes.classList.add("pause-looking-around");
    }

    current.classList.add("leaving");

    setTimeout(function () {
        current.classList.remove("active");
        current.classList.remove("leaving");

        currentSlide--;

        eyes.classList.remove("slide7-wink");

        eyes.classList.remove("surprised");

        if (currentSlide === 8) {
            clover.classList.add("show-clover");
            eyes.classList.add("move-left-down");
        } else {
            clover.classList.remove("show-clover");
            eyes.classList.remove("move-left-down");
        }

        const previous = document.getElementById("slide" + currentSlide);

        if (previous) {
            previous.classList.remove("leaving");
            previous.classList.add("active");
        }

        if (currentSlide === 1) {
            eyes.classList.remove("surprised");
            eyes.classList.remove("closing", "closed");
            eyes.classList.remove("show-blush");
            eyes.classList.add("hide-blush");
        } else {
            eyes.classList.remove("hide-blush");
        }
        
        if (currentSlide === 3) {
            eyes.classList.remove("slide4-left");
            eyes.classList.remove("surprised");
            eyes.classList.remove("closing", "closed");
            eyes.classList.add("looking-around");
            eyes.classList.remove("pause-looking-around");
            eyes.classList.remove("happy");
            eyes.classList.remove("excited");
        } else if (currentSlide === 4) {
            animateSlide4Eyes();
        } else if (currentSlide === 5) {
            eyes.classList.remove("surprised");
            eyes.classList.remove("closing", "closed");
            eyes.classList.remove("looking-around");
            eyes.classList.remove("pause-looking-around");
            eyes.classList.remove("sparkly");
            eyes.classList.add("happy");
            eyes.classList.remove("excited");
        } else if (currentSlide === 9) {
            eyes.classList.remove("looking-around");
            eyes.classList.remove("pause-looking-around");
            eyes.classList.remove("happy");
            eyes.classList.remove("sparkly");
            eyes.classList.add("excited");
        } else if (currentSlide === 6 || currentSlide === 7) {
            eyes.classList.remove("looking-around");
            eyes.classList.remove("pause-looking-around");
            eyes.classList.remove("happy");
            eyes.classList.remove("excited");
            eyes.classList.add("sparkly");
            if (currentSlide === 7) {
            startSlide7EyeEffect();
            }
        }else {
            eyes.classList.remove("looking-around");
            eyes.classList.remove("pause-looking-around");
            eyes.classList.remove("happy");
            eyes.classList.remove("excited");
            eyes.classList.remove("sparkly");
            eyes.classList.remove("shy");
        }

        isTransitioning = false;
    }, 400);
}

const universe = document.getElementById("universe");
let universeStarted = false;

function startUniverse() {
    if (universeStarted) return;

    universeStarted = true;
    document.body.classList.add("show-universe");

    for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");
    star.className = "space-star";

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    universe.appendChild(star);
    }
    scheduleShootingStar();
}

function createShootingStar() {
    const meteor = document.createElement("span");
    meteor.className = "shooting-star";

    meteor.style.left = Math.random() * 65 + "vw";
    meteor.style.top = Math.random() * 40 + "vh";
    meteor.style.animationDuration = (4 + Math.random() * 3) + "s";

    universe.appendChild(meteor);

    meteor.addEventListener("animationend", function () {
        meteor.remove();
    });
}

function scheduleShootingStar() {
    if (!universeStarted) return;

    createShootingStar();

    setTimeout(function () {
        scheduleShootingStar();
    }, 7000 + Math.random() * 5000);
}

const container = document.querySelector(".container");
const containerRect = container.getBoundingClientRect();
const eyes = document.querySelector(".eyes");

function animateSlide4Eyes() {
    eyes.classList.add("slide4-left");
    eyes.classList.remove(
        "shy",
        "happy",
        "excited",
        "sparkly",
        "looking-around",
        "pause-looking-around",
        "closing",
        "closed",
        "show-closed-mark"
    );

    eyes.classList.add("closing");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (currentSlide === 4) {
                eyes.classList.add("closed");

                setTimeout(() => {
                    if (currentSlide === 4) {
                        eyes.classList.add("show-closed-mark");
                    }
                }, 700);
            }
        });
    });
}

window.addEventListener("load", function () {
    eyes.classList.add("hide-blush");
});

document.addEventListener("click", function (event) {
    if (event.target.closest("button")) return;

    if (currentSlide < 9) {
        nextSlide();
    }
});


let cloverInterval = null;

function startFallingClovers() {
    if (cloverInterval) return;

    cloverInterval = setInterval(() => {
        if (currentSlide !== 9) {
            stopFallingClovers();
            return;
        }

        const clover = document.createElement("span");
        clover.className = "falling-clover";
        clover.textContent = "🍀";

        const cloverSize = window.innerWidth <= 768 ? 22 : 35;
        const size = window.innerWidth <= 768
            ? 18 + Math.random() * 18
            : 25 + Math.random() * 30;

        clover.style.left =
            Math.random() * Math.max(0, document.documentElement.clientWidth - size) + "px";

        clover.style.fontSize = size + "px";
        clover.style.animationDuration = (4 + Math.random() * 5) + "s";

        document.body.appendChild(clover);

        clover.addEventListener("animationend", () => {
            clover.remove();
        });
    }, 250);
}

function startSlide7EyeEffect() {
    eyes.classList.remove("slide7-wink");

    const rightEye = eyes.querySelector(
        ".eye-group:last-child .eye"
    );

    if (!rightEye) return;

    requestAnimationFrame(() => {
        if (currentSlide !== 7) return;

        eyes.classList.add("slide7-wink");

        setTimeout(() => {
            if (currentSlide !== 7) return;

            const rect = rightEye.getBoundingClientRect();
            const star = document.createElement("span");

            star.className = "shooting-eye-star";
            star.textContent = "⭐";
            star.style.left = rect.left + rect.width / 2 + "px";
            star.style.top = rect.top + rect.height / 2 + "px";

            document.body.appendChild(star);

            star.addEventListener("animationend", () => {
                star.remove();
            });
        }, 600);

        setTimeout(() => {
            if (currentSlide !== 7) return;

            eyes.classList.remove("slide7-wink");
        }, 1200);
    });
}

function stopFallingClovers() {
    clearInterval(cloverInterval);
    cloverInterval = null;

    document.querySelectorAll(".falling-clover").forEach(clover => {
        clover.remove();
    });
}

setTimeout(() => {
    if (currentSlide !== 7) return;

    eyes.classList.remove("slide7-wink");

    const eyeList = eyes.querySelectorAll(".eye");

    eyeList.forEach(eye => {
        eye.style.animation = "none";
    });

    void eyes.offsetWidth;

    eyeList.forEach(eye => {
        eye.style.animation = "";
    });
}, 1200);