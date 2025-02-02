const gameData = {
    "1": {
        "text": "It's the very first time you are hearing about crypto. What is your initial reaction to it?",
        "image" : "smaller_images/question images/question1.png",
"choices": {
            "Sounds like a scam - I'm staying away.": [2, {
            "Shavonne Wong": 3,    // Increased weight for skeptic-to-believer arc
            "Latasha": 2
        }],
            "I'm intrigued... let me look into it.": [2, {
            "Foodmasku": 3,
            "Zeneca": 2,
            "Jimena Buena Vida": 1
        }],
            "Huh? Don't know, don't care.": [2,{"Not a Maverick": 10}],
            "It's got to be the future. Better dive right in.": [2, {
            "Claire Silver": 2,
            "Jesse Pollak": 3,
            "Li Jin": 2
        }]
        }
    },
    "2": {
        "text": " You decide to learn more about crypto anyway. Where do you first go?",
        "image" : "smaller_images/question images/question2.png",
"choices": {
            "Google - it's the first place I go any time I want to find out about something new.": [3, ["Foodmasku", "Jesse Pollak", "Larisa Barbu","Micah Johnson","Li Jin"]],
            "YouTube - no better way to learn than to watch a video!": [3,["Randi Zuckerberg","Shavonne Wong","Matt Medved & Alejandro Navia"]],
            "Twitter / X - I heard that's where all the cool crypto people hang out these days.": [3,["Jimena Buena Vida", "Latasha", "Cozomo de Medici","Zeneca"]],
            "Reddit - the people at r/wallstreetbets must know something about this.": [3, ["Claire Silver", "Micah Johnson"]]
        }
    },
    "3": {
        "text": "You have a slightly better idea of what crypto is now. How do you describe it to a friend in one sentence?",
        "image" : "smaller_images/question images/question3.png",
"choices": {
            "It's not a real thing - it's just magic Internet money.": [4,["Randi Zuckerberg","Foodmasku","Latasha","Shavonne Wong"]],
            "The future is onchain, baby.": [4,["Jesse Pollak", "Matt Medved & Alejandro Navia", "Li Jin","Cozomo de Medici"]],
            "It's our one way ticket to generational wealth!": [4,["Zeneca", "Claire Silver"]],
            "It's just something nerds are into these days.": [4,["Micah Johnson", "Larisa Barbu"]],
        }
    },
    "4": {
        "text": "You're mildly convinced. You decide to create your first crypto wallet. Where's the first place you think of writing down your seed phrase (aka password)? ",
        "image" : "smaller_images/question images/question4.png",
"choices": {
            "Who needs smart phrases? Smart wallet, only.": [5, {
                "Jesse Pollak": 3,
                "Li Jin": 1}],
            "On a piece of paper you have in front of you.": [5,["Shavonne Wong", "Foodmasku"]],
            "In your Notes app.": [5, {
                "Randi Zuckerberg": 1,
                "Jimena Buena Vida": 1,
                "Not a Maverick": 3 }],
            "On a steel plate - it has to be indestructible!": [5,["Claire Silver", "Larisa Barbu","Zeneca"]],
        }
    },
    "5": {
        "text": "Time to buy your first crypto. What do you go for?",
        "image" : "smaller_images/question images/question5.png",
"choices": {
            "Bitcoin.": [6,["Jesse Pollak","Li Jin","Claire Silver","Shavonne Wong"]],
            "Ethereum.": [6,["Cozomo de Medici","Randi Zuckerberg","Foodmasku","Micah Johnson","Jimena Buena Vida","Matt Medved & Alejandro Navia","Latasha"]],
            "Solana.": [6,{"Larisa Barbu": 6}],
            "Any token associated with an animal": [6,["Zeneca"]],
        }
    },
    "6": {
        "text": "Crap - you connected your wallet to a malicious website and just got scammed. What were you trying to do?",
        "image" : "smaller_images/question images/question6.png",
"choices": {
            "Mint an NFT": [7, ["Jimena Buena Vida", "Foodmasku", "Claire Silver"]],
            "Claim a token airdrop": [7, ["Zeneca", "Larisa Barbu"]],
            "Schedule an interview with someone claiming to be from CoinDesk": [7, ["Matt Medved & Alejandro Navia","Li Jin"]],
            "Wait - I connected my wallet to something?": [7, {
                "Shavonne Wong": 1, 
                "Randi Zuckerberg": 6, 
                "Not a Maverick": 3}]
        }
    },
    "7" :{
        "text": "Ok phew! Security guru zachxbt helped you find the scammer and you get your money back. What do you do next?",
        "image" : "smaller_images/question images/question7.png",
"choices": {
            "Swear off crypto and tell all your friends to do the same.": [8, {"Not a Maverick": 10}],
            "Buy a hardware wallet like a Ledger immediately.": [8,["Latasha", "Li Jin", "Jesse Pollak","Cozomo de Medici","Claire Silver"]],
            "Stick to holding crypto in a centralized exchange and do nothing else with it.": [8, ["Randi Zuckerberg"]],
            "That was just a fluke. Let's find the next website to connect to!": [8, {
                "Zeneca": 1,
                "Shavonne Wong": 6}]
        }
    },
    "8" :{
        "text" : "You think you  may have just made your first bestie in crypto. What is their profile picture?",
        "image" : "smaller_images/question images/question8.png",
"choices": {
                    "A real photo of themselves.": [9, ["Li Jin","Latasha","Larisa Barbu","Foodmasku","Shavonne Wong"]],
                    "A CryptoPunk.": [9, ["Matt Medved & Alejandro Navia", "Jesse Pollak","Jimena Buena Vida","Claire Silver","Cozomo de Medici"]],
                    "Some kind of animal avatar (penguin, ape, or otherwise).": [9, ["Zeneca"], 2],
                    "It's an avatar of some kind that you don't recognize... but you think it's super cool anyway.": [9, ["Randi Zuckerberg", "Micah Johnson"]]
                }
    },
    "9" :{    
        "text": "Your bestie says this all the time, even though you don't really understand it. What is it that they are saying?",
        "image" : "smaller_images/question images/question9.png",
"choices": {
            "WAGMI!!": [10,["Randi Zuckerberg"]],
            "Stay based, and do the right thing.": [10, {
                "Jesse Pollak": 5,
                "Zeneca": 1}],
            "i ain't reading all that. i'm happy for u tho or sorry that happened": [10, ["Matt Medved & Alejandro Navia","Shavonne Wong"]],
            "gm": [10, ["Zeneca","Foodmasku","Cozomo de Medici","Claire Silver"]]
        }
    },
    "10" :{
        "text": "Great - you made some friends, and things were getting kind of fun, but now the market is down bad. What's your move?",
        "image" : "smaller_images/question images/question10.png",
"choices": {
            "Keep your head down - bear markets are for building and creating.": [11, {
                "Latasha": 1, 
                "Claire Silver": 1,
                "Jesse Pollak": 3,
                "Foodmasku": 1,
                "Micah Johnson": 2,
                "Jimena Buena Vida": 1,
                "Larisa Barbu": 2}],
            "Average down or HODL and wait for the market to recover.": [11, {
                "Zeneca": 3,
                "Shavonne Wong": 1}],
            "Sell everything and swear off crypto forever.": [11, {"Not a Maverick": 5}],
            "Take a beat, and then research and identify future opportunities.": [11, {
                "Matt Medved & Alejandro Navia": 2, 
                "Randi Zuckerberg": 1,
                "Li Jin":3}]
            }
        },
    "11": {
        "text": "Alright, it's time to meet all of your new Internet friends IRL for the first time. Which event(s) are you most likely going to see them at?",
        "image" : "smaller_images/question images/question11.png",
"choices": {
            "ETHDenver, DevCon, or ETHCC": [12, ["Jesse Pollak", "Zeneca"]],
            "NFT Paris, NFT NYC, or Art Basel Miami": [12,["Latsha", "Foodmasku","Matt Medved & Alejandro Navia","Shavonne Wong","Jimena Buena Vida","Claire Silver","Micah Johnson"]],
            "Solana Breakpoint, Consensus, or Token2049": [12, ["Larisa Barbu","Jesse Pollak"]],
            "FarCon, BaseCamp, or a small local community meetup": [12, ["Li Jin","Randi Zuckerberg"]]
        }
    },
    "12" : {
        "text": "All these main events are either too overwhelming or too boring. You decide to hang out at a side event instead. What's your vibe?",
        "image" : "smaller_images/question images/question12.png",
"choices": {
            "Something lowkey, maybe grab pizza with PizzaDAO.": [13,["Li Jin", "Jesse Pollak"]],
            "Yap with the girlies and get your nails chipped at a Boys Club soiree.": [13, ["Randi Zuckerberg", "Larisa Barbu"]],
            "Rage hard - you heard there's an open bar and Steve Aoki is DJing.": [13,{
                "Latasha": 4,
                "Matt Medved & Alejandro Navia": 6}],
            "Head to the nearest art exhibition, because you're here for the art.": [13,["Foodmasku","Shavonne Wong","Jimena Buena Vida","Micah Johnson","Cozomo de Medici","Claire Silver"]]
        }
    },
    "13" : {
        "text": "You return home from your first crypto event and you can't get enough of it. What do you do next?",
        "image" : "smaller_images/question images/question13.png",
"choices":{
            "Find out what event is next on the calendar and book it immediately.": [14, ["Latasha", "Matt Medved & Alejandro Navia","Jimena Buena Vida"]],
            "Sign up for a hackathon or just start building something on your own.": [14, ["Jesse Pollak","Claire Silver","Larisa Barbu","Micah Johnson","Randi Zuckerberg"]],
            "Start writing long threads on X so you can share everything you've learned.": [14, {
                "Zeneca": 2,
                "Li Jin": 4,}],
            "Buy the memecoin you heard someone mention in passing.": [14, ["Zeneca","Foodmasku"]]
        }
    },
    "14": {
        "text": "That's it. You've been red-pilled and decide to go full-time into crypto. What do you do?",
        "image" : "smaller_images/question images/question14.png",
"choices": {
            "Launch a creative project onchain and become a full-time creator.": [15, {
                "Claire Silver": 4,
                "Micah Johnson": 3,
                "Foodmasku": 2,
                "Latasha": 2,
                "Shavonne Wong": 1,
                "Jimena Buena Vida": 3
            }],
            "Become a founder in crypto - being a builder is officially your entire personality.":[15,{
                "Matt Medved & Alejandro Navia": 2,
                "Jesse Pollak": 4,
                "Randi Zuckerberg": 2
            }],
            "Build an onchain community and commit yourself to educating others.": [15,{
                "Li Jin": 1, 
                "Latasha": 2,
                "Zeneca": 3}],
            "Focus on trading and making money through various DeFi protocols.": [15,{
                "Larisa Barbu": 2,
                "Zeneca": 3}]
        }
    },
    "15" : {
        "text": "Congratulations! You just made your first meaningful amount of money from crypto. What is the first thing you are going to spend it on?",
        "image" : "smaller_images/question images/question15.png",
"choices": {
            "Set it aside to set yourself up for even bigger gains next cycle.": [16, {
                "Jesse Pollak": 2, 
                "Zeneca": 2, 
                "Li Jin": 4,
                "Larisa Barbu": 1}],
            "Put a downpayment on your first home.": [16, {
                "Foodmasku": 1, 
                "Claire Silver": 4,
                "Jimena Buena Vida": 1}],
            "Buy a car or watch that screams crypto millionaire.": [16, {
                "Cozomo de Medici": 4,
                "Not a Maverick": 2}],
            "Book a 6 month trip around the world, first-class only.": [16, {
                "Randi Zuckerberg": 1, 
                "Shavonne Wong": 1,
                "Matt Medved & Alejandro Navia": 1,
                "Latasha": 1,
                "Cozomo de Medici": 4}]
        }
    },
    "16": {
        "text": "Fast forward to 2030. The entire world is now onchain and you were there to see it happen. What are you most proud of?",
        "image" : "smaller_images/question images/question16.png",
"choices": {
            "Becoming a trusted thought leader and onboarding as many new people to crypto as possible.": [0, {
                "Zeneca": 4, 
                "Jesse Pollak": 1, 
                "Li Jin": 3,
                "Cozomo de Medici": 4}],
            "Building a product or infrastructure that is now used by millions of people.": [0, {
                "Matt Medved & Alejandro Navia": 3, 
                "Larisa Barbu": 4,
                "Jesse Pollak": 4}],
            "Pioneering new models so others like you can make a living from doing what they love.": [0, {
                "Shavonne Wong": 2,
                "Foodmasku": 5, 
                "Claire Silver": 4,
                "Latasha": 3,
                "Jimena Buena Vida": 5,
                "Micah Johnson": 5}],
            "Growing a beautiful community in your very own special corner of the Internet.": [0, {
                "Randi Zuckerberg": 4,
                "Latasha": 3,
                "Jimena Buena Vida": 4}]
        }
    },
    "0" : {

    }
};

const personalities = { 
    "Claire Silver": 0, // The Alchemist
    "Larisa Barbu": 0, // The Strategist
    "Jimena Buena Vida": 0, // The Empath
    "Jesse Pollak": 0, // The Architect
    "Micah Johnson": 0, // The Dreamer
    "Cozomo de Medici": 0, // The Connoisseur
    "Matt Medved & Alejandro Navia": 0, // The Connector
    "Randi Zuckerberg": 0, // The Visionary
    "Foodmasku": 0, // The Rebel
    "Li Jin": 0, // The Oracle
    "Latasha": 0, // The Performer
    "Zeneca": 0, // The Gambler
    "Not a Maverick": 0, // The Faint of Heart
    "Shavonne Wong": 0  // Added missing personality
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // Handle both array of personalities and object with weights
    if (Array.isArray(selectedPersonalities)) {
        // Legacy support for simple array
        selectedPersonalities.forEach(personality => {
            personalities[personality]++;
        });
    } else {
        // Handle object with weights
        Object.entries(selectedPersonalities).forEach(([personality, weight]) => {
            personalities[personality] += weight;
        });
    }

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedMaverick();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedMaverick() {
    let maxCount = 0;
    let maxMaverick = '';

    for (const [maverick, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxMaverick = maverick;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const maverickImagePath = `smaller_images/id_cards/${maxMaverick}.png`;

    // Preload the image
    const img = new Image();
    img.src = maverickImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share this with a friend!';
    shareButton.className = 'share-button';  // Updated class name

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = `You are most like ${maxMaverick}!`;
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `I am most like ${maxMaverick}! Find out which Digital Maverick you are most like at https://debsoon.github.io/digitalmavericks.`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    console.log("Starting game...");
    
    // Get all elements we need to hide/show
    const homescreen = document.getElementById('homescreen');
    const title = document.querySelector('.title');
    const startButton = document.querySelector('.start-button');
    const gameContainer = document.getElementById('game-container');
    
    // Check if elements exist before trying to modify them
    if (homescreen) homescreen.style.display = 'none';
    if (title) title.style.display = 'none';
    if (startButton) startButton.style.display = 'none';
    if (gameContainer) gameContainer.style.display = 'block';
    
    // Start the game
    currentState = 1;
    renderState(currentState);
}
