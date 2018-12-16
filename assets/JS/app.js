const body = document.getElementById("body");
const selectionScreen = document.getElementById("selectionScreen");
const form = document.getElementById("form");

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', clickEventExecuter);

console.log("NEW: gone to homepage.")
console.log("----------------------------------------------")

function goBackExecuter(event) {
    location.reload();
}

function clickEventExecuter(event) {

    var top100list_2017 = [
        {
            name: 'Shape Of You', artist: 'Ed Sheeran', points: 906
        },
        {
            name: 'Despacito', artist: 'Luis Fonsi', points: 905
        },
        {
            name: "It ain't me", artist: 'Kygo', points: 866
        },
        {
            name: 'Mama', artist: 'Jonas Blue', points: 738
        },
        {
            name: 'Up till dawn', artist: 'Lucas & Steve', points: 695
        },
        {
            name: 'More than you know', artist: 'Axwell ^ Ingrosso', points: 678
        },
        {
            name: "There's nothing holdin' me back", artist: 'Shawn Mendes', points: 665
        },
        {
            name: 'Mi gente', artist: 'J. Balvin', points: 654
        },
        {
            name: 'What about us', artist: 'P!nk', points: 649
        },
        {
            name: 'Symphony', artist: 'Clean bandit', points: 644
        },
        {
            name: 'New Rules', artist: 'Dua Lipa', points: 634
        },
        {
            name: 'Ra!n', artist: 'the Scr!pt', points: 603
        },
        {
            name: 'Scared to be lonely', artist: 'Martin Garrix', points: 596
        },
        {
            name: 'Call on me (Ryan Riback Remix)', artist: 'Starley', points: 593
        },
        {
            name: 'Sunny days', artist: 'Armin van Buuren', points: 586
        },
        {
            name: 'Something just like this', artist: 'The Chainsmokers', points: 585
        },
        {
            name: '2U', artist: 'David Guetta', points: 583
        },
        {
            name: 'Ciao Adios', artist: 'Anne-Marie', points: 571
        },
        {
            name: 'Castle on the hill', artist: 'Ed Sheeran', points: 548
        },
        {
            name: 'Weak', artist: 'AJR', points: 537
        },
        {
            name: 'Without you', artist: 'Avicii', points: 536
        },
        {
            name: 'Reggaetón Lento (remix)', artist: 'CNCO', points: 523
        },
        {
            name: 'Rockabye', artist: 'Clean Bandit', points: 522
        },
        {
            name: "Say you won't let go", artist: 'James Arthur', points: 517
        },
        {
            name: 'Dusk till dawn', artist: 'Zayn', points: 514
        },
        {
            name: 'Energie', artist: 'Ronnie Flex', points: 508
        },
        {
            name: 'Thunder', artist: 'Imagine Dragons', points: 505
        },
        {
            name: 'Too good at goodbyes', artist: 'Sam Smith', points: 496
        },
        {
            name: "I'm the one", artist: 'DJ Khalid', points: 490
        },
        {
            name: "You don't know me - Na Na Ay!", artist: 'Jax Jones', points: 486
        },
        {
            name: 'Feels', artist: 'Calvin Harris', points: 483
        },
        {
            name: 'Súbeme la radio', artist: 'Enrique Iglesias', points: 463
        },
        {
            name: 'Perfect', artist: 'Ed Sheeran', points: 460
        },
        {
            name: 'Havana', artist: 'Camila Cabello', points: 460
        },
        {
            name: 'Paris', artist: 'The Chainsmokers', points: 444
        },
        {
            name: 'Scars to your beautiful', artist: 'Alessia Cara', points: 427
        },
        {
            name: 'Stargazing', artist: 'Kygo', points: 425
        },
        {
            name: 'Swalla', artist: 'Jason Derulo', points: 421
        },
        {
            name: 'Unforgettable', artist: 'French Montana', points: 418
        },
        {
            name: 'Rockstar', artist: 'Post Malone', points: 417
        },
        {
            name: 'Chained To The Rhythm', artist: 'Katy Perry', points: 417
        },
        {
            name: 'Galway Girl', artist: 'Ed Sheeran', points: 413
        },
        {
            name: 'Wild Thoughts', artist: 'DJ Khalid', points: 404
        },
        {
            name: 'What lovers do', artist: 'Maroon 5', points: 395
        },
        {
            name: 'Friends', artist: 'Justin Bieber', points: 384
        },
        {
            name: 'Stay', artist: 'Zedd', points: 380
        },
        {
            name: 'I feel it coming', artist: 'The Weeknd', points: 369
        },
        {
            name: 'La Colegiala', artist: 'The Boy Next Door', points: 366
        },
        {
            name: "I don't wanna live forever", artist: 'Zayn', points: 364
        },
        {
            name: 'Attent!on', artist: 'Charlie Puth', points: 361
        },
        {
            name: 'Slow hands', artist: 'Niall Horan', points: 359
        },
        {
            name: 'Habiba', artist: 'Boef', points: 354
        },
        {
            name: 'There for you', artist: 'Martin Garrix', points: 347
        },
        {
            name: 'Krantenwijk', artist: 'Lil Kleine', points: 345
        },
        {
            name: 'Voy a Bailar', artist: 'Ali B', points: 333
        },
        {
            name: 'Issues', artist: 'Julia Michaels', points: 318
        },
        {
            name: 'Tuesday', artist: 'Burak Yeter', points: 312
        },
        {
            name: 'Love me now', artist: 'John Legend', points: 292
        },
        {
            name: 'Patsergedrag', artist: 'Sevn Alias', points: 284
        },
        {
            name: 'Wolves', artist: 'Selena Gomez', points: 276
        },
        {
            name: 'Tempo', artist: 'Jairzinho', points: 276
        },
        {
            name: 'No lie', artist: 'Sean Paul', points: 276
        },
        {
            name: 'Know no better', artist: 'Major Lazor', points: 275
        },
        {
            name: 'Too much to ask', artist: 'Niall Horan', points: 274
        },
        {
            name: 'Your song', artist: 'Rita Ora', points: 272
        },
        {
            name: 'Whatever it takes', artist: 'Imagine Dragons', points: 256
        },
        {
            name: 'Dancing on my own', artist: 'Calum Scott', points: 253
        },
        {
            name: 'September song', artist: 'JP. Cooper', points: 253
        },
        {
            name: 'Silence', artist: 'Marshmello', points: 252
        },
        {
            name: 'This town', artist: 'Niall Horan', points: 251
        },
        {
            name: 'Feel it still', artist: 'Portugal. The Man', points: 248
        },
        {
            name: 'Mind made up', artist: 'Wulf', points: 238
        },
        {
            name: 'Alleen', artist: 'Lil Kleine', points: 233
        },
        {
            name: 'Malibu', artist: 'Miley Cyrus', points: 228
        },
        {
            name: 'Slide', artist: 'Calvin Harris', points: 227
        },
        {
            name: 'Nervous (The Ooh Song)', artist: 'Gavin James', points: 226
        },
        {
            name: 'Come again', artist: 'Ronnie Flex', points: 218
        },
        {
            name: '24K magic', artist: 'Bruno Mars', points: 213
        },
        {
            name: 'Passionfruit', artist: 'Drake', points: 208
        },
        {
            name: 'I need you', artist: 'Armin van Buuren', points: 206
        },
        {
            name: 'Back to you', artist: 'Louis Tomlinson', points: 202
        },
        {
            name: '4X Duurder', artist: 'SBMG', points: 201
        },
        {
            name: 'Bad things', artist: 'Machine Gun Kelly', points: 199
        },
        {
            name: 'Skin', artist: "Rag'n'bone Man", points: 194
        },
        {
            name: 'Starboy', artist: 'The Weeknd', points: 180
        },
        {
            name: 'Are you sure?', artist: 'Kris Kross Amsterdam', points: 178
        },
        {
            name: 'Look what you made me do', artist: 'Taylor Swift', points: 174
        },
        {
            name: 'How l?ng', artist: 'Charlie Puth', points: 170
        },
        {
            name: 'Loterij', artist: 'Lil Kleine', points: 168
        },
        {
            name: 'Try again', artist: "Chef'Special", points: 166
        },
        {
            name: 'Anywhere', artist: 'Rita Ora', points: 162
        },
        {
            name: 'Sign of the times', artist: 'Harry Styles', points: 162
        },
        {
            name: 'Mercy', artist: 'Shawn Mendes', points: 159
        },
        {
            name: 'Run up', artist: 'Major Lazor', points: 157
        },
        {
            name: 'First Time', artist: 'Kygo', points: 152
        },
        {
            name: 'Engeltje', artist: 'Jebroer', points: 142
        },
        {
            name: 'Human', artist: "Rag'n'bone Man", points: 139
        },
        {
            name: 'Shed a light', artist: 'Robin Schulz', points: 135
        },
        {
            name: 'Sorry', artist: 'Kensington', points: 133
        },
        {
            name: 'My way', artist: 'Calvin Harris', points: 131
        }
    ];

    var top100list_2018 = [
        {
            name: 'Verleden tijd', artist: 'Frenna', points: 427
        },
        {
            name: 'In my mind', artist: 'Dynoro', points: 564
        },
        {
            name: 'Promises', artist: 'Calvin Harris', points: 577
        },
        {
            name: 'Shotgun', artist: 'George Ezra', points: 739
        },
        {
            name: 'Rise', artist: 'Jonas Blue', points: 652
        },
        {
            name: 'Happier', artist: 'Marshmello', points: 472
        },
        {
            name: 'Be alright', artist: 'Dean Lewis', points: 350
        },
        {
            name: 'Youngblood', artist: '5SOS', points: 597
        },
        {
            name: 'Electricity', artist: 'Silk City', points: 362
        },
        {
            name: 'Goodbye', artist: 'Jason Derulo', points: 197
        },
        {
            name: 'Djadja', artist: 'Aya Nakamura', points: 431
        },
        {
            name: 'Taki taki', artist: 'DJ Snake', points: 266
        },
        {
            name: 'High on Life', artist: 'Martin Garrix', points: 283
        },
        {
            name: 'Let you love me', artist: 'Rita Ora', points: 321
        },
        {
            name: 'Whenever', artist: 'Kris Kross Amsterdam', points: 530
        },
        {
            name: 'I love it', artist: 'Kanye West', points: 67
        },
        {
            name: 'Natural', artist: 'Imagine Dragons', points: 491
        },
        {
            name: 'Hurt somebody', artist: 'Noah Kahan', points: 228
        },
        {
            name: 'Lost in Japan', artist: 'Zedd', points: 100
        },
        {
            name: 'Eastside', artist: 'Benny Blanco', points: 138
        },
        {
            name: 'Happy now', artist: 'Zedd', points: 348
        },
        {
            name: 'Duurt te lang', artist: 'Davina Michelle', points: 336
        },
        {
            name: 'Solo', artist: 'Clean bandit', points: 566
        },
        {
            name: 'Lief zoals je bent', artist: 'Maan', points: 96
        },
        {
            name: 'Darkside', artist: 'Alan Walker', points: 328
        },
        {
            name: 'Ik heb je nodig', artist: 'Kraantje Pappie', points: 69
        },
        {
            name: 'Breathin', artist: 'Ariana Grande', points: 164
        },
        {
            name: 'In my feelings', artist: 'Drake', points: 378
        },
        {
            name: 'IJskoud', artist: 'Nielson', points: 208
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
            name: 'All my friends', artist: 'The Revivalists', points: 40
        },
        {
            name: 'Culo', artist: 'Bizzey', points: 182
        },
        {
            name: 'One kiss', artist: 'Calvin Harris', points: 897
        },
        {
            name: 'You let me walk alone', artist: 'Michael Schulte', points: 92
        },
        {
            name: 'New light', artist: 'John Mayer', points: 56
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
            name: 'Shallow', artist: 'Lady Gaga', points: 193
        },
        {
            name: 'Girls like you', artist: 'Maroon 5', points: 252
        },
        {
            name: 'Wild wild son', artist: 'Armin van Buuren', points: 131
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
            name: 'Sunflower', artist: 'Post Malone', points: 67
        },
        {
            name: 'Mia', artist: 'Bad Bunny', points: 41
        },
        {
            name: 'Woman like me', artist: 'Little Mix', points: 38
        },
        {
            name: 'Remedy', artist: 'Alesso', points: 11
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
        },
        {
            name: 'Sweet But Psycho', artist: 'Ava Max', points: 216
        },
        {
            name: 'Close To Me', artist: 'Ellie Goulding', points: 142
        },
        {
            name: 'Happy now', artist: 'Kygo', points: 104
        },
        {
            name: 'Thank u, next', artist: 'Ariana Grande', points: 171
        },
        {
            name: 'Dreamer', artist: 'Martin Garrix', points: 47
        },
        {
            name: "When The Party's over", artist: 'Billie Eilish', points: 43
        },
        {
            name: 'Nothing Breaks Like A Heart', artist: 'Mark Ronson', points: 31
        },
        {
            name: 'Say My Name', artist: 'David Guetta', points: 105
        },
        {
            name: 'High Hopes', artist: 'Panic! At The Disco', points: 51
        },
        {
            name: 'Baby', artist: 'Clean Bandit', points: 45
        },
        {
            name: 'Huts', artist: 'The Blockparty', points: 70
        },
        {
            name: 'Rewrite the stars', artist: 'James Arthur', points: 26
        },
        {
            name: 'Where have you gone (anywhere)', artist: 'Lucas & Steve', points: 36
        },
        {
            name: 'Als Het Avond Is', artist: 'Suzan & Freek', points: 26
        },
        {
            name: 'Zachtjes Zingen', artist: 'Bl&oslash;f', points: 50
        },
        {
            name: 'Polaroid', artist: 'Jonas Blue', points: 15
        },
        {
            name: 'Into The Future', artist: "Chef'Special", points: 41
        },
        {
            name: 'Louboutin', artist: 'Frenna', points: 8
        },
        {
            name: 'Without me', artist: 'Halsey', points: 5
        }
    ];


    event.preventDefault();
    var sel = document.getElementById("list");
    value = sel.options[sel.selectedIndex].value; // or just sel.value
    //console.log(value);

    if (value == 2018) {
        console.log("NEW: start loading top 100 list of 2018.")
        console.log("--------------------------------------------")
        list2018();
    }
    else if (value == 2017) {
        console.log("NEW: start loading top 100 list of 2017.")
        console.log("--------------------------------------------")
        list2017();
    }
    else {
        if (!document.getElementById("selectionScreen").contains(document.getElementById("p"))) {
            const pCreate = document.createElement("p")
            pCreate.innerHTML = "Deze lijst is nog niet beschikbaar."
            pCreate.setAttribute("id", "p")
            selectionScreen.appendChild(pCreate);
        }
    }

    function table(tbody) {
        body.innerHTML = '';
        const backButton = document.createElement("input");
        backButton.setAttribute("type", "submit");
        backButton.setAttribute("value", "selecteer lijst");
        backButton.setAttribute("id", "goBack");
        backButton.classList.add("goBack");
        const formArea = document.createElement("form");
        formArea.appendChild(backButton);
        var table = document.createElement("table");
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        trHead.classList.add("trHead");
        const positie = document.createElement("th");
        positie.innerHTML = "positie";
        const th = document.createElement("th");
        const th2 = document.createElement("th");
        const punten = document.createElement("th");
        punten.innerHTML = "Punten";
        const trButton = document.createElement("tr");
        trButton.classList.add("trButton");
        const tdButton = document.createElement("td");
        tdButton.setAttribute("colspan", "4")
        tdButton.appendChild(formArea);
        //console.log(formArea)
        trButton.appendChild(tdButton);
        trHead.appendChild(positie);
        trHead.appendChild(th);
        trHead.appendChild(th2);
        trHead.appendChild(punten);
        thead.appendChild(trButton);
        thead.appendChild(trHead);
        table.appendChild(thead);
        body.appendChild(table);
        table.appendChild(tbody);
        body.appendChild(table);
    }

    function list2018() {

        const tbody = document.createElement("tbody");

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
            //console.log(songName);
            //console.log(songArtist);
            //console.log(songPoints);
            //console.log('--------------------')
        }

        table(tbody)
        const goBackButton = document.getElementById('goBack');
        goBackButton.addEventListener('click', goBackExecuter);
        console.log("NEW: top 100 list of 2018 has been loaded succesfully.")
        console.log("--------------------------------------------")
    }

    function list2017() {

        const tbody = document.createElement("tbody");

        var byDate = top100list_2017.slice(0);
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
            //console.log(songName);
            //console.log(songArtist);
            //console.log(songPoints);
            //console.log('--------------------')
        }

        table(tbody)
        const goBackButton = document.getElementById('goBack');
        goBackButton.addEventListener('click', goBackExecuter);
        console.log("NEW: top 100 list of 2017 has been loaded succesfully.")
        console.log("--------------------------------------------")
    }
}