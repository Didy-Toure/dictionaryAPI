const form = document.querySelector('form');
const input = document.querySelector('#mot-input');
const definition = document.querySelector('#definition');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const word = input.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
    .then(response => response.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        definition.innerHTML = `Desolé, pas de définition trouvée pour ${word}.`;
      } else {
        definition.innerHTML = `${word}: ${data[0].meanings[0].definitions[0].definition}`;
      }
    })
    .catch(error => console.error(error));
});
