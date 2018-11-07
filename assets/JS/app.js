const body = document.getElementById("body");
const selectionScreen = document.getElementById("selectionScreen");
const form = document.getElementById("form");

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', clickEventExecuter);

function clickEventExecuter(event) {

    var top100list_2018 = [
        {
            name: 'Verleden tijd', artist: 'Frenna', points: 384
        },
        {
            name: 'In my mind', artist: 'Dynoro', points: 376
        },
        {
            name: 'Promises', artist: 'Calvin Harris', points: 346
        },
        {
            name: 'Shotgun', artist: 'George Ezra', points: 530
        },
        {
            name: 'Rise', artist: 'Jonas Blue', points: 496
        },
        {
            name: 'Happier', artist: 'Marshmello', points: 268
        },
        {
            name: 'Be alright', artist: 'Dean Lewis', points: 177
        },
        {
            name: 'Youngblood', artist: '5SOS', points: 588
        },
        {
            name: 'Electricity', artist: 'Silk City', points: 234
        },
        {
            name: 'Goodbye', artist: 'Jason Derulo', points: 129
        },
        {
            name: 'Djadja', artist: 'Aya Nakamura', points: 386
        },
        {
            name: 'Taki taki', artist: 'DJ Snake', points: 115
        },
        {
            name: 'High on Life', artist: 'Martin Garrix', points: 229
        },
        {
            name: 'Let you love me', artist: 'Rita Ora', points: 126
        },
        {
            name: 'Whenever', artist: 'Kris Kross Amsterdam', points: 512
        },
        {
            name: 'I love it', artist: 'Kanye West', points: 67
        },
        {
            name: 'Natural', artist: 'Imagine Dragons', points: 292
        },
        {
            name: 'Hurt somebody', artist: 'Noah Kahan', points: 224
        },
        {
            name: 'Lost in Japan', artist: 'Zedd', points: 78
        },
        {
            name: 'Eastside', artist: 'Benny Blanco', points: 86
        },
        {
            name: 'Happy now', artist: 'Zedd', points: 340
        },
        {
            name: 'Duurt te lang', artist: 'Davina Michelle', points: 96
        },
        {
            name: 'Solo', artist: 'Clean bandit', points: 566
        },
        {
            name: 'Lief zoals je bent', artist: 'Maan', points: 92
        },
        {
            name: 'Darkside', artist: 'Alan Walker', points: 142
        },
        {
            name: 'Ik heb je nodig', artist: 'Kraantje Pappie', points: 58
        },
        {
            name: 'Breathin', artist: 'Ariana Grande', points: 57
        },
        {
            name: 'In my feelings', artist: 'Drake', points: 376
        },
        {
            name: 'IJskoud', artist: 'Nielson', points: 41
        },
        {
            name: 'Losing it', artist: 'Fisher', points: 20
        },
        {
            name: 'Stap voor stap', artist: 'Kav Verhouzer', points: 249
        },
        {
            name: 'Therapy', artist: 'Armin van Buuren', points: 597
        },
        {
            name: 'Flicker', artist: 'Niall Horan', points: 68
        },
        {
            name: 'Blah blah blah', artist: 'Armin van Buuren', points: 34
        },
        {
            name: 'All my friends', artist: 'The Revivalists', points: 39
        },
        {
            name: 'Culo', artist: 'Bizzey', points: 53
        },
        {
            name: 'One kiss', artist: 'Calvin Harris', points: 897
        },
        {
            name: 'You let me walk alone', artist: 'Michael Schulte', points: 92
        },
        {
            name: 'New light', artist: 'John Mayer', points: 25
        },
        {
            name: 'Body', artist: 'Loud Luxury', points: 226
        },
        {
            name: 'Side effects', artist: 'the Chainsmokers', points: 143
        },
        {
            name: 'Miljonair', artist: '$hirak', points: 273
        },
        {
            name: 'La cintura', artist: 'Alvaro Soler', points: 321
        },
        {
            name: 'Jackie Chan', artist: 'Tiësto', points: 545
        },
        {
            name: `Don't leave me alone`, artist: 'David Guetta', points: 116
        },
        {
            name: 'Dura', artist: 'Daddy Yankee', points: 791
        },
        {
            name: 'Flames', artist: 'David Guetta', points: 801
        },
        {
            name: 'Make me do', artist: 'Fais', points: 36
        },
        {
            name: 'Liefde in de lucht', artist: 'Kraantje Pappie', points: 395
        },
        {
            name: 'No tears left to cry', artist: 'Ariana Grande', points: 662
        },
        {
            name: 'Ocean', artist: 'Martin Garrix', points: 364
        },
        {
            name: 'No brainer', artist: 'DJ Khalid', points: 130
        },
        {
            name: 'Happier', artist: 'Ed Sheeran', points: 454
        },
        {
            name: 'We can do better', artist: 'Matt Simons', points: 152
        },
        {
            name: 'Coming home', artist: 'Sheppard', points: 208
        },
        {
            name: 'Watch me go', artist: 'Wulf', points: 27
        },
        {
            name: 'God is a woman', artist: 'Ariana Grande', points: 73
        },
        {
            name: 'Born to be yours', artist: 'Kygo', points: 167
        },
        {
            name: 'Know you better', artist: 'Fais', points: 553
        },
        {
            name: 'Leave a light on', artist: 'Tom Walker', points: 443
        },
        {
            name: 'Better now', artist: 'Post Malone', points: 319
        },
        {
            name: `Back 2 you '18`, artist: 'Selena Gomez', points: 332
        },
        {
            name: 'These days', artist: 'Rudimental', points: 598
        },
        {
            name: 'Shallow', artist: 'Lady Gaga', points: 36
        },
        {
            name: 'Girls like you', artist: 'Maroon 5', points: 165
        },
        {
            name: 'Wild wild son', artist: 'Armin van Buuren', points: 21
        },
        {
            name: 'Omarm me', artist: 'Ronnie Flex', points: 34
        },
        {
            name: 'I like it', artist: 'Cardi B', points: 88
        },
        {
            name: 'Sad!', artist: 'XXXTENTACION', points: 105
        },
        {
            name: `Don't matter to me`, artist: 'Drake', points: 94
        },
        {
            name: 'I could be wrong', artist: 'Lucas & Steve', points: 53
        },
        {
            name: 'Remind me to forget', artist: 'Kygo', points: 374
        },
        {
            name: 'Let me live', artist: 'Rudimental', points: 42
        },
        {
            name: 'Familiar', artist: 'Liam Payne', points: 13
        },
        {
            name: 'The middle', artist: 'Zedd', points: 709
        },
        {
            name: 'Pull up', artist: 'Dyna', points: 65
        },
        {
            name: 'In my blood', artist: 'Shawn Mendes', points: '453'
        },
        {
            name: 'Lil Craney', artist: 'Kraantje Pappie', points: 487
        },
        {
            name: 'X', artist: 'Nicky Jam', points: 384
        },
        {
            name: 'Mad love', artist: 'Sean Paul', points: 380
        },
        {
            name: 'Switching gears', artist: 'Wulf', points: 27
        },
        {
            name: 'Live it up', artist: 'Nicky Jam', points: 66
        },
        {
            name: 'Friends', artist: 'Marshmello', points: 631
        },
        {
            name: 'IDGAF', artist: 'Dua Lipa', points: 568
        },
        {
            name: 'Girls', artist: 'Rita Ora', points: 125
        },
        {
            name: 'Hey meisje', artist: 'Esko', points: 205
        },
        {
            name: 'Spijt', artist: 'Maan', points: 18
        },
        {
            name: 'Space for two', artist: 'Mr Probz', points: 60
        },
        {
            name: 'Nevermind', artist: 'Dennis Lloyd', points: 34
        },
        {
            name: 'Draai het om', artist: 'Boef', points: 109
        },
        {
            name: 'Quarter past midnight', artist: 'Bastille', points: 31
        },
        {
            name: 'Nicotine', artist: `Chef'Special`, points: 152
        },
        {
            name: 'This is America', artist: 'Childish Gambino', points: 75
        },
        {
            name: 'Zoutelande', artist: 'Bl&oslash;f', points: 759
        },
        {
            name: 'Ze willen mee', artist: 'Hardwell', points: 195
        },
        {
            name: `Échame la culpa`, artist: 'Luis Fonsi', points: 726
        },
        {
            name: 'Say something', artist: 'Justin Timberlake', points: 438
        },
        {
            name: 'All things under the sun', artist: 'Wulf', points: 351
        },
        {
            name: `God's plan`, artist: 'Drake', points: 508
        },
        {
            name: 'Meant to be', artist: 'Bebe Rexha', points: 403
        },
        {
            name: 'Let me', artist: 'Zayn', points: 59
        },
        {
            name: 'Like I do', artist: 'David Guetta', points: 193
        },
        {
            name: 'Dreamer', artist: 'Axwell ^ Ingrosso', points: 391
        },
        {
            name: 'Beetje moe', artist: 'Kevin', points: 124
        },
        {
            name: 'Lullaby', artist: 'Sigala', points: 32
        },
        {
            name: 'Diamant', artist: 'Nielson', points: 56
        },
        {
            name: 'Homesick', artist: 'Dua Lipa', points: 571
        },
        {
            name: `Outlaw in 'em`, artist: 'Waylon', points: 5
        },
        {
            name: 'River', artist: 'Eminem', points: 540
        },
        {
            name: 'Finesse', artist: 'Bruno Mars', points: 410
        },
        {
            name: 'Wake me up!', artist: 'Avicii', points: 54
        },
        {
            name: 'Fan', artist: 'Ronnie Flex', points: 220
        },
        {
            name: 'Call out my name', artist: 'The Weeknd', points: 33
        },
        {
            name: 'For you', artist: 'Liam Payne', points: 199
        },
        {
            name: 'Anywhere', artist: 'Rita Ora', points: 445
        },
        {
            name: 'On the Loose', artist: 'Niall Horan', points: 12
        },
        {
            name: 'Catch up', artist: 'Josylvio', points: 183
        },
        {
            name: 'Pray for me', artist: 'The Weeknd', points: 197
        },
        {
            name: 'Mine', artist: 'Bazzi', points: 43
        },
        {
            name: 'Love lies', artist: 'Khalid', points: 60
        },
        {
            name: 'Psycho', artist: 'Post Malone', points: 108
        },
        {
            name: 'Blijf bij mij', artist: 'Ronnie Flex', points: 471
        },
        {
            name: 'Perfect', artist: 'Ed Sheeran', points: 444
        },
        {
            name: 'Ja!', artist: 'Bizzey', points: 336
        },
        {
            name: 'Havana', artist: 'Camila Cabello', points: 410
        },
        {
            name: 'Slow down', artist: 'Dimitri Vegas & Like Mike', points: 142
        },
        {
            name: 'Crazy', artist: 'Lost Frequencies', points: 228
        },
        {
            name: 'All the stars', artist: 'Kendrick Lamar', points: 45
        },
        {
            name: 'Sex, love & water', artist: 'Armin van Buuren', points: 61
        },
        {
            name: 'Wolves', artist: 'Selena Gomez', points: 336
        },
        {
            name: 'So far away', artist: 'Martin Garrix', points: 259
        },
        {
            name: 'Beautiful trauma', artist: 'P!nk', points: 224
        },
        {
            name: 'Sunflower', artist: 'Post Malone', points: 17
        },
        {
            name: 'Mia', artist: 'Bad Bunny', points: 8
        },
        {
            name: 'Woman like me', artist: 'Little Mix', points: 6
        },
        {
            name: 'Remedy', artist: 'Alesso', points: 3
        },
        {
            name: 'Sick boy', artist: 'the Chainsmokers', points: 65
        },
        {
            name: 'Does it matter', artist: 'Janieck', points: 21
        },
        {
            name: 'Stargazing', artist: 'Kygo', points: 295
        },
        {
            name: 'All falls down', artist: 'Alan Walker', points: 242
        },
        {
            name: 'Cono', artist: 'Puri', points: 110
        },
        {
            name: 'Breathe', artist: 'Jax Jones', points: 114
        },
        {
            name: 'Dusk till dawn', artist: 'Zayn', points: 219
        },
        {
            name: 'Feel it still', artist: 'P.T.M.', points: 223
        },
        {
            name: 'Him & I', artist: 'G-Eazy', points: 147
        },
        {
            name: 'Whatever  it takes', artist: 'Imagine Dragons', points: 142
        },
        {
            name: 'Reggaetón lento (Remix)', artist: 'CNCO', points: 163
        },
        {
            name: 'Without you', artist: 'Avicii', points: 166
        },
        {
            name: 'Rockstar', artist: 'Post Malone', points: 116
        },
        {
            name: 'What about us', artist: 'P!nk', points: 72
        },
        {
            name: 'Officieel', artist: 'Broederliefde', points: 129
        },
        {
            name: 'I miss you', artist: 'Clean bandit', points: 75
        },
        {
            name: 'Arms open', artist: 'The Scr!pt', points: 43
        },
        {
            name: 'Power', artist: 'Hardwell', points: 48
        },
        {
            name: 'Unknown (to you)', artist: 'Jacob Banks', points: 41
        },
        {
            name: 'How l?ng', artist: 'Charlie Puth', points: 37
        },
        {
            name: 'What lovers do', artist: 'Maroon 5', points: 67
        },
        {
            name: 'Too good at goodbyes', artist: 'Sam Smith', points: 85
        },
        {
            name: 'World gone mad', artist: 'Bastille', points: 25
        },
        {
            name: 'Dirty $exy money', artist: 'David Guetta', points: 52
        },
        {
            name: 'Walk on water', artist: 'Eminem', points: 35
        },
        {
            name: 'Ra!n', artist: 'The Scr!pt', points: 30
        },
        {
            name: 'Keep your head up', artist: 'Lucas & Steve', points: 12
        },
        {
            name: 'Mind made up', artist: 'Wulf', points: 12
        },
        {
            name: 'Too much to ask', artist: 'Niall Horan', points: 7
        },
        {
            name: 'Lonely together', artist: 'Avicii', points: 7
        },
        {
            name: 'Silence', artist: 'Marshmello', points: 3
        },
        {
            name: 'New rules', artist: 'Dua Lipa', points: 1
        }
    ];


    event.preventDefault();
    var sel = document.getElementById("list");
    value = sel.options[sel.selectedIndex].value; // or just sel.value
    console.log(value);

    if (value == 2018) {
        console.log("yes")
        list2018();
    }
    else {
        form.reset();
    }

    function list2018() {

        console.log(value)

        body.innerHTML = '';
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        const positie = document.createElement("th");
        positie.innerHTML = "positie";
        const th = document.createElement("th");
        const th2 = document.createElement("th");
        const punten = document.createElement("th");
        punten.innerHTML = "Punten";
        const tbody = document.createElement("tbody");
        trHead.appendChild(positie);
        trHead.appendChild(th);
        trHead.appendChild(th2);
        trHead.appendChild(punten);
        thead.appendChild(trHead);
        table.appendChild(thead);
        table.appendChild(tbody);
        body.appendChild(table);

        var byDate = top100list_2018.slice(0);
        byDate.sort(function (a, b) {
            return b.points - a.points;
        });
        //console.log(byDate)

        for (i = 1; i - 1 < 100; i++) {
            const song = byDate[i - 1];
            let songName = Object.values(song)[0];
            let songArtist = Object.values(song)[1];
            let songPoints = Object.values(song)[2];
            songPoints = Number(songPoints);
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const artist = document.createElement("td");
            const points = document.createElement("td");
            const container = document.createElement("div");
            container.classList.add("circle")
            container.innerHTML = i;
            name.innerHTML = `<strong>${songName}</strong>`;
            artist.innerHTML = songArtist;
            points.innerHTML = songPoints;
            tr.appendChild(container);
            tr.appendChild(name);
            tr.appendChild(artist);
            tr.appendChild(points);
            tbody.appendChild(tr);
            console.log(songName);
            console.log(songArtist);
            console.log(songPoints);
            console.log('--------------------')
        }
    }
}