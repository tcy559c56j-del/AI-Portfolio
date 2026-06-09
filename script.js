const fills = document.querySelectorAll(".fill");

fills.forEach(function (fill) {

    const target = fill.dataset.width;

    setTimeout(function () {
        fill.style.width = target + "%";
    }, 300);

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = Number(counter.dataset.target);
        const current = Number(counter.innerText);

        const increment = Math.ceil(target / 50);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});