const options = { threshold: 0.4 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const container = entry.target;
            const progressEl = container.querySelector(".progress");
            const percentEl = container.querySelector(".percent");
            const target = +progressEl.dataset.target;

            container.classList.add("visible");

            // Đồng bộ phần trăm và thanh progress
            let count = 0;
            const duration = 3000; // tổng thời gian chạy (ms)
            const frameRate = 1000 / 60; // ~60fps
            const increment = target / (duration / frameRate);

            const animate = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(animate);
                }
                progressEl.style.width = count + "%";
                percentEl.textContent = Math.round(count) + "%";
            }, frameRate);

            observer.unobserve(entry.target);
        }
    });
}, options);

document.querySelectorAll(".progress-container").forEach((container) => {
    observer.observe(container);
});