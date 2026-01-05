document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count-item h3");
    const duration = 2000; // thời gian chạy (ms) – tăng lên = chậm hơn

    const countUp = (counter) => {
        const target = +counter.innerText;
        let start = null;
        counter.innerText = "0";

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;

            const value = Math.min(
                Math.floor((progress / duration) * target),
                target
            );

            counter.innerText = value;

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    counters.forEach(countUp);
                    obs.disconnect();
                }
            });
        },
        { threshold: 0.4 }
    );

    const countSection = document.querySelector(".count-section");
    if (countSection) observer.observe(countSection);
});
