const counters = document.querySelectorAll(".stat-number");

function animateNumbers() {
    counters.forEach(counter => {
        const realValue = +counter.getAttribute("data-target");
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                counter.textContent = Math.floor(Math.random() * (realValue + 50));
            }, i * 80);
        }

        setTimeout(() => {
            counter.textContent = realValue;
        }, 900);
    });
}

// al cargar y cada 5s
animateNumbers();
setInterval(animateNumbers, 5000);
