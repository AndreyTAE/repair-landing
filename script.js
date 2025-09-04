// Плавное появление элементов при скролле
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const onScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
