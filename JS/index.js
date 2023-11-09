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

async function fetchJoke() {
  fetch('https://example-apis.vercel.app/api/bad-jokes/random')
    .then(response => response.json())
    .then(data => {
      // Hier fügst du den Witz in das HTML-Dokument ein
      document.getElementById('bad-jokes').innerHTML = data.joke;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
}
fetchJoke();


