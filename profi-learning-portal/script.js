const trackButtons = document.querySelectorAll("[data-track]");
const trackCards = document.querySelectorAll("[data-track-card]");
const heroSearch = document.querySelector(".hero-search");

function setActiveTrack(track) {
  trackButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.track === track);
  });

  trackCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.trackCard === track);
  });
}

trackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTrack(button.dataset.track);
  });
});

if (heroSearch) {
  heroSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = heroSearch.querySelector("input")?.value.trim().toLowerCase() ?? "";

    if (query.includes("менедж")) {
      setActiveTrack("manager");
      document.querySelector("#managers")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (query.includes("нович") || query.includes("онборд")) {
      setActiveTrack("newcomer");
      document.querySelector("#onboarding")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (query.length > 0) {
      setActiveTrack("employee");
    }

    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
