// if you scrolled down from top to bottom 1200px, then the UP Button appears in the footer and you can use the Event Listener below.
document.addEventListener("scroll", function() {
  if (window.scrollY > 1200) {
      document.querySelector(".up-button").style.display = "block";
  } else {
      document.querySelector(".up-button").style.display = "none";
  }
});
// Click on the UP Button and you get up to the header, but smooth!
document.querySelector(".up-button").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// bad jokes API mit fetch soll hier erscheinen!





