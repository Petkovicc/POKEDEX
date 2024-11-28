const pokeball = document.querySelector('.pokeball');
const pokemonSound = document.getElementById('pokemonSound');

let isPlaying = false;

pokeball.addEventListener('click', () => {
    if (isPlaying) {
    
        pokemonSound.currentTime = 0;
        pokemonSound.pause();
    } else {

        pokemonSound.play();
    }

    isPlaying = !isPlaying;
    
    pokeball.classList.toggle('opened');
});