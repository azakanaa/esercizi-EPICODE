let config = {};
let ricerca = document.getElementById("ricerca");

// let contenitore = [];

const rowArtist = document.getElementById("rowArtist");
const rowAlbum = document.getElementById("rowAlbum");
const rowTracce = document.getElementById("rowTracce");

const playPauseButton = document.querySelector(".play-pause");
const progressBar = document.querySelector(".progress");
const progressContainer = document.querySelector(
  ".progress-container .progress-bar"
);
const volumeProgressBar = document.querySelector(".volume-bar .progress");
const volumeContainer = document.querySelector(".volume-bar .progress-bar");

const cTime = document.getElementById("currentTime");
const tTime = document.getElementById("totalTime");

let isPlaying = false;
let audio;

function togglePlayPause() {
  if (audio) {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseIcon();
  }
}

const songBar = document.querySelector('.song-bar')

function canzoneInRiproduzione(element) {
  console.log(element)
  const canzoneInPlay = document.getElementById('title');
  const artistaInPlay = document.getElementById('artist');
  const imgInPlay = document.getElementById('imgPlay');
  if (audio) {
    songBar.classList.remove('d-none')
    canzoneInPlay.innerText = `${element.title}`;
    artistaInPlay.innerText = `${element.artist.name}`;
    imgInPlay.src = `${element.album.cover_medium}`;
  }
}

// Funzione per aggiornare l'icona del pulsante play/pausa
function updatePlayPauseIcon() {
  playPauseButton.classList.toggle("bi-play-fill", !isPlaying);
  playPauseButton.classList.toggle("bi-pause-fill", isPlaying);
}

playPauseButton.addEventListener("click", togglePlayPause);

progressContainer.addEventListener("click", function (e) {
  if (audio) {
    const clickX = e.offsetX;
    const progressBarWidth = progressContainer.offsetWidth;
    const clickPercent = clickX / progressBarWidth;
    const newTime = clickPercent * audio.duration;
    audio.currentTime = newTime;
  }
});

volumeContainer.addEventListener("click", function (e) {
  const clickX = e.offsetX;
  const volumeBarWidth = volumeContainer.offsetWidth;
  const clickPercent = clickX / volumeBarWidth;
  if (audio) {
    audio.volume = clickPercent;
  }
  volumeProgressBar.style.width = `${clickPercent * 100}%`;
});

function getDurata(time) {
  time = parseInt(time);
  const minuti = Math.floor(time / 60);
  let secondi = time - minuti * 60;
  if (secondi >= 0 && secondi < 10) {
    secondi = "0" + secondi;
  }
  return `${minuti}:${secondi}`;
}

window.addEventListener("load", init);
function init() {
  GET();
}

const GET = async () => {
  try {
    let jsonConfig = await fetch("assets/data/config.json");
    jsonConfig = await jsonConfig.json();
    config = jsonConfig;
    await getArtist();
    getAlbum();
    getTrack();
    getLibrary();
    getParams();
  } catch (error) {
    console.error(error);
  }
};


async function getArtist() {
  for (const [key, value] of Object.entries(config.artist)) {
    let artista = await fetch(
      `${config.fetchs.artist}${key}`,
      config.options.artist
    );
    artista = await artista.json();

    const div = document.createElement("div");
    div.classList.add("col-2");
    div.innerHTML = `
		<a href="artista.html?id=${artista.id}">
			<div class="card border-0" id="author-${artista.id}" style="background-color:#181818">
				<img src="${artista.picture_medium}" class="card-img-top w-75 p-2 m-auto rounded-circle" alt="${artista.name}">
				<div class="card-body">
					<h6 class="card-title">${artista.name}</h6>
					<p class="card-text text-secondary">Artista</p>
				</div>
			</div>
		</a>`;
    rowArtist.appendChild(div);
  }
}

async function getAlbum() {
    
     config.home.albums.forEach(async (element) => {
    let album = await fetch(
      `${config.fetchs.album}${element}`,
      config.options.album
    );
    album = await album.json();
    const div = document.createElement("div");
    div.classList.add("col-2");
    div.innerHTML = `
		<a href="album.html?id=${album.id}">
			<div class="card border-0" id="album-${album.id}" style="background-color:#181818">
				<img src="${album.cover_medium}" class="card-img-top w-75 p-2 m-auto rounded-2" alt="${album.title}">
				<div class="card-body">
					<h6 class="card-title">${album.title}</h6>
					<p class="card-text text-secondary">Album &middot; ${album.artist.name}</p>
				</div>
			</div>
		</a>`;
    rowAlbum.appendChild(div);
  });    
    
   
 
}

async function getTrack() {
  let ricerca =
    config.home.tracks[Math.floor(Math.random() * config.home.tracks.length)];
  let track = await fetch(
    `${config.fetchs.search}${ricerca}`,
    config.options.search
  );
  track = await track.json();
  let count = 0;
  track.data.forEach(async (element, index) => {
    if (count >= 6) {
      return;
    }
    count++;
    const div = document.createElement("div");
    div.classList.add("col-2");
    div.innerHTML = `
		<div class="card border-0" id="search-${
      element.id
    }" style="background-color:#181818" data-preview="${element.preview}" data-index="${index}">
			<img src="${
        element.album.cover_medium
      }" class="card-img-top w-75 p-2 m-auto rounded-2" alt="${element.title}">
			<div class="card-body">
				<h6 class="card-title">${element.title}</h6>
				<p class="card-text text-secondary">${
          (element.type == "track" && "Traccia") || "Album"
        } &middot; ${element.artist.name}</p>
			</div>
		</div>`;
    rowTracce.appendChild(div);




    
    const card = document.getElementById(`search-${element.id}`);


    
    card.addEventListener("click", function (e) {
      e.preventDefault();
      if (audio) {
        canzoneInRiproduzione()
        if (isPlaying) {
          togglePlayPause();
        }
        audio.removeEventListener("timeupdate", function () {
          const progressPercent = (audio.currentTime / audio.duration) * 100;
          progressBar.style.width = `${progressPercent}%`;
        });
        audio = null;
      }
      audio = new Audio(this.getAttribute("data-preview"));
      cTime.innerText = "0:00";
      canzoneInRiproduzione(track.data[parseInt(this.getAttribute('data-index'))])
      audio.addEventListener("timeupdate", function () {
        tTime.innerText = getDurata(this.duration);
        const progressPercent = (this.currentTime / this.duration) * 100;
        cTime.innerText = getDurata(this.currentTime);
        progressBar.style.width = `${progressPercent}%`;
      });
      togglePlayPause();
    });
  });
}

let libreria = document.getElementById("libreria");

async function getLibrary() {
  for (const [key, value] of Object.entries(config.library)) {
    let artista = await fetch(
      `${config.fetchs.artist}${key}`,
      config.options.artist
    );
    artista = await artista.json();
    const div = document.createElement("div");
    div.classList.add("row", "py-2");
    div.innerHTML = `
        <div class="col-2">
            <a href="artista.html?id=${key}">
                <img
                    src="${artista.picture_small}"
                    class="img-fluid rounded-circle"
                    alt="${artista.name}"
                />
            </a>
        </div>
        <div class="col-10">
            <a href="artista.html?id=${key}">
                <h6 id="nome">${artista.name}</h6>
                <div>
                    <span class="text-white opacity-50"
                    >Artista</span
                    >
                </div>
            </a>
        </div>
        `;
    libreria.appendChild(div);
    value.albums.forEach(async (element) => {
      let album = await fetch(
        `${config.proxy}${config.fetchs.album}${element}`,
        config.options.album
      );
      album = await album.json();
      const div2 = document.createElement("div");
      div2.classList.add("row", "py-2");
      div2.innerHTML = `
            <div class="col-2">
                <a href="album.html?id=${element}">
                <img
                    src="${album.cover_small}"
                    class="img-fluid rounded-2"
                    alt="${album.title}"
                />
                </a>
            </div>
            <div class="col-10">
                <a href="album.html?id=${element}">
                <h6 id="nome">${album.title}</h6>
                <div>
                    <span class="text-white opacity-50"
                    >Album &middot; ${album.artist.name}</span
                    >
                </div>
                </a>
            </div>
            `;
      libreria.appendChild(div2);
      album.tracks.data.forEach(async (element2) => {
        const div3 = document.createElement("div");
        div3.classList.add("row", "py-2");
        div3.innerHTML = `
                <div class="col-2">
                    <img
                        src="${album.cover_small}"
                        class="img-fluid rounded-2"
                        alt="${element2.title}"
                    />
                </div>
                <div class="col-10">
                    <h6 id="nome">${element2.title}</h6>
                    <div>
                        <span class="text-white opacity-50"
                        >Album &middot; ${album.title}</span
                        >
                    </div>
                </div>
                `;
        libreria.appendChild(div3);
      });
    });
  }
}

let container = document.getElementById("container");

const h2Artista = document.getElementById('h2Artista')
const h2Album = document.getElementById('h2Album')
const h2Tracce = document.getElementById('h2Tracce')

const contenitore = {};


async function search() {
  const valueRicerca = ricerca.value;
  try {
    const response = await fetch(
      `https://corsproxy.io/?https://api.deezer.com/search?q=${valueRicerca}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "795a258612mshd9818e547d03173p17e25bjsn04018e5e81ed",
          "Access-Control-Allow-Headers":
            "X-Requested-With, Content-Type, Accept, Origin",
        },
      }
    );
    let risposta = await response.json();
    if (risposta) {
        //C'ho messo due ore a capire che dovevo svuotare qua dio p****o
        h2Artista.innerText = '';
        h2Tracce.innerText = '';
        rowArtist.innerHTML = '';
        rowAlbum.innerHTML = '';
        rowTracce.innerHTML = '';
      for (let i = 0; i < risposta.data.length; i++) {
        //Dati dell'album
        console.log(risposta)
        risposta.data[i].album.id;
        risposta.data[i].album.title;
        risposta.data[i].album.cover;
        risposta.data[i].album.tracklist;
        //Dati dell'artista
        risposta.data[i].artist.id;
        risposta.data[i].artist.name;

      //creo elemento div e gli do una classe
        const divAlbum = document.createElement('div');
        divAlbum.classList.add('col-2')
        
//svuto l'auttuale div prima di popolarlo
        h2Album.innerText = `${risposta.data[0].artist.name}`
//lo popolo
        divAlbum.innerHTML = `
         <a href="album.html?id=${risposta.data[i].album.id}">
         <div class="card border-0" id="album-${risposta.data[i].album.id}" style="background-color:#181818">
             <img src="${risposta.data[i].album.cover}" class="card-img-top w-75 p-2 m-auto rounded-2" alt="${risposta.data[i].album.title}">
             <div class="card-body">
                 <h6 class="card-title">${risposta.data[i].album.title}</h6>
                 <p class="card-text text-secondary">Album &middot; ${risposta.data[i].artist.name}</p>
             </div>
         </div>
     </a>`
     
        rowAlbum.appendChild(divAlbum);
        
      }
    } else {
      console.log("Errore");
    }
  } catch (error) {
    console.error(error);
  }
};

const searchBar = ricerca.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {

    return search();
  }
});

async function getParams(){
  const link = window.location.search;
  const urlParametro = new URLSearchParams(link)
  let risultato = urlParametro.get('risultato');
  if(risultato){
  ricerca.value = risultato;
  search();
  }
  }