

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem')) ;
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let masterSongName = document.getElementById('masterSongName')


// Array for Songs List
let songs = [
    {
        songName: "Warriyo - Mortals",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg"
    },
    {
        songName: "Cielo - Huma Huma",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },
    {
        songName: "Deaf Kev - Invincible",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpg"
    },
    {
        songName: "Different Heaven & Ev!de",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpg"
    },
    {
        songName: "Janji Heroes",
        filePath: "songs/5.mp3",
        coverPath: "covers/5.jpg"
    },
    {
        songName: "Rabba - Salam-E-Ishq",
        filePath: "songs/6.mp3",
        coverPath: "covers/6.jpg"
    },
    {
        songName: "Sakhiyaan - Salam-E-Ishq",
        filePath: "songs/7.mp3",
        coverPath: "covers/7.jpg"
    },
    {
        songName: "Bhula Dena - Salam-E-Ishq",
        filePath: "songs/8.mp3",
        coverPath: "covers/8.jpg"
    },
    {
        songName: "Tumhari Kasam - Salam-E-Ishq",
        filePath: "songs/9.mp3",
        coverPath: "covers/9.jpg"
    },
    {
        songName: "Mere Mehboob - Salam-E-Ishq",
        filePath: "songs/10.mp3",
        coverPath: "covers/10.jpg"
    },
]


songItems.forEach((Element, i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Listen To Events

// Handle Play/Pause/Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;

    }
})
// updating the seek according the song play's
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

// updating the seek according the song play's
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


//playing the songs from the song item

 function makeAllPlays(){
    songItemPlay.forEach(function(Element){
        Element.classList.remove('fa-circle-pause')
        Element.classList.add('fa-circle-play')
    })
}
songItemPlay.forEach(function(Element){
    Element.addEventListener('click', function(e){
        // console.log(e.target)
        makeAllPlays()
        console.log(e)
        songIndex = parseInt(e.target.id);
        if(!isNaN(songIndex) && songIndex>=0 && songIndex < songs.length){
       
        gif.style.opacity = 1;
        if (audioElement.paused) {
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause')
            audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            masterSongName.innerText = songs[songIndex].songName;   
            audioElement.play();
        }
        else{
            audioElement.pause()
            
        }
     
            
    }

    })
})


// Handling previus and next buttons

next.addEventListener('click', function(){
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1
    }

    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0
    masterSongName.innerText = songs[songIndex].songName
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
    audioElement.play()
})

// Handling previus and next buttons
previous.addEventListener('click', function(){
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0
    masterSongName.innerText = songs[songIndex].songName
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
    audioElement.play()
})


