const paginations = document.querySelectorAll(".pagination a");
paginations.forEach(pagination => {
  pagination.addEventListener("click", e => {
    const targetId = e.target.hash;
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const sections = document.querySelectorAll(".section");
const observerRoot = document.querySelector(".fullPageScroll");
const options = {
  root: observerRoot,
  rootMargin: "-50% 0px",
  threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
sections.forEach(section => {
  observer.observe(section);
});

function doWhenIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activatePagination(entry.target);
    }
  });
}

function activatePagination(element) {
  const currentActiveIndex = document.querySelector("#pagination .active");
  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("active");
  }
  const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
  newActiveIndex.classList.add("active");
}
