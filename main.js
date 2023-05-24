// Global variables and querying
let musicObj;
let edmBtn = document.querySelector('#edmBtn')
edmBtn.style.fontFamily = 'Space Grotesk'
let metalBtn = document.querySelector('#metalBtn')
metalBtn.style.fontFamily = 'Metal Mania'
let bluegrassBtn = document.querySelector('#bluegrassBtn')
bluegrassBtn.style.fontFamily = 'Caveat'


function setup() { // Setup function, necessary for doing anything with p5. Contains canvas creation, button event listeners, and the object containing the music files.
    musicObj = {
        edm: {
            karate: loadSound('music/karate.mp4'),
            pyramids: loadSound('music/pyramids.mp3'),
            scarab: loadSound('music/scarab.mp3')
        },
        metal: {
            repentless: loadSound('music/repentless.mp4'),
            continuum: loadSound('music/continuum.mp3'),
            choke: loadSound('music/choke.mp3')
        },
        bluegrass: {
            aint: loadSound('music/aint.mp3'),
            dooley: loadSound('music/dooley.mp3'),
            codeine: loadSound('music/codeine.mp3')
        }
    }
    let canvas = createCanvas(100, 100);
    canvas.parent('footer');
    background('grey');
    canvas.mousePressed(playSong) 
    
    edmBtn.addEventListener('click', (e) => {
        if (!currentSong.isPlaying()) {
            currentSong = randomProperty(musicObj.edm)
        }
    })
    metalBtn.addEventListener('click', (e) => {
        if (!currentSong.isPlaying()) {
            currentSong = randomProperty(musicObj.metal)
        }
    })
    bluegrassBtn.addEventListener('click', (e) => {
        if (!currentSong.isPlaying()) {
            currentSong = randomProperty(musicObj.bluegrass)
        }
        })
        currentSong = musicObj.edm.karate
} 

function randomProperty(obj) { // Function for getting a random song property from musicObj 
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
}

function playSong() { // Function for starting and stopping currentSong from playing
    if (currentSong.isPlaying()) {
        currentSong.stop();
        background('grey')
      } else {
        currentSong.play();
        background('#339966')
      }
}




  

  

