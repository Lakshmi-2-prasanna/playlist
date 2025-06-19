// Ensure only one audio plays at a time
const audioPlayers = document.querySelectorAll("audio");

audioPlayers.forEach((audio) => {
  audio.addEventListener("play", () => {
    audioPlayers.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});

// Filter songs by language
function filterSongs(language) {
  const songs = document.querySelectorAll('.song-card');

  songs.forEach(song => {
    const lang = song.getAttribute('data-language').toLowerCase();

    if (language === 'all' || lang === language.toLowerCase()) {
      song.style.display = 'block';
    } else {
      song.style.display = 'none';
    }
  });
}

// Optional: show all songs by default on page load
document.addEventListener("DOMContentLoaded", () => {
  filterSongs('all');
});
