console.log("Welcome to Youtube Music 2.0");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Ye Tune Kya Kiya", filePath: "songs/1.mp3", coverPath: "covers/1.png" },
    { songName: "Baatein Karo", filePath: "songs/2.mp3", coverPath: "covers/1.png" },
    { songName: "Kho Gaye", filePath: "songs/3.mp3", coverPath: "covers/1.png" },
    { songName: "Apna Bana Le", filePath: "songs/4.mp3", coverPath: "covers/1.png" },
    { songName: "They Ran Away", filePath: "songs/5.mp3", coverPath: "covers/1.png" },
    { songName: "Chaudhary", filePath: "songs/6.mp3", coverPath: "covers/1.png" },
    { songName: "Dil Se Dastak", filePath: "songs/7.mp3", coverPath: "covers/1.png" },
    { songName: "Heer Ranjha", filePath: "songs/8.mp3", coverPath: "covers/1.png" },
    { songName: "Jo Tu Na Mila", filePath: "songs/9.mp3", coverPath: "covers/1.png" },
    { songName: "Made You Look", filePath: "songs/10.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Maan Meri Jaan", filePath: "songs/11.mp3", coverPath: "covers/1.png" },
    { songName: "Jaadugar", filePath: "songs/12.mp3", coverPath: "covers/1.png" },
    { songName: "Na Ja Tu", filePath: "songs/13.mp3", coverPath: "covers/1.png" },
    { songName: "OOPS", filePath: "songs/14.mp3", coverPath: "covers/1.png" },
    { songName: "Tu AAke Dekhle", filePath: "songs/15.mp3", coverPath: "covers/1.png" },
    { songName: "Ektarfa", filePath: "songs/16.mp3", coverPath: "covers/1.png" },
    { songName: "Zara Zara MTV Unwind", filePath: "songs/17.mp3", coverPath: "covers/1.png" },
    { songName: "Khud Se", filePath: "songs/18.mp3", coverPath: "covers/1.png" },
    { songName: "Shinunoga E-wa", filePath: "songs/19.mp3", coverPath: "covers/1.png" },
    { songName: "Let There Be Love {Remix} ", filePath: "songs/20.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Mitwa", filePath: "songs/21.mp3", coverPath: "covers/1.png" },
    { songName: "Chandaniya", filePath: "songs/22.mp3", coverPath: "covers/1.png" },
    { songName: "Yoon Shabnami", filePath: "songs/23.mp3", coverPath: "covers/1.png" },
    { songName: "Baarishein", filePath: "songs/24.mp3", coverPath: "covers/1.png" },
    { songName: "Gul", filePath: "songs/25.mp3", coverPath: "covers/1.png" },
    { songName: "Alag Aasmaan", filePath: "songs/26.mp3", coverPath: "covers/1.png" },
    { songName: "Mazaak", filePath: "songs/27.mp3", coverPath: "covers/1.png" },
    { songName: "Mishri", filePath: "songs/28.mp3", coverPath: "covers/1.png" },
    { songName: "Maula", filePath: "songs/29.mp3", coverPath: "covers/1.png" },
    { songName: "Riha", filePath: "songs/30.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Ocean", filePath: "songs/31.mp3", coverPath: "covers/1.png" },
    { songName: "Tera Chodoona Na", filePath: "songs/32.mp3", coverPath: "covers/1.png" },
    { songName: "Khudaya Khair", filePath: "songs/33.mp3", coverPath: "covers/1.png" },
    { songName: "Aashiq Tera", filePath: "songs/34.mp3", coverPath: "covers/1.png" },
    { songName: "Rabba Main Toh Mar Gaya", filePath: "songs/35.mp3", coverPath: "covers/1.png" },
    { songName: "Manja", filePath: "songs/36.mp3", coverPath: "covers/1.png" },
    { songName: "Tum Tak", filePath: "songs/37.mp3", coverPath: "covers/1.png" },
    { songName: "Naina", filePath: "songs/38.mp3", coverPath: "covers/1.png" },
    { songName: "O Sanam", filePath: "songs/39.mp3", coverPath: "covers/1.png" },
    { songName: "Aaj Ibadat", filePath: "songs/40.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Kabhi Kabhi Aditi", filePath: "songs/41.mp3", coverPath: "covers/1.png" },
    { songName: "Khayaal", filePath: "songs/42.mp3", coverPath: "covers/1.png" },
    { songName: "3 Minutes", filePath: "songs/43.mp3", coverPath: "covers/1.png" },
    { songName: "Chorre NCR AAle", filePath: "songs/44.mp3", coverPath: "covers/1.png" },
    { songName: "What If I Told You That I Love You", filePath: "songs/45.mp3", coverPath: "covers/1.png" },
    { songName: "Piya Haji Ali", filePath: "songs/46.mp3", coverPath: "covers/1.png" },
    { songName: "Training Wheels", filePath: "songs/47.mp3", coverPath: "covers/1.png" },
    { songName: "Sweet", filePath: "songs/48.mp3", coverPath: "covers/1.png" },
    { songName: "Bana Sharabi", filePath: "songs/49.mp3", coverPath: "covers/1.png" },
    { songName: "Kali Kali Zulfon Ke", filePath: "songs/50.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Waqt Ki Baatein", filePath: "songs/51.mp3", coverPath: "covers/1.png" },
    { songName: "Tuta Pull Wahan", filePath: "songs/52.mp3", coverPath: "covers/1.png" },
    { songName: "Aise Kyun - Ghazal Version", filePath: "songs/53.mp3", coverPath: "covers/1.png" },
    { songName: "Tose Naina - Mickey Virus", filePath: "songs/54.mp3", coverPath: "covers/1.png" },
    { songName: "Tu Rehti Hai", filePath: "songs/55.mp3", coverPath: "covers/1.png" },
    { songName: "Faasle", filePath: "songs/56.mp3", coverPath: "covers/1.png" },
    { songName: "KTMBK", filePath: "songs/57.mp3", coverPath: "covers/1.png" },
    { songName: "Kasoor", filePath: "songs/58.mp3", coverPath: "covers/1.png" },
    { songName: "Dhalti Rahe", filePath: "songs/59.mp3", coverPath: "covers/1.png" },
    { songName: "Pause", filePath: "songs/60.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Channa VE", filePath: "songs/61.mp3", coverPath: "covers/1.png" },
    { songName: "Tere Bina", filePath: "songs/62.mp3", coverPath: "covers/1.png" },
    { songName: "Kya Karein", filePath: "songs/63.mp3", coverPath: "covers/1.png" },
    { songName: "O Meri Laila", filePath: "songs/64.mp3", coverPath: "covers/1.png" },
    { songName: "Bones", filePath: "songs/65.mp3", coverPath: "covers/1.png" },
    { songName: "Enemy", filePath: "songs/66.mp3", coverPath: "covers/1.png" },
    { songName: "Main Bola Hey", filePath: "songs/67.mp3", coverPath: "covers/1.png" },
    { songName: "Mohbhang", filePath: "songs/68.mp3", coverPath: "covers/1.png" },
    { songName: "The Box", filePath: "songs/69.mp3", coverPath: "covers/1.png" },
    { songName: "Secret Love Song", filePath: "songs/70.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Hello", filePath: "songs/71.mp3", coverPath: "covers/1.png" },
    { songName: "Someone Like You", filePath: "songs/72.mp3", coverPath: "covers/1.png" },
    { songName: "Halo", filePath: "songs/73.mp3", coverPath: "covers/1.png" },
    { songName: "Shallow", filePath: "songs/74.mp3", coverPath: "covers/1.png" },
    { songName: "You Are The Reason", filePath: "songs/75.mp3", coverPath: "covers/1.png" },
    { songName: "Fight Song", filePath: "songs/76.mp3", coverPath: "covers/1.png" },
    { songName: "Faded", filePath: "songs/77.mp3", coverPath: "covers/1.png" },
    { songName: "Demons", filePath: "songs/78.mp3", coverPath: "covers/1.png" },
    { songName: "Memories", filePath: "songs/79.mp3", coverPath: "covers/1.png" },
    { songName: "Heather", filePath: "songs/80.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Wrecking Bell", filePath: "songs/81.mp3", coverPath: "covers/1.png" },
    { songName: "Because Of You", filePath: "songs/82.mp3", coverPath: "covers/1.png" },
    { songName: "Love Me Like You Do", filePath: "songs/83.mp3", coverPath: "covers/1.png" },
    { songName: "Unstoppable", filePath: "songs/84.mp3", coverPath: "covers/1.png" },
    { songName: "Someone You Loved", filePath: "songs/85.mp3", coverPath: "covers/1.png" },
    { songName: "Circles", filePath: "songs/86.mp3", coverPath: "covers/1.png" },
    { songName: "Beautiful People (feat. Khalid)", filePath: "songs/87.mp3", coverPath: "covers/1.png" },
    { songName: "2002", filePath: "songs/88.mp3", coverPath: "covers/1.png" },
    { songName: "2002 (Acoustic)", filePath: "songs/89.mp3", coverPath: "covers/1.png" },
    { songName: "Kill Bill", filePath: "songs/90.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Anti-Hero", filePath: "songs/91.mp3", coverPath: "covers/1.png" },
    { songName: "Unholy", filePath: "songs/92.mp3", coverPath: "covers/1.png" },
    { songName: "Creeping (With Weekend)", filePath: "songs/93.mp3", coverPath: "covers/1.png" },
    { songName: "Calm Down (Selena Gomez)", filePath: "songs/94.mp3", coverPath: "covers/1.png" },
    { songName: "Made You Look", filePath: "songs/95.mp3", coverPath: "covers/1.png" },
    { songName: "As It Was", filePath: "songs/96.mp3", coverPath: "covers/1.png" },
    { songName: "CUFF IT", filePath: "songs/97.mp3", coverPath: "covers/1.png" },
    { songName: "La Jumpa", filePath: "songs/98.mp3", coverPath: "covers/1.png" },
    { songName: "Nobody Gets Me", filePath: "songs/99.mp3", coverPath: "covers/1.png" },
    { songName: "Golden Hour", filePath: "songs/100.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "I am Good", filePath: "songs/101.mp3", coverPath: "covers/1.png" },
    { songName: "Rich Flex", filePath: "songs/102.mp3", coverPath: "covers/1.png" },
    { songName: "I Like You", filePath: "songs/103.mp3", coverPath: "covers/1.png" },
    { songName: "DESPECHÁ_RMX", filePath: "songs/104.mp3", coverPath: "covers/1.png" },
    { songName: "Escapism", filePath: "songs/105.mp3", coverPath: "covers/1.png" },
    { songName: "Npthing Is Lost", filePath: "songs/106.mp3", coverPath: "covers/1.png" },
    { songName: "Lavender Haze", filePath: "songs/107.mp3", coverPath: "covers/1.png" },
    { songName: "Late Night Talking", filePath: "songs/108.mp3", coverPath: "covers/1.png" },
    { songName: "Miss You", filePath: "songs/109.mp3", coverPath: "covers/1.png" },
    { songName: "LET GO", filePath: "songs/110.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Shirt", filePath: "songs/111.mp3", coverPath: "covers/1.png" },
    { songName: "Tití Me Preguntó", filePath: "songs/112.mp3", coverPath: "covers/1.png" },
    { songName: "I Aint Worried", filePath: "songs/113.mp3", coverPath: "covers/1.png" },
    { songName: "Star Walking", filePath: "songs/114.mp3", coverPath: "covers/1.png" },
    { songName: "Here With Me", filePath: "songs/115.mp3", coverPath: "covers/1.png" },
    { songName: "Under The Influence", filePath: "songs/116.mp3", coverPath: "covers/1.png" },
    { songName: "La Bachata", filePath: "songs/117.mp3", coverPath: "covers/1.png" },
    { songName: "Dreamers [FIFA World Cup]", filePath: "songs/118.mp3", coverPath: "covers/1.png" },
    { songName: "Bones", filePath: "songs/119.mp3", coverPath: "covers/1.png" },
    { songName: "Something In The Orange", filePath: "songs/120.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Lift Me Up", filePath: "songs/121.mp3", coverPath: "covers/1.png" },
    { songName: "10 35", filePath: "songs/122.mp3", coverPath: "covers/1.png" },
    { songName: "SNAP", filePath: "songs/123.mp3", coverPath: "covers/1.png" },
    { songName: "Until I Found You", filePath: "songs/124.mp3", coverPath: "covers/1.png" },
    { songName: "Vegas", filePath: "songs/125.mp3", coverPath: "covers/1.png" },
    { songName: "Just Wanna Rock You", filePath: "songs/126.mp3", coverPath: "covers/1.png" },
    { songName: "Bad Habit", filePath: "songs/127.mp3", coverPath: "covers/1.png" },
    { songName: "Boys a Liar", filePath: "songs/128.mp3", coverPath: "covers/1.png" },
    { songName: "Die For You", filePath: "songs/129.mp3", coverPath: "covers/1.png" },
    { songName: "About Damn Time", filePath: "songs/130.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Super Freaky Girl", filePath: "songs/131.mp3", coverPath: "covers/1.png" },
    { songName: "Left And Right [Jungkook-BTS]", filePath: "songs/132.mp3", coverPath: "covers/1.png" },
    { songName: "Pointless", filePath: "songs/133.mp3", coverPath: "covers/1.png" },
    { songName: "How Do I Say Goodbye", filePath: "songs/134.mp3", coverPath: "covers/1.png" },
    { songName: "STAY (Justin Bieber)", filePath: "songs/135.mp3", coverPath: "covers/1.png" },
    { songName: "Evergreen", filePath: "songs/136.mp3", coverPath: "covers/1.png" },
    { songName: "The Lonliest", filePath: "songs/137.mp3", coverPath: "covers/1.png" },
    { songName: "Shut Down", filePath: "songs/138.mp3", coverPath: "covers/1.png" },
    { songName: "Aarzu", filePath: "songs/139.mp3", coverPath: "covers/1.png" },
    { songName: "Aisay Kaiay", filePath: "songs/140.mp3", coverPath: "covers/1.png" },
    // ...............................................................................................................
    { songName: "Akhiyaan", filePath: "songs/141.mp3", coverPath: "covers/1.png" },
    { songName: "Bachana", filePath: "songs/142.mp3", coverPath: "covers/1.png" },
    { songName: "BLANKO", filePath: "songs/143.mp3", coverPath: "covers/1.png" },
    { songName: "Chanchal", filePath: "songs/144.mp3", coverPath: "covers/1.png" },
    { songName: "Choo Lo", filePath: "songs/145.mp3", coverPath: "covers/1.png" },
    { songName: "Da Da Dasse", filePath: "songs/146.mp3", coverPath: "covers/1.png" },
    { songName: "Darr", filePath: "songs/147.mp3", coverPath: "covers/1.png" },
    { songName: "Dheere Se", filePath: "songs/148.mp3", coverPath: "covers/1.png" },
    { songName: "Dil Na Jaaney", filePath: "songs/149.mp3", coverPath: "covers/1.png" },
    { songName: "Ek Raat", filePath: "songs/150.mp3", coverPath: "covers/1.png" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    const time = document.getElementById('SITime');
    time.innerText=parseInt(audioElement.currentTime/60)+":"+parseInt(audioElement.currentTime%60);
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // console.log(audioElement.src);
        // console.log(window.location.origin + `songs/${songIndex + 1}.mp3`);
        if (audioElement.src !== window.location.origin + `/songs/${songIndex + 1}.mp3`) {
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else {
            if (audioElement.paused) {
                audioElement.play();
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
            }
            else {
                audioElement.pause();
                gif.style.opacity = 0;
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                e.target.classList.add('fa-play-circle');
                e.target.classList.remove('fa-pause-circle');
            }
        }
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length() - 1) {
        songIndex = 0
    }
    else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length() - 1) {
        songIndex = 0
    }
    else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

