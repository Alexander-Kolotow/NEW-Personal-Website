import { JokeSection } from "./components/JokeSection/JokeSection.js";
import { Joke } from "./components/Joke/joke.js";

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function renderJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = "";

  // Create a new joke DOM element and append it to joke section
  const newJoke = Joke(joke);
  jokeSection.append(newJoke);
}

async function getJoke() {
  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/random"
  );
  const data = await response.json();
  renderJoke(data.joke);
}

getJoke();

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






