const musicContainer = document.querySelector ('.music-container')
const playBtn = document.querySelector ('#play')
const prevBtn = document.querySelector ('#prev')
const nextBtn = document.querySelector ('#next')
const audio = document.querySelector ('#audio')
const progress = document.querySelector ('.progress')
const progressContainer = document.querySelector ('.progress-container')
const title = document.querySelector ('#progress-container')
const cover = document.querySelector ('#cover')

//song titles. add more songs l8r
const songs = ['Pardon Me', 'Head Over Heels', 'Blinding Lights', 'When You Where Young']

//keep track of songs
let songIndex = 3

//initially load songs into DOM

loadSong(songs[songIndex])

//update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
    
function playSong() {
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')

audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pauseSong()
}
}

//not sure if required? come back later
function nextSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

    }
)

//previous song
function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    
    playSong()

}

//progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
}

//next song
function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex]);
    
    playSong();

}

//change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
  


