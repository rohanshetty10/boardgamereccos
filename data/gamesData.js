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
  }
];

export default gamesData;
