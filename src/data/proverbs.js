const proverbs = [
  // 1
  {
    quote: 'The journey of a thousand miles begins with a single step.',
    origin: 'Chinese Proverb',
    explanation: 'Progress on any grand vision begins the moment you choose to move. Taking the first humble action unlocks the road ahead.',
  },
  // 2
  {
    quote: 'Where there is no vision, the people perish.',
    origin: 'Hebrew Proverb',
    explanation: 'Direction gives life meaning. Without a compelling purpose, enthusiasm fades and communities stagnate.',
  },
  // 3
  {
    quote: 'When the roots are deep, there is no reason to fear the wind.',
    origin: 'African Proverb',
    explanation: 'Resilience comes from nurturing strong foundations. Invest in your values and relationships so external pressures feel like a passing breeze.',
  },
  // 4
  {
    quote: 'Fall seven times, stand up eight.',
    origin: 'Japanese Proverb',
    explanation: 'Persistence is more important than perfection. Every setback is an invitation to rise with greater wisdom.',
  },
  // 5
  {
    quote: 'He who learns, teaches.',
    origin: 'Ethiopian Proverb',
    explanation: 'True understanding is proven when you pass knowledge forward. Share what you gain so wisdom multiplies.',
  },
  // 6
  {
    quote: 'Do not look where you fell, but where you slipped.',
    origin: 'African Proverb',
    explanation: 'Focus on the cause, not just the outcome. Insight appears when you study the moment your footing wavered.',
  },
  // 7
  {
    quote: 'Smooth seas do not make skillful sailors.',
    origin: 'African Proverb',
    explanation: 'Adversity is the classroom of mastery. Embrace challenges as training grounds for grace under pressure.',
  },
  // 8
  {
    quote: 'Better the oars in hand than the ship in the harbor.',
    origin: 'Norwegian Proverb',
    explanation: 'Readiness matters less than motion. Use what you have today rather than waiting for the perfect start.',
  },
  // 9
  {
    quote: 'Wisdom is like a baobab tree; no one individual can embrace it.',
    origin: 'Akan Proverb',
    explanation: 'Deep understanding rises in community. Welcome diverse perspectives to reach a fuller truth.',
  },
  // 10
  {
    quote: 'A master’s failure is a servant’s lesson.',
    origin: 'Tibetan Proverb',
    explanation: 'Observe the missteps of those before you. Their experience can save you from repeating the same mistakes.',
  },
  // 11
  {
    quote: 'When you talk, you are only repeating what you already know. When you listen, you may learn something new.',
    origin: 'Dalai Lama',
    explanation: 'Curiosity grows when you quiet your ego. Listening opens doors that clever words cannot.',
  },
  // 12
  {
    quote: 'The bamboo that bends is stronger than the oak that resists.',
    origin: 'Japanese Proverb',
    explanation: 'Flexibility is a form of strength. Adaptation allows you to survive and thrive amid turbulence.',
  },
  // 13
  {
    quote: 'A gentle hand may lead even an elephant by a hair.',
    origin: 'Persian Proverb',
    explanation: 'Compassion and patience move mountains that force cannot. Soft power reshapes hard problems.',
  },
  // 14
  {
    quote: 'The sun never forgets a village just because it is small.',
    origin: 'Guatemalan Proverb',
    explanation: 'Every person and place holds worth. Shine light on those overlooked and you illuminate the whole.',
  },
  // 15
  {
    quote: 'If you want to go fast, go alone. If you want to go far, go together.',
    origin: 'African Proverb',
    explanation: 'Sustainable impact is built with others. Collaboration extends your reach and endurance.',
  },
  // 16
  {
    quote: 'Only from the heart can you touch the sky.',
    origin: 'Rumi',
    explanation: 'Inspired living begins with sincerity. When your actions flow from love, possibilities expand.',
  },
  // 17
  {
    quote: 'Little by little, the bird builds its nest.',
    origin: 'French Proverb',
    explanation: 'Consistency compounds. Small daily efforts eventually create something remarkable.',
  },
  // 18
  {
    quote: 'We do not inherit the Earth from our ancestors; we borrow it from our children.',
    origin: 'Native American Proverb',
    explanation: 'Think generationally. The choices you make today ripple forward and shape lives you’ll never meet.',
  },
  // 19
  {
    quote: 'A single conversation across the table with a wise man is worth a month’s study of books.',
    origin: 'Chinese Proverb',
    explanation: 'Mentorship accelerates learning. Seek out people whose lived experience can shortcut your journey.',
  },
  // 20
  {
    quote: 'Do not confine your children to your own learning, for they were born in another time.',
    origin: 'Hebrew Proverb',
    explanation: 'Growth requires openness to new contexts. Support the next generation as they navigate horizons you never saw.',
  },
  // 21
  {
    quote: 'When spider webs unite, they can tie up a lion.',
    origin: 'Ethiopian Proverb',
    explanation: 'Collective action multiplies strength. Small contributors, woven together, subdue giant obstacles.',
  },
  // 22
  {
    quote: 'Even the darkest night will end and the sun will rise.',
    origin: 'Victor Hugo',
    explanation: 'Hope is a renewable resource. Seasons of hardship pass, and new light always breaks through.',
  },
  // 23
  {
    quote: 'The best time to plant a tree was twenty years ago. The second-best time is now.',
    origin: 'Chinese Proverb',
    explanation: 'Regret wastes energy. Begin today and your future self will thank you for planting courageously.',
  },
  // 24
  {
    quote: 'He who has health has hope; and he who has hope has everything.',
    origin: 'Arab Proverb',
    explanation: 'Nurture vitality and optimism. Together they fuel every other achievement.',
  },
  // 25
  {
    quote: 'Clouds come floating into my life no longer to carry rain or usher storm, but to add color to my sunset sky.',
    origin: 'Rabindranath Tagore',
    explanation: 'Reframe challenges as artistry. What once felt heavy can become a source of unexpected beauty.',
  },
  // 26
  {
    quote: 'Keep a green tree in your heart and perhaps a singing bird will come.',
    origin: 'Chinese Proverb',
    explanation: 'Guard your optimism. When you cultivate hope within, inspiration finds a place to land.',
  },
  // 27
  {
    quote: 'A rising tide lifts all boats.',
    origin: 'American Proverb',
    explanation: 'When conditions improve for one, they often elevate many. Work for collective gain, not just personal reward.',
  },
  // 28
  {
    quote: 'After the storm comes the calm.',
    origin: 'Latin Proverb',
    explanation: 'Every intensity is temporary. Trust that balance returns when you weather the surge with patience.',
  },
  // 29
  {
    quote: 'To get lost is to learn the way.',
    origin: 'African Proverb',
    explanation: 'Exploration invites missteps. Allow detours to teach you the landscape more deeply.',
  },
  // 30
  {
    quote: 'One kind word can warm three winter months.',
    origin: 'Japanese Proverb',
    explanation: 'Encouragement carries unexpected heat. A brief affirmation can sustain someone far longer than you realize.',
  },
  // 31
  {
    quote: 'When there is no enemy within, the enemies outside cannot hurt you.',
    origin: 'African Proverb',
    explanation: 'Self-trust is armor. Heal your inner conflicts and external opposition loses its power.',
  },
  // 32
  {
    quote: 'No rain, no flowers.',
    origin: 'Turkish Proverb',
    explanation: 'Growth requires seasons of discomfort. What feels inconvenient may be feeding your next bloom.',
  },
  // 33
  {
    quote: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
    origin: 'Maya Angelou',
    explanation: 'Quality beats quantity. Seek experiences that awaken awe rather than simply counting time.',
  },
  // 34
  {
    quote: 'The dawn does not come twice to awaken a man.',
    origin: 'Arab Proverb',
    explanation: 'Opportunities are time-sensitive. Be ready to act when your moment arrives.',
  },
  // 35
  {
    quote: 'If you want light to come into your life, you need to stand where it is shining.',
    origin: 'Guy Finley',
    explanation: 'Position yourself near energy sources. Align with people and environments that reflect the future you desire.',
  },
  // 36
  {
    quote: 'Many little steps make a great distance.',
    origin: 'Hungarian Proverb',
    explanation: 'Great achievements are mosaics of small motions. Embrace incremental progress as the true hero of momentum.',
  },
  // 37
  {
    quote: 'The longest road is the one that leads to the heart.',
    origin: 'Spanish Proverb',
    explanation: 'Emotional honesty is a slow unfolding. Give yourself patience as you discover what you deeply feel.',
  },
  // 38
  {
    quote: 'Patience is a tree whose root is bitter but its fruit is very sweet.',
    origin: 'Persian Proverb',
    explanation: 'Waiting is uncomfortable, yet the outcomes of restraint often taste the sweetest.',
  },
  // 39
  {
    quote: 'A clear conscience laughs at accusations.',
    origin: 'Roman Proverb',
    explanation: 'Integrity is self-defense. When your actions align with values, criticism loses its hold.',
  },
  // 40
  {
    quote: 'A diamond with a flaw is worth more than a pebble without imperfections.',
    origin: 'Chinese Proverb',
    explanation: 'Authentic brilliance includes blemishes. Aim for impact, not sterile perfection.',
  },
  // 41
  {
    quote: 'The person who has no imagination has no wings.',
    origin: 'Muhammad Ali',
    explanation: 'Vision precedes victory. Dream boldly so your ambition knows where to fly.',
  },
  // 42
  {
    quote: 'Hope is the dream of a waking man.',
    origin: 'Aristotle',
    explanation: 'Optimism is imagination in motion. Stay awake to possibility even when circumstances seem fixed.',
  },
  // 43
  {
    quote: 'To know the road ahead, ask those coming back.',
    origin: 'Chinese Proverb',
    explanation: 'Learn from predecessors. Their hindsight can become your foresight.',
  },
  // 44
  {
    quote: 'Teach thy tongue to say “I do not know,” and thou shalt progress.',
    origin: 'Maimonides',
    explanation: 'Humility keeps you learning. Admitting uncertainty opens the door to deeper discovery.',
  },
  // 45
  {
    quote: 'If your only tool is a hammer, you will see every problem as a nail.',
    origin: 'Abraham Maslow',
    explanation: 'Expand your toolkit of mindsets. Flexibility prevents you from forcing ill-fitting solutions.',
  },
  // 46
  {
    quote: 'The obstacle is the path.',
    origin: 'Zen Proverb',
    explanation: 'Challenges are not detours but the very route to mastery. Lean in instead of resisting.',
  },
  // 47
  {
    quote: 'Wisdom begins in wonder.',
    origin: 'Socrates',
    explanation: 'Curiosity is the seed of insight. Stay fascinated and understanding will follow.',
  },
  // 48
  {
    quote: 'Empty pockets never held anyone back; only empty heads and empty hearts can do that.',
    origin: 'Norman Vincent Peale',
    explanation: 'Your mindset and spirit determine your limits, not your resources. Cultivate belief and creativity.',
  },
  // 49
  {
    quote: 'There are no shortcuts to any place worth going.',
    origin: 'Beverly Sills',
    explanation: 'Meaningful destinations require patience. Embrace the full journey rather than looking for detours.',
  },
  // 50
  {
    quote: 'The only thing that overcomes hard luck is hard work.',
    origin: 'Harry Golden',
    explanation: 'Effort is the antidote to adversity. Keep showing up and momentum will turn.',
  },
  // 51
  {
    quote: 'Act as if what you do makes a difference. It does.',
    origin: 'William James',
    explanation: 'Every action contributes to a larger story. Take responsibility for your ripple.',
  },
  // 52
  {
    quote: 'He who seeks vengeance must dig two graves.',
    origin: 'Chinese Proverb',
    explanation: 'Holding onto resentment harms you first. Choose forgiveness to free your energy.',
  },
  // 53
  {
    quote: 'A calm sea does not make a skilled rower.',
    origin: 'Polish Proverb',
    explanation: 'Skill matures under pressure. Welcome manageable waves to sharpen your craft.',
  },
  // 54
  {
    quote: 'He who overcomes others is strong; he who overcomes himself is mighty.',
    origin: 'Lao Tzu',
    explanation: 'Self-mastery is the highest victory. Your internal discipline sets the tone for external success.',
  },
  // 55
  {
    quote: 'An ounce of practice is worth a ton of theory.',
    origin: 'Swami Vivekananda',
    explanation: 'Ideas change nothing without action. Experiment quickly to transform insight into impact.',
  },
  // 56
  {
    quote: 'The wind does not break a tree that bends.',
    origin: 'African Proverb',
    explanation: 'Flexibility keeps you grounded under force. Choose resilience over rigidity.',
  },
  // 57
  {
    quote: 'To the mind that is still, the whole universe surrenders.',
    origin: 'Lao Tzu',
    explanation: 'Inner calm amplifies awareness. Slow down to see opportunities that hurried eyes miss.',
  },
  // 58
  {
    quote: 'Gratitude turns what we have into enough.',
    origin: 'Anonymous Proverb',
    explanation: 'Contentment stems from perspective, not possessions. Appreciation creates abundance.',
  },
  // 59
  {
    quote: 'If there is no struggle, there is no progress.',
    origin: 'Frederick Douglass',
    explanation: 'Advancement requires tension. Accept friction as proof that growth is underway.',
  },
  // 60
  {
    quote: 'Joy shared is joy doubled.',
    origin: 'Swedish Proverb',
    explanation: 'Happiness multiplies when we include others. Celebrate collectively to deepen delight.',
  },
  // 61
  {
    quote: 'Wherever you go, go with all your heart.',
    origin: 'Confucius',
    explanation: 'Engage fully in every commitment. Half-heartedness drains meaning from your journey.',
  },
  // 62
  {
    quote: 'If you chase two rabbits, you will catch neither one.',
    origin: 'Russian Proverb',
    explanation: 'Focus creates results. Prioritize ruthlessly to move something forward.',
  },
  // 63
  {
    quote: 'Hope is a waking dream.',
    origin: 'Aristotle',
    explanation: 'Optimism is imagination in motion. Let hopeful visions animate your choices.',
  },
  // 64
  {
    quote: 'He who is afraid of asking is ashamed of learning.',
    origin: 'Danish Proverb',
    explanation: 'Curiosity requires courage. Ask anyway and your skills will expand.',
  },
  // 65
  {
    quote: 'The best mirror is an old friend.',
    origin: 'George Herbert',
    explanation: 'True companions reflect your character honestly. Treasure those who know you deeply.',
  },
  // 66
  {
    quote: 'Vision without action is a daydream; action without vision is a nightmare.',
    origin: 'Japanese Proverb',
    explanation: 'Strategy needs execution and vice versa. Align dream with doing for harmony.',
  },
  // 67
  {
    quote: 'The earth laughs in flowers.',
    origin: 'Ralph Waldo Emerson',
    explanation: 'Nature celebrates every bloom as a message of joy. Notice beauty to feel the world smiling back.',
  },
  // 68
  {
    quote: 'Let your hopes, not your hurts, shape your future.',
    origin: 'Robert H. Schuller',
    explanation: 'Anchor your plans in possibility rather than pain. You move in the direction of your focus.',
  },
  // 69
  {
    quote: 'The difference between ordinary and extraordinary is that little extra.',
    origin: 'Jimmy Johnson',
    explanation: 'Effort compounds at the edges. Deliver beyond expectation to create magic.',
  },
  // 70
  {
    quote: 'Courage is not the absence of fear, but the triumph over it.',
    origin: 'Nelson Mandela',
    explanation: 'Bravery is a decision to move despite trembling. Let purpose outrun apprehension.',
  },
  // 71
  {
    quote: 'A light heart lives long.',
    origin: 'Irish Proverb',
    explanation: 'Levity lengthens life. Keep a sense of humor and the journey brightens.',
  },
  // 72
  {
    quote: 'Experience is the teacher of all things.',
    origin: 'Julius Caesar',
    explanation: 'Theory needs practice to take root. Learn by doing and the lesson will stick.',
  },
  // 73
  {
    quote: 'Better to light a candle than curse the darkness.',
    origin: 'Chinese Proverb',
    explanation: 'Complaining changes nothing. Take small positive action to shift the atmosphere.',
  },
  // 74
  {
    quote: 'Tomorrow belongs to the people who prepare for it today.',
    origin: 'African Proverb',
    explanation: 'Lay groundwork now for the future you desire. Preparation is optimism in practice.',
  },
  // 75
  {
    quote: 'You must be the change you wish to see in the world.',
    origin: 'Mahatma Gandhi',
    explanation: 'Embodiment makes your message credible. Live the values you champion.',
  },
  // 76
  {
    quote: 'A book is like a garden carried in the pocket.',
    origin: 'Chinese Proverb',
    explanation: 'Stories transport us. Nurture your mind with nourishing words wherever you go.',
  },
  // 77
  {
    quote: 'The pen is mightier than the sword.',
    origin: 'Edward Bulwer-Lytton',
    explanation: 'Ideas can reshape reality more lastingly than force. Communicate with intention.',
  },
  // 78
  {
    quote: 'He who opens a school door closes a prison.',
    origin: 'Victor Hugo',
    explanation: 'Education liberates. Invest in learning to break cycles of limitation.',
  },
  // 79
  {
    quote: 'A river cuts through rock not because of its power, but because of its persistence.',
    origin: 'Jim Watkins',
    explanation: 'Consistency wears down resistance. Keep flowing and you’ll carve a path.',
  },
  // 80
  {
    quote: 'Each day provides its own gifts.',
    origin: 'Marcus Aurelius',
    explanation: 'Look for the daily blessings hidden within routine. Gratitude reveals them.',
  },
  // 81
  {
    quote: 'He who has a why to live can bear almost any how.',
    origin: 'Friedrich Nietzsche',
    explanation: 'Purpose breathes resilience into hardship. Know your why and you can endure any how.',
  },
  // 82
  {
    quote: 'One who plants a garden plants happiness.',
    origin: 'Chinese Proverb',
    explanation: 'Creating beauty brings joy to both giver and receiver. Cultivate and you will be uplifted.',
  },
  // 83
  {
    quote: 'A candle loses nothing by lighting another candle.',
    origin: 'James Keller',
    explanation: 'Sharing inspiration does not diminish you. Spread light and the room only grows brighter.',
  },
  // 84
  {
    quote: 'The more you give, the more you have.',
    origin: 'African Proverb',
    explanation: 'Generosity multiplies within you. Giving opens your capacity to receive.',
  },
  // 85
  {
    quote: 'When deeds speak, words are nothing.',
    origin: 'African Proverb',
    explanation: 'Actions carry more weight than promises. Lead through example.',
  },
  // 86
  {
    quote: 'A good conscience is a continual feast.',
    origin: 'Franklin Proverb',
    explanation: 'Living with integrity nourishes you daily. Nothing tastes as sweet as peace of mind.',
  },
  // 87
  {
    quote: 'Happiness is a direction, not a place.',
    origin: 'Sydney J. Harris',
    explanation: 'Joy is sustained by ongoing choices. It’s not a destination but a way of traveling.',
  },
  // 88
  {
    quote: 'No one can whistle a symphony. It takes a whole orchestra to play it.',
    origin: 'H.E. Luccock',
    explanation: 'Collaboration brings complex visions to life. Harmonize with others to create something grand.',
  },
  // 89
  {
    quote: 'The man who removes a mountain begins by carrying away small stones.',
    origin: 'Chinese Proverb',
    explanation: 'Break daunting tasks into manageable pieces. Patient effort moves seemingly immovable obstacles.',
  },
  // 90
  {
    quote: 'The secret of getting ahead is getting started.',
    origin: 'Mark Twain',
    explanation: 'Momentum begins with that first intentional motion. Start before you feel ready.',
  },
  // 91
  {
    quote: 'You can’t pour from an empty cup.',
    origin: 'Buddhist Proverb',
    explanation: 'Self-care is not selfish. Refill your reserves so you can pour into others sustainably.',
  },
  // 92
  {
    quote: 'Dreams are whispered to those who are willing to listen.',
    origin: 'Finnish Proverb',
    explanation: 'Quiet your mind to hear inner callings. The future nudges you softly—pay attention.',
  },
  // 93
  {
    quote: 'A wise man adapts himself to circumstances, as water shapes itself to the vessel that contains it.',
    origin: 'Chinese Proverb',
    explanation: 'Flexibility keeps you effective. Adjust gracefully to new contexts while keeping your essence.',
  },
  // 94
  {
    quote: 'No one ever injured their eyesight by looking on the bright side.',
    origin: 'Irish Proverb',
    explanation: 'Optimism does not blind you; it illuminates possibility. Choose a hopeful view.',
  },
  // 95
  {
    quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
    origin: 'Confucius',
    explanation: 'Resilience defines greatness. Embrace setbacks as scenes, not the final act.',
  },
  // 96
  {
    quote: 'Storms make trees take deeper roots.',
    origin: 'Dolly Parton',
    explanation: 'Difficulty strengthens your foundation. Let pressure deepen your resolve.',
  },
  // 97
  {
    quote: 'Be not afraid of growing slowly, be afraid only of standing still.',
    origin: 'Chinese Proverb',
    explanation: 'Progress at any speed is worthy. Stagnation, not small steps, is the real risk.',
  },
  // 98
  {
    quote: 'The darkest hour is just before the dawn.',
    origin: 'English Proverb',
    explanation: 'Breakthroughs often follow the hardest moments. Hold on when it feels the bleakest.',
  },
  // 99
  {
    quote: 'A society grows great when old men plant trees whose shade they know they shall never sit in.',
    origin: 'Greek Proverb',
    explanation: 'Legacy is built on selfless acts. Work today for futures beyond your lifetime.',
  },
  // 100
  {
    quote: 'Not all storms come to disrupt your life; some come to clear your path.',
    origin: 'Paulo Coelho',
    explanation: 'Reframe upheaval as a reset. Change may be making space for something better.',
  },
  // 101
  {
    quote: 'Life is short, but there is always time enough for courtesy.',
    origin: 'Ralph Waldo Emerson',
    explanation: 'Graceful kindness fits into any schedule. Let every interaction reflect your values.',
  },
  // 102
  {
    quote: 'A happy heart is better than a full purse.',
    origin: 'Dutch Proverb',
    explanation: 'Joy outvalues wealth. Prioritize inner richness over material accumulation.',
  },
  // 103
  {
    quote: 'If you wish to move mountains tomorrow, you must start by lifting stones today.',
    origin: 'African Proverb',
    explanation: 'Lay groundwork daily. Big shifts are built from consistent, humble effort.',
  },
  // 104
  {
    quote: 'He who has not climbed the mountain knows not the height of heaven.',
    origin: 'Chinese Proverb',
    explanation: 'Experience expands perspective. Stretch yourself and new vistas appear.',
  },
  // 105
  {
    quote: 'A leader is one who knows the way, goes the way, and shows the way.',
    origin: 'John C. Maxwell',
    explanation: 'Embodied leadership inspires. Model the path you ask others to walk.',
  },
  // 106
  {
    quote: 'However long the night, the dawn will break.',
    origin: 'African Proverb',
    explanation: 'Hope is stitched into time itself. Trust that light returns after darkness.',
  },
  // 107
  {
    quote: 'You cannot cross the sea merely by standing and staring at the water.',
    origin: 'Rabindranath Tagore',
    explanation: 'Imagination must meet initiative. Take action to transform vision into reality.',
  },
  // 108
  {
    quote: 'What you seek is seeking you.',
    origin: 'Rumi',
    explanation: 'Your deepest desires signal your path. Move toward them—they are already reaching back.',
  },
  // 109
  {
    quote: 'He who refuses to obey cannot command.',
    origin: 'Kenyan Proverb',
    explanation: 'Leadership begins with humility and discipline. Model what you expect.',
  },
  // 110
  {
    quote: 'Even the finest sword plunged into salt water will eventually rust.',
    origin: 'Sun Tzu',
    explanation: 'Neglect erodes potential. Maintain your strengths with continual care.',
  },
  // 111
  {
    quote: 'One kind word can change someone’s entire day.',
    origin: 'Unknown Proverb',
    explanation: 'Simple encouragement carries big weight. Use your voice to uplift.',
  },
  // 112
  {
    quote: 'A spark can set a forest on fire, but a fire cannot burn even a wet blanket.',
    origin: 'Chinese Proverb',
    explanation: 'Small catalysts ignite change, yet some resistance demands preparation. Choose your opportunities wisely.',
  },
  // 113
  {
    quote: 'Every morning we are born again. What we do today matters most.',
    origin: 'Buddha',
    explanation: 'Each day offers a fresh start. Focus your energy on the present moment.',
  },
  // 114
  {
    quote: 'The axe forgets, the tree remembers.',
    origin: 'African Proverb',
    explanation: 'Be mindful of your impact. Casual words or actions may leave lasting marks on others.',
  },
  // 115
  {
    quote: 'When you pray, move your feet.',
    origin: 'African Proverb',
    explanation: 'Faith pairs best with action. Align your steps with your hopes.',
  },
  // 116
  {
    quote: 'Mind what you have learned. It can fill an entire village.',
    origin: 'Masaai Proverb',
    explanation: 'Your knowledge blesses more than you. Share it generously to empower your community.',
  },
  // 117
  {
    quote: 'A bird does not sing because it has an answer. It sings because it has a song.',
    origin: 'Chinese Proverb',
    explanation: 'Create from joy rather than obligation. Express your essence simply because it’s yours.',
  },
  // 118
  {
    quote: 'The one who plants dates does so for the next generation.',
    origin: 'Arab Proverb',
    explanation: 'Invest in slow-growing dreams. Your patience today becomes someone else’s nourishment tomorrow.',
  },
  // 119
  {
    quote: 'He who has a lean agreement is better than he who has a fat lawsuit.',
    origin: 'German Proverb',
    explanation: 'Seek harmony rather than conflict. Win-win solutions are more fruitful than battles.',
  },
  // 120
  {
    quote: 'A closed mouth gathers no foot.',
    origin: 'American Proverb',
    explanation: 'Thoughtful silence prevents regret. Choose words carefully to maintain trust.',
  },
  // 121
  {
    quote: 'Talk doesn’t cook rice.',
    origin: 'Chinese Proverb',
    explanation: 'Only action produces tangible results. Pair your plans with execution.',
  },
  // 122
  {
    quote: 'If you think you are too small to make a difference, you haven’t spent the night with a mosquito.',
    origin: 'African Proverb',
    explanation: 'Size does not determine influence. Your persistence can change an entire landscape.',
  },
  // 123
  {
    quote: 'The heart that loves is always young.',
    origin: 'Greek Proverb',
    explanation: 'Affection keeps the spirit vibrant. Lead with love to remain youthful inside.',
  },
  // 124
  {
    quote: 'Learning is a treasure that will follow its owner everywhere.',
    origin: 'Chinese Proverb',
    explanation: 'Knowledge is portable wealth. Invest in it and you carry value wherever you go.',
  },
  // 125
  {
    quote: 'If you want to know the end, look at the beginning.',
    origin: 'African Proverb',
    explanation: 'Origins hold clues to outcomes. Understand foundations to predict futures.',
  },
  // 126
  {
    quote: 'He who does not know one thing knows another.',
    origin: 'African Proverb',
    explanation: 'Everyone holds unique insight. Approach others with respect for the expertise they carry.',
  },
  // 127
  {
    quote: 'To stumble twice on the same stone is a proverbial disgrace.',
    origin: 'Latin Proverb',
    explanation: 'Mistakes are lessons the first time. Learn quickly to avoid repeating them.',
  },
  // 128
  {
    quote: 'The eyes believe themselves, the ears believe other people.',
    origin: 'German Proverb',
    explanation: 'Trust your experience more than hearsay. Seeing firsthand builds true understanding.',
  },
  // 129
  {
    quote: 'A hungry stomach, an empty pocket, and a broken heart can teach you the best lessons of life.',
    origin: 'Indian Proverb',
    explanation: 'Hard seasons deepen wisdom. Honor the instruction hidden inside deprivation.',
  },
  // 130
  {
    quote: 'He that would have fruit must climb the tree.',
    origin: 'Thomas Fuller',
    explanation: 'Rewards sit above comfort zones. Put in the effort to harvest what you desire.',
  },
  // 131
  {
    quote: 'Action is the foundational key to all success.',
    origin: 'Pablo Picasso',
    explanation: 'Creativity and ambition crystallize through doing. Start building to make dreams tangible.',
  },
  // 132
  {
    quote: 'Hope is the physician of every misery.',
    origin: 'Irish Proverb',
    explanation: 'Optimism soothes suffering. Feed hope and healing follows.',
  },
  // 133
  {
    quote: 'Experience is not what happens to you; it’s what you do with what happens to you.',
    origin: 'Aldous Huxley',
    explanation: 'Meaning arises from interpretation. Choose purposeful responses to every event.',
  },
  // 134
  {
    quote: 'A spark neglected makes a mighty fire.',
    origin: 'Robert Herrick',
    explanation: 'Small issues escalate when ignored. Address problems early to prevent conflagrations.',
  },
  // 135
  {
    quote: 'Happiness is not something ready-made. It comes from your own actions.',
    origin: 'Dalai Lama',
    explanation: 'Joy is constructed through daily habits and choices. Create what you wish to feel.',
  },
  // 136
  {
    quote: 'You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.',
    origin: 'Clay P. Bedford',
    explanation: 'Ignite curiosity and education never ends. Inspire questions, not just answers.',
  },
  // 137
  {
    quote: 'If you don’t know where you are going, any road will get you there.',
    origin: 'Lewis Carroll',
    explanation: 'Clarity of destination shapes decisions. Define your aim to choose the right path.',
  },
  // 138
  {
    quote: 'Turn your face to the sun and the shadows fall behind you.',
    origin: 'Maori Proverb',
    explanation: 'Focus on positivity and difficulties diminish. Perspective shifts the scene.',
  },
  // 139
  {
    quote: 'A wise person knows their limits; a great person knows they have none.',
    origin: 'Ukrainian Proverb',
    explanation: 'Awareness of constraints is healthy, yet visionary souls stretch beyond labels. Balance humility with ambition.',
  },
  // 140
  {
    quote: 'The future starts today, not tomorrow.',
    origin: 'Pope John Paul II',
    explanation: 'Postponed action delays destiny. Begin now to shape what’s ahead.',
  },
  // 141
  {
    quote: 'The more one judges, the less one loves.',
    origin: 'Honoré de Balzac',
    explanation: 'Compassion and criticism cannot share the same seat. Choose empathy to keep your heart open.',
  },
  // 142
  {
    quote: 'A single sunbeam is enough to drive away many shadows.',
    origin: 'St. Francis of Assisi',
    explanation: 'Small acts of kindness or insight can banish widespread doubt. Be that ray for others.',
  },
  // 143
  {
    quote: 'It always seems impossible until it’s done.',
    origin: 'Nelson Mandela',
    explanation: 'Perceived limits dissolve after action. Keep moving until the goal exists.',
  },
  // 144
  {
    quote: 'Every exit is an entry somewhere else.',
    origin: 'Tom Stoppard',
    explanation: 'Endings birth beginnings. Welcome transitions as invitations to new chapters.',
  },
  // 145
  {
    quote: 'To love and be loved is to feel the sun from both sides.',
    origin: 'David Viscott',
    explanation: 'Mutual care warms the soul entirely. Give and receive affection for full illumination.',
  },
  // 146
  {
    quote: 'A smooth sea never made a skilled mariner.',
    origin: 'English Proverb',
    explanation: 'Ability is tested in turbulence. Let challenges refine your craft.',
  },
  // 147
  {
    quote: 'One foot cannot stand on two boats.',
    origin: 'Chinese Proverb',
    explanation: 'Split loyalties cause instability. Commit fully to your chosen direction.',
  },
  // 148
  {
    quote: 'Sow a thought and you reap an action; sow an act and you reap a habit; sow a habit and you reap a character; sow a character and you reap a destiny.',
    origin: 'Ralph Waldo Emerson',
    explanation: 'Destiny unfolds from inner dialogue. Guard your thoughts—they plant the seeds of your future.',
  },
  // 149
  {
    quote: 'You can’t reach for anything new if your hands are still full of yesterday’s junk.',
    origin: 'Louise Smith',
    explanation: 'Release what no longer serves you to grasp fresh possibilities.',
  },
  // 150
  {
    quote: 'A ship in harbor is safe, but that is not what ships are built for.',
    origin: 'John A. Shedd',
    explanation: 'Comfort zones protect you but limit your purpose. Sail out to fulfill your design.',
  },
  // 151
  {
    quote: 'The grass is greener where you water it.',
    origin: 'Neil Barringham',
    explanation: 'Attention and care create thriving environments. Invest in what you have.',
  },
  // 152
  {
    quote: 'Not everything that is faced can be changed, but nothing can be changed until it is faced.',
    origin: 'James Baldwin',
    explanation: 'Honest confrontation is step one in transformation. Look squarely at the issue to initiate change.',
  },
  // 153
  {
    quote: 'Every saint has a past and every sinner has a future.',
    origin: 'Oscar Wilde',
    explanation: 'Identity is flexible. Offer grace to yourself and others as everyone evolves.',
  },
  // 154
  {
    quote: 'The only limit to our realization of tomorrow is our doubts of today.',
    origin: 'Franklin D. Roosevelt',
    explanation: 'Self-doubt constricts possibility. Release it to expand your horizon.',
  },
  // 155
  {
    quote: 'We rise by lifting others.',
    origin: 'Robert G. Ingersoll',
    explanation: 'Helping others elevates you. Generosity opens your own ascent.',
  },
  // 156
  {
    quote: 'The past is a guidepost, not a hitching post.',
    origin: 'L. Thomas Holdcroft',
    explanation: 'Let history teach you but do not stay chained to it. Move forward with insight.',
  },
  // 157
  {
    quote: 'You bloom by being yourself.',
    origin: 'Japanese Proverb',
    explanation: 'Authenticity is fertile soil. Express your true nature to flourish.',
  },
  // 158
  {
    quote: 'If you want to lift yourself up, lift up someone else.',
    origin: 'Booker T. Washington',
    explanation: 'Service creates mutual elevation. Support others and you ascend together.',
  },
  // 159
  {
    quote: 'Success is the sum of small efforts, repeated day in and day out.',
    origin: 'Robert Collier',
    explanation: 'Results are built from consistent rituals. Stay faithful to the little things.',
  },
  // 160
  {
    quote: 'To the world you may be one person, but to one person you may be the world.',
    origin: 'Dr. Seuss',
    explanation: 'Your impact on individuals is profound. Never underestimate the value you bring.',
  },
  // 161
  {
    quote: 'We cannot direct the wind, but we can adjust the sails.',
    origin: 'Dolly Parton',
    explanation: 'Control what you can: your response. Adaptation keeps you moving toward your goal.',
  },
  // 162
  {
    quote: 'Let deeds match words.',
    origin: 'Roman Proverb',
    explanation: 'Integrity aligns speech with action. Promise only what you intend to deliver.',
  },
  // 163
  {
    quote: 'The soul would have no rainbow if the eyes had no tears.',
    origin: 'Native American Proverb',
    explanation: 'Emotion adds color to existence. Allow yourself to feel so you can appreciate the spectrum.',
  },
  // 164
  {
    quote: 'An eagle does not hunt flies.',
    origin: 'Tanzanian Proverb',
    explanation: 'Great minds focus on worthy pursuits. Don’t be distracted by trivial matters.',
  },
  // 165
  {
    quote: 'When there is no enemy within, the enemies outside cannot hurt you.',
    origin: 'African Proverb',
    explanation: 'Inner peace fortifies you. Resolve internal conflict to neutralize external threats.',
  },
  // 166
  {
    quote: 'The future depends on what you do today.',
    origin: 'Mahatma Gandhi',
    explanation: 'Every action plants seeds for tomorrow. Choose intentionally.',
  },
  // 167
  {
    quote: 'Be like a tree and let the dead leaves drop.',
    origin: 'Rumi',
    explanation: 'Release outdated attachments. Let go to make room for new growth.',
  },
  // 168
  {
    quote: 'What is done in love is done well.',
    origin: 'Vincent van Gogh',
    explanation: 'Passion heightens craftsmanship. Let love infuse your work.',
  },
  // 169
  {
    quote: 'When drinking water, remember the source.',
    origin: 'Chinese Proverb',
    explanation: 'Practice gratitude for those who paved your path. Honor your roots.',
  },
  // 170
  {
    quote: 'He who moves a mountain begins by carrying away small stones.',
    origin: 'Chinese Proverb',
    explanation: 'Monumental change starts with manageable tasks. Take the next small step.',
  },
  // 171
  {
    quote: 'A secret between two is a secret of God; a secret between three is everybody’s secret.',
    origin: 'Irish Proverb',
    explanation: 'Protect important information carefully. The more people involved, the less private it remains.',
  },
  // 172
  {
    quote: 'If you see someone without a smile, give them one of yours.',
    origin: 'Japanese Proverb',
    explanation: 'Kindness is contagious. Offer warmth to those who need it most.',
  },
  // 173
  {
    quote: 'Do not wait for leaders; do it alone, person to person.',
    origin: 'Mother Teresa',
    explanation: 'Initiate change yourself. Your individual actions can set powerful ripples in motion.',
  },
  // 174
  {
    quote: 'Great souls have wills; feeble ones have only wishes.',
    origin: 'Chinese Proverb',
    explanation: 'Determination distinguishes dreamers from doers. Strengthen your will to manifest your visions.',
  },
  // 175
  {
    quote: 'Where hope would otherwise become hopelessness, it becomes faith.',
    origin: 'Robert Brault',
    explanation: 'When optimism stretches thin, belief carries you further. Lean into trust during uncertainty.',
  },
  // 176
  {
    quote: 'What we achieve inwardly will change outer reality.',
    origin: 'Plutarch',
    explanation: 'Inner transformation precedes external impact. Work on your mindset to alter your world.',
  },
  // 177
  {
    quote: 'A champion is defined not by their wins but by how they can recover when they fall.',
    origin: 'Serena Williams',
    explanation: 'Resilience, not victory counts, defines greatness. Rise stronger after every stumble.',
  },
  // 178
  {
    quote: 'Before healing others, heal yourself.',
    origin: 'Gambian Proverb',
    explanation: 'You cannot pour from emptiness. Secure your well-being to help others effectively.',
  },
  // 179
  {
    quote: 'Keep a little fire burning; however small, however hidden.',
    origin: 'Cormac McCarthy',
    explanation: 'Guard your inner spark even when circumstances are bleak. Small embers can reignite in time.',
  },
  // 180
  {
    quote: 'The wound is the place where the light enters you.',
    origin: 'Rumi',
    explanation: 'Pain often opens channels for insight and compassion. Embrace healing as illumination.',
  },
  // 181
  {
    quote: 'The best way to find yourself is to lose yourself in the service of others.',
    origin: 'Mahatma Gandhi',
    explanation: 'Purpose clarifies when you help. Serving others reveals your highest self.',
  },
  // 182
  {
    quote: 'A community is like a ship; everyone ought to be prepared to take the helm.',
    origin: 'Henrik Ibsen',
    explanation: 'Shared responsibility keeps groups afloat. Be ready to step up when called.',
  },
  // 183
  {
    quote: 'He who trims himself to suit everyone will soon whittle himself away.',
    origin: 'Raymond Hull',
    explanation: 'Over-accommodation erodes identity. Stand firm in your authentic shape.',
  },
  // 184
  {
    quote: 'Opportunities are usually disguised as hard work, so most people don’t recognize them.',
    origin: 'Ann Landers',
    explanation: 'Challenge is often opportunity in costume. Embrace the labor to uncover the gift.',
  },
  // 185
  {
    quote: 'When we strive to become better than we are, everything around us becomes better too.',
    origin: 'Paulo Coelho',
    explanation: 'Personal growth radiates outward. Elevate yourself to elevate your environment.',
  },
  // 186
  {
    quote: 'If you do not change direction, you may end up where you are heading.',
    origin: 'Lao Tzu',
    explanation: 'Trajectory determines destination. Adjust your course if it no longer serves your purpose.',
  },
  // 187
  {
    quote: 'Sticks in a bundle are unbreakable.',
    origin: 'Kenyan Proverb',
    explanation: 'Unity fortifies strength. Stand together to withstand pressure.',
  },
  // 188
  {
    quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    origin: 'Aristotle',
    explanation: 'Consistency crafts identity. Cultivate habits that reflect the person you aspire to be.',
  },
  // 189
  {
    quote: 'Turn your wounds into wisdom.',
    origin: 'Oprah Winfrey',
    explanation: 'Let hurt become insight. Process your pain into lessons that guide your future.',
  },
  // 190
  {
    quote: 'It is not the mountain we conquer but ourselves.',
    origin: 'Sir Edmund Hillary',
    explanation: 'Ambitious goals primarily test inner limits. Overcoming self-doubt is the real summit.',
  },
  // 191
  {
    quote: 'The only impossible journey is the one you never begin.',
    origin: 'Tony Robbins',
    explanation: 'Inaction keeps possibility locked away. Start moving and the path reveals itself.',
  },
  // 192
  {
    quote: 'The measure of who we are is what we do with what we have.',
    origin: 'Vince Lombardi',
    explanation: 'Impact isn’t about abundance but stewardship. Use your current resources wisely.',
  },
  // 193
  {
    quote: 'When the student is ready, the teacher will appear.',
    origin: 'Buddhist Proverb',
    explanation: 'Opportunities align with readiness. Prepare yourself and guidance will find you.',
  },
  // 194
  {
    quote: 'Flaws are the price of being alive.',
    origin: 'Alfred Adler',
    explanation: 'Imperfection is proof of vitality. Embrace your humanity instead of chasing spotless facades.',
  },
  // 195
  {
    quote: 'Life is what happens to us while we are making other plans.',
    origin: 'Allen Saunders',
    explanation: 'Stay present in the unfolding journey. Don’t miss the moment while chasing the future.',
  },
  // 196
  {
    quote: 'We cannot become what we need to be by remaining what we are.',
    origin: 'Max De Pree',
    explanation: 'Growth demands transformation. Stretch beyond your current self to meet your destiny.',
  },
  // 197
  {
    quote: 'The only way to discover the limits of the possible is to go beyond them into the impossible.',
    origin: 'Arthur C. Clarke',
    explanation: 'Innovation lives just outside comfort zones. Dare to step past perceived boundaries.',
  },
  // 198
  {
    quote: 'Light tomorrow with today.',
    origin: 'Elizabeth Barrett Browning',
    explanation: 'Plant seeds of brightness now. Your present deeds illuminate the next day.',
  },
  // 199
  {
    quote: 'It is never too late to be what you might have been.',
    origin: 'George Eliot',
    explanation: 'Possibility remains open at every stage. Begin again toward the life you envision.',
  },
  // 200
  {
    quote: 'Stars cannot shine without darkness.',
    origin: 'Serbian Proverb',
    explanation: 'Contrast reveals brilliance. Allow difficult seasons to highlight your light.',
  },
];

export default proverbs;
