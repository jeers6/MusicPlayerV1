// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

const songSplash = document.getElementById('songSplash');
const splashTitle = document.getElementById('splashTitle');
const splashArtist = document.getElementById('splashArtist');

// Elements for Song Detail Page (kept for structure, not actively used in click flow)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn');

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');
const songMeaningContainer = document.getElementById('songMeaningContainer');
const songMeaningText = document.getElementById('songMeaningText');
const toggleMeaningBtn = document.getElementById('toggleMeaningBtn');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');
const playerKaraokeBtn = document.getElementById('playerKaraokeBtn'); // Nuevo elemento para el botón de karaoke

// App State
let songs = [
    {
        id: 1,
        title: "Digital Love",
        artist: "Daft Punk",
        album: "Discovery",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2732c25dad9f8fd54652f7ba5df",
        audioSrc: "https://www.dropbox.com/scl/fi/2nb00y3mh571kp85c4k52/Digital-Love-Audio.mp3?rlkey=7jyall23usj8q0vrnv0z6ho4b&raw=1", // <-- Enlace corregido
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/3xlya5cjg2w9ptt3q5glt/Digital-Love-Pista.mp3?rlkey=1ia8mk3fkx4qpn3fax4qdjjde&raw=1", // <-- Enlace corregido
        videoBgSrc: "https://www.dropbox.com/scl/fi/osltoeobn3aj8r5hq9hgj/Digital-Love-Fondo.mp4?rlkey=diua840v1uiijjpefphunai82&raw=1", // <-- Enlace corregido
        lyrics: [
            { time: 24, text: "Last night I had a dream about you" },
            { time: 27, text: "In this dream, I'm dancing right beside you" },
            { time: 31, text: "And it looked like everyone was having fun" },
            { time: 35, text: "The kind of feeling I've waited so long" },
            { time: 39, text: "Don't stop, come a little closer" },
            { time: 43, text: "As we jam, the rhythm gets stronger" },
            { time: 46, text: "There's nothing wrong with just a little, little fun" },
            { time: 51, text: "We were dancing all night long" },
            { time: 54, text: "The time is right to put my arms around you" },
            { time: 58, text: "You're feeling right, you wrap your arms around too" },
            { time: 62, text: "But suddenly, I feel the shining sun" },
            { time: 66, text: "Before I knew it, this dream was all gone" },
            { time: 69, text: "Ooh, I don't know what to do" },
            { time: 75, text: "About this dream and you" },
            { time: 79, text: "I wish this dream comes true" },
            { time: 85, text: "Ooh, I don't know what to do" },
            { time: 91, text: "About this dream and you" },
            { time: 95, text: "I wish this dream comes true" },
            { time: 102, text: "♫♫♫♫♫" },
            { time: 196, text: "Why don't you play the game?" },
            { time: 204, text: "Why don't you play the game?" },
            { time: 207, text: "♫♫♫♫♫" }
        ],
        meaning: "Esta canción me recuerda lo que siento contigo. Como en la letra, muchas veces sueño con tenerte cerca, con bailar, reír y sentir que todo es perfecto a tu lado. Aunque todavía no estemos juntos en persona, contigo vivo esa ilusión, ese sueño que no quiero que acabe. Lo que más quiero es que ese sueño que tengo contigo se vuelva realidad, y sé que lo haremos. Tú eres ese ‘Digital Love’ en mi vida, el que me hace sonreír y sentir que todo tiene sentido"
    },
    {
        id: 2,
        title: "Imagination",
        artist: "Foster The People",
        album: "Imagination",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27366d1f6f5ce667d4d9cf8c2bd",
        audioSrc: "https://www.dropbox.com/scl/fi/k8eej58jccs6uainfy35x/Imagination-Audio.mp3?rlkey=it1v8maf973px9z2ttl7q69z7&raw=1",
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/37utff8p9vh5nrt30qu52/Imagination-Pista.mp3?rlkey=7ar5k9v5la0o7l8cfn95jb47t&raw=1", // <--- RUTA DEL KARAOKE AQUÍ
        videoBgSrc: "https://www.dropbox.com/scl/fi/mw40vkvr4y84dfy7xlpn5/Imagination-Fondo.mp4?rlkey=anszno9udsvphx7izat2xynir&raw=1",
        lyrics: [
            { time: 19.5, text: "I wouldn't try to throw myself away" },
            { time: 23.5, text: "If you asked me, I'd say" },
            { time: 29.5, text: "To be careful my love" },
            { time: 31.75, text: "At death we'll leave the same" },
            { time: 33.5, text: "If you want me to stay" },
            { time: 37.9, text: "Don't keep me waiting for it" },
            { time: 41, text: "We can't change the things we can't control" },
            { time: 45.8, text: "It's summer somewhere" },
            { time: 47.9, text: "So you shouldn't be so cold" },
            { time: 50.9, text: "But you can't even look me in the eye if you tried" },
            { time: 55.9, text: "Oh, we can try, we can try" },
            { time: 59.5, text: "I see us dancing by ourselves" },
            { time: 63, text: "We do it better with" },
            { time: 65.8, text: "No one around, yeah" },
            { time: 68.5, text: "Just you in my imagination, yeah" },
            { time: 73.2, text: "In my imagination, oh, oh" },
            { time: 80, text: "♫♫♫♫♫" },
            { time: 91, text: "Yeah, there's nothing left to cry about" },
            { time: 98, text: "I guess I'm living in a drought" },
            { time: 102.5, text: "It's raining like it was before" },
            { time: 106, text: "Something that you never knew you needed more of" },
            { time: 111, text: "We can't change the things we can't control" },
            { time: 116.75, text: "It's summer somewhere" },
            { time: 118, text: "So you shouldn't be so cold" },
            { time: 122, text: "But you can't even look me in the eye if you tried" },
            { time: 126.4, text: "Oh, we can try, we can try" },
            { time: 130, text: "I see us dancing by ourselves" },
            { time: 133.2, text: "We do it better with" },
            { time: 135.5, text: "No one around, yeah" },
            { time: 139, text: "Just you in my imagination, yeah" },
            { time: 143, text: "In my imagination, oh, oh" },
            { time: 151, text: "♫♫♫♫♫" },
            { time: 159.5, text: "Just use your imagination, oh, oh" },
            { time: 165, text: "Just use your imagination, oh, oh" },
            { time: 170, text: "♫♫♫♫♫" },
            { time: 191, text: "I see us dancing by ourselves" },
            { time: 195, text: "We do it better with" },
            { time: 196, text: "No one around, yeah" },
            { time: 200, text: "Just you in my imagination, yeah" },
            { time: 204.5, text: "In my imagination, oh, oh" },
            { time: 210, text: "I can do so many things" },
            { time: 213.5, text: "So many things, so many things" },
            { time: 218, text: "You know if you just use your imagination, oh, oh" },
            { time: 225, text: "Just use your imagination, oh, oh" },
            { time: 238, text: "I really love you" }
        ],
        meaning: "Esta canción me recuerda lo que siento contigo, porque contigo todo se convierte en un sueño que quiero hacer real. Me inspiras a imaginar un futuro solo para nosotros, un lugar donde nada nos falte y donde seamos felices juntos. Me gusta pensar que lo que imaginamos, en algun momento será nuestra realidad."
    },
    {
        id: 3,
        title: "Wonderwall - Remastered",
        artist: "Oasis",
        album: "What's The Story) Morning Glory",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2732f2eeee9b405f4d00428d84c",
        audioSrc: "https://www.dropbox.com/scl/fi/bocnantcsgbgo2p18nr8k/Wonderwall-Audio.mp3?rlkey=mz8a8pmgvrk4h54d2li5jdreg&raw=1",
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/1phituqmc6eip831dzke9/Wonderwall-Pista.mp3?rlkey=yzzdfwsfa5joq2krqb7yrlkxa&raw=1", // <--- RUTA DEL KARAOKE AQUÍ
        videoBgSrc: "https://www.dropbox.com/scl/fi/cjrbhtu6evfmxspjmtkvp/Wonderwall-Fondo.mp4?rlkey=nmhdfa2lka9tif2ffr3c51qbi&raw=1",
        lyrics: [
            { time: 1, text: "♫♫♫♫♫" },
            { time: 21.8, text: "Today is gonna be the day" },
            { time: 23.5, text: "that they're gonna throw it back to you" },
            { time: 27.5, text: "By now, you should've somehow" },
            { time: 29.5, text: "realised what you gotta do" },
            { time: 32.5, text: "I don't believe that anybody" },
            { time: 35, text: "feels the way I do about you now" },
            { time: 44, text: "And backbeat, the word is on the street" },
            { time: 46, text: "that the fire in your heart is out" },
            { time: 50, text: "I'm sure you've heard it all before," },
            { time: 52, text: "but you never really had a doubt" },
            { time: 54.5, text: "I don't believe that anybody" },
            { time: 57.3, text: "feels the way I do about you now" },
            { time: 66, text: "And all the roads we have to walk are winding" },
            { time: 71, text: "And all the lights that lead us there are blinding" },
            { time: 77, text: "There are many things that I would like to say to you" },
            { time: 81, text: "But I don't know how" },
            { time: 88, text: "Because maybe" },
            { time: 92, text: "You're gonna be the one that saves me" },
            { time: 96, text: "And after all" },
            { time: 102.4, text: "You're my wonderwall" },
            { time: 114.5, text: "Today was gonna be the day," },
            { time: 116.5, text: "but they'll never throw it back to you" },
            { time: 120, text: "By now, you should've somehow" },
            { time: 122, text: "realised what you're not to do" },
            { time: 124.5, text: "I don't believe that anybody" },
            { time: 127.3, text: "feels the way I do about you now" },
            { time: 135, text: "And all the roads that lead you there were winding" },
            { time: 141, text: "And all the lights that light the way are blinding" },
            { time: 147, text: "There are many things that I would like to say to you" },
            { time: 152, text: "But I don't know how" },
            { time: 158, text: "I said, Maybe" },
            { time: 161.5, text: "You're gonna be the one that saves me" },
            { time: 167, text: "And after all" },
            { time: 172, text: "You're my wonderwall" },
            { time: 180, text: "I said, Maybe" },
            { time: 184, text: "You're gonna be the one that saves me" },
            { time: 189.5, text: "And after all" },
            { time: 194.75, text: "You're my wonderwall" },
            { time: 202, text: "I said, Maybe" },
            { time: 206, text: "You're gonna be the one that saves me" },
            { time: 211, text: "You're gonna be the one that saves me" },
            { time: 217, text: "You're gonna be the one that saves me" }
        ],
        meaning: "Eres mi felicidad porque eres distinta a todas las personas que conocí. En ti encuentro todo lo que siempre busqué, y no necesito mirar a ningún otro lado. Tú eres mi calma, mi alegría y mi lugar seguro. Para mí eres como esa persona que cambia todo, mi verdadero Wonderwall, y por eso quiero mantenerme siempre a tu lado."
    },
    {
        id: 4,
        title: "Yellow",
        artist: "Coldplay",
        album: "Parachutes",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2739164bafe9aaa168d93f4816a",
        audioSrc: "https://www.dropbox.com/scl/fi/qrdq8pr8blh7xy2p752f4/Yellow-Audio.mp3?rlkey=1iyqyz93a1ov217h6tan18lit&raw=1",
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/adcsdtx0lshzmyv86w6e0/Yellow-Pista.mp3?rlkey=6o77546j0cr61hmh08jikznww&raw=1", // <--- RUTA DEL KARAOKE AQUÍ
        videoBgSrc: "https://www.dropbox.com/scl/fi/8s9hy57um6pl2p443pnlx/Yellow-Fondo.mp4?rlkey=qqv9qyv4t796y0wugkzjpd0r4&raw=1",
        lyrics: [
            { time: 35, text: "Look at the stars" },
            { time: 38, text: "Look how they shine for you" },
            { time: 43, text: "And everything you do" },
            { time: 49, text: "Yeah, they were all yellow" },
            { time: 52, text: "I came along" },
            { time: 54, text: "I wrote a song for you" },
            { time: 60, text: "And all the things you do" },
            { time: 65, text: "And it was called 'Yellow'" },
            { time: 71, text: "So then I took my turn" },
            { time: 77, text: "Oh, what a thing to have done" },
            { time: 82, text: "And it was all yellow" },
            { time: 84.5, text: "♫♫♫♫♫" },
            { time: 91, text: "Your skin, oh yeah, your skin, and bones" },
            { time: 96, text: "Turn into something beautiful" },
            { time: 101, text: "And you know, you know I love you so" },
            { time: 110, text: "You know I love you so" },
            { time: 112.5, text: "♫♫♫♫♫" },
            { time: 135, text: "I swam across" },
            { time: 137, text: "I jumped across for you" },
            { time: 143, text: "Oh, what a thing to do" },
            { time: 149, text: "'Cause you were all yellow" },
            { time: 151, text: "I drew a line" },
            { time: 154, text: "I drew a line for you" },
            { time: 159, text: "Oh, what a thing to do" },
            { time: 165, text: "And it was all yellow" },
            { time: 167.5, text: "♫♫♫♫♫" },
            { time: 173, text: "And your skin, oh yeah, your skin, and bones" },
            { time: 179, text: "Turn into something beautiful" },
            { time: 185, text: "And you know, for you, I'd bleed myself dry" },
            { time: 193, text: "For you, I'd bleed myself dry" },
            { time: 196, text: "♫♫♫♫♫" },
            { time: 217, text: "It's true" },
            { time: 220, text: "Look how they shine for you" },
            { time: 226, text: "Look how they shine for you" },
            { time: 237, text: "Look how they shine for" },
            { time: 243, text: "Look how they shine for you" },
            { time: 248, text: "Look how they shine" },
            { time: 251, text: "Look at the stars" },
            { time: 254, text: "Look how they shine for you" },
            { time: 259, text: "And all the things that you do" },
        ],
        meaning: "Contigo siento que todo tiene más luz, como si cada detalle tuyo brillara de una manera única. Eres diferente a todas las personas que conocí, y eso me hace feliz, porque contigo siento que estoy donde realmente quiero estar. A veces pienso en lo que viene, en el día en que podamos estar juntos de verdad, y esa ilusión me llena el corazón. Me hace soñar con un futuro en el que no solo estemos uno al lado del otro, sino que cada paso que demos esté iluminado por lo que sentimos. Porque como en la canción, todo brilla cuando se trata de ti."
    },
    {
        id: 5,
        title: "Lovesong",
        artist: "The Cure",
        album: "Disintegration (Deluxe Edition)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2735eaaa770d39591fd91b2b03b",
        audioSrc: "https://www.dropbox.com/scl/fi/0jd9vtcy4g10118jaj0um/Lovesong-Audio.mp3?rlkey=dot0bxt0m7xp5c6xniq8uu5k7&raw=1",
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/l87quvnjahdxdqtoe05wx/Lovesong-Instrumental.mp3?rlkey=6hd235jm1d6p6r77a7b9aixqn&raw=1",
        videoBgSrc: "https://www.dropbox.com/scl/fi/a4i6zor255ojjvzc835c9/Lovesong-Fondo.mp4?rlkey=j2exqc24h5i7435rrfxy1bfpu&raw=1",
        lyrics: [
            { time: 1, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 29, text: "Whenever I'm alone with you" },
            { time: 36, text: "You make me feel like I am home again" },
            { time: 43, text: "Whenever I'm alone with you" },
            { time: 49.7, text: "You make me feel like I am whole again" },
            { time: 56.2, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 69.5, text: "Whenever I'm alone with you" },
            { time: 77, text: "You make me feel like I am young again" },
            { time: 83, text: "Whenever I'm alone with you" },
            { time: 90.7, text: "You make me feel like I am fun again" },
            { time: 97, text: "However far away" },
            { time: 101.5, text: "I will always love you" },
            { time: 104.5, text: "However long I stay" },
            { time: 108, text: "I will always love you" },
            { time: 111.2, text: "Whatever words I say" },
            { time: 115, text: "I will always love you" },
            { time: 118, text: "I will always love you" },
            { time: 121, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 131.5, text: "(Fly me to the Moon)" },
            { time: 134.5, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 148.5, text: "Whenever I'm alone with you" },
            { time: 155.5, text: "You make me feel like I am free again" },
            { time: 162, text: "Whenever I'm alone with you" },
            { time: 169.5, text: "You make me feel like I am clean again" },
            { time: 176, text: "However far away" },
            { time: 180, text: "I will always love you" },
            { time: 183, text: "However long I stay" },
            { time: 187, text: "I will always love you" },
            { time: 190, text: "Whatever words I say" },
            { time: 193.5, text: "I will always love you" },
            { time: 197, text: "I will always love you" },
        ],
        meaning: "Me haces sentir algo que no había sentido con nadie, porque me haces feliz de una manera tan simple y real que me encanta cada día. Esta canción dice que estar con alguien te hace sentir en casa, libre, joven y hasta divertido otra vez, y eso mismo es lo que tú me haces sentir a mí. Por eso sé que, sin importar la distancia o el tiempo que pase, siempre te amaré, porque eres la razón por la que me siento feliz cada día."
    },
    {
        id: 6,
        title: "True Love Waits",
        artist: "Radiohead",
        album: "A Moon Shaped Pool",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27345643f5cf119cbc9d2811c22",
        audioSrc: "https://www.dropbox.com/scl/fi/tflf0j1xhqvuzwtzfibcd/TLW-Audio.mp3?rlkey=2g08s489z5o6bapr1e6ref92s&raw=1",
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/9tf57yy8srsfnhzr53vks/TLW-Pista.mp3?rlkey=7rdfzoyexjhfx00bt8dkq7f08&raw=1",
        videoBgSrc: "https://www.dropbox.com/scl/fi/nanjs1748u5svtc7we4ip/TLW-Fondo.mp4?rlkey=5vkjf6zqg4hpf054li1p3dy23&raw=1",
        lyrics: [
            { time: 1, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 10, text: "I'll drown my beliefs" },
            { time: 15.5, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 24, text: "To have your babies" },
            { time: 30, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 38, text: "I'll dress like your niece" },
            { time: 45, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 52, text: "And wash your swollen feet" },
            { time: 58, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 62, text: "Just don't leave" },
            { time: 75, text: "Don't leave" },
            { time: 80, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 94, text: "I'm not living" },
            { time: 101, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 109, text: "I'm just killing time" },
            { time: 115, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 122, text: "Your tiny hands" },
            { time: 129, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 137, text: "Your crazy kitten smile" },
            { time: 143, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 147, text: "Just don't leave" },
            { time: 160, text: "Don't leave" },
            { time: 165, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 179, text: "And true love waits" },
            { time: 185, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 193, text: "In haunted attics" },
            { time: 199, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 207, text: "And true love lives" },
            { time: 214, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 221, text: "On lollipops and crips" },
            { time: 228, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 232, text: "Just don't leave" },
            { time: 245, text: "Don't leave" },
            { time: 248, text: "♫ ♫ ♫ ♫ ♫" },
        ],
        meaning: "Contigo siento que el verdadero amor no es algo que se busca, sino algo que se espera con paciencia y tiempo, porque vale la pena. Me gusta la canción porque habla de que el amor real sigue ahí incluso cuando parece frágil, y yo siento eso contigo: no importa cuánto tiempo pase ni lo que tengamos que atravesar, lo único que quiero es que no te vayas, porque eres la persona que le da sentido a mi espera y a mis sueños de futuro."
    },
    {
        id: 7,
        title: "I Could Die For You",
        artist: "Red Hot Chili Peppers",
        album: "By the Way",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4",
        audioSrc: "https://www.dropbox.com/scl/fi/aiuoz0wywxuh392k3zkhe/ICDFY-Audio.mp3?rlkey=ncwmzwaks9xlk0xj7v8yh9bj3&raw=1",
        audioKaraokeSrc: "https://www.dropbox.com/scl/fi/0hb9zcu0gqoue811auun5/ICDFY-Pista.mp3?rlkey=68s3c02wk8kxqyjnbv791wrrm&raw=1",
        videoBgSrc: "https://www.dropbox.com/scl/fi/pzzsef5mfv8pfgaiulh5m/ICDFY-Fondo.mp4?rlkey=th4jy1lhghg5ewu30elea5g42&raw=1",
        lyrics: [
            { time: 1, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 12.5, text: "Something inside the cards I know is right" },
            { time: 18, text: "Don't want to live somebody else's life" },
            { time: 23.75, text: "This is what I want to be and this is what I give to you" },
            { time: 28.1, text: "Because I get it free" },
            { time: 30, text: "She smiles while I do my time" },
            { time: 34.5, text: "I could die for you" },
            { time: 40, text: "Oh, this life I choose" },
            { time: 45, text: "♫ ♫ ♫ ♫ ♫" },
            { time: 52.5, text: "I'm here to be your only go-between" },
            { time: 58.5, text: "To tell you of the sights these eyes have seen" },
            { time: 64, text: "What I really want to do is turn it into motion" },
            { time: 68, text: "Beauty that I can't abuse" },
            { time: 69.8, text: "You know that I use my senses, too" },
            { time: 75, text: "You can see that it's only everywhere" },
            { time: 81, text: "I'd take it all in, then I'd find a way to share" },
            { time: 86, text: "Come along and go along with me" },
            { time: 92, text: "Wander with me, yo, it's all for free" },
            { time: 98, text: "I could die for you, what you wanna do?" },
            { time: 103, text: "Oh, this life I choose" },
            { time: 108.5, text: "I could die for you, what you wanna do?" },
            { time: 115, text: "Oh, this life I choose" },
            { time: 120.5, text: "Come again and tell me where you want to go" },
            { time: 123.5, text: "What it means to me to be with you alone" },
            { time: 125.9, text: "Close the door and no one has to know" },
            { time: 129, text: "How we are" },
            { time: 132, text: "Come along and go along with me" },
            { time: 137, text: "Wander with me, yo, it's all for free" },
            { time: 143, text: "I could die for you, what you wanna do?" },
            { time: 149, text: "Oh, this life I choose" },
            { time: 154, text: "I could die for you, what you wanna do?" },
            { time: 160, text: "Oh, this life I choose, make me wanna say" },
            { time: 166, text: "I could die for you, what you wanna do?" },
            { time: 171, text: "Oh, this life I choose" },
            { time: 177, text: "I could die for you, what you wanna do?" },
            { time: 182, text: "Oh, this life I choose" },
            { time: 186, text: "♫ ♫ ♫ ♫ ♫" },
        ],
        meaning: "I Could Die For You es una frase muy complicada de usar y dificil de pensar pero créeme que aunque no estoy seguro de todo lo que me pase con relación a esto, haría todo por ti, y eso es lo que verdaderamente quiero que exprese la canción por ti. Me haces sentir tan querido y acompañado que quiero que te quedes junto a mi en todas nuestras experiencias que podremos tener, quiero pasear contigo pero no solo en nuestras futuras salidas si no también en el tiempo que quiero que pasemos juntos, en nuestras vivencias y todo lo que deseo que pasemos juntos, quiero que estés conmigo siempre."
    }
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0;
let shuffledPlayOrder = [];
let currentShuffleIndex = -1;
let isKaraokeMode = false; // Nuevo estado para el modo karaoke

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide video background
    backgroundVideo.pause(); // Pause video background
    backgroundVideo.src = ""; // Clear video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning to home
}

// Function to show song detail page (kept for structure, not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause video background
    backgroundVideo.src = ""; // Clear video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg'); // Esto ya se maneja en el CSS para ser transparente
    backgroundVideoContainer.classList.add('active'); // Show video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.muted = true; // Ensure video is muted
        backgroundVideo.loop = true; // Ensure video loops
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Clear src if no specific video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">No songs available.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.classList.add('song-item'); // Add class for styling
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;

        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]); // Carga la canción (pero aún no la reproduce)

            // Modificación: Mostrar splash antes de la página del reproductor
            showSongSplash(songs[currentSongIndex]); // Llama a la nueva función
        });

        // Hover effect for video background (refined)
        listItem.addEventListener('mouseenter', () => {
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.muted = true;
                backgroundVideo.loop = true;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause();
                backgroundVideo.src = "";
                backgroundVideo.load();
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics not available.</p>";
        songMeaningText.textContent = "Significado no disponible.";
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;

    renderLyrics(song.lyrics);
    songMeaningText.textContent = song.meaning || "Significado no disponible para esta canción.";

    // Colapsar el significado al cargar una nueva canción
    songMeaningContainer.classList.remove('expanded');
    toggleMeaningBtn.classList.remove('expanded');

    // Cargar la fuente de audio correcta según el modo karaoke
    // Si isKaraokeMode es true Y existe audioKaraokeSrc, usa audioKaraokeSrc,
    // de lo contrario, usa audioSrc.
    audioPlayer.src = isKaraokeMode && song.audioKaraokeSrc ? song.audioKaraokeSrc : song.audioSrc;
    audioPlayer.playbackRate = parseFloat(playerSpeedSlider.value); // Apply current speed on load

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

function showSongSplash(song) {
    // Oculta todas las demás páginas
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.remove('active');
    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();

    // Actualiza el contenido del splash
    splashTitle.textContent = song.title;
    splashArtist.textContent = song.artist;

    // Muestra el splash
    songSplash.classList.add('active');

    // Inicia la reproducción de la canción INMEDIATAMENTE
    playTrack(); // Esta función ya maneja el audioPlayer.play()

    // Temporizador para ocultar el splash y mostrar el reproductor
    // Ajusta este valor (2500ms = 2.5 segundos) a tu gusto
    setTimeout(() => {
        songSplash.classList.remove('active'); // Oculta el splash
        showPlayerPage(); // Muestra la página del reproductor de música
    }, 2500); // 2.5 segundos
}

// Function to render lyrics with data-time attributes
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clear container
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time);
        span.classList.add('lyric-line');
        lyricsContainer.appendChild(span);
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("No songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error playing audio:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;

    if (isShuffle) {
        currentShuffleIndex--;
        if (currentShuffleIndex < 0) {
            // Si hemos llegado al principio de la lista aleatoria, reorganizar o volver al final
            shuffleSongs(); // Reorganizar
            currentShuffleIndex = shuffledPlayOrder.length -1; // Ir al final de la nueva lista aleatoria
        }
        currentSongIndex = shuffledPlayOrder[currentShuffleIndex];
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1) { // Repeat one
        // La propiedad `audioPlayer.loop = true` maneja esto
    } else if (isShuffle) {
        currentShuffleIndex++;
        if (currentShuffleIndex >= shuffledPlayOrder.length) {
            shuffleSongs(); // Reorganizar cuando todas las canciones aleatorias se han reproducido
            currentShuffleIndex = 0; // Empezar desde el principio de la nueva lista aleatoria
        }
        currentSongIndex = shuffledPlayOrder[currentShuffleIndex];
    } else { // Sin repetición o repetir todo
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) { // Repetir todo
                currentSongIndex = 0;
            } else { // Sin repetición, detenerse al final
                currentSongIndex = songs.length - 1; // Quedarse en la última canción
                loadSong(songs[currentSongIndex]); // Cargarla para reiniciar la interfaz de usuario
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration; // Asegurarse de que la barra de progreso esté llena
                return; // Detenerse aquí, no reproducir la siguiente
            }
        }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function shuffleSongs() {
    shuffledPlayOrder = Array.from({ length: songs.length }, (_, i) => i);
    // Algoritmo de Fisher-Yates para mezclar
    for (let i = shuffledPlayOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlayOrder[i], shuffledPlayOrder[j]] = [shuffledPlayOrder[j], shuffledPlayOrder[i]];
    }
    currentShuffleIndex = 0; // Empezar al principio de la nueva lista mezclada
    const currentSongInShuffledIndex = shuffledPlayOrder.indexOf(currentSongIndex);
    if (currentSongInShuffledIndex !== -1 && currentSongInShuffledIndex !== 0) {
        const [removed] = shuffledPlayOrder.splice(currentSongInShuffledIndex, 1);
        shuffledPlayOrder.unshift(removed); // Pone la canción actual al principio del orden aleatorio
    }
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

        // --- Lyric Highlighting and Auto-Scroll Logic ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLineIndex = -1;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            let nextLineTime = Infinity;
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLineIndex = index;
            } else {
                line.classList.remove('highlight');
            }
        });

        // Auto-scroll logic: Keep the 4th visible line highlighted (or as close as possible)
        if (highlightedLineIndex !== -1) {
            // Si la línea resaltada es una de las primeras 3 (índice 0, 1, 2),
            // aseguramos que el scroll esté en la parte superior para evitar cortes.
            if (highlightedLineIndex < 3) {
                lyricsContainer.scrollTop = 0;
            } else {
                // Para la cuarta línea o más allá, aplicamos el centrado normal.
                // Queremos que la línea resaltada (highlightedLineIndex) esté aproximadamente en la 4ta posición visible.
                // Esto significa que la línea en (highlightedLineIndex - 3) debería estar al principio del contenedor visible.
                const targetScrollIndex = highlightedLineIndex - 3;
                const targetLine = lyricLines[targetScrollIndex];

                if (targetLine) {
                    lyricsContainer.scrollTop = targetLine.offsetTop;
                }
            }
        } else if (lyricLines.length > 0 && currentTime < parseFloat(lyricLines[0].getAttribute('data-time'))) {
            // Si antes de la primera letra, desplázate al principio
            lyricsContainer.scrollTop = 0;
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    if (!isPlaying) { // Si está en pausa, reproducir después de buscar
        playTrack();
    }
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = parseFloat(e.target.value);
});

playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    if (isShuffle) {
        shuffleSongs(); // Generar el orden aleatorio inicial
        currentShuffleIndex = -1; // Reiniciar el índice de aleatoriedad para la primera llamada a 'next'
    } else {
        shuffledPlayOrder = []; // Limpiar el orden aleatorio
    }
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3; // 0 -> 1 -> 2 -> 0
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

// Función para alternar el modo karaoke
playerKaraokeBtn.addEventListener('click', () => {
    isKaraokeMode = !isKaraokeMode;
    playerKaraokeBtn.classList.toggle('active-feature', isKaraokeMode);

    const wasPlaying = isPlaying; // Guardar el estado de reproducción actual
    const currentTime = audioPlayer.currentTime; // Guardar el tiempo actual

    // Recargar la canción para cambiar la fuente de audio
    loadSong(songs[currentSongIndex]);

    // Restaurar el tiempo y el estado de reproducción
    audioPlayer.currentTime = currentTime;
    if (wasPlaying) {
        playTrack();
    } else {
        pauseTrack();
    }

    console.log("Karaoke Mode: " + isKaraokeMode);
});


function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature-one');
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false; // Restablecer la propiedad de bucle de audio

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature-one');
        audioPlayer.loop = true;
    } else if (repeatMode === 2) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

// --- Event Listeners ---

// Player controls
playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrack);

// Back to Home button from Player Page
backToHomeBtn.addEventListener('click', showHomePage);
backToHomeFromDetailBtn.addEventListener('click', showHomePage);


// Event listener para el botón de desplegar/plegar significado
toggleMeaningBtn.addEventListener('click', () => {
    songMeaningContainer.classList.toggle('expanded');
    toggleMeaningBtn.classList.toggle('expanded'); // Para rotar la flecha
});


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderSongList();
    showHomePage(); // Asegurarse de que la página de inicio se muestre en la carga inicial

    // Cargar los detalles de la primera canción cuando la página carga, pero no reproducirla aún
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    }
    updateRepeatButtonUI(); // Establecer el estado inicial del botón de repetición
    playerVolumeSlider.value = audioPlayer.volume; // Establecer el control deslizante al volumen actual
    playerSpeedSlider.value = audioPlayer.playbackRate; // Establecer el control deslizante a la velocidad actual
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

// Crucial: Manejar el final de la canción
audioPlayer.addEventListener('ended', () => {
    if (repeatMode !== 1) { // Si no estamos repitiendo una sola canción
        nextTrack();
    }
});
