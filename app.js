const jokes = document.querySelectorAll(".joke");

console.log(jokes);

jokes.forEach((joke) => {
  joke.addEventListener("click", function () {
    joke.classList.toggle("active");
  });
});
