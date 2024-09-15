let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1], items[0]);
});

ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 6,
    yPercent: -50,
  }),
  scrub: true,
  trigger: ".content",
  start: "top bottom",
  endTrigger: ".content",
  end: "top center",
});
