const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('September 20, 2023 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)


// FIRST PAGE

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fade-out-up", {
    opacity: 0,
    y: -100,
    scrollTrigger: {
        trigger: ".fade-out-up",
        start: ".fade-out-up",
        end: "bottom 20%",
        scrub: true,
        markers: false,
    },
});

gsap.to(".zoom-out", {
    opacity: 0,
    scale: 22, // Reset the scale for responsiveness
    y: 0, // Reset the y-axis movement for responsiveness
    delay: 0.25,
    scrollTrigger: {
        trigger: ".sentence",
        start: ".sentence", // Adjust trigger points for responsiveness
        end: "bottom 20%", // Adjust trigger points for responsiveness
        scrub: true,
        markers: false,
    },
});

gsap.to(".fade-out-down", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".fade-out-down",
        start: "top 50%",
        end: "bottom 15%",
        scrub: true,
        markers: false,
    },
});

gsap.to(".j2", {
    marginBottom: "0",
    paddingBottom: "0",
    borderBottom: "1rem solid rgba(0, 0, 0, 1)",

    scrollTrigger: {
        trigger: ".j2",
        start: "bottom 90%",
        end: "bottom 40%",
        scrub: true,
        markers: false,
    },
});

const splitTypes = document.querySelectorAll(".reveal");

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
            markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: "top",
        opacity: 0,
        stagger: 1,
    });
});


gsap.to(".text", {
    opacity: 1,
    x: 0,
    scale: 4,
    scrollTrigger: {
        trigger: ".animation-container",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
    },
});

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    // Get the element under the cursor
    const elementUnderCursor = document.elementFromPoint(clientX, clientY);

    // Get the background color of the element
    const backgroundColor = window.getComputedStyle(elementUnderCursor).backgroundColor;

    // Change cursor color based on background color
    if (backgroundColor === 'rgb(0, 0, 0)') {
        cursor.style.backgroundColor = 'white';
        cursor2.style.backgroundColor = 'white';
    } else {
        // cursor.style.backgroundColor = 'black';
        cursor2.style.backgroundColor = 'black';
    }
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// ------------------

// $(document).ready(function () {

//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll >= 1) {
//             $('.arrow').addClass('fade');
//         } else {
//             $('.arrow').removeClass('fade');
//         }
//     })
// });

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 1) {
        document.getElementsByClassName("arrow").className = "fade";
    } else {
        document.getElementsByClassName("arrow").className = "";
    }
}

