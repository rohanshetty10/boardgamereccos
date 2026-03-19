const gamesData = [
  {
    id: 1,
    name: "Catan",
    emoji: "🏝️",
    description: "Trade, build, and settle the island of Catan. Collect resources and expand your territory to earn victory points.",
    minPlayers: 3,
    maxPlayers: 4,
    types: ["strategy", "family"],
    complexity: 3,
    estimatedTime: 75,
    alternatives: [
      "Use colored paper squares as resource cards and small stones as settlements",
      "Draw a hex grid on paper and use coins/buttons as pieces",
      "Play with a standard deck — assign suits as resources and use face cards for development cards"
    ],
    details: {
      overview: "Players take on the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. The game board, made up of hexagonal tiles, represents the island. Players earn points by building settlements, cities, and roads, and by holding special cards.",
      bestWith: "4 players",
      ages: "10+",
      designer: "Klaus Teuber",
      yearPublished: 1995,
      mechanics: ["Dice Rolling", "Trading", "Resource Management", "Network Building"],
      tips: [
        "Focus on getting access to all 5 resource types early",
        "Ore and wheat are the most powerful late-game resources",
        "Don't neglect building roads — longest road is often decisive"
      ],
      rulebookUrl: "https://www.catan.com/understand-catan/game-rules",
      videoUrl: "https://www.youtube.com/watch?v=DEny3m8EHII"
    }
  },
  {
    id: 2,
    name: "Codenames",
    emoji: "🕵️",
    description: "Two teams compete to identify their agents from a grid of words using one-word clues. A brilliant party game of deduction.",
    minPlayers: 4,
    maxPlayers: 8,
    types: ["party", "word", "deduction"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Write random words on index cards and arrange in a 5×5 grid",
      "Use a random word generator app and a hand-drawn key card",
      "Play with sticky notes on a table — mark the key card on a separate sheet"
    ],
    details: {
      overview: "Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their codenames. Spymasters take turns giving one-word clues that can point to multiple words on the board. The team that contacts all their agents first wins.",
      bestWith: "6–8 players",
      ages: "10+",
      designer: "Vlaada Chvátil",
      yearPublished: 2015,
      mechanics: ["Team-Based", "Word Association", "Deduction", "Communication Limits"],
      tips: [
        "As spymaster, think about what words your team will naturally connect",
        "Avoid clues that could lead to the assassin word",
        "Multi-word connections are risky but can swing the game"
      ],
      rulebookUrl: "https://czechgames.com/files/rules/codenames-rules-en.pdf",
      videoUrl: "https://www.youtube.com/watch?v=zQVHkl8oQEU"
    }
  },
  {
    id: 3,
    name: "Ticket to Ride",
    emoji: "🚂",
    description: "Build train routes across the map by collecting and playing matching train cards. Connect cities to complete destination tickets.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["strategy", "family"],
    complexity: 2,
    estimatedTime: 60,
    alternatives: [
      "Draw a simplified map on poster board and use colored pencils to claim routes",
      "Use a standard deck — group by color to represent train cards, mark routes on a printed map",
      "Substitute toothpicks or matchsticks painted in different colors as train cars"
    ],
    details: {
      overview: "Players collect colored train car cards to claim railway routes connecting cities across a map. Longer routes are worth more points. Players also earn bonuses by completing Destination Tickets — secret goal cards that connect distant cities.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Alan R. Moon",
      yearPublished: 2004,
      mechanics: ["Set Collection", "Route Building", "Hand Management"],
      tips: [
        "Keep your routes secret — opponents can block you if they guess your path",
        "Claim long routes early before they're taken",
        "Balance between completing tickets and grabbing opportunistic routes"
      ],
      rulebookUrl: "https://ncdn0.daysofwonder.com/tickettoride/en/img/tt_rules_2015_en.pdf",
      videoUrl: "https://www.youtube.com/watch?v=4JhFhyvGdik"
    }
  },
  {
    id: 4,
    name: "Pandemic",
    emoji: "🦠",
    description: "Work together as a team of specialists to treat disease outbreaks and find cures before pandemics overwhelm the world.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["cooperative", "strategy"],
    complexity: 3,
    estimatedTime: 60,
    alternatives: [
      "Print a world map and use colored beads/candies as disease cubes",
      "Use playing cards (4 suits = 4 diseases) and a printed board",
      "Create role cards from index cards, track infection with tally marks"
    ],
    details: {
      overview: "As members of a disease-fighting team, you travel the world treating infections and gathering knowledge to find cures. You must work together, using each character's unique abilities, to stop four deadly diseases before time runs out.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Matt Leacock",
      yearPublished: 2008,
      mechanics: ["Cooperative Play", "Action Points", "Set Collection", "Variable Player Powers"],
      tips: [
        "The Medic and Researcher combo is incredibly powerful",
        "Keep outbreaks under control — chain reactions can end the game fast",
        "Communicate openly and plan 2–3 turns ahead as a team"
      ],
      rulebookUrl: "https://images.zmangames.com/filer_public/25/12/251258b1-8782-43bc-8aca-6e75defc7c5e/zm7101_pandemic_rules.pdf",
      videoUrl: "https://www.youtube.com/watch?v=ytK1zDPPDhw"
    }
  },
  {
    id: 5,
    name: "Uno",
    emoji: "🃏",
    description: "The classic card game of matching colors and numbers. Play action cards to disrupt opponents and be the first to empty your hand.",
    minPlayers: 2,
    maxPlayers: 10,
    types: ["card", "family", "party"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use a standard deck — match by suit or number, face cards as action cards",
      "Make DIY cards from index cards with colored markers",
      "Use two standard decks shuffled together for larger groups"
    ],
    details: {
      overview: "Players take turns matching a card in hand with the current card shown on top of the deck by color or number. Special action cards add twists: Skip, Reverse, Draw Two, and the powerful Wild and Wild Draw Four cards.",
      bestWith: "4–6 players",
      ages: "7+",
      designer: "Merle Robbins",
      yearPublished: 1971,
      mechanics: ["Hand Management", "Card Matching", "Take That"],
      tips: [
        "Hold onto Wild and Draw Four cards for strategic moments",
        "Try to remember what colors opponents are lacking",
        "Always say UNO when you have one card left!"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/uno/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=p0L3Swjqb1M"
    }
  },
  {
    id: 6,
    name: "Werewolf",
    emoji: "🐺",
    description: "A social deduction game where villagers try to identify the hidden werewolves before they're all eliminated.",
    minPlayers: 6,
    maxPlayers: 18,
    types: ["party", "bluffing", "deduction"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Write roles on folded slips of paper — works perfectly as a substitute",
      "Use a standard deck — assign roles to specific cards (Ace = Werewolf, King = Seer, etc.)",
      "Use a free Werewolf app as the moderator and narrator"
    ],
    details: {
      overview: "Each player is secretly assigned a role — Werewolf, Villager, or a special character. During the night phase, werewolves secretly choose a victim. During the day, players debate and vote to eliminate a suspect. The game continues until one side prevails.",
      bestWith: "8–12 players",
      ages: "8+",
      designer: "Dimitry Davidoff",
      yearPublished: 1986,
      mechanics: ["Social Deduction", "Voting", "Role Playing", "Player Elimination"],
      tips: [
        "Pay close attention to who defends whom during discussions",
        "As a werewolf, don't be too quiet — it draws suspicion",
        "The Seer should be careful about revealing information too early"
      ],
      rulebookUrl: "https://www.fgbradleys.com/rules/rules4/One%20Night%20Ultimate%20Werewolf%20-%20rules.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dLAv25CBJ5Y"
    }
  },
  {
    id: 7,
    name: "Chess",
    emoji: "♟️",
    description: "The timeless game of strategy. Outmaneuver your opponent's pieces and deliver checkmate to their king.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 4,
    estimatedTime: 45,
    alternatives: [
      "Draw a board on paper and use coins (heads/tails) labeled with piece names",
      "Use two colors of buttons or bottle caps labeled with piece initials",
      "Play on any free chess app or website like Lichess for an identical experience"
    ],
    details: {
      overview: "Chess is a two-player abstract strategy game played on an 8×8 checkered board with 16 pieces per side. Each type of piece moves differently, and the objective is to place the opponent's king under an inescapable threat known as checkmate.",
      bestWith: "2 players",
      ages: "6+",
      designer: "Traditional",
      yearPublished: 600,
      mechanics: ["Abstract Strategy", "Grid Movement", "Capture"],
      tips: [
        "Control the center of the board in the opening",
        "Develop your knights and bishops before starting attacks",
        "Learn basic endgame patterns — King + Rook vs King is essential"
      ],
      rulebookUrl: "https://www.chess.com/learn-how-to-play-chess",
      videoUrl: "https://www.youtube.com/watch?v=OCSbzArwB10"
    }
  },
  {
    id: 8,
    name: "Dixit",
    emoji: "🎨",
    description: "A beautifully illustrated card game where players use their imagination to interpret dreamlike artwork through poetic clues.",
    minPlayers: 3,
    maxPlayers: 6,
    types: ["party", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Cut out interesting images from magazines — each player gets a hand of images",
      "Use AI-generated art printed on cards for a unique set",
      "Take random photos on phones and use those as the 'cards' to describe"
    ],
    details: {
      overview: "Each round, one player (the storyteller) chooses a card from their hand and gives a clue. Other players select cards that best match the clue. All cards are shuffled and revealed, and players vote on which card they think is the storyteller's. The clue must be just ambiguous enough.",
      bestWith: "4–6 players",
      ages: "8+",
      designer: "Jean-Louis Roubira",
      yearPublished: 2008,
      mechanics: ["Storytelling", "Voting", "Hand Management"],
      tips: [
        "Make clues that are neither too obvious nor too obscure",
        "Pay attention to the storyteller's personality when guessing",
        "Use emotions, songs, or movie references as creative clues"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/dixit/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=J6UlbxeDE0w"
    }
  },
  {
    id: 9,
    name: "7 Wonders",
    emoji: "🏛️",
    description: "Draft cards across three ages to build your ancient civilization. Develop science, military, and commercial power.",
    minPlayers: 3,
    maxPlayers: 7,
    types: ["strategy", "card"],
    complexity: 3,
    estimatedTime: 45,
    alternatives: [
      "Create simplified cards from index cards with hand-drawn symbols",
      "Use a spreadsheet or printed table to track resources and points",
      "Substitute with poker chips for resources and hand-written age cards"
    ],
    details: {
      overview: "Players simultaneously draft cards over three Ages, building up their ancient civilizations. Cards represent structures that provide resources, military strength, scientific discoveries, or victory points. Players interact primarily with their immediate neighbors.",
      bestWith: "4–5 players",
      ages: "10+",
      designer: "Antoine Bauza",
      yearPublished: 2010,
      mechanics: ["Card Drafting", "Set Collection", "Simultaneous Action"],
      tips: [
        "Science can be incredibly powerful if you commit to it early",
        "Don't ignore military — losing battles costs points every age",
        "Watch what your neighbors are collecting to avoid feeding them resources"
      ],
      rulebookUrl: "https://images.zmangames.com/filer_public/7a/3f/7a3f7cb4-5ff5-4154-8fee-86e8f3a2f1f4/7_wonders_rules_en.pdf",
      videoUrl: "https://www.youtube.com/watch?v=z_Wfdn5Es8U"
    }
  },
  {
    id: 10,
    name: "Exploding Kittens",
    emoji: "🐱",
    description: "A hilarious and strategic card game of luck and sabotage. Draw cards and try not to draw an Exploding Kitten!",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["card", "party"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Use a standard deck — Jokers are Exploding Kittens, Aces are Defuses, face cards are actions",
      "Make a DIY deck with index cards and silly drawings",
      "Use any deck and designate 4 'bomb' cards and assign action types to suits"
    ],
    details: {
      overview: "Players draw cards until someone draws an Exploding Kitten, at which point they're out unless they have a Defuse card. Other cards let you skip turns, peek at the deck, force opponents to draw, or shuffle the deck to avoid your fate.",
      bestWith: "3–4 players",
      ages: "7+",
      designer: "Elan Lee, Matthew Inman, Shane Small",
      yearPublished: 2015,
      mechanics: ["Press Your Luck", "Hand Management", "Take That", "Player Elimination"],
      tips: [
        "Save your Defuse cards as long as possible",
        "Use See the Future to plan your strategy around the deck",
        "Nope cards can be game-changing — time them carefully"
      ],
      rulebookUrl: "https://www.explodingkittens.com/pages/rules-exploding-kittens",
      videoUrl: "https://www.youtube.com/watch?v=kOKvE-2kL5c"
    }
  },
  {
    id: 11,
    name: "Scrabble",
    emoji: "📝",
    description: "Form words on the board using letter tiles to score points. Use premium squares and strategic placement to maximize your score.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["word", "strategy", "family"],
    complexity: 2,
    estimatedTime: 60,
    alternatives: [
      "Write letters on small squares of cardboard with point values",
      "Draw the board grid on paper and use letter tiles from an old set or paper squares",
      "Play online variants like Words With Friends for the same experience digitally"
    ],
    details: {
      overview: "Players use lettered tiles to create words on the game board, crossword-style. Each letter has a point value, and premium squares on the board multiply letter or word scores. The player with the highest total score at the end wins.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Alfred Mosher Butts",
      yearPublished: 1948,
      mechanics: ["Tile Placement", "Word Building", "Points Scoring"],
      tips: [
        "Learn the two-letter words — they're essential for parallel plays",
        "High-value letters on double/triple letter scores are huge",
        "Don't open up triple word scores for your opponent"
      ],
      rulebookUrl: "https://scrabble.hasbro.com/en-us/rules",
      videoUrl: "https://www.youtube.com/watch?v=K1KgvGwJ_CA"
    }
  },
  {
    id: 12,
    name: "Coup",
    emoji: "💰",
    description: "Bluff, deceive, and manipulate your way to power. Each player has two hidden characters with unique abilities — or do they?",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["bluffing", "card", "deduction"],
    complexity: 2,
    estimatedTime: 15,
    alternatives: [
      "Use a standard deck — assign face cards as characters (King=Duke, Queen=Contessa, etc.)",
      "Write character names on index cards, use coins as currency",
      "Print character ability reference cards from online templates"
    ],
    details: {
      overview: "In a dystopian future, players vie for power using hidden influence cards. On your turn you can take income, use a character ability (truthfully or as a bluff), or launch a coup. Other players can challenge your claims, and if caught bluffing you lose influence.",
      bestWith: "4–5 players",
      ages: "10+",
      designer: "Rikki Tahta",
      yearPublished: 2012,
      mechanics: ["Bluffing", "Deduction", "Player Elimination", "Variable Player Powers"],
      tips: [
        "Claiming Duke early for 3 coins is usually safe and strong",
        "Challenge when you have nothing to lose",
        "Watch for patterns — most players bluff the same character repeatedly"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/coup/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=a7EjMRHEsKM"
    }
  },
  {
    id: 13,
    name: "Azul",
    emoji: "🎯",
    description: "Draft beautiful tiles and arrange them on your player board. Score points for specific patterns and completed rows.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "family"],
    complexity: 2,
    estimatedTime: 40,
    alternatives: [
      "Use colored candies (M&Ms, Skittles) as tiles on a printed board",
      "Substitute with colored buttons or beads — 5 colors, 20 of each",
      "Use small colored paper squares and a hand-drawn player board grid"
    ],
    details: {
      overview: "Players take turns drafting colored tiles from shared factory displays and placing them on their player boards. Complete rows to transfer tiles to your mosaic wall and score points. Careful planning is key — excess tiles cost you points.",
      bestWith: "2–3 players",
      ages: "8+",
      designer: "Michael Kiesling",
      yearPublished: 2017,
      mechanics: ["Tile Drafting", "Pattern Building", "Set Collection"],
      tips: [
        "Watch what opponents need and deny them key tiles",
        "Completing columns and rows on your wall gives big bonuses",
        "Avoid overloading your staging rows — penalties add up fast"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/azul/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=csJL-78NEPQ"
    }
  },
  {
    id: 14,
    name: "Jenga",
    emoji: "🧱",
    description: "Carefully remove wooden blocks from a tower and place them on top. The player who topples the tower loses!",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["dexterity", "party", "family"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Stack dominos or thick cardboard pieces in a tower formation",
      "Use wooden craft sticks (popsicle sticks) stacked in groups of three",
      "Build with sugar cubes or uniform small boxes for a similar experience"
    ],
    details: {
      overview: "Players take turns removing one block at a time from a tower built of 54 blocks, then balancing it on top. The tower gets increasingly unstable as the game progresses, making each move more nerve-wracking. The last player to successfully place a block wins.",
      bestWith: "3–4 players",
      ages: "6+",
      designer: "Leslie Scott",
      yearPublished: 1983,
      mechanics: ["Dexterity", "Stacking", "Push Your Luck"],
      tips: [
        "Tap blocks gently to check which ones are loose before pulling",
        "Center blocks are usually safer to remove than edge blocks",
        "Push blocks out from one side rather than pulling them"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/jenga/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=FaNQhfCiTaI"
    }
  },
  {
    id: 15,
    name: "Trivial Pursuit",
    emoji: "🧠",
    description: "Test your knowledge across six categories. Roll the die, answer questions, and collect wedges to fill your pie piece.",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["trivia", "family"],
    complexity: 1,
    estimatedTime: 60,
    alternatives: [
      "Use a trivia app or website for questions, track scores on paper",
      "Write your own questions on index cards organized by category",
      "Roll a regular die to determine category, use any trivia source for questions"
    ],
    details: {
      overview: "Players move around a circular board answering trivia questions in six categories: Geography, Entertainment, History, Art & Literature, Science & Nature, and Sports & Leisure. Correct answers on specific spaces earn wedges, and the first to collect all six and answer a final question wins.",
      bestWith: "3–4 players or teams",
      ages: "12+",
      designer: "Chris Haney, Scott Abbott",
      yearPublished: 1981,
      mechanics: ["Trivia", "Roll and Move", "Set Collection"],
      tips: [
        "Play in teams to cover more knowledge areas",
        "Strategize your movement to land on wedge-earning spaces",
        "Don't rush to the center — make sure you have all wedges first"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/trivial-pursuit/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=KKGS0tDdMEI"
    }
  },
  {
    id: 16,
    name: "Splendor",
    emoji: "💎",
    description: "Collect gem tokens to purchase development cards. Build your gem empire and attract nobles to win prestige points.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "card"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Use poker chips or colored coins as gem tokens",
      "Create development cards from index cards with hand-drawn gems and costs",
      "Use colored candies as tokens and print card templates from online"
    ],
    details: {
      overview: "Players are gem merchants collecting tokens and purchasing development cards that provide permanent gem bonuses. As your engine grows, more expensive cards become affordable. Attract visiting nobles by meeting their requirements. First to 15 prestige points wins.",
      bestWith: "3 players",
      ages: "10+",
      designer: "Marc André",
      yearPublished: 2014,
      mechanics: ["Engine Building", "Set Collection", "Token Management"],
      tips: [
        "Focus on building an engine rather than spending tokens every turn",
        "Reserve cards strategically — it also gets you a gold (wild) token",
        "Keep an eye on nobles and race toward the easiest one to reach"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/splendor/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=rue8-jvbc9I"
    }
  },
  {
    id: 17,
    name: "Pictionary",
    emoji: "🖌️",
    description: "Draw clues for your teammates to guess. Race against the timer and the other team in this classic drawing party game.",
    minPlayers: 4,
    maxPlayers: 12,
    types: ["party", "family"],
    complexity: 1,
    estimatedTime: 45,
    alternatives: [
      "Use any paper and pencil — just need a word list (available free online)",
      "Use a phone timer and random word generator app",
      "Write words on slips of paper and draw from a bowl — zero materials needed beyond pen and paper"
    ],
    details: {
      overview: "Teams take turns in which one member draws a word or phrase while teammates try to guess it before time runs out. No letters, numbers, or verbal clues allowed. Categories range from easy objects to difficult actions and abstract concepts.",
      bestWith: "6–8 players",
      ages: "8+",
      designer: "Rob Angel",
      yearPublished: 1985,
      mechanics: ["Drawing", "Team-Based", "Real-Time", "Communication Limits"],
      tips: [
        "Start with the biggest, most recognizable part of the drawing",
        "Use arrows and simple symbols rather than detailed art",
        "If stuck, draw related concepts to guide your team's thinking"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/pictionary/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=sDEL4Ty950U"
    }
  },
  {
    id: 18,
    name: "Carcassonne",
    emoji: "🏰",
    description: "Place tiles to build a medieval landscape of cities, roads, and fields. Deploy your followers to score points.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["strategy", "family"],
    complexity: 2,
    estimatedTime: 40,
    alternatives: [
      "Draw tile patterns on cardboard squares — cities, roads, and monasteries",
      "Use dominos as simplified tiles with roads and city markers",
      "Print tile sheets from Board Game Geek fan files and use small tokens as meeples"
    ],
    details: {
      overview: "Players draw and place terrain tiles to build the landscape around the medieval French city of Carcassonne. After placing a tile, a player may choose to place a follower (meeple) on a feature — a city, road, cloister, or field — to score points when it's completed.",
      bestWith: "2–3 players",
      ages: "7+",
      designer: "Klaus-Jürgen Wrede",
      yearPublished: 2000,
      mechanics: ["Tile Placement", "Area Control", "Worker Placement"],
      tips: [
        "Don't commit all your meeples early — you might run out",
        "Farms can score huge points but tie up meeples for the entire game",
        "You can share or steal features by sneakily connecting tiles"
      ],
      rulebookUrl: "https://images.zmangames.com/filer_public/d5/50/d550fde7-1e21-481a-ad41-c77e78eee8fe/carcassonne-rules.pdf",
      videoUrl: "https://www.youtube.com/watch?v=JRGi3pOaCqU"
    }
  },
  {
    id: 19,
    name: "The Resistance",
    emoji: "🎭",
    description: "Hidden traitors sabotage missions while loyal resistance members try to identify them. A game of trust and betrayal.",
    minPlayers: 5,
    maxPlayers: 10,
    types: ["bluffing", "deduction", "party"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Use playing cards to assign roles — red cards are spies, black cards are resistance",
      "Write 'Pass' and 'Fail' on slips of paper for mission voting",
      "Use any two distinguishable items (coins heads/tails) for secret voting"
    ],
    details: {
      overview: "A group of resistance fighters must carry out missions against the government, but hidden spies are among them. A leader proposes a team for each mission; everyone votes to approve it. On approved missions, team members secretly play pass or fail cards. Spies try to fail missions without getting caught.",
      bestWith: "7–8 players",
      ages: "13+",
      designer: "Don Eskridge",
      yearPublished: 2009,
      mechanics: ["Social Deduction", "Voting", "Team Building", "Hidden Roles"],
      tips: [
        "Track voting patterns — spies often approve teams they're on",
        "If a mission fails, focus on who was on that team",
        "As a spy, occasionally vote to approve a team you're not on to seem trustworthy"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/the-resistance/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=g_QRczGzXqw"
    }
  },
  {
    id: 20,
    name: "Monopoly Deal",
    emoji: "🏦",
    description: "The fast-paced card game version of Monopoly. Collect property sets, charge rent, and steal from opponents.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["card", "family"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Create property cards from a standard deck — group by suit and number for sets",
      "Use index cards with hand-drawn properties, money values, and action cards",
      "Substitute Monopoly money and hand-written property cards"
    ],
    details: {
      overview: "A fast, card-based take on the classic Monopoly game. Players draw and play cards on their turns — collecting property cards, charging rent, or using action cards to steal properties, demand payments, or block opponents. First to three complete property sets wins.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Katharine Chapman",
      yearPublished: 2008,
      mechanics: ["Set Collection", "Hand Management", "Take That"],
      tips: [
        "Don't hoard cards — aggressive play usually wins",
        "Just Say No cards are incredibly valuable — save them for critical moments",
        "Complete cheaper property sets first for quick wins"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/monopoly-deal/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=GaFmVyIDE3g"
    }
  },
  {
    id: 21,
    name: "Wingspan",
    emoji: "🦅",
    description: "Attract birds to your wildlife preserves. Each bird has unique powers that combo together in this engine-building game.",
    minPlayers: 1,
    maxPlayers: 5,
    types: ["strategy", "card"],
    complexity: 3,
    estimatedTime: 60,
    alternatives: [
      "Use bird photos printed from the internet as cards with hand-written abilities",
      "Substitute dice and small tokens (beans, beads) for eggs and food",
      "Create a simplified version with index cards — focus on the core engine-building mechanic"
    ],
    details: {
      overview: "Players are bird enthusiasts seeking to attract the best birds to their network of wildlife preserves. Each bird card has unique abilities that trigger when activated. Over four rounds, you lay eggs, gather food, draw cards, and build powerful combos in your habitats.",
      bestWith: "3 players",
      ages: "10+",
      designer: "Elizabeth Hargrave",
      yearPublished: 2019,
      mechanics: ["Engine Building", "Card Drafting", "Dice Management", "Tableau Building"],
      tips: [
        "Focus on building one strong habitat early — especially the forest for food",
        "Birds with 'when activated' powers are extremely valuable in the long run",
        "Don't ignore end-of-round goals — they can swing final scores"
      ],
      rulebookUrl: "https://stonemaiergames.com/games/wingspan/rules/",
      videoUrl: "https://www.youtube.com/watch?v=lgDgcLI2B0U"
    }
  },
  {
    id: 22,
    name: "Charades",
    emoji: "🎬",
    description: "Act out words or phrases without speaking while your team tries to guess. A timeless party game for all ages.",
    minPlayers: 4,
    maxPlayers: 20,
    types: ["party", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Needs nothing but people! Write prompts on paper slips or use a free app",
      "Use a charades generator website on any phone",
      "Combine with Pictionary rules for a hybrid drawing + acting game"
    ],
    details: {
      overview: "Players split into teams. Each round, one player draws a word or phrase and must act it out without speaking, pointing at objects, or mouthing words. Their team has a limited time to guess the answer. First team to reach the target score wins.",
      bestWith: "6–12 players",
      ages: "6+",
      designer: "Traditional",
      yearPublished: 1800,
      mechanics: ["Acting", "Team-Based", "Real-Time", "Communication Limits"],
      tips: [
        "Start by indicating the category (movie, book, person, etc.) with signals",
        "Break long phrases into individual words and act each one",
        "Use the 'sounds like' gesture for difficult words"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/charades/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=8jxo2AfZdBA"
    }
  },
  {
    id: 23,
    name: "Dominion",
    emoji: "👑",
    description: "The original deck-building game. Buy cards from a shared supply to build the most efficient deck and earn victory points.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "card"],
    complexity: 3,
    estimatedTime: 45,
    alternatives: [
      "Use multiple standard decks — assign card types (Copper=numbered, Silver=face, etc.)",
      "Create kingdom cards from index cards with costs and abilities written on them",
      "Play the free online version at Dominion.games for the full experience"
    ],
    details: {
      overview: "Each player starts with an identical small deck and must add new cards through purchase. The goal is to build the most efficient deck of action, treasure, and victory cards. Deck-building is the core mechanic — you're constructing your game engine as you play.",
      bestWith: "3 players",
      ages: "13+",
      designer: "Donald X. Vaccarino",
      yearPublished: 2008,
      mechanics: ["Deck Building", "Hand Management", "Engine Building", "Card Combos"],
      tips: [
        "Buy Silver early — a reliable economy wins games",
        "Don't buy Victory cards too early — they clog your deck",
        "Learn to identify powerful card combos in the kingdom setup"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/dominion/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=5jNGpgdMums"
    }
  },
  {
    id: 24,
    name: "Telestrations",
    emoji: "😂",
    description: "A hilarious party game of drawing and guessing in a 'telephone' format. Watch your word transform through each player's interpretation!",
    minPlayers: 4,
    maxPlayers: 12,
    types: ["party", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use small notepads or folded paper — each player draws and passes",
      "Use sticky notes stacked together as mini sketchbooks",
      "Play digitally with the Gartic Phone website — free and works on any device"
    ],
    details: {
      overview: "Combining drawing and the telephone game, each player starts with a word and sketches it. The next player guesses what the sketch is, writes it down, and passes. The following player draws that guess. The chain continues and hilarity ensues as the original word transforms beyond recognition.",
      bestWith: "6–8 players",
      ages: "8+",
      designer: "USAopoly",
      yearPublished: 2009,
      mechanics: ["Drawing", "Communication Limits", "Party"],
      tips: [
        "Don't worry about drawing skill — bad drawings are often funnier",
        "Write your guess clearly so the next artist can read it",
        "Play Gartic Phone online for a great digital equivalent"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/telestrations/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=v7lIJKXsvPw"
    }
  },
  {
    id: 25,
    name: "King of Tokyo",
    emoji: "🦖",
    description: "Giant monsters battle for control of Tokyo! Roll dice for attacks, healing, energy, and victory points in this dice-chucking brawl.",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["party", "family", "dexterity"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use 6 regular dice and paper to track health/victory points/energy",
      "Draw monster characters on index cards with starting stats",
      "Create power-up cards from index cards with simple abilities"
    ],
    details: {
      overview: "Players are giant monsters vying for control of Tokyo. On your turn, roll six dice up to three times (Yahtzee-style) to get combinations of attacks, heals, energy, and victory points. Being in Tokyo lets you attack everyone else, but you can't heal. First to 20 VP or last monster standing wins.",
      bestWith: "4 players",
      ages: "8+",
      designer: "Richard Garfield",
      yearPublished: 2011,
      mechanics: ["Dice Rolling", "Push Your Luck", "Player Elimination", "King of the Hill"],
      tips: [
        "Don't stay in Tokyo too long — you can't heal while inside",
        "Energy cards can be game-winning — save energy for the best ones",
        "Three-of-a-kind victory points are a reliable path to winning"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/king-of-tokyo/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=BGACvb3Mm60"
    }
  },
  {
    id: 26,
    name: "Secret Hitler",
    emoji: "📜",
    description: "Liberals and Fascists battle for control of government. Deduce who is who as policies are enacted and trust is tested.",
    minPlayers: 5,
    maxPlayers: 10,
    types: ["bluffing", "deduction", "party"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Print the free official PnP (Print and Play) version from the creators' website",
      "Use playing cards — red for Fascist policies, black for Liberal policies, assign roles with face cards",
      "Write roles on folded paper and use index cards for policy tiles"
    ],
    details: {
      overview: "Players are divided into Liberals and Fascists, with one player secretly being Hitler. The president nominates a chancellor, and together they enact policies. Liberals try to pass liberal policies or assassinate Hitler; Fascists try to enact fascist policies or elect Hitler as chancellor.",
      bestWith: "7–8 players",
      ages: "13+",
      designer: "Mike Boxleiter, Tommy Maranges",
      yearPublished: 2016,
      mechanics: ["Social Deduction", "Voting", "Hidden Roles", "Negotiation"],
      tips: [
        "Pay attention to who nominates whom — alliances reveal roles",
        "Track which policies have been played versus what's left in the deck",
        "As a Liberal, don't be afraid to be assertive and call out suspicious behavior"
      ],
      rulebookUrl: "https://www.secrethitler.com/assets/Secret_Hitler_Rules.pdf",
      videoUrl: "https://www.youtube.com/watch?v=mbGXIDYdtas"
    }
  },
  {
    id: 27,
    name: "Boggle",
    emoji: "🔤",
    description: "Shake up the letter dice and find as many words as you can in the grid before time runs out!",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["word", "family"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Write letters on dice with a marker (or small paper cubes)",
      "Use a Boggle app or random letter grid generator online",
      "Write random letters in a 4x4 grid on paper — shake a bag of letter tiles to randomize"
    ],
    details: {
      overview: "Letter dice are shaken and settle into a 4×4 grid. All players simultaneously search for words by connecting adjacent letters (horizontally, vertically, or diagonally). Words must be at least 3 letters long. After the timer runs out, compare lists — only unique words score.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Allan Turoff",
      yearPublished: 1972,
      mechanics: ["Real-Time", "Word Building", "Pattern Recognition"],
      tips: [
        "Look for common prefixes and suffixes (-ing, -ed, -er, un-, re-)",
        "Longer words score exponentially more — prioritize finding them",
        "Scan systematically from each starting letter rather than randomly"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/boggle/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=BJAdTuidMwA"
    }
  },
  {
    id: 28,
    name: "Risk",
    emoji: "⚔️",
    description: "Conquer the world through strategic troop deployment, alliances, and combat. The classic game of global domination.",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["strategy"],
    complexity: 3,
    estimatedTime: 120,
    alternatives: [
      "Print a world map and use different colored tokens (coins, beads) as armies",
      "Use regular dice for combat and a hand-drawn simplified map",
      "Track territories and troops on a spreadsheet with dice rolls for battles"
    ],
    details: {
      overview: "Players place armies on a world map and take turns attacking neighboring territories by rolling dice. Successful conquests expand your empire, earning card sets that can be traded for reinforcements. Eliminate opponents or complete secret objectives to win.",
      bestWith: "4–5 players",
      ages: "10+",
      designer: "Albert Lamorisse",
      yearPublished: 1957,
      mechanics: ["Area Control", "Dice Combat", "Hand Management", "Negotiation"],
      tips: [
        "Control entire continents for bonus armies each turn",
        "Australia is the easiest continent to defend early on",
        "Don't spread your armies too thin — concentrated forces are stronger"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/risk/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=SPQJDmcbhOk"
    }
  },
  {
    id: 29,
    name: "Love Letter",
    emoji: "💌",
    description: "A tiny but brilliant card game of deduction and luck. Use your card's power to eliminate rivals and deliver your letter to the princess.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["card", "bluffing", "deduction"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Use a standard deck — Ace through 8 of one suit with a reference card for abilities",
      "Write card names and abilities on 16 index cards",
      "Use the free Print and Play files available online"
    ],
    details: {
      overview: "With only 16 cards in the deck and one card in hand at a time, you draw a card and play one each turn. Each card has a unique ability — guards let you guess opponents' hands, priests let you peek, and the princess eliminates you if discarded. Last player standing wins the round.",
      bestWith: "3–4 players",
      ages: "10+",
      designer: "Seiji Kanai",
      yearPublished: 2012,
      mechanics: ["Deduction", "Hand Management", "Player Elimination", "Card Powers"],
      tips: [
        "Track which cards have been played — there are only 16 total",
        "Guards are the most common card — use them wisely to eliminate opponents",
        "Holding the Princess is dangerous — opponents will try to force you to discard"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/love-letter/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=SiLretFhasI"
    }
  },
  {
    id: 30,
    name: "Cranium",
    emoji: "🧩",
    description: "A team game combining trivia, acting, drawing, and wordplay. Each turn presents a different creative challenge.",
    minPlayers: 4,
    maxPlayers: 16,
    types: ["party", "trivia", "family"],
    complexity: 1,
    estimatedTime: 60,
    alternatives: [
      "Combine Pictionary + Charades + Trivia with homemade category cards",
      "Use a phone timer, trivia app, and paper for drawing challenges",
      "Write challenges on cards: 'Draw', 'Act', 'Hum', 'Trivia' — roll a die to pick the type"
    ],
    details: {
      overview: "Teams compete in four different activity types: Creative Cat (drawing/sculpting), Star Performer (acting/humming), Data Head (trivia), and Word Worm (spelling/word puzzles). Correct answers advance your team around the board. The variety ensures everyone gets to shine.",
      bestWith: "6–8 players (teams)",
      ages: "12+",
      designer: "Whit Alexander, Richard Tait",
      yearPublished: 1998,
      mechanics: ["Trivia", "Drawing", "Acting", "Word Puzzles", "Team-Based"],
      tips: [
        "Put your best artist/actor on the corresponding category",
        "Use clay sculpting challenges to your advantage — they're often easier than drawing",
        "Stay calm during timed challenges — panic leads to mistakes"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/cranium/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=pG9MlZblhR0"
    }
  },
  {
    id: 31,
    name: "Terraforming Mars",
    emoji: "🪐",
    description: "Compete as corporations to transform Mars into a habitable planet by raising temperature, oxygen, and ocean levels.",
    minPlayers: 1,
    maxPlayers: 5,
    types: ["strategy", "card"],
    complexity: 4,
    estimatedTime: 120,
    alternatives: [
      "Use index cards for project cards with hand-written costs and effects",
      "Track resources with colored cubes or coins on a printed player board",
      "Play the official digital version for the full experience"
    ],
    details: {
      overview: "Players are corporations working to terraform Mars. Over many generations, you play project cards to raise global parameters, build cities, plant greenery, and manage resources. The player who contributes the most to terraforming and has the best infrastructure wins.",
      bestWith: "3 players",
      ages: "12+",
      designer: "Jacob Fryxelius",
      yearPublished: 2016,
      mechanics: ["Engine Building", "Card Drafting", "Tile Placement", "Resource Management"],
      tips: [
        "Focus on building an income engine early — money per generation is crucial",
        "Don't ignore the draft phase — denying strong cards to opponents matters",
        "Greenery placement for adjacency bonuses can swing the endgame"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/terraforming-mars/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=n3yVpsiVwL8"
    }
  },
  {
    id: 32,
    name: "Clue",
    emoji: "🔍",
    description: "Solve the murder mystery by figuring out who did it, with what weapon, and where. Eliminate suspects through clever deduction.",
    minPlayers: 3,
    maxPlayers: 6,
    types: ["deduction", "family"],
    complexity: 1,
    estimatedTime: 45,
    alternatives: [
      "Write suspect, weapon, and room names on cards — works identically to the original",
      "Use a printed mansion map and homemade suspect/weapon cards",
      "Play a digital version or use a mystery deduction app"
    ],
    details: {
      overview: "A classic whodunit game where players move around a mansion to make suggestions about the murder. By seeing which cards other players reveal, you eliminate possibilities until you can make an accusation. The first to correctly identify the murderer, weapon, and room wins.",
      bestWith: "4–5 players",
      ages: "8+",
      designer: "Anthony E. Pratt",
      yearPublished: 1949,
      mechanics: ["Deduction", "Roll and Move", "Process of Elimination"],
      tips: [
        "Keep detailed notes — mark both what you've seen and what others have asked about",
        "Make suggestions involving cards you hold to mislead opponents",
        "Move to rooms you haven't visited to gather information faster"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/clue/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=Kv1hx7_KwcU"
    }
  },
  {
    id: 33,
    name: "Citadels",
    emoji: "🏗️",
    description: "Draft secret character roles each round to gain unique powers. Build a city of districts to earn the most points.",
    minPlayers: 2,
    maxPlayers: 7,
    types: ["strategy", "card", "bluffing"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Use a standard deck for district cards — assign costs and point values by number",
      "Write character abilities on index cards for the role selection phase",
      "Use coins or tokens as gold and paper for district tracking"
    ],
    details: {
      overview: "Each round, players secretly select a character role from a shared pool, gaining unique abilities like extra gold, building power, or assassination. Players use their roles strategically to build a city of districts worth victory points while trying to predict opponents' choices.",
      bestWith: "5 players",
      ages: "10+",
      designer: "Bruno Faidutti",
      yearPublished: 2000,
      mechanics: ["Role Selection", "Bluffing", "Engine Building", "Hand Management"],
      tips: [
        "The Assassin is best used when you can predict your target's role choice",
        "Don't always pick the highest-value character — predictability gets you killed",
        "Race to 8 districts for the game-ending bonus"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/citadels/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=wJYcU_GdRSw"
    }
  },
  {
    id: 34,
    name: "Sushi Go!",
    emoji: "🍣",
    description: "A delightful card drafting game where you pick the best combination of sushi dishes as cards pass around the table.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["card", "family"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Use index cards with hand-drawn sushi items and point values",
      "Create a simplified version with a standard deck — assign sushi types to suits",
      "Play the free digital version on Board Game Arena"
    ],
    details: {
      overview: "Over three rounds, players simultaneously pick a card from their hand and pass the rest. Collect sets of sushi for points — dumplings reward large sets, sashimi need exact triplets, and pudding matters at game end. Simple to learn but full of tough choices.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Phil Walker-Harding",
      yearPublished: 2013,
      mechanics: ["Card Drafting", "Set Collection", "Simultaneous Action"],
      tips: [
        "Keep an eye on what others are collecting before committing to a set",
        "Tempura and sashimi are risky — worthless if you don't complete the set",
        "Never ignore pudding — last place in pudding loses 6 points"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/sushi-go/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=Xu3lRMrNijQ"
    }
  },
  {
    id: 35,
    name: "Betrayal at House on the Hill",
    emoji: "🏚️",
    description: "Explore a haunted mansion room by room. Midway through, one player becomes the traitor in one of 50 unique scenarios.",
    minPlayers: 3,
    maxPlayers: 6,
    types: ["cooperative", "strategy"],
    complexity: 3,
    estimatedTime: 60,
    alternatives: [
      "Create room tiles from cardboard squares with hand-drawn features",
      "Use character sheets on paper with stat trackers using paper clips",
      "Draw room cards from a shuffled deck of hand-written locations"
    ],
    details: {
      overview: "Players explore a haunted house by drawing and placing room tiles, discovering items and omens. When enough omens are found, a Haunt is triggered — one player becomes the traitor with secret objectives while the heroes must survive. With 50 different haunts, every game tells a different story.",
      bestWith: "4–5 players",
      ages: "12+",
      designer: "Rob Daviau, Bruce Glassco, Bill McQuillan",
      yearPublished: 2004,
      mechanics: ["Cooperative Play", "Tile Placement", "Variable Player Powers", "Storytelling"],
      tips: [
        "Explore aggressively early to find useful items before the haunt",
        "Stay near other players — isolation can be deadly after the haunt",
        "Read your haunt scenario carefully for hidden win conditions"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/betrayal-at-house-on-the-hill/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=MINNKyE4fjs"
    }
  },
  {
    id: 36,
    name: "Monopoly",
    emoji: "🎩",
    description: "The iconic property trading game. Buy streets, build houses and hotels, and bankrupt your opponents.",
    minPlayers: 2,
    maxPlayers: 8,
    types: ["family", "strategy"],
    complexity: 2,
    estimatedTime: 120,
    alternatives: [
      "Use paper money and hand-drawn property cards with a printed board",
      "Track properties and money digitally with a spreadsheet",
      "Play any of the many free digital versions available online"
    ],
    details: {
      overview: "Players roll dice to move around the board, buying and trading properties, and developing them with houses and hotels. Players collect rent from opponents landing on their properties. The goal is to be the last player remaining with money.",
      bestWith: "4 players",
      ages: "8+",
      designer: "Charles Darrow, Elizabeth Magie",
      yearPublished: 1935,
      mechanics: ["Roll and Move", "Trading", "Set Collection", "Auction"],
      tips: [
        "The orange and red properties are statistically the most landed-on",
        "Build to 3 houses quickly — that's where rent jumps dramatically",
        "Never leave properties unmortgaged if you can help it"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/monopoly/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=4Hfe97Q5kuI"
    }
  },
  {
    id: 37,
    name: "Hanabi",
    emoji: "🎆",
    description: "A unique cooperative card game where you can see everyone's cards except your own. Give clues to help your team play cards in order.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["cooperative", "card"],
    complexity: 2,
    estimatedTime: 25,
    alternatives: [
      "Use a standard deck — 4 suits, Ace through 5, hold cards facing outward",
      "Write numbers and colors on index cards and use a mirror-holder setup",
      "Play the free digital version on Board Game Arena"
    ],
    details: {
      overview: "Players hold their cards facing outward so everyone else can see them. On your turn, you either give a clue about another player's hand (color or number), play a card to the fireworks display, or discard. The team works together to play cards in ascending order by color.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Antoine Bauza",
      yearPublished: 2010,
      mechanics: ["Cooperative Play", "Hand Management", "Communication Limits", "Memory"],
      tips: [
        "Clue efficiency is key — try to convey multiple pieces of info per clue",
        "Establish conventions with your group about what clues mean",
        "Discard strategically to regain clue tokens when needed"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/hanabi/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=dReawFHWESs"
    }
  },
  {
    id: 38,
    name: "Battleship",
    emoji: "🚢",
    description: "Call out coordinates to find and sink your opponent's hidden fleet. A classic two-player guessing game of naval strategy.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Draw two 10×10 grids on paper — one for your ships, one for tracking shots",
      "Use graph paper and colored pencils to mark hits and misses",
      "Play any free online Battleship game for the same experience"
    ],
    details: {
      overview: "Each player secretly places ships on a grid, then takes turns calling coordinates to 'fire' at the opponent's grid. Hits and misses are recorded. When all squares of a ship are hit, it sinks. The first player to sink all enemy ships wins.",
      bestWith: "2 players",
      ages: "7+",
      designer: "Milton Bradley",
      yearPublished: 1967,
      mechanics: ["Grid-Based", "Deduction", "Memory"],
      tips: [
        "Use a checkerboard pattern for shots to maximize coverage",
        "Once you get a hit, fire adjacent squares to find the ship's orientation",
        "Place ships away from edges — experienced players check edges first"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/battleship/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=RY4nAyRgkLo"
    }
  },
  {
    id: 39,
    name: "Mysterium",
    emoji: "👻",
    description: "One player is a ghost sending vision cards to psychic investigators. Work together to solve the mystery of the ghost's murder.",
    minPlayers: 2,
    maxPlayers: 7,
    types: ["cooperative", "deduction", "party"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Use abstract art images cut from magazines as vision cards",
      "The ghost player draws clues on paper instead of using vision cards",
      "Use AI-generated surreal images printed on cards as dream visions"
    ],
    details: {
      overview: "A ghost player uses beautifully illustrated vision cards to guide psychic players toward identifying the correct suspect, location, and weapon. The ghost cannot speak — only provide imagery. Players interpret the abstract art and discuss theories together.",
      bestWith: "4–5 players",
      ages: "10+",
      designer: "Oleksandr Nevskiy, Oleg Sidorenko",
      yearPublished: 2015,
      mechanics: ["Cooperative Play", "Communication Limits", "Deduction", "Storytelling"],
      tips: [
        "As the ghost, focus on the most distinctive element that matches the target",
        "Psychics should discuss interpretations — different perspectives help",
        "Use process of elimination when vision cards seem ambiguous"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/mysterium/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=R9sNXwSjU_I"
    }
  },
  {
    id: 40,
    name: "Settlers of Catan: Seafarers",
    emoji: "⛵",
    description: "Expand beyond the shores of Catan! Build ships, discover new islands, and compete for resources across the seas.",
    minPlayers: 3,
    maxPlayers: 4,
    types: ["strategy", "family"],
    complexity: 3,
    estimatedTime: 90,
    alternatives: [
      "Add water hex tiles (blue paper) and ship pieces (toothpicks) to a base Catan set",
      "Draw expanded sea maps on poster board with island hexes",
      "Use the Catan Universe digital version which includes Seafarers"
    ],
    details: {
      overview: "An expansion to Catan that adds ships, gold hexes, and island scenarios. Players can now build shipping routes across water to reach new islands and discover valuable resources. Multiple scenario maps provide different strategic challenges.",
      bestWith: "4 players",
      ages: "10+",
      designer: "Klaus Teuber",
      yearPublished: 1997,
      mechanics: ["Dice Rolling", "Trading", "Resource Management", "Network Building"],
      tips: [
        "Ships are cheaper than roads — use them to expand quickly to new islands",
        "Gold hexes are extremely powerful — prioritize settling near them",
        "Balance land and sea expansion to avoid being cut off from resources"
      ],
      rulebookUrl: "https://www.catan.com/understand-catan/game-rules",
      videoUrl: "https://www.youtube.com/watch?v=RcEEJk3Fmjg"
    }
  },
  {
    id: 41,
    name: "Patchwork",
    emoji: "🧵",
    description: "A cozy two-player game where you purchase fabric patches and fit them together on your quilt board like a puzzle.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Cut Tetris-like shapes from colored paper and use a drawn grid as the quilt board",
      "Use cardboard cutouts of various shapes on a checkered board",
      "Play the official digital app for the full experience"
    ],
    details: {
      overview: "Two players compete to build the most aesthetic and complete patchwork quilt. Purchase patches of varying shapes, sizes, and costs from a shared market, then fit them onto your personal 9×9 grid. Earn buttons (currency) from patches with button icons, and lose points for empty spaces.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Uwe Rosenberg",
      yearPublished: 2014,
      mechanics: ["Tile Placement", "Resource Management", "Spatial Puzzle"],
      tips: [
        "Prioritize patches that generate button income early in the game",
        "Don't leave gaps in your quilt — each empty space costs 2 points",
        "Sometimes advancing on the time track to grab small patches is wise"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/patchwork/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=rCirkf5Yrjc"
    }
  },
  {
    id: 42,
    name: "Taboo",
    emoji: "🚫",
    description: "Get your team to guess the word on your card without using any of the five forbidden 'taboo' words listed!",
    minPlayers: 4,
    maxPlayers: 10,
    types: ["party", "word", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use a Taboo word generator app or website for unlimited cards",
      "Write target words and taboo words on index cards DIY-style",
      "Use a phone timer and any word list — teammates pick the taboo words"
    ],
    details: {
      overview: "Teams take turns where one player describes a word to their teammates without saying any of the listed taboo words. An opponent watches with a buzzer to catch violations. Teams race to guess as many words as possible before time runs out.",
      bestWith: "6–8 players",
      ages: "13+",
      designer: "Brian Hersch",
      yearPublished: 1989,
      mechanics: ["Word Association", "Team-Based", "Real-Time", "Communication Limits"],
      tips: [
        "Think of creative alternate descriptions before starting your clue",
        "Use opposites, rhymes, or 'sounds like' approaches for hard words",
        "Speak quickly and move on if your team isn't getting it"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/taboo/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=HkPNgDcCja4"
    }
  },
  {
    id: 43,
    name: "Gloomhaven",
    emoji: "⚔️",
    description: "An epic tactical combat game with a branching narrative. Build your character, explore dungeons, and make choices that shape the story.",
    minPlayers: 1,
    maxPlayers: 4,
    types: ["cooperative", "strategy"],
    complexity: 5,
    estimatedTime: 120,
    alternatives: [
      "Use the Gloomhaven digital edition for the full experience without setup",
      "Print scenario maps and use tokens on a hex grid for a simplified version",
      "Try Gloomhaven: Jaws of the Lion as a more accessible entry point"
    ],
    details: {
      overview: "A campaign-driven dungeon crawler where players control unique characters with card-based combat. Each turn, you select two ability cards to determine your actions. The branching narrative evolves based on your decisions, and characters retire and unlock new classes over time.",
      bestWith: "3 players",
      ages: "14+",
      designer: "Isaac Childres",
      yearPublished: 2017,
      mechanics: ["Hand Management", "Tactical Combat", "Campaign", "Variable Player Powers"],
      tips: [
        "Managing your card hand is critical — running out means exhaustion",
        "Coordinate initiative values with your party for optimal combos",
        "Don't rush through rooms — plan your approach carefully"
      ],
      rulebookUrl: "https://online.flippingbook.com/view/598058972/",
      videoUrl: "https://www.youtube.com/watch?v=Uw7LI2esvp0"
    }
  },
  {
    id: 44,
    name: "Connect Four",
    emoji: "🔴",
    description: "Drop colored discs into a vertical grid. Be the first to connect four of your discs in a row — horizontally, vertically, or diagonally.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["family", "strategy"],
    complexity: 1,
    estimatedTime: 10,
    alternatives: [
      "Draw a 7×6 grid on paper and use two colors of coins or tokens",
      "Use a whiteboard with magnets of two different colors",
      "Play on any free Connect Four website or app"
    ],
    details: {
      overview: "Two players take turns dropping colored discs into a 7-column, 6-row vertical grid. Discs fall to the lowest available spot in the column. The first player to get four in a row wins. Simple to learn but deep enough for strategic play.",
      bestWith: "2 players",
      ages: "6+",
      designer: "Howard Wexler, Ned Strongin",
      yearPublished: 1974,
      mechanics: ["Abstract Strategy", "Pattern Building"],
      tips: [
        "Control the center column — it's involved in the most winning combinations",
        "Set up double threats where you can win in two different spots",
        "Watch for diagonal threats — they're the easiest to miss"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/connect-four/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=utXzIFEVPjA"
    }
  },
  {
    id: 45,
    name: "Mafia",
    emoji: "🔫",
    description: "The original social deduction game. Townspeople must identify and eliminate the hidden mafia members before they're outnumbered.",
    minPlayers: 6,
    maxPlayers: 20,
    types: ["party", "bluffing", "deduction"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use folded slips of paper for role assignments — no other materials needed",
      "Use a standard deck — Aces are mafia, Kings are special roles, rest are town",
      "Use any free Mafia/Werewolf app as a moderator"
    ],
    details: {
      overview: "Players are secretly assigned roles as either Mafia or Townspeople. During the night phase, the Mafia secretly chooses a victim. During the day, all players debate and vote to eliminate a suspect. The game continues until either all Mafia are eliminated or they outnumber the town.",
      bestWith: "10–14 players",
      ages: "10+",
      designer: "Dimitry Davidoff",
      yearPublished: 1986,
      mechanics: ["Social Deduction", "Voting", "Hidden Roles", "Player Elimination"],
      tips: [
        "The moderator is key — a good narrator makes the game much more engaging",
        "Watch body language during night phases for tells",
        "As Mafia, target the most vocal and analytical players first"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/mafia/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=wVWbRFeiFeo"
    }
  },
  {
    id: 46,
    name: "Tiny Towns",
    emoji: "🏘️",
    description: "Build a thriving tiny town by placing resources on a grid and constructing buildings when patterns match. But space is limited!",
    minPlayers: 1,
    maxPlayers: 6,
    types: ["strategy", "family"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Use colored cubes or candies on a drawn 4×4 grid",
      "Print building pattern cards and use colored tokens from other games",
      "Play the digital version on Board Game Arena"
    ],
    details: {
      overview: "Each turn, players place a resource cube on their personal 4×4 grid. When the cubes match a building's required pattern, you can construct it, freeing up space. Each building type scores differently, and you lose points for leftover resources. Managing limited space is the core challenge.",
      bestWith: "3–4 players",
      ages: "14+",
      designer: "Peter McPherson",
      yearPublished: 2019,
      mechanics: ["Pattern Building", "Spatial Puzzle", "Resource Management"],
      tips: [
        "Plan your grid layout several turns ahead — space fills up fast",
        "Don't fixate on one building type — diversify for maximum points",
        "The Cottage is often the most efficient building if you can feed it"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/tiny-towns/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=oCfkntiEhGU"
    }
  },
  {
    id: 47,
    name: "Stratego",
    emoji: "🎖️",
    description: "A classic game of battlefield strategy. Position your army and attack the enemy while protecting your flag.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Use chess-sized pieces with rank stickers on one side for hidden info",
      "Write ranks on folded cards placed on a 10×10 grid",
      "Play online Stratego for a ready-made hidden information system"
    ],
    details: {
      overview: "Two players place 40 pieces with hidden ranks on a 10×10 board. Players take turns moving pieces and attacking opponents. When pieces clash, the higher rank wins (with special rules for Scouts, Miners, and Spies). Capture the opponent's flag to win.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Jacques Johan Mogendorff",
      yearPublished: 1947,
      mechanics: ["Abstract Strategy", "Hidden Information", "Grid Movement"],
      tips: [
        "Protect your flag with bombs — but don't make it too obvious",
        "Use Scouts to probe enemy positions and reveal information",
        "Keep your Miner alive — it's the only piece that can defuse bombs"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/stratego/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=cslBCt_zGZc"
    }
  },
  {
    id: 48,
    name: "Sequence",
    emoji: "🃏",
    description: "Play cards from your hand to place chips on the board. Get five in a row to form a sequence and win!",
    minPlayers: 2,
    maxPlayers: 12,
    types: ["card", "family", "strategy"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use two standard decks and a printed board layout showing all 104 cards in a grid",
      "Create a board on poster paper with cards arranged in rows, use colored coins",
      "Play online Sequence for a ready-made board and card setup"
    ],
    details: {
      overview: "Players play cards from their hand to place colored chips on corresponding spaces on the game board. Create sequences of five chips in a row (horizontal, vertical, or diagonal) to win. Jacks are special — one-eyed Jacks remove chips, two-eyed Jacks are wild.",
      bestWith: "6 players (3 teams of 2)",
      ages: "7+",
      designer: "Douglas Reuter",
      yearPublished: 1982,
      mechanics: ["Hand Management", "Pattern Building", "Card Matching"],
      tips: [
        "Corner spaces are free — they count for any player's sequence",
        "Block opponents' sequences with three in a row before they reach four",
        "Save one-eyed Jacks for critical defensive plays"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/sequence/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=nlN2ywFBQNI"
    }
  },
  {
    id: 49,
    name: "Munchkin",
    emoji: "🧙",
    description: "Kick down the door, fight the monster, grab the treasure. A satirical dungeon crawl card game full of backstabbing fun.",
    minPlayers: 3,
    maxPlayers: 6,
    types: ["card", "party"],
    complexity: 2,
    estimatedTime: 60,
    alternatives: [
      "Use index cards with hand-drawn monsters, treasures, and equipment",
      "Create a simplified version with a standard deck — face cards are monsters",
      "Print free custom Munchkin cards from fan-made templates"
    ],
    details: {
      overview: "Players take turns 'kicking down doors' by drawing cards that reveal monsters to fight or curses to endure. Beat monsters to level up and collect treasure. Other players can help you — or sabotage you by buffing the monster. First to Level 10 wins.",
      bestWith: "4 players",
      ages: "10+",
      designer: "Steve Jackson",
      yearPublished: 2001,
      mechanics: ["Hand Management", "Take That", "Negotiation", "Combat"],
      tips: [
        "Never help someone reach Level 10 — they can only fight for it",
        "Hoard your interference cards for when someone is about to win",
        "Trading and alliances are key — but betrayal is expected"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/munchkin/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=V6oMBSiL7Zs"
    }
  },
  {
    id: 50,
    name: "Othello",
    emoji: "⚫",
    description: "Place discs to outflank and flip your opponent's pieces. Simple rules but deeply strategic — a minute to learn, a lifetime to master.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Use coins (heads/tails) on a drawn 8×8 grid to represent both colors",
      "Play on any free Othello/Reversi site or app",
      "Draw the board on paper and use two colors of small tokens"
    ],
    details: {
      overview: "Two players take turns placing discs on an 8×8 board. When you place a disc, any of your opponent's discs that are sandwiched between your new disc and an existing one are flipped to your color. The player with the most discs when the board is full wins.",
      bestWith: "2 players",
      ages: "7+",
      designer: "Goro Hasegawa",
      yearPublished: 1971,
      mechanics: ["Abstract Strategy", "Area Control", "Flipping"],
      tips: [
        "Corners are the most valuable positions — they can never be flipped",
        "Avoid placing adjacent to corners unless you can take the corner yourself",
        "Having fewer pieces early can actually be advantageous — mobility matters"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/othello/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=Ol3Id7xYsY4"
    }
  },
  {
    id: 51,
    name: "Backgammon",
    emoji: "🎲",
    description: "One of the oldest known board games. Race your checkers around the board and bear them off before your opponent does.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Draw a board on paper with 24 triangular points and use coins as checkers",
      "Play on any free online backgammon site",
      "Use a printable backgammon board with buttons or small objects as pieces"
    ],
    details: {
      overview: "Players move checkers around a board of 24 points according to dice rolls. The goal is to move all your pieces into your home board and then bear them off. Strategy involves blocking, hitting opponent pieces, and managing the doubling cube.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Traditional",
      yearPublished: -3000,
      mechanics: ["Dice Rolling", "Race", "Abstract Strategy"],
      tips: [
        "Building a 'prime' (consecutive blocked points) is a powerful defensive strategy",
        "Don't leave single checkers (blots) exposed unless necessary",
        "Learn when to use the doubling cube — it's key to competitive play"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/backgammon/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=MUaLswMOfOA"
    }
  },
  {
    id: 52,
    name: "Checkers",
    emoji: "⬛",
    description: "The classic game of diagonal jumps and captures. Crown your pieces by reaching the opposite end and dominate the board.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy", "family"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Draw an 8×8 grid and use two different coins (pennies and dimes)",
      "Play on any free online checkers site",
      "Use bottle caps of two colors on a hand-drawn board"
    ],
    details: {
      overview: "Two players take turns moving their pieces diagonally on dark squares. Pieces capture by jumping over opponents. Reaching the far end crowns a piece as a king, allowing it to move backwards. Capture all opposing pieces or block them to win.",
      bestWith: "2 players",
      ages: "6+",
      designer: "Traditional",
      yearPublished: -3000,
      mechanics: ["Abstract Strategy", "Capture", "Grid Movement"],
      tips: [
        "Control the center of the board for more mobility",
        "Keep pieces on the back row as long as possible for defense",
        "Set up double or triple jumps by sacrificing a piece"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/checkers/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=ScKIdStgAfU"
    }
  },
  {
    id: 53,
    name: "Cards Against Humanity",
    emoji: "😈",
    description: "A party game for horrible people. Match outrageous answer cards to fill-in-the-blank question cards. The funniest combo wins.",
    minPlayers: 4,
    maxPlayers: 20,
    types: ["party"],
    complexity: 1,
    estimatedTime: 45,
    alternatives: [
      "Download and print the free official PDF from their website",
      "Write your own prompts and answers on index cards for a custom version",
      "Play online using pretendyoure.xyz for a free digital version"
    ],
    details: {
      overview: "Each round, a judge reads a black question card. Other players submit their funniest white answer card. The judge picks the best (or worst) answer. Simple, irreverent, and endlessly replayable with expansion packs.",
      bestWith: "6–8 players",
      ages: "17+",
      designer: "Josh Dillon and team",
      yearPublished: 2011,
      mechanics: ["Card Matching", "Voting", "Party"],
      tips: [
        "Play to the judge's sense of humor, not yours",
        "Save your best cards for the perfect question",
        "The funniest answer isn't always the most offensive one"
      ],
      rulebookUrl: "https://www.cardsagainsthumanity.com",
      videoUrl: "https://www.youtube.com/watch?v=WJMpVbG_yOE"
    }
  },
  {
    id: 54,
    name: "Agricola",
    emoji: "🌾",
    description: "Build and develop your farmstead. Grow crops, raise animals, and expand your home in this deep worker placement game.",
    minPlayers: 1,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 4,
    estimatedTime: 120,
    alternatives: [
      "Use tokens and cubes from other games as resources on a printed board",
      "Create simplified action cards and farm boards from cardboard",
      "Play the digital version for a streamlined experience"
    ],
    details: {
      overview: "Players build a farm over 14 rounds, using family members as workers to take actions: plow fields, sow crops, build fences, raise animals, and renovate their homes. With hundreds of unique occupation and improvement cards, no two games play the same.",
      bestWith: "3 players",
      ages: "12+",
      designer: "Uwe Rosenberg",
      yearPublished: 2007,
      mechanics: ["Worker Placement", "Resource Management", "Hand Management", "Engine Building"],
      tips: [
        "Feeding your family is the top priority — plan food production early",
        "Diversify your farm — empty spaces cost points at the end",
        "Occupation and improvement cards can define your strategy"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/agricola/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=GhIGSgiSGS0"
    }
  },
  {
    id: 55,
    name: "The Game of Life",
    emoji: "🚗",
    description: "Spin the wheel and navigate life's milestones — college, career, family, and retirement. Who will end with the most wealth?",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["family"],
    complexity: 1,
    estimatedTime: 60,
    alternatives: [
      "Use a spinner from another game and a printed simplified board",
      "Create life event cards from index cards and track money on paper",
      "Play any free digital Life game online"
    ],
    details: {
      overview: "Players travel along a winding path making life decisions: go to college or start a career, get married, buy a house, have kids. Spaces trigger events that affect your finances. The player with the most money at retirement wins.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Reuben Klamer, Bill Markham",
      yearPublished: 1960,
      mechanics: ["Spin and Move", "Decision Making", "Resource Management"],
      tips: [
        "College is expensive but leads to higher-paying career cards",
        "Buy insurance — it protects against costly life events",
        "Stock market investments can pay off big or cost you dearly"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/the-game-of-life/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=1xsm7jYCuVo"
    }
  },
  {
    id: 56,
    name: "Everdell",
    emoji: "🐿️",
    description: "Build a charming woodland city of critters and constructions. Deploy workers and play cards to create the best village.",
    minPlayers: 1,
    maxPlayers: 4,
    types: ["strategy", "card"],
    complexity: 3,
    estimatedTime: 60,
    alternatives: [
      "Use index cards with hand-drawn critter art and construction details",
      "Substitute wooden tokens from other games as resources",
      "Play the digital version on Steam for the charming aesthetic"
    ],
    details: {
      overview: "Over four seasons, players send workers to gather resources and play cards to build a city of up to 15 cards. Critter and construction cards combo together to create powerful engines. The whimsical woodland theme and beautiful art make every game delightful.",
      bestWith: "3 players",
      ages: "13+",
      designer: "James A. Wilson",
      yearPublished: 2018,
      mechanics: ["Worker Placement", "Tableau Building", "Engine Building", "Card Combos"],
      tips: [
        "Pair critter cards with their matching constructions for free plays",
        "Don't rush into winter — make sure you've maximized all seasons",
        "Events and journeys are easy-to-miss bonus points"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/everdell/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=ftjHQh3MUF4"
    }
  },
  {
    id: 57,
    name: "Sorry!",
    emoji: "🔄",
    description: "Draw cards and race your pawns around the board. Bump opponents back to start with a satisfying 'Sorry!'",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use a printed board with colored tokens from other games",
      "Draw a simplified track on paper with colored coins as pawns",
      "Use a standard deck — assign movement values to cards"
    ],
    details: {
      overview: "Players draw cards to move their four pawns from start to home. Special cards allow backwards movement, switching places with opponents, or sending them back to start. The first player to get all four pawns home wins.",
      bestWith: "4 players",
      ages: "6+",
      designer: "William Henry Storey",
      yearPublished: 1934,
      mechanics: ["Card Movement", "Race", "Take That"],
      tips: [
        "Keep pawns spread out to avoid being sent back together",
        "Use Sorry! cards strategically to bump leading opponents",
        "Moving backwards can be advantageous with the right card draws"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/sorry/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=JK5dBRR84xg"
    }
  },
  {
    id: 58,
    name: "Pandemic Legacy: Season 1",
    emoji: "📅",
    description: "Experience Pandemic as a campaign that permanently evolves. Decisions carry forward, the board changes, and the story unfolds over 12 months.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["cooperative", "strategy"],
    complexity: 4,
    estimatedTime: 75,
    alternatives: [
      "Play base Pandemic first — Legacy adds permanent changes you can't undo",
      "Use a copy of base Pandemic with sticky notes for temporary legacy modifications",
      "Watch a playthrough to experience the story without committing to a copy"
    ],
    details: {
      overview: "The top-rated board game experience of all time. Play through a year-long campaign where each month brings new challenges, rules, and story developments. Stickers permanently alter the board, characters gain scars and abilities, and your decisions have lasting consequences.",
      bestWith: "4 players",
      ages: "13+",
      designer: "Rob Daviau, Matt Leacock",
      yearPublished: 2015,
      mechanics: ["Cooperative Play", "Campaign", "Legacy", "Variable Player Powers"],
      tips: [
        "Play with the same group throughout — the shared story is the magic",
        "Don't look ahead in the sealed packets — spoilers ruin the experience",
        "Losing a month isn't the end — the game adapts to your performance"
      ],
      rulebookUrl: "https://images.zmangames.com/filer_public/09/64/0964b34f-0368-426a-9539-4d8ecc82b1a3/pandemic-legacy-rules.pdf",
      videoUrl: "https://www.youtube.com/watch?v=ihJqBGp5ToQ"
    }
  },
  {
    id: 59,
    name: "Blokus",
    emoji: "🟦",
    description: "Place colorful Tetris-shaped pieces on the board so they touch corner-to-corner but never edge-to-edge. Claim the most territory!",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "family"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Cut Tetris shapes from colored cardboard and play on a drawn grid",
      "Use graph paper and colored pencils — draw your pieces onto the grid",
      "Play the free digital version on various board game websites"
    ],
    details: {
      overview: "Each player has 21 differently-shaped pieces in their color. Taking turns, players place one piece on the board such that it touches at least one of their own pieces at a corner but never along an edge. The player who places the most pieces wins.",
      bestWith: "4 players",
      ages: "7+",
      designer: "Bernard Tavitian",
      yearPublished: 2000,
      mechanics: ["Tile Placement", "Spatial Puzzle", "Area Control"],
      tips: [
        "Place your largest pieces first — they become impossible to fit later",
        "Expand toward the center of the board early for maximum flexibility",
        "Block opponents' corners to limit their placement options"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/blokus/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=oXaroITBOEw"
    }
  },
  {
    id: 60,
    name: "Spyfall",
    emoji: "🕶️",
    description: "One player is a spy who doesn't know the location. Everyone asks each other questions to find the spy — but the spy is trying to figure out where they are!",
    minPlayers: 3,
    maxPlayers: 8,
    types: ["party", "bluffing", "deduction"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Use any Spyfall app — it handles all card distribution digitally",
      "Write locations on folded cards with one blank card for the spy",
      "Use the free Spyfall web app at spyfall.adrianocola.com"
    ],
    details: {
      overview: "Everyone receives a card showing the same location — except the spy, who gets a blank card. Players take turns asking each other questions to identify the spy, while the spy tries to deduce the location from the answers. The round ends when the spy is voted out or guesses the location.",
      bestWith: "5–6 players",
      ages: "13+",
      designer: "Alexandr Ushan",
      yearPublished: 2014,
      mechanics: ["Social Deduction", "Bluffing", "Questioning"],
      tips: [
        "Ask vague questions that someone at the location would understand",
        "As the spy, give answers that could fit multiple locations",
        "Watch for players who ask overly generic questions — they might be the spy"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/spyfall/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=cGicmEISKFc"
    }
  },
  {
    id: 61,
    name: "Root",
    emoji: "🦊",
    description: "An asymmetric woodland war game. Each faction plays completely differently in a battle for control of the forest.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 4,
    estimatedTime: 90,
    alternatives: [
      "Print the free learning guide and use tokens from other games",
      "Play the digital version on Steam for guided tutorials",
      "Start with the simplified two-player mode before trying all factions"
    ],
    details: {
      overview: "The Marquise de Cat occupies the forest. The Eyrie builds roosts and follows a decree. The Alliance stirs up rebellion from the undergrowth. The Vagabond plays all sides. Each faction has completely unique rules and victory conditions, creating a deeply asymmetric experience.",
      bestWith: "4 players",
      ages: "10+",
      designer: "Cole Wehrle",
      yearPublished: 2018,
      mechanics: ["Area Control", "Asymmetric Powers", "Hand Management", "Engine Building"],
      tips: [
        "Learn all factions' win conditions — knowing what to disrupt is crucial",
        "The Vagabond can kingmake — don't ignore them",
        "Marquise should build sawmills early; Eyrie should avoid turmoil"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/root/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=bNN8APjC4JE"
    }
  },
  {
    id: 62,
    name: "Scattergories",
    emoji: "📋",
    description: "Roll a letter die and race to write unique answers for 12 categories. Score points only for answers no one else wrote!",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["party", "word", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use a random letter generator and write your own category lists",
      "Roll a die lettered A–F (or draw from a bag of letters)",
      "Play online using Scattergories-style web generators"
    ],
    details: {
      overview: "A die determines the starting letter and a timer starts. Players write answers for each category that begin with that letter. When time runs out, players compare answers — duplicate answers are crossed out. Only unique, valid answers score points.",
      bestWith: "4–6 players",
      ages: "13+",
      designer: "Parker Brothers",
      yearPublished: 1988,
      mechanics: ["Real-Time", "Word Building", "Category Matching"],
      tips: [
        "Think of unusual answers — common ones will likely be duplicates",
        "Alliterative answers sometimes score bonus points in house rules",
        "Don't spend too long on one category — move on and come back"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/scattergories/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=3pWriV8i7pY"
    }
  },
  {
    id: 63,
    name: "Bananagrams",
    emoji: "🍌",
    description: "A fast-paced anagram game where players race to build crossword grids using all their letter tiles. No board needed!",
    minPlayers: 2,
    maxPlayers: 8,
    types: ["word", "family"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Use letter tiles from Scrabble without the board",
      "Write individual letters on small squares of paper or cardboard",
      "Use alphabet fridge magnets on any flat surface"
    ],
    details: {
      overview: "All tiles start face-down in the center. Players simultaneously draw tiles and form their own personal crossword grid. When someone uses all their tiles, everyone draws more. The first player to use all tiles when the pool is empty wins.",
      bestWith: "3–5 players",
      ages: "7+",
      designer: "Abraham Nathanson",
      yearPublished: 2006,
      mechanics: ["Real-Time", "Word Building", "Tile Placement"],
      tips: [
        "Keep your grid flexible — don't lock in long words too early",
        "Know your two-letter words for fitting in tricky letters",
        "Don't be afraid to completely rearrange your grid mid-game"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/bananagrams/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=LTvv4T0nIHk"
    }
  },
  {
    id: 64,
    name: "Puerto Rico",
    emoji: "🏝️",
    description: "Choose roles to produce goods and ship them for victory points. Every role benefits all players — but the chooser gets a bonus.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["strategy"],
    complexity: 4,
    estimatedTime: 90,
    alternatives: [
      "Use tokens from other games for goods and colonists on a printed board",
      "Create simplified role cards and building tiles from index cards",
      "Play the digital version on Board Game Arena for free"
    ],
    details: {
      overview: "Players select roles each round — Mayor, Builder, Settler, Captain, Trader, Craftsman, or Prospector. Each role lets all players take that action, but the chooser gets an extra perk. Build plantations, produce goods, ship for VP, or build special buildings.",
      bestWith: "4 players",
      ages: "12+",
      designer: "Andreas Seyfarth",
      yearPublished: 2002,
      mechanics: ["Role Selection", "Engine Building", "Resource Management", "Action Drafting"],
      tips: [
        "Shipping goods is the primary source of victory points",
        "The Factory building is incredibly powerful — build it early",
        "Pay attention to which roles benefit your opponents before choosing"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/puerto-rico/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=7pHcMyrROns"
    }
  },
  {
    id: 65,
    name: "Just One",
    emoji: "☝️",
    description: "A cooperative party game where everyone writes a one-word clue. The catch? Duplicate clues are removed before the guesser sees them!",
    minPlayers: 3,
    maxPlayers: 7,
    types: ["party", "cooperative", "word"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Use any word list and small whiteboards or paper for writing clues",
      "Write mystery words on index cards and use sticky notes for clues",
      "Play online using any cooperative word game platform"
    ],
    details: {
      overview: "One player is the guesser. The others see the mystery word and each write a one-word clue. Before the guesser looks, duplicate clues are removed. The guesser then uses the remaining unique clues to guess the word. Score collectively over 13 rounds.",
      bestWith: "5–6 players",
      ages: "8+",
      designer: "Ludovic Roudy, Bruno Sautter",
      yearPublished: 2018,
      mechanics: ["Cooperative Play", "Word Association", "Communication Limits"],
      tips: [
        "Think about what others will write — being unique is more valuable than being obvious",
        "Obscure but specific clues are often better than common associations",
        "If you're unsure, it's sometimes better to pass than guess wrong"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/just-one/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=fSBo4QSMrik"
    }
  },
  {
    id: 66,
    name: "Yahtzee",
    emoji: "🎯",
    description: "Roll five dice up to three times to make scoring combinations. Go for the big Yahtzee — five of a kind!",
    minPlayers: 2,
    maxPlayers: 10,
    types: ["family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "All you need is 5 dice and a printed score sheet — search 'Yahtzee scorecard'",
      "Use any 5 dice and keep score on paper with the standard categories",
      "Play a free Yahtzee app on your phone"
    ],
    details: {
      overview: "Players take turns rolling five dice, keeping any they want and re-rolling the rest up to two more times. After three rolls, choose a scoring category (ones through sixes, three of a kind, full house, straights, Yahtzee, etc.). Strategy lies in which categories to fill and when to take risks.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Edwin S. Lowe",
      yearPublished: 1956,
      mechanics: ["Dice Rolling", "Push Your Luck", "Set Collection"],
      tips: [
        "Fill the upper section strategically — the 63-point bonus is huge",
        "Don't waste a good roll on a low-value category",
        "Yahtzee bonus scoring can turn the game — always go for it when possible"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/yahtzee/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=AHiNqofr5BE"
    }
  },
  {
    id: 67,
    name: "Cockroach Poker",
    emoji: "🪳",
    description: "A bluffing card game where you pass pest cards face-down, claiming what they are. Opponents must decide: truth or lie?",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["bluffing", "card", "party"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Use a standard deck — assign animal types to suits and numbers",
      "Draw simple bug pictures on index cards",
      "Use any set of cards with 8 categories of 8 cards each"
    ],
    details: {
      overview: "Players pass cards face-down to each other, declaring (truthfully or not) what type of pest it is. The receiver must either accept and call truth/lie, or peek and pass it on with a new claim. Collect four of any one type and you lose!",
      bestWith: "4–5 players",
      ages: "8+",
      designer: "Jacques Zeimet",
      yearPublished: 2004,
      mechanics: ["Bluffing", "Deduction", "Card Passing"],
      tips: [
        "Track which pest types each player has — target their weak spots",
        "Mix up your bluffing pattern — predictability is your enemy",
        "Passing a card on (after peeking) gives you more info but risks exposure"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/cockroach-poker/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=7aaxnfMBQXs"
    }
  },
  {
    id: 68,
    name: "Forbidden Island",
    emoji: "🏝️",
    description: "A cooperative adventure where players work together to capture four sacred treasures and escape before the island sinks!",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["cooperative", "family"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Print island tiles from online templates and use tokens from other games",
      "Draw a 4×4 grid of island tiles on cardboard squares",
      "Play Forbidden Desert as an alternative with similar mechanics"
    ],
    details: {
      overview: "The island is sinking! Players each have unique abilities and must collect sets of treasure cards to capture four treasures from specific island tiles. Each turn, tiles flood and eventually sink permanently. Get all four treasures and escape from Fools' Landing before it's too late.",
      bestWith: "3 players",
      ages: "10+",
      designer: "Matt Leacock",
      yearPublished: 2010,
      mechanics: ["Cooperative Play", "Set Collection", "Action Points", "Variable Player Powers"],
      tips: [
        "Shore up tiles that are about to sink — especially treasure tiles",
        "The Engineer and Pilot have game-saving abilities — use them wisely",
        "Don't wait too long to collect treasures — tiles can disappear fast"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/forbidden-island/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=DFQekbM9UCs"
    }
  },
  {
    id: 69,
    name: "Stone Age",
    emoji: "🦴",
    description: "Lead your prehistoric tribe by gathering resources, building huts, and advancing civilization in this worker placement classic.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 3,
    estimatedTime: 75,
    alternatives: [
      "Use small tokens from other games as workers and resources",
      "Create the board and hut cards from cardboard with hand-drawn elements",
      "Play on Board Game Arena for a free digital version"
    ],
    details: {
      overview: "Players place their tribe members on various locations to gather food, wood, brick, stone, and gold. Resources are used to build huts and buy civilization cards. Feed your tribe each round and strategically develop agriculture, tools, and population growth.",
      bestWith: "3 players",
      ages: "10+",
      designer: "Bernd Brunnhofer",
      yearPublished: 2008,
      mechanics: ["Worker Placement", "Dice Rolling", "Resource Management", "Set Collection"],
      tips: [
        "Tools are incredibly valuable — they make every dice roll more efficient",
        "Don't neglect agriculture — feeding your tribe gets expensive",
        "Civilization card set bonuses can be worth massive points"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/stone-age/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=3_VJOlNFYBk"
    }
  },
  {
    id: 70,
    name: "Skull",
    emoji: "💀",
    description: "A pure bluffing game with coasters. Place skull or flower face-down, then dare opponents to flip — but beware the skulls!",
    minPlayers: 3,
    maxPlayers: 6,
    types: ["bluffing", "party"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Use playing cards — 3 red (flowers) and 1 black (skull) per player",
      "Use coasters or beer mats with symbols drawn on the back",
      "Use index cards with hand-drawn flowers and skulls"
    ],
    details: {
      overview: "Each player has 4 coasters: 3 flowers and 1 skull. Players take turns either adding a coaster face-down to their stack or challenging by bidding how many they can flip without hitting a skull. The highest bidder must flip that many — starting with their own. Win two challenges to win the game.",
      bestWith: "4–5 players",
      ages: "10+",
      designer: "Hervé Marly",
      yearPublished: 2011,
      mechanics: ["Bluffing", "Bidding", "Push Your Luck"],
      tips: [
        "Sometimes placing your skull first is the boldest (and safest) move",
        "Force opponents to bid higher than they're comfortable with",
        "You must flip your own stack first — remember what you placed"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/skull/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=oWpEgnWjAsc"
    }
  },
  {
    id: 71,
    name: "Power Grid",
    emoji: "⚡",
    description: "Buy power plants, manage resources, and expand your electrical network to power the most cities across the map.",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["strategy"],
    complexity: 4,
    estimatedTime: 120,
    alternatives: [
      "Print map boards and power plant cards from fan files online",
      "Use tokens from other games as resources and houses for cities",
      "Play the digital version for automated resource market management"
    ],
    details: {
      overview: "Players compete to supply electricity to the most cities. Buy power plants at auction, purchase resources to fuel them, expand your network across the map, and manage your economy. The resource market dynamically adjusts based on what players buy.",
      bestWith: "4–5 players",
      ages: "12+",
      designer: "Friedemann Friese",
      yearPublished: 2004,
      mechanics: ["Auction", "Route Building", "Resource Management", "Engine Building"],
      tips: [
        "Don't lead early — the player in last gets advantages in buying",
        "Diversify your power plant fuel types to avoid resource shortages",
        "Efficient network expansion is crucial — plan your route carefully"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/power-grid/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=g7SVpCIrs4c"
    }
  },
  {
    id: 72,
    name: "Quoridor",
    emoji: "🧱",
    description: "Race your pawn to the opposite side while strategically placing walls to block your opponent's path. Simple yet deep.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 2,
    estimatedTime: 15,
    alternatives: [
      "Draw a 9×9 grid on paper and use small cardboard strips as walls",
      "Use a checkerboard with toothpicks or popsicle sticks as walls",
      "Play online — many free Quoridor implementations exist"
    ],
    details: {
      overview: "Each turn, either move your pawn one space or place a wall segment to block opponents. Walls are two spaces long and can't completely seal off a path. The first player to reach the opposite side of the board wins. With only 10 walls each, every placement matters.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Mirko Marchesi",
      yearPublished: 1997,
      mechanics: ["Abstract Strategy", "Grid Movement", "Route Building"],
      tips: [
        "Save some walls for defense — don't use them all offensively",
        "Force your opponent into longer detours while keeping your path short",
        "A wall placed poorly can accidentally help your opponent"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/quoridor/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=6ISruhN0Hc0"
    }
  },
  {
    id: 73,
    name: "Apples to Apples",
    emoji: "🍎",
    description: "The family-friendly party game of hilarious comparisons. Match your red apple card to the green apple adjective — funniest wins!",
    minPlayers: 4,
    maxPlayers: 10,
    types: ["party", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Write nouns on red cards and adjectives on green cards from index cards",
      "Use a random word generator for both categories",
      "Try the Apples to Apples Junior version for younger groups"
    ],
    details: {
      overview: "A judge plays a green adjective card. Other players submit the red noun card from their hand they think best matches. The judge picks their favorite match. It's about knowing the judge and making clever or funny associations. The first to collect enough green cards wins.",
      bestWith: "5–7 players",
      ages: "12+",
      designer: "Matthew Kirby, Mark Alan Osterhaus",
      yearPublished: 1999,
      mechanics: ["Card Matching", "Voting", "Party"],
      tips: [
        "Play to the judge's preferences and sense of humor",
        "Unexpected or ironic matches often win over obvious ones",
        "Save your best noun cards for when you're judging-savvy"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/apples-to-apples/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=YgjJVd7qrJc"
    }
  },
  {
    id: 74,
    name: "Galaxy Trucker",
    emoji: "🚀",
    description: "Frantically build a spaceship from random tiles, then watch it get smashed by meteors, pirates, and cosmic hazards!",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["party", "strategy"],
    complexity: 3,
    estimatedTime: 60,
    alternatives: [
      "Cut ship component tiles from cardboard with hand-drawn connectors",
      "Play the excellent digital version for an automated building/flying experience",
      "Use Lego bricks to physically build ships and assign component types"
    ],
    details: {
      overview: "In real-time, players simultaneously grab and place tiles to build a spaceship, connecting engines, lasers, shields, and cargo bays. Then, everyone flies their rickety creation through a gauntlet of adventures. Ships fall apart hilariously as components are knocked off.",
      bestWith: "3–4 players",
      ages: "10+",
      designer: "Vlaada Chvátil",
      yearPublished: 2007,
      mechanics: ["Real-Time", "Tile Placement", "Push Your Luck"],
      tips: [
        "Connectors must match — double and single connectors don't mix",
        "Engines on the back and lasers on the front are critical",
        "A smaller, well-connected ship beats a large, fragile one"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/galaxy-trucker/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=jJ-tHI8GlXQ"
    }
  },
  {
    id: 75,
    name: "Sheriff of Nottingham",
    emoji: "🤠",
    description: "Smuggle goods past the Sheriff! Load your merchant bag, declare its contents (truthfully or not), and try to bluff your way through.",
    minPlayers: 3,
    maxPlayers: 5,
    types: ["bluffing", "party"],
    complexity: 2,
    estimatedTime: 60,
    alternatives: [
      "Use small bags or envelopes and card-sized papers with goods drawn on them",
      "Create goods cards from index cards and use coin pouches as merchant bags",
      "Substitute with any opaque containers and homemade good cards"
    ],
    details: {
      overview: "Players take turns as the Sheriff while others load goods into their bags and declare what's inside. The Sheriff can let bags pass or inspect them. Honest merchants fined by inspection get compensated; caught smugglers pay penalties. Contraband is worth big points!",
      bestWith: "4–5 players",
      ages: "14+",
      designer: "Sérgio Halaban, André Zatz",
      yearPublished: 2014,
      mechanics: ["Bluffing", "Negotiation", "Set Collection", "Push Your Luck"],
      tips: [
        "Sometimes telling the truth is the best bluff",
        "Offer bribes to the Sheriff — they can accept goods, coins, or future favors",
        "Smuggling contraband is risky but can win you the game"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/sheriff-of-nottingham/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=B0n-aelFFfQ"
    }
  },
  {
    id: 76,
    name: "Decrypto",
    emoji: "🔐",
    description: "Give coded clues to your team without letting the opposing team crack your code. A brilliant team-vs-team word game.",
    minPlayers: 3,
    maxPlayers: 8,
    types: ["party", "word", "deduction"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Use any four random words per team and numbered cards for codes",
      "Write clues on paper — all you need is a word generator and pens",
      "Play online using the free Decrypto web implementation"
    ],
    details: {
      overview: "Each team has four secret words numbered 1–4. Each round, a clue-giver receives a 3-digit code and gives three clues corresponding to those numbered words. Their team must guess the code, while the other team tries to intercept it based on accumulated clue history.",
      bestWith: "6–8 players",
      ages: "12+",
      designer: "Thomas Dagenais-Lespérance",
      yearPublished: 2018,
      mechanics: ["Team-Based", "Word Association", "Deduction", "Communication Limits"],
      tips: [
        "Vary your clues each round — repeating patterns helps opponents intercept",
        "Use obscure connections that your team will understand but opponents won't",
        "Pay attention to the other team's clue history to crack their code"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/decrypto/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=oy-tVMn8ksg"
    }
  },
  {
    id: 77,
    name: "Santorini",
    emoji: "🏛️",
    description: "Build a beautiful Greek island city while trying to move one of your workers to the top of a three-story building.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 2,
    estimatedTime: 20,
    alternatives: [
      "Use stacking blocks or Lego bricks on a 5×5 grid drawn on paper",
      "Use sugar cubes or dice for building levels on a cardboard grid",
      "Play the free digital version on mobile or Steam"
    ],
    details: {
      overview: "On your turn, move one worker to an adjacent space and build a level on any adjacent space. Workers can move up one level at a time. First to reach the third level wins. God power cards add asymmetric abilities that dramatically change strategy.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Gord!",
      yearPublished: 2004,
      mechanics: ["Abstract Strategy", "Grid Movement", "Variable Player Powers"],
      tips: [
        "Control the center of the board for maximum mobility",
        "Cap buildings at level 3 to prevent opponents from winning",
        "With god powers, learn your ability's strengths and exploit them"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/santorini/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=v5UOEpmMGBk"
    }
  },
  {
    id: 78,
    name: "Wavelength",
    emoji: "📡",
    description: "A social guessing game where you give clues on a spectrum. How hot is 'the sun' on a scale from cold to hot?",
    minPlayers: 2,
    maxPlayers: 12,
    types: ["party"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use a phone app spinner with a hidden target zone on a spectrum",
      "Draw a spectrum line on paper and hide the target with a folded card",
      "Play the free online version at wavelength.zone"
    ],
    details: {
      overview: "A spectrum card shows two opposites (e.g., Hot–Cold). A hidden target sits somewhere on the spectrum. The clue-giver sees the target and gives a single clue. The team discusses and places their guess on the spectrum. The closer to the hidden target, the more points earned.",
      bestWith: "6–8 players",
      ages: "14+",
      designer: "Wolfgang Warsch, Alex Hague, Justin Vickers",
      yearPublished: 2019,
      mechanics: ["Team-Based", "Communication Limits", "Voting"],
      tips: [
        "Be specific with your clue — vague clues lead to arguments",
        "Consider how your team thinks, not just what's objectively correct",
        "The best clues are ones your team will debate but land near the target"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/wavelength/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=qDakGGDS4IM"
    }
  },
  {
    id: 79,
    name: "Jaipur",
    emoji: "🐪",
    description: "A fast-paced two-player trading game set in an Indian market. Collect and sell goods for the best prices before your rival.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["card", "strategy"],
    complexity: 2,
    estimatedTime: 30,
    alternatives: [
      "Use a standard deck — assign suits as good types with varying point values",
      "Create goods cards and tokens from index cards and coins",
      "Play on Board Game Arena for a free digital version"
    ],
    details: {
      overview: "Players take turns either taking goods from the market (one card or swapping multiple) or selling sets of goods for tokens. Higher-value tokens go to whoever sells first, but selling large sets earns bonus tokens. Camels serve as a special trading currency.",
      bestWith: "2 players",
      ages: "12+",
      designer: "Sébastien Pauchon",
      yearPublished: 2009,
      mechanics: ["Set Collection", "Hand Management", "Trading"],
      tips: [
        "Sell expensive goods (gold, silver, jewels) quickly — first seller gets the best tokens",
        "Hoard camels for big market swaps — the camel bonus at end can matter",
        "Large set bonuses (3, 4, or 5 cards sold) are very valuable"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/jaipur/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=qmLgS9atsaY"
    }
  },
  {
    id: 80,
    name: "Great Western Trail",
    emoji: "🤠",
    description: "Drive your cattle herd along the trail to Kansas City. Build buildings, hire workers, and manage your deck for maximum profit.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 4,
    estimatedTime: 120,
    alternatives: [
      "Use tokens from other games as cattle and workers on a printed board",
      "Create simplified trail boards and cattle cards from cardboard",
      "Play the digital version for streamlined resource management"
    ],
    details: {
      overview: "Players move their cowboys along a trail, stopping at buildings to take actions: buy cattle, hire workers, build new buildings, and remove hazards. Upon reaching Kansas City, deliver cattle for money and victory points. Different cow breeds in your hand determine delivery value.",
      bestWith: "3 players",
      ages: "12+",
      designer: "Alexander Pfister",
      yearPublished: 2016,
      mechanics: ["Deck Building", "Hand Management", "Route Building", "Worker Management"],
      tips: [
        "Thin your deck of low-value cows to improve deliveries",
        "Building your own buildings along the trail creates recurring advantages",
        "Balance between cowboys, craftsmen, and engineers based on your strategy"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/great-western-trail/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=RgPVnxaI-cA"
    }
  },
  {
    id: 81,
    name: "Hive",
    emoji: "🐝",
    description: "A strategic two-player game with no board. Surround the opponent's Queen Bee with your insect tiles — each moves differently.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 3,
    estimatedTime: 20,
    alternatives: [
      "Use hexagonal cardboard cutouts with insect names written on them",
      "Play the free online version at BoardGameArena",
      "Use different coins labeled with insect initials on a flat surface"
    ],
    details: {
      overview: "Players take turns either placing a new insect tile or moving an existing one. Each of the five insect types moves uniquely: Ants slide anywhere, Beetles climb on top, Spiders move exactly 3 spaces, Grasshoppers jump, and the Queen Bee moves one space. Surround the opponent's Queen to win.",
      bestWith: "2 players",
      ages: "9+",
      designer: "John Yianni",
      yearPublished: 2001,
      mechanics: ["Abstract Strategy", "Tile Placement", "Grid Movement"],
      tips: [
        "Place your Queen Bee early — you must place it by your 4th turn",
        "Beetles are incredibly powerful — climbing on the Queen pins it",
        "Ants are your most versatile pieces — use them to reposition quickly"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/hive/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=RBD5xbUJ8F0"
    }
  },
  {
    id: 82,
    name: "Deception: Murder in Hong Kong",
    emoji: "🔪",
    description: "A forensic scientist gives abstract clues while investigators try to identify the murderer's weapon and evidence of the crime.",
    minPlayers: 4,
    maxPlayers: 12,
    types: ["deduction", "party", "bluffing"],
    complexity: 2,
    estimatedTime: 20,
    alternatives: [
      "Print clue tiles and weapon/evidence cards from online templates",
      "Use index cards with hand-drawn items and cause-of-death clues",
      "Substitute with any collection of random household item cards"
    ],
    details: {
      overview: "One player is the Forensic Scientist who knows the murderer. The murderer chooses a weapon and evidence from their cards. The Scientist gives clues using location, cause of death, and other abstract hint tiles. Investigators discuss and make accusations. The murderer tries to stay hidden.",
      bestWith: "6–8 players",
      ages: "14+",
      designer: "Tobey Ho",
      yearPublished: 2014,
      mechanics: ["Social Deduction", "Communication Limits", "Voting", "Hidden Roles"],
      tips: [
        "As the Scientist, use clue tiles that most clearly narrow down the options",
        "As an investigator, compare the Scientist's clues against each player's cards",
        "The murderer should subtly redirect suspicion without being too obvious"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/deception-murder-in-hong-kong/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=Aq4DOJeMbEQ"
    }
  },
  {
    id: 83,
    name: "Mansions of Madness",
    emoji: "🏚️",
    description: "A Lovecraftian horror investigation game where an app controls the narrative. Explore, solve puzzles, and face eldritch horrors.",
    minPlayers: 1,
    maxPlayers: 5,
    types: ["cooperative", "strategy"],
    complexity: 3,
    estimatedTime: 120,
    alternatives: [
      "Play the digital version for the full narrative experience without components",
      "Use the companion app with printed maps and tokens from other games",
      "Try Eldritch Horror for a similar Lovecraftian co-op without the app"
    ],
    details: {
      overview: "An app-driven narrative experience where players explore a mysterious mansion, solving puzzles and fighting monsters. The app handles enemy behavior, story events, and map reveals. Each scenario tells a different horror story with multiple endings based on player choices.",
      bestWith: "3–4 players",
      ages: "14+",
      designer: "Nikki Valens",
      yearPublished: 2016,
      mechanics: ["Cooperative Play", "App-Driven", "Dice Combat", "Storytelling"],
      tips: [
        "Split up to explore faster — but stay close enough to help in combat",
        "Investigate everything — clues are essential to solving the mystery",
        "Horror and damage checks can cascade — keep your sanity and health stable"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/mansions-of-madness/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=V-HXg4lnS4k"
    }
  },
  {
    id: 84,
    name: "Qwirkle",
    emoji: "🔶",
    description: "Match tiles by color or shape to build lines and score points. Create a Qwirkle (a line of all six) for bonus points!",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "family"],
    complexity: 1,
    estimatedTime: 45,
    alternatives: [
      "Draw shapes and colors on wooden squares or thick cardboard tiles",
      "Use colored stickers with shape symbols on blank tiles or blocks",
      "Play on a digital board game platform for an auto-scoring version"
    ],
    details: {
      overview: "Players place tiles that share either the same color or shape in a line on the table. Each line can have no repeated attributes. Score points equal to the length of each line you extend. Complete a line of all 6 shapes/colors for a Qwirkle bonus of 6 extra points.",
      bestWith: "3 players",
      ages: "6+",
      designer: "Susan McKinley Ross",
      yearPublished: 2006,
      mechanics: ["Tile Placement", "Pattern Building", "Set Collection"],
      tips: [
        "Set up for Qwirkles by building lines of 4–5 tiles",
        "Block opponents from completing Qwirkles when possible",
        "Playing multiple tiles in one turn to extend different lines maximizes points"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/qwirkle/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=WOXqnSi6JhE"
    }
  },
  {
    id: 85,
    name: "The Crew: Mission Deep Sea",
    emoji: "🌊",
    description: "A cooperative trick-taking card game with missions. Work together to fulfill specific card-winning objectives — without talking!",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["cooperative", "card"],
    complexity: 2,
    estimatedTime: 20,
    alternatives: [
      "Use a standard deck with assigned mission cards from a list",
      "Create mission objectives on index cards — 'Player 2 must win a red 7'",
      "Play the original The Crew: Quest for Planet Nine for a space theme"
    ],
    details: {
      overview: "Players play trick-taking card games where each mission requires specific players to win specific tricks or cards. The catch: you can't discuss your hands! Limited communication tokens let you reveal one card fact. 32 escalating missions provide a progressive campaign.",
      bestWith: "4 players",
      ages: "10+",
      designer: "Thomas Sing",
      yearPublished: 2021,
      mechanics: ["Cooperative Play", "Trick-Taking", "Communication Limits", "Campaign"],
      tips: [
        "Use your communication token wisely — timing is everything",
        "Pay attention to what suits other players are short on",
        "Lead with cards that help the mission objective holder win their trick"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/the-crew/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=zLINY_Don9I"
    }
  },
  {
    id: 86,
    name: "Ludo",
    emoji: "🎲",
    description: "A classic race game from India. Roll the dice and move your four tokens around the board to reach the home space first.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Draw the cross-shaped board on paper with colored sections",
      "Use any four sets of colored tokens on a printed board",
      "Play on any free Ludo app — it's available on every platform"
    ],
    details: {
      overview: "Players race four tokens from start to home by rolling a die. Tokens must travel around the board's cross-shaped path. Landing on an opponent's token sends it back to start. Roll a 6 to enter a token or get an extra turn. First to get all four tokens home wins.",
      bestWith: "4 players",
      ages: "5+",
      designer: "Traditional (Pachisi variant)",
      yearPublished: 1896,
      mechanics: ["Dice Rolling", "Race", "Take That"],
      tips: [
        "Spread your tokens out — don't invest everything in one piece",
        "Use safe spots to protect tokens from being captured",
        "Sometimes it's better to capture an opponent than to advance your own token"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/ludo/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=oSY4_ur3v2k"
    }
  },
  {
    id: 87,
    name: "Go",
    emoji: "⚪",
    description: "The oldest strategy game still played today. Place stones to surround territory and capture your opponent's groups.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["strategy"],
    complexity: 5,
    estimatedTime: 60,
    alternatives: [
      "Draw a grid on paper and use any two types of small tokens",
      "Use buttons, coins, or beads in two colors on a drawn board",
      "Play on online servers like OGS for free with score calculation"
    ],
    details: {
      overview: "Players alternate placing black and white stones on a 19×19 grid (or 9×9 for beginners). Stones that are completely surrounded are captured. The game ends when both players pass. The player controlling the most territory (empty intersections) wins.",
      bestWith: "2 players",
      ages: "8+",
      designer: "Traditional",
      yearPublished: -2000,
      mechanics: ["Abstract Strategy", "Area Control", "Capture"],
      tips: [
        "Start with a 9×9 board to learn fundamentals before trying 19×19",
        "Balance between territory and influence — don't be too greedy",
        "Learn basic life-and-death patterns — two eyes keep a group alive"
      ],
      rulebookUrl: "https://www.usgo.org/learn-play",
      videoUrl: "https://www.youtube.com/watch?v=Jq5SObMdV3o"
    }
  },
  {
    id: 88,
    name: "Camel Up",
    emoji: "🐫",
    description: "Bet on wacky camel races where camels stack on top of each other! The most unexpected camel might just win.",
    minPlayers: 3,
    maxPlayers: 8,
    types: ["party", "family"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use colored tokens on a drawn track — stack them when they land together",
      "Create DIY dice pyramid from a box with a hole for dice to roll out",
      "Use miniature figurines or Lego pieces as stackable camels"
    ],
    details: {
      overview: "Five camels race around a track, but when one lands on another, it stacks on top and gets carried! Players bet on which camel will win each leg and the overall race. The stacking chaos makes predictions hilariously unpredictable.",
      bestWith: "5–6 players",
      ages: "8+",
      designer: "Steffen Bogen",
      yearPublished: 2014,
      mechanics: ["Dice Rolling", "Betting", "Push Your Luck"],
      tips: [
        "Early bets pay more but are riskier — weigh probability vs. reward",
        "The camel on top of a stack has a huge advantage — it gets carried forward",
        "Desert tiles can dramatically shift the race — place them strategically"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/camel-up/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=rgwkr3W5jIo"
    }
  },
  {
    id: 89,
    name: "Nemesis",
    emoji: "👽",
    description: "A semi-cooperative survival horror game aboard a spaceship infested with alien intruders. Trust no one — everyone has secret objectives.",
    minPlayers: 1,
    maxPlayers: 5,
    types: ["cooperative", "strategy", "bluffing"],
    complexity: 4,
    estimatedTime: 120,
    alternatives: [
      "Watch a playthrough to understand the complex systems before buying",
      "Use simplified event cards and a drawn ship map for a lighter version",
      "Try the Lockdown standalone expansion for a smaller-scale experience"
    ],
    details: {
      overview: "Players wake from hypersleep to find their ship overrun with alien creatures. Each player has secret personal objectives that may conflict with others. Explore the ship, fight aliens, repair systems, and try to get home — or sabotage everything for your own survival.",
      bestWith: "4 players",
      ages: "14+",
      designer: "Adam Kwapiński",
      yearPublished: 2018,
      mechanics: ["Semi-Cooperative", "Hidden Objectives", "Dice Combat", "Area Movement"],
      tips: [
        "Noise attracts aliens — move carefully and plan your actions",
        "Don't trust anyone completely — secret objectives can turn allies into enemies",
        "Check the ship's coordinates and engines early — escape requires preparation"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/nemesis/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=plJO-bMxgkU"
    }
  },
  {
    id: 90,
    name: "Kingdomino",
    emoji: "👑",
    description: "Draft domino-like landscape tiles to build a 5×5 kingdom. Match terrains and collect crowns for maximum points.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["family", "strategy"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Cut domino-sized tiles from cardboard with drawn terrain types and crowns",
      "Use colored paper squares arranged as dominos on a grid template",
      "Play the digital version on Board Game Arena"
    ],
    details: {
      overview: "Each turn, pick a domino tile showing two terrain squares and add it to your kingdom (max 5×5). Terrains must match where tiles connect. Score is calculated by multiplying the size of each connected terrain area by the number of crowns within it. Draft order is determined by tile value.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Bruno Cathala",
      yearPublished: 2016,
      mechanics: ["Tile Placement", "Drafting", "Pattern Building"],
      tips: [
        "Crown tiles are essential — a large area without crowns scores zero",
        "Try to keep your kingdom compact — going over 5×5 wastes tiles",
        "Sometimes a lower-value tile with useful terrain is better than a crown tile"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/kingdomino/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=1g5v5_Q-Sec"
    }
  },
  {
    id: 91,
    name: "Spirit Island",
    emoji: "🌋",
    description: "A complex cooperative game where you play as elemental spirits defending your island from colonizing invaders.",
    minPlayers: 1,
    maxPlayers: 4,
    types: ["cooperative", "strategy"],
    complexity: 5,
    estimatedTime: 120,
    alternatives: [
      "Start with the beginner spirits and lower difficulty to learn the systems",
      "Use the digital version on Steam for automated invader management",
      "Print player aids for power card management"
    ],
    details: {
      overview: "Players are nature spirits protecting an island from colonial invaders. Each spirit has unique innate powers and grows by gaining new power cards. Spirits must work together to generate enough fear and destroy settlements before the island is overrun by blight.",
      bestWith: "2 players",
      ages: "13+",
      designer: "R. Eric Reuss",
      yearPublished: 2017,
      mechanics: ["Cooperative Play", "Variable Player Powers", "Hand Management", "Area Control"],
      tips: [
        "Focus on generating fear early — fear cards provide ongoing benefits",
        "Coordinate spirit powers for devastating combos",
        "Don't neglect defense — preventing builds is as important as destroying them"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/spirit-island/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=MeijMiKJTts"
    }
  },
  {
    id: 92,
    name: "Clank!",
    emoji: "💰",
    description: "A deck-building dungeon adventure. Sneak into a dragon's lair for treasure, but every noise you make risks waking the dragon!",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "card"],
    complexity: 2,
    estimatedTime: 60,
    alternatives: [
      "Print the board and use tokens from other games as clank cubes",
      "Create a simplified version with index card decks and a drawn dungeon",
      "Play the digital version — Clank! Digital is excellent"
    ],
    details: {
      overview: "Players use deck building to explore a dungeon. Buy cards to improve your deck, descend deeper for better treasure, and try to escape before the dragon attacks. 'Clank' cubes represent noise — they go into a bag and may be drawn during dragon attacks, dealing damage.",
      bestWith: "3 players",
      ages: "12+",
      designer: "Paul Dennen",
      yearPublished: 2016,
      mechanics: ["Deck Building", "Push Your Luck", "Route Building", "Hand Management"],
      tips: [
        "Don't go too deep unless you have a solid escape plan",
        "Buy cards that reduce clank — silence keeps you alive",
        "Grab an artifact and head out while others are still exploring"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/clank/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=dZJPF80j2Bk"
    }
  },
  {
    id: 93,
    name: "The Mind",
    emoji: "🧠",
    description: "Play numbered cards in ascending order without communicating. Sounds easy? It's an intense exercise in group intuition.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["cooperative", "card"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Use a standard deck — draw cards numbered 1–100 (combine two decks)",
      "Number index cards 1 through 100 and shuffle",
      "Play with any numbered cards — the game is about timing, not components"
    ],
    details: {
      overview: "Players each receive cards numbered 1–100. Without talking, signaling, or communicating, they must play their cards to a central pile in ascending order. Everyone just stares at each other, sensing when to play. It's a supernatural-feeling experience that somehow works.",
      bestWith: "3–4 players",
      ages: "8+",
      designer: "Wolfgang Warsch",
      yearPublished: 2018,
      mechanics: ["Cooperative Play", "Communication Limits", "Real-Time"],
      tips: [
        "Pay attention to other players' body language and breathing",
        "Low cards should be played quickly — high cards require patience",
        "The synchronization effect improves dramatically with practice"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/the-mind/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=MBkRPnldjGs"
    }
  },
  {
    id: 94,
    name: "Blood Rage",
    emoji: "🛡️",
    description: "Lead your Viking clan to glory before Ragnarök destroys the world. Draft cards, battle opponents, and complete quests.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 3,
    estimatedTime: 90,
    alternatives: [
      "Use miniatures from other games and printed battle cards",
      "Create clan tokens and quest cards from cardboard",
      "Watch a playthrough to appreciate the rich thematic experience"
    ],
    details: {
      overview: "Over three ages, Viking clans compete for glory as Ragnarök approaches. Draft cards to upgrade your clan, complete quests, and invade provinces. Combat is resolved by card play. Even losing battles can earn glory through the Loki strategy. Multiple paths to victory.",
      bestWith: "4 players",
      ages: "14+",
      designer: "Eric M. Lang",
      yearPublished: 2015,
      mechanics: ["Card Drafting", "Area Control", "Hand Management", "Variable Player Powers"],
      tips: [
        "Draft a focused strategy — trying to do everything spreads you too thin",
        "Loki's strategy of losing battles for glory is surprisingly viable",
        "Ragnarök provinces are valuable to control — you get rewarded when they're destroyed"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/blood-rage/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=ivvhSl9EDog"
    }
  },
  {
    id: 95,
    name: "Dead of Winter",
    emoji: "❄️",
    description: "A zombie survival game with hidden betrayal. Cooperate to survive the winter — but someone might have a treacherous secret objective.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["cooperative", "bluffing", "strategy"],
    complexity: 3,
    estimatedTime: 90,
    alternatives: [
      "Use character cards and resource tokens from other games",
      "Print crossroads cards and colony board from online templates",
      "Try a simpler cooperative survival game first if new to the genre"
    ],
    details: {
      overview: "Survivors in a zombie-infested winter must complete a main objective while managing food, morale, and defense. Each player also has a secret objective — most are helpful, but one might be a betrayer. Crossroads cards create dramatic narrative moments with tough choices.",
      bestWith: "4 players",
      ages: "14+",
      designer: "Jonathan Gilmour, Isaac Vega",
      yearPublished: 2014,
      mechanics: ["Semi-Cooperative", "Hidden Objectives", "Dice Rolling", "Storytelling"],
      tips: [
        "Contribute food and resources visibly to reduce suspicion",
        "Exile suspected betrayers carefully — wrong accusations hurt morale",
        "Crossroads cards are the soul of the game — read them dramatically"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/dead-of-winter/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=sNals7Jreh0"
    }
  },
  {
    id: 96,
    name: "Tsuro",
    emoji: "🐉",
    description: "Place tiles to create paths and keep your stone on the board. The last player remaining wins this elegant strategy game.",
    minPlayers: 2,
    maxPlayers: 8,
    types: ["family", "strategy"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Draw path tiles on cardboard squares with curving lines",
      "Use paper tiles with hand-drawn paths and small tokens as stones",
      "Play the digital version for a beautiful animated experience"
    ],
    details: {
      overview: "Players place tiles with curving paths in front of their stones, which then follow the path. As the board fills up, paths intertwine and can lead stones off the edge of the board (elimination). The last stone remaining on the board wins.",
      bestWith: "4–6 players",
      ages: "8+",
      designer: "Tom McMurchie",
      yearPublished: 2004,
      mechanics: ["Tile Placement", "Route Building", "Player Elimination"],
      tips: [
        "Stay near the center of the board early — edges are dangerous",
        "Plan two turns ahead — consider what tiles you might draw next",
        "Force opponents toward the edge by placing tiles strategically"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/tsuro/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=eoewPWEqhEQ"
    }
  },
  {
    id: 97,
    name: "Viticulture",
    emoji: "🍷",
    description: "Build a vineyard in rustic Tuscany. Plant vines, harvest grapes, make wine, and fill orders to build the most successful winery.",
    minPlayers: 1,
    maxPlayers: 6,
    types: ["strategy"],
    complexity: 3,
    estimatedTime: 75,
    alternatives: [
      "Use wooden tokens and printed boards — the resources are simple to substitute",
      "Create vine and wine order cards from index cards",
      "Play on Tabletop Simulator for the full experience digitally"
    ],
    details: {
      overview: "Players manage a vineyard across seasons. In summer, plant vines, build structures, and host visitors. In fall, draw cards. In winter, harvest grapes, make wine, and fill wine orders. Worker placement determines action availability, and the grande worker can break ties.",
      bestWith: "3–4 players",
      ages: "13+",
      designer: "Jamey Stegmaier, Alan Stone",
      yearPublished: 2015,
      mechanics: ["Worker Placement", "Engine Building", "Resource Management", "Hand Management"],
      tips: [
        "Build a trellis and irrigation early to plant higher-value vine cards",
        "Visitor cards can be incredibly powerful — don't ignore them",
        "Fill wine orders as soon as possible — early orders are often easier"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/viticulture/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=03mBjnDK-Nk"
    }
  },
  {
    id: 98,
    name: "Photosynthesis",
    emoji: "🌳",
    description: "Grow trees in a sun-lit forest. Taller trees cast shadows on shorter ones, blocking their light. A beautiful strategic experience.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy", "family"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Use 3D paper trees of different sizes on a hexagonal grid",
      "Create trees from popsicle sticks at three different heights",
      "Play with stacking cubes of different heights on a drawn board"
    ],
    details: {
      overview: "The sun rotates around the board. Trees in sunlight earn light points used to buy and grow new trees. Taller trees shadow shorter ones behind them. Grow trees to full size and harvest them for victory points — central board spaces are worth more.",
      bestWith: "3 players",
      ages: "10+",
      designer: "Hjalmar Hach",
      yearPublished: 2017,
      mechanics: ["Resource Management", "Area Control", "Engine Building", "Spatial Strategy"],
      tips: [
        "Plant trees where they won't be shadowed by opponents' tall trees",
        "Central hexes are worth more — but they're also more contested",
        "Time your tree growth to maximize sun collection across rotations"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/photosynthesis/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=YmilqRkU4No"
    }
  },
  {
    id: 99,
    name: "Brass: Birmingham",
    emoji: "🏭",
    description: "Build an industrial empire in 19th-century England. Develop industries, build canal and rail networks, and dominate the market.",
    minPlayers: 2,
    maxPlayers: 4,
    types: ["strategy"],
    complexity: 5,
    estimatedTime: 120,
    alternatives: [
      "Use cubes and tokens from other games on a printed Birmingham map",
      "Create simplified industry tiles and link markers from cardboard",
      "Play on Board Game Arena for free with automated scoring"
    ],
    details: {
      overview: "Over two eras (Canal and Rail), players build industries, develop technologies, and establish transportation networks. Cards determine where you can build. Industries need to sell goods to 'flip' for victory points. Managing money, loans, and turn order is crucial.",
      bestWith: "3 players",
      ages: "14+",
      designer: "Gavan Brown, Matt Tolman, Martin Wallace",
      yearPublished: 2018,
      mechanics: ["Network Building", "Hand Management", "Engine Building", "Resource Management"],
      tips: [
        "Iron and coal are critical resources — build them early or depend on the market",
        "The transition between Canal and Rail eras is a pivotal moment — plan for it",
        "Beer is essential in the Rail era — make sure you have access to it"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/brass/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=QBaFqIb1SLc"
    }
  },
  {
    id: 100,
    name: "Catch the Moon",
    emoji: "🌙",
    description: "A whimsical dexterity game where you stack ladders to reach the moon. Roll the die to determine placement rules — don't let any fall!",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["dexterity", "family"],
    complexity: 1,
    estimatedTime: 20,
    alternatives: [
      "Use popsicle sticks or wooden dowels balanced on a base",
      "Stack pencils or straws on a bottle cap base",
      "Use pick-up sticks balanced vertically for a similar challenge"
    ],
    details: {
      overview: "Players take turns placing curved wooden ladders on a growing structure. A die determines: must touch one existing ladder, must touch two, or must be the highest point. If any ladder falls during your turn, you collect a tear drop token. Fewest tears wins.",
      bestWith: "3–4 players",
      ages: "6+",
      designer: "Fabien Riffaud, Juan Rodriguez",
      yearPublished: 2017,
      mechanics: ["Dexterity", "Stacking", "Press Your Luck"],
      tips: [
        "Build a stable base in the first few rounds — it determines everything",
        "When placing the 'highest' ladder, use the natural curve for balance",
        "Pressing too hard on the structure can topple everything — gentle placement is key"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/catch-the-moon/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=tg3GQbM-_g0"
    }
  },
  {
    id: 101,
    name: "Snakes and Ladders",
    emoji: "🐍",
    description: "The classic children's race game of luck. Climb ladders to advance and slide down snakes that set you back.",
    minPlayers: 2,
    maxPlayers: 6,
    types: ["family"],
    complexity: 1,
    estimatedTime: 15,
    alternatives: [
      "Draw a numbered 10×10 grid on paper and add snakes/ladders with colored pens",
      "Use any printed board and small tokens or coins as game pieces",
      "Play on any free mobile app — hundreds of versions exist"
    ],
    details: {
      overview: "Players roll a die and move their token forward on a numbered grid from 1 to 100. Landing on a ladder's base sends you up to its top. Landing on a snake's head sends you sliding down to its tail. First to reach square 100 wins.",
      bestWith: "2–4 players",
      ages: "3+",
      designer: "Traditional (ancient Indian origin)",
      yearPublished: 200,
      mechanics: ["Roll and Move", "Race"],
      tips: [
        "Pure luck — no strategy needed, just enjoy the ride!",
        "Great for teaching young children counting and number recognition",
        "House rules can add choices — like picking between two dice"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/snakes-and-ladders/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=AJqhKaKItDI"
    }
  },
  {
    id: 102,
    name: "Tic Tac Toe",
    emoji: "❌",
    description: "The simplest strategy game ever. Place your X or O to get three in a row before your opponent does.",
    minPlayers: 2,
    maxPlayers: 2,
    types: ["family", "strategy"],
    complexity: 1,
    estimatedTime: 5,
    alternatives: [
      "Draw a grid anywhere — paper, whiteboard, sand, fogged windows",
      "Use any two types of small objects on a 3×3 grid",
      "Play the Ultimate Tic Tac Toe variant for much deeper strategy"
    ],
    details: {
      overview: "Two players alternate placing X or O on a 3×3 grid. The first to get three in a row (horizontal, vertical, or diagonal) wins. If all nine spaces are filled with no winner, it's a draw. Simple enough for toddlers, analysed by game theorists.",
      bestWith: "2 players",
      ages: "3+",
      designer: "Traditional",
      yearPublished: -1300,
      mechanics: ["Abstract Strategy", "Pattern Building"],
      tips: [
        "Always take the center if you go first",
        "Take corners to maximize winning threats",
        "Perfect play from both sides always results in a draw"
      ],
      rulebookUrl: "https://www.exploratorium.edu/brain_explorer/tictactoe.html",
      videoUrl: "https://www.youtube.com/watch?v=5n2aQ3UQu9Y"
    }
  },
  {
    id: 103,
    name: "Century: Spice Road",
    emoji: "🌶️",
    description: "Build a spice-trading engine by acquiring and upgrading merchant cards. Convert basic spices into valuable ones to fulfill orders.",
    minPlayers: 2,
    maxPlayers: 5,
    types: ["strategy", "card"],
    complexity: 2,
    estimatedTime: 45,
    alternatives: [
      "Use colored beads or candies as spices on a printed trade route",
      "Create merchant cards from index cards with trade ratios written on them",
      "Play on Board Game Arena for free with automated resource tracking"
    ],
    details: {
      overview: "Players build a hand of merchant cards that generate, trade, or upgrade spices (cumin, saffron, cardamom, cinnamon). Each turn: play a merchant card, acquire a new one, rest to reclaim played cards, or fulfill a point card by spending the required spices.",
      bestWith: "3 players",
      ages: "8+",
      designer: "Emerson Matsuuchi",
      yearPublished: 2017,
      mechanics: ["Engine Building", "Hand Management", "Resource Conversion", "Set Collection"],
      tips: [
        "Upgrade cards are incredibly efficient — turning cheap spices into expensive ones",
        "Build a small, efficient engine rather than a large unwieldy one",
        "Watch which point cards opponents are pursuing and grab contested ones first"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/century/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=0-sMpSksUDM"
    }
  },
  {
    id: 104,
    name: "Werewolves of Miller's Hollow",
    emoji: "🌕",
    description: "A social deduction classic set in a cursed village. Werewolves hunt at night while villagers try to uncover them by day.",
    minPlayers: 8,
    maxPlayers: 18,
    types: ["party", "bluffing", "deduction"],
    complexity: 1,
    estimatedTime: 30,
    alternatives: [
      "Use folded paper slips for roles — works with zero setup",
      "Use a standard deck — assign specific cards to roles",
      "Use any Werewolf app for moderated gameplay"
    ],
    details: {
      overview: "Each player receives a secret role card. Werewolves awaken at night to choose a victim. Special roles like the Seer, Witch, and Hunter have unique nighttime abilities. During the day, the village debates and lynches a suspect. Villagers win by eliminating all werewolves.",
      bestWith: "10–14 players",
      ages: "10+",
      designer: "Philippe des Pallières, Hervé Marly",
      yearPublished: 2001,
      mechanics: ["Social Deduction", "Voting", "Hidden Roles", "Player Elimination"],
      tips: [
        "The Witch's healing and poisoning potions are game-changers — use them wisely",
        "The Seer should share information carefully to avoid being targeted",
        "Werewolves should argue convincingly — not just stay silent"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/werewolves-of-millers-hollow/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=dd2sOFwwXSE"
    }
  },
  {
    id: 105,
    name: "Ark Nova",
    emoji: "🦁",
    description: "Design and build a modern zoo! Manage animals, sponsors, conservation projects, and facilities in this deep strategy game.",
    minPlayers: 1,
    maxPlayers: 4,
    types: ["strategy", "card"],
    complexity: 4,
    estimatedTime: 150,
    alternatives: [
      "Use tokens from other games for enclosures and animal cards from index cards",
      "Play the digital version on Board Game Arena for streamlined play",
      "Start with a lighter zoo game like Zooloretto before tackling Ark Nova"
    ],
    details: {
      overview: "Players plan and build a zoo using five action cards of increasing power. Acquire animals from around the world, build enclosures, support conservation projects, and attract sponsors. Your appeal track and conservation track must cross for the game to end — balance public interest with ecological impact.",
      bestWith: "2–3 players",
      ages: "14+",
      designer: "Mathias Wigge",
      yearPublished: 2021,
      mechanics: ["Hand Management", "Tableau Building", "Engine Building", "Action Selection"],
      tips: [
        "Focus on either appeal or conservation early — then pivot to balance both",
        "Animal synergies (continent, type) can generate powerful combos",
        "Upgraded action cards are significantly more powerful — invest in upgrades"
      ],
      rulebookUrl: "https://www.ultraboardgames.com/ark-nova/game-rules.php",
      videoUrl: "https://www.youtube.com/watch?v=bY3MJx2pXxA"
    }
  }
];

export default gamesData;
