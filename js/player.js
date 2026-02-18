const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const progressBar = document.querySelector("progress");
const seekBar = document.querySelector("#controladores input[type='range']");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeControl = document.getElementById("volumeControl");
const playbackRate = document.getElementById("playbackRate");
const waveformProgress = document.getElementById("waveformProgress");

const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const playlistContainer = document.getElementById("playlist");

let tracks = [];
let currentTrackIndex = 0;
let isPlaying = false;

/* ==============================
   CARGA JSON
============================== */

fetch("data/tracks.json")
    .then(response => response.json())
    .then(data => {
        tracks = data.tracks;
        renderPlaylist();
        loadTrack(0);
    })
    .catch(error => console.error("Error cargando tracks:", error));

/* ==============================
   RENDER PLAYLIST
============================== */

function renderPlaylist() {
    playlistContainer.innerHTML = "";

    tracks.forEach((track, index) => {
        const item = document.createElement("div");
        item.classList.add("playlist-item");
        item.textContent = `${track.title} - ${track.artist}`;

        item.addEventListener("click", () => {
            loadTrack(index);
            audio.play();
            playBtn.textContent = "❚❚";
            isPlaying = true;
        });

        playlistContainer.appendChild(item);
    });

    updateActiveTrack();
}

/* ==============================
   CARGAR CANCIÓN
============================== */

function loadTrack(index) {
    const track = tracks[index];

    audio.src = track.audio;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;

    currentTrackIndex = index;
    updateActiveTrack();
}

/* ==============================
   MARCAR ACTIVA
============================== */

function updateActiveTrack() {
    const items = document.querySelectorAll(".playlist-item");

    items.forEach(item => item.classList.remove("active"));

    if (items[currentTrackIndex]) {
        items[currentTrackIndex].classList.add("active");
    }
}

/* ==============================
   FORMATEO TIEMPO
============================== */

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateTimeDisplay() {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration || 0);
}

/* ==============================
   PROGRESO
============================== */

function updateProgress() {
    if (audio.duration) {
        const progress = audio.currentTime / audio.duration;
        progressBar.value = progress;
        seekBar.value = progress;
        waveformProgress.style.width = `${100 - (progress * 100)}%`;
    }
    updateTimeDisplay();
}

/* ==============================
   PLAY / PAUSE
============================== */

playBtn.addEventListener("click", function () {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = "▶";
    } else {
        audio.play();
        playBtn.textContent = "❚❚";
    }
    isPlaying = !isPlaying;
});

/* SEEK */
seekBar.addEventListener("input", function () {
    if (audio.duration) {
        const progress = this.value;
        audio.currentTime = progress * audio.duration;
    }
});

/* VOLUMEN */
volumeControl.addEventListener("input", function () {
    audio.volume = this.value;
});

/* VELOCIDAD */
playbackRate.addEventListener("change", function () {
    audio.playbackRate = parseFloat(this.value);
});

/* EVENTOS AUDIO */
audio.addEventListener("loadedmetadata", updateTimeDisplay);
audio.addEventListener("timeupdate", updateProgress);

audio.addEventListener("ended", function () {
    isPlaying = false;
    playBtn.textContent = "▶";
});