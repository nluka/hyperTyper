const quotes = [
  {
    content:
      'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
  },
  { content: 'You can observe a lot just by watching.', author: 'Yogi Berra' },
  {
    content: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
  },
  {
    content: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
  { content: 'Be the chief but never the lord.', author: 'Lao Tzu' },
  {
    content: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg',
  },
  { content: 'Well begun is half done.', author: 'Aristotle' },
  {
    content: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra',
  },
  {
    content: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster',
  },
  {
    content: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  { content: 'What you give is what you get.', author: 'Byron Pulsifer' },
  { content: 'We can only learn to love by loving.', author: 'Iris Murdoch' },
  {
    content: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark',
  },
  { content: "You'll see it when you believe it.", author: 'Wayne Dyer' },
  {
    content: 'Today is the tomorrow we worried about yesterday.',
    author: null,
  },
  {
    content: "It's easier to see the mistakes on someone else's paper.",
    author: null,
  },
  { content: 'Every man dies. Not every man really lives.', author: null },
  { content: 'To lead people walk behind them.', author: 'Lao Tzu' },
  {
    content: 'Having nothing, nothing can he lose.',
    author: 'William Shakespeare',
  },
  {
    content: 'Trouble is only opportunity in work clothes.',
    author: 'Henry J. Kaiser',
  },
  { content: 'A rolling stone gathers no moss.', author: 'Publilius Syrus' },
  {
    content: 'Ideas are the beginning points of all fortunes.',
    author: 'Napoleon Hill',
  },
  { content: 'Everything in life is luck.', author: 'Donald Trump' },
  {
    content: 'Doing nothing is better than being busy doing nothing.',
    author: 'Lao Tzu',
  },
  {
    content: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
  {
    content: 'Study the past, if you would divine the future.',
    author: 'Confucius',
  },
  {
    content: 'The day is already blessed, find peace within it.',
    author: null,
  },
  {
    content: 'From error to error one discovers the entire truth.',
    author: 'Sigmund Freud',
  },
  {
    content: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
  },
  {
    content: 'Bite off more than you can chew, then chew it.',
    author: 'Ella Williams',
  },
  {
    content: 'Work out your own salvation. Do not depend on others.',
    author: 'Buddha',
  },
  { content: 'One today is worth two tomorrows.', author: 'Benjamin Franklin' },
  {
    content: 'Once you choose hope, anythings possible.',
    author: 'Christopher Reeve',
  },
  { content: 'God always takes the simplest way.', author: 'Albert Einstein' },
  { content: 'One fails forward toward success.', author: 'Charles Kettering' },
  { content: 'From small beginnings come great things.', author: null },
  {
    content: 'Learning is a treasure that will follow its owner everywhere',
    author: 'Chinese proverb',
  },
  { content: 'Be as you wish to seem.', author: 'Socrates' },
  { content: 'The world is always in movement.', author: 'V. Naipaul' },
  { content: 'Never mistake activity for achievement.', author: 'John Wooden' },
  { content: 'What worries you masters you.', author: 'Haddon Robinson' },
  { content: 'One faces the future with ones past.', author: 'Pearl Buck' },
  {
    content: 'Goals are the fuel in the furnace of achievement.',
    author: 'Brian Tracy',
  },
  { content: 'Who sows virtue reaps honour.', author: 'Leonardo da Vinci' },
  {
    content: 'Be kind whenever possible. It is always possible.',
    author: 'Dalai Lama',
  },
  { content: "Talk doesn't cook rice.", author: 'Chinese proverb' },
  { content: 'He is able who thinks he is able.', author: 'Buddha' },
  { content: 'A goal without a plan is just a wish.', author: 'Larry Elder' },
  {
    content: 'To succeed, we must first believe that we can.',
    author: 'Michael Korda',
  },
  {
    content: 'Learn from yesterday, live for today, hope for tomorrow.',
    author: 'Albert Einstein',
  },
  {
    content: 'A weed is no more than a flower in disguise.',
    author: 'James Lowell',
  },
  { content: 'Do, or do not. There is no try.', author: 'Yoda' },
  {
    content: 'All serious daring starts from within.',
    author: 'Harriet Beecher Stowe',
  },
  {
    content: 'The best teacher is experience learned from failures.',
    author: 'Byron Pulsifer',
  },
  {
    content: 'Think how hard physics would be if particles could think.',
    author: 'Murray Gell-Mann',
  },
  {
    content: "Love is the flower you've got to let grow.",
    author: 'John Lennon',
  },
  {
    content: "Don't wait. The time will never be just right.",
    author: 'Napoleon Hill',
  },
  { content: 'Time is the wisest counsellor of all.', author: 'Pericles' },
  { content: 'You give before you get.', author: 'Napoleon Hill' },
  { content: 'Wisdom begins in wonder.', author: 'Socrates' },
  {
    content: 'Without courage, wisdom bears no fruit.',
    author: 'Baltasar Gracian',
  },
  { content: 'Change in all things is sweet.', author: 'Aristotle' },
  {
    content: 'What you fear is that which requires action to overcome.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'When performance exceeds ambition, the overlap is called success.',
    author: 'Cullen Hightower',
  },
  {
    content: 'When deeds speak, words are nothing.',
    author: 'African proverb',
  },
  {
    content:
      'Real magic in relationships means an absence of judgement of others.',
    author: 'Wayne Dyer',
  },
  {
    content: 'I never think of the future. It comes soon enough.',
    author: 'Albert Einstein',
  },
  { content: 'Skill to do comes of doing.', author: 'Ralph Emerson' },
  { content: 'Wisdom is the supreme part of happiness.', author: 'Sophocles' },
  {
    content: 'I believe that every person is born with talent.',
    author: 'Maya Angelou',
  },
  {
    content: 'Important principles may, and must, be inflexible.',
    author: 'Abraham Lincoln',
  },
  {
    content: 'The undertaking of a new action brings new strength.',
    author: 'Richard Evans',
  },
  {
    content: 'The years teach much which the days never know.',
    author: 'Ralph Emerson',
  },
  { content: 'Our distrust is very expensive.', author: 'Ralph Emerson' },
  { content: 'All know the way; few actually walk it.', author: 'Bodhidharma' },
  {
    content: 'Great talent finds happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'Faith in oneself is the best and safest course.',
    author: 'Michelangelo',
  },
  {
    content:
      'Courage is going from failure to failure without losing enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    content: 'The two most powerful warriors are patience and time.',
    author: 'Leo Tolstoy',
  },
  {
    content: 'Anticipate the difficult by managing the easy.',
    author: 'Lao Tzu',
  },
  {
    content: 'Those who are free of resentful thoughts surely find peace.',
    author: 'Buddha',
  },
  {
    content: 'A short saying often contains much wisdom.',
    author: 'Sophocles',
  },
  {
    content: 'It takes both sunshine and rain to make a rainbow.',
    author: null,
  },
  { content: 'A beautiful thing is never perfect.', author: null },
  { content: 'Only do what your heart tells you.', author: 'Princess Diana' },
  {
    content: 'Life is movement-we breathe, we eat, we walk, we move!',
    author: 'John Pierrakos',
  },
  {
    content: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
  },
  {
    content: 'Argue for your limitations, and sure enough theyre yours.',
    author: 'Richard Bach',
  },
  {
    content: 'Luck is what happens when preparation meets opportunity.',
    author: 'Seneca',
  },
  {
    content: 'Victory belongs to the most persevering.',
    author: 'Napoleon Bonaparte',
  },
  {
    content: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    content: 'In order to win, you must expect to win.',
    author: 'Richard Bach',
  },
  { content: 'A goal is a dream with a deadline.', author: 'Napoleon Hill' },
  { content: 'You can do it if you believe you can!', author: 'Napoleon Hill' },
  {
    content: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    content: 'Every new day is another chance to change your life.',
    author: null,
  },
  { content: 'Smile, breathe, and go slowly.', author: 'Thich Nhat Hanh' },
  {
    content: 'Nobody will believe in you unless you believe in yourself.',
    author: 'Liberace',
  },
  { content: 'Do more than dream: work.', author: 'William Arthur Ward' },
  { content: 'No man was ever wise by chance.', author: 'Seneca' },
  { content: 'Some pursue happiness, others create it.', author: null },
  {
    content: 'He that is giddy thinks the world turns round.',
    author: 'William Shakespeare',
  },
  {
    content: "Don't ruin the present with the ruined past.",
    author: 'Ellen Gilchrist',
  },
  {
    content: 'Do something wonderful, people may imitate it.',
    author: 'Albert Schweitzer',
  },
  { content: 'We do what we do because we believe.', author: null },
  {
    content: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    content: 'If you cannot be silent be brilliant and thoughtful.',
    author: 'Byron Pulsifer',
  },
  {
    content: 'Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  { content: 'What we think, we become.', author: 'Buddha' },
  { content: 'The shortest answer is doing.', author: 'Lord Herbert' },
  {
    content: 'All our knowledge has its origins in our perceptions.',
    author: 'Leonardo da Vinci',
  },
  { content: 'The harder you fall, the higher you bounce.', author: null },
  {
    content: 'Trusting our intuition often saves us from disaster.',
    author: 'Anne Wilson Schaef',
  },
  { content: 'Truth is powerful and it prevails.', author: 'Sojourner Truth' },
  { content: 'Light tomorrow with today!', author: 'Elizabeth Browning' },
  { content: 'Silence is a fence around wisdom.', author: 'German proverb' },
  {
    content: 'Society develops wit, but its contemplation alone forms genius.',
    author: 'Madame de Stael',
  },
  {
    content: 'The simplest things are often the truest.',
    author: 'Richard Bach',
  },
  { content: 'Everyone smiles in the same language.', author: null },
  {
    content: 'Yesterday I dared to struggle. Today I dare to win.',
    author: 'Bernadette Devlin',
  },
  {
    content: 'No alibi will save you from accepting the responsibility.',
    author: 'Napoleon Hill',
  },
  { content: 'If you can dream it, you can do it.', author: 'Walt Disney' },
  { content: 'It is better to travel well than to arrive.', author: 'Buddha' },
  {
    content: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anais Nin',
  },
  { content: 'You have to believe in yourself.', author: 'Sun Tzu' },
  { content: 'Our intention creates our reality.', author: 'Wayne Dyer' },
  {
    content: 'Silence is a true friend who never betrays.',
    author: 'Confucius',
  },
  {
    content: 'Character develops itself in the stream of life.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'From little acorns mighty oaks do grow.',
    author: 'American proverb',
  },
  {
    content: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    content: 'Reality does not conform to the ideal, but confirms it.',
    author: 'Gustave Flaubert',
  },
  { content: 'Speak low, if you speak love.', author: 'William Shakespeare' },
  {
    content: 'A really great talent finds its happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'Reality leaves a lot to the imagination.',
    author: 'John Lennon',
  },
  { content: 'The greatest remedy for anger is delay.', author: 'Seneca' },
  {
    content: 'Growth itself contains the germ of happiness.',
    author: 'Pearl Buck',
  },
  {
    content: "You can do what's reasonable or you can decide what's possible.",
    author: null,
  },
  {
    content: 'Nothing strengthens authority so much as silence.',
    author: 'Leonardo da Vinci',
  },
  { content: 'Wherever you go, go with all your heart.', author: 'Confucius' },
  {
    content: 'The only real valuable thing is intuition.',
    author: 'Albert Einstein',
  },
  {
    content: 'Good luck is another name for tenacity of purpose.',
    author: 'Ralph Emerson',
  },
  { content: 'Rainbows apologize for angry skies.', author: 'Sylvia Voirol' },
  {
    content: "Friendship isn't a big thing. It's a million little things.",
    author: null,
  },
  {
    content: 'Time is the most valuable thing a man can spend.',
    author: 'Theophrastus',
  },
  { content: 'Whatever happens, take responsibility.', author: 'Tony Robbins' },
  {
    content: 'Experience is simply the name we give our mistakes.',
    author: 'Oscar Wilde',
  },
  { content: 'I think and that is all that I am.', author: 'Wayne Dyer' },
  {
    content: 'A good plan today is better than a perfect plan tomorrow.',
    author: null,
  },
  {
    content: "If the shoe doesn't fit, must we change the foot?",
    author: 'Gloria Steinem',
  },
  { content: 'Each day provides its own gifts.', author: 'Marcus Aurelius' },
  {
    content: 'While we stop to think, we often miss our opportunity.',
    author: 'Publilius Syrus',
  },
  {
    content:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: 'Bernard Shaw',
  },
  {
    content:
      "To bring anything into your life, imagine that it's already there.",
    author: 'Richard Bach',
  },
  {
    content: 'Begin to weave and God will give you the thread.',
    author: 'German proverb',
  },
  {
    content: 'The more you know yourself, the more you forgive yourself.',
    author: 'Confucius',
  },
  {
    content:
      "Someone remembers, someone cares; your name is whispered in someone's prayers.",
    author: null,
  },
  {
    content:
      'Without faith, nothing is possible. With it, nothing is impossible.',
    author: 'Mary Bethune',
  },
  {
    content: 'Once we accept our limits, we go beyond them.',
    author: 'Albert Einstein',
  },
  {
    content: "Don't be pushed by your problems; be led by your dreams.",
    author: null,
  },
  {
    content:
      'Whatever we expect with confidence becomes our own self-fulfilling prophecy.',
    author: 'Brian Tracy',
  },
  { content: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
  {
    content: 'Fear is a darkroom where negatives develop.',
    author: 'Usman Asif',
  },
  {
    content: 'The truest wisdom is a resolute determination.',
    author: 'Napoleon Bonaparte',
  },
  {
    content: 'Life is the flower for which love is the honey.',
    author: 'Victor Hugo',
  },
  { content: 'Freedom is the right to live as we wish.', author: 'Epictetus' },
  { content: 'Change your thoughts, change your life!', author: null },
  {
    content: "Never ignore a gut feeling, but never believe that it's enough.",
    author: 'Robert Heller',
  },
  {
    content: 'Loss is nothing else but change,and change is Natures delight.',
    author: 'Marcus Aurelius',
  },
  {
    content: 'Someone is special only if you tell them.',
    author: 'Byron Pulsifer',
  },
  {
    content: 'Today is the tomorrow you worried about yesterday.',
    author: null,
  },
  {
    content: 'There is no way to happiness, happiness is the way.',
    author: 'Thich Nhat Hanh',
  },
  {
    content: 'The day always looks brighter from behind a smile.',
    author: null,
  },
  { content: 'A stumble may prevent a fall.', author: null },
  { content: 'He who talks more is sooner exhausted.', author: 'Lao Tzu' },
  { content: 'He who is contented is rich.', author: 'Lao Tzu' },
  {
    content: 'What we achieve inwardly will change outer reality.',
    author: 'Plutarch',
  },
  {
    content: 'Our strength grows out of our weaknesses.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content: 'We must become the change we want to see.',
    author: 'Mahatma Gandhi',
  },
  {
    content: 'Happiness is found in doing, not merely possessing.',
    author: 'Napoleon Hill',
  },
  { content: 'Put your future in good hands your own.', author: null },
  {
    content: 'We choose our destiny in the way we treat others.',
    author: 'Wit',
  },
  {
    content: 'No snowflake in an avalanche ever feels responsible.',
    author: 'Voltaire',
  },
  { content: 'Fortune favours the brave.', author: 'Virgil' },
  {
    content: 'I believe in one thing only, the power of human will.',
    author: 'Joseph Stalin',
  },
  { content: 'The best way out is always through.', author: 'Robert Frost' },
  {
    content: 'The mind unlearns with difficulty what it has long learned.',
    author: 'Seneca',
  },
  {
    content: 'I destroy my enemies when I make them my friends.',
    author: 'Abraham Lincoln',
  },
  { content: 'No garden is without its weeds.', author: 'Thomas Fuller' },
  {
    content: 'There is no failure except in no longer trying.',
    author: 'Elbert Hubbard',
  },
  {
    content: 'Kind words will unlock an iron door.',
    author: 'Turkish proverb',
  },
  {
    content: 'Problems are only opportunities with thorns on them.',
    author: 'Hugh Miller',
  },
  {
    content: 'Life is just a chance to grow a soul.',
    author: 'A. Powell Davies',
  },
  {
    content: 'Mountains cannot be surmounted except by winding paths.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      'May our hearts garden of awakening bloom with hundreds of flowers.',
    author: 'Thich Nhat Hanh',
  },
  { content: 'Fortune befriends the bold.', author: 'John Dryden' },
  {
    content: 'Keep true to the dreams of thy youth.',
    author: 'Friedrich von Schiller',
  },
  {
    content: "You're never a loser until you quit trying.",
    author: 'Mike Ditka',
  },
  {
    content: 'Science is organized knowledge. Wisdom is organized life.',
    author: 'Immanuel Kant',
  },
  {
    content: 'Knowing is not enough; we must apply!',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'Strong beliefs win strong men, and then make them stronger.',
    author: 'Richard Bach',
  },
  {
    content: 'Autumn is a second spring when every leaf is a flower.',
    author: 'Albert Camus',
  },
  {
    content: 'If you surrender to the wind, you can ride it.',
    author: 'Toni Morrison',
  },
  {
    content: 'Keep yourself to the sunshine and you cannot see the shadow.',
    author: 'Helen Keller',
  },
  {
    content: 'Write your plans in pencil and give God the eraser.',
    author: 'Paulo Coelho',
  },
  {
    content: 'Inspiration exists, but it has to find us working.',
    author: 'Pablo Picasso',
  },
  {
    content: 'Pick battles big enough to matter, small enough to win.',
    author: 'Jonathan Kozol',
  },
  {
    content: "Don't compromise yourself. You are all you've got.",
    author: 'Janis Joplin',
  },
  { content: 'A short saying oft contains much wisdom.', author: 'Sophocles' },
  {
    content: 'Difficulties are things that show a person what they are.',
    author: 'Epictetus',
  },
  {
    content: 'When you doubt your power, you give power to your doubt.',
    author: 'Honore de Balzac',
  },
  {
    content: 'The cause is hidden. The effect is visible to all.',
    author: 'Ovid',
  },
  {
    content: 'A prudent question is one half of wisdom.',
    author: 'Francis Bacon',
  },
  {
    content: 'The path to success is to take massive, determined action.',
    author: 'Tony Robbins',
  },
  { content: 'I allow my intuition to lead my path.', author: 'Manuel Puig' },
  {
    content: 'Nature takes away any faculty that is not used.',
    author: 'William R. Inge',
  },
  { content: 'If you wish to be a writer, write.', author: 'Epictetus' },
  {
    content: 'There is no way to prosperity, prosperity is the way.',
    author: 'Wayne Dyer',
  },
  {
    content: 'Either you run the day or the day runs you.',
    author: 'Jim Rohn',
  },
  {
    content: 'Better be ignorant of a matter than half know it.',
    author: 'Publilius Syrus',
  },
  {
    content:
      'Follow your instincts. That is where true wisdom manifests itself.',
    author: 'Oprah Winfrey',
  },
  {
    content: 'There never was a good knife made of bad steel.',
    author: 'Benjamin Franklin',
  },
  {
    content: 'To accomplish great things, we must dream as well as act.',
    author: 'Anatole France',
  },
  {
    content: 'Patience is the companion of wisdom.',
    author: 'Saint Augustine',
  },
  {
    content: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    content: 'To enjoy life, we must touch much of it lightly.',
    author: 'Voltaire',
  },
  { content: 'To fly, we have to have resistance.', author: 'Maya Lin' },
  { content: "What you see depends on what you're looking for.", author: null },
  {
    content: 'The heart has its reasons which reason knows not of.',
    author: 'Blaise Pascal',
  },
  {
    content: 'Be great in act, as you have been in thought.',
    author: 'William Shakespeare',
  },
  { content: 'Imagination rules the world.', author: 'Napoleon Bonaparte' },
  {
    content: 'Kind words do not cost much. Yet they accomplish much.',
    author: 'Blaise Pascal',
  },
  {
    content: 'There is no greater harm than that of time wasted.',
    author: 'Michelangelo',
  },
  {
    content: 'Intuition will tell the thinking mind where to look next.',
    author: 'Jonas Salk',
  },
  { content: 'Worry gives a small thing a big shadow.', author: null },
  {
    content: 'Fears are nothing more than a state of mind.',
    author: 'Napoleon Hill',
  },
  {
    content: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Efficiency is doing things right; effectiveness is doing the right things.',
    author: 'Peter Drucker',
  },
  {
    content: 'Blaze with the fire that is never extinguished.',
    author: 'Luisa Sigea',
  },
  {
    content: "Don't cry because it's over. Smile because it happened.",
    author: 'Dr. Seuss',
  },
  {
    content: 'No is easier to do. Yes is easier to say.',
    author: 'Jason Fried',
  },
  {
    content: 'To be wrong is nothing unless you continue to remember it.',
    author: 'Confucius',
  },
  {
    content: "Yesterdays home runs don't win today's games.",
    author: 'Babe Ruth',
  },
  {
    content: 'Silence is deep as Eternity, Speech is shallow as Time.',
    author: 'Carlyle',
  },
  {
    content: "Don't smother each other. No one can grow in the shade.",
    author: 'Leo F. Buscaglia',
  },
  {
    content: 'An ant on the move does more than a dozing ox',
    author: 'Lao Tzu',
  },
  {
    content: "You can't shake hands with a clenched fist.",
    author: 'Indira Gandhi',
  },
  {
    content: 'A good decision is based on knowledge and not on numbers.',
    author: 'Plato',
  },
  { content: 'The cautious seldom err.', author: 'Confucius' },
  {
    content: 'If there is no struggle, there is no progress.',
    author: 'Frederick Douglass',
  },
  {
    content: 'Where there is great love, there are always miracles.',
    author: 'Willa Cather',
  },
  { content: 'Time you enjoy wasting, was not wasted.', author: 'John Lennon' },
  {
    content: 'Every problem has a gift for you in its hands.',
    author: 'Richard Bach',
  },
  {
    content: 'Sadness flies away on the wings of time.',
    author: 'Jean de la Fontaine',
  },
  {
    content: 'I have often regretted my speech, never my silence.',
    author: 'Publilius Syrus',
  },
  {
    content: 'Never put off till tomorrow what you can do today.',
    author: 'Thomas Jefferson',
  },
  {
    content: 'Minds are like parachutes. They only function when open.',
    author: 'Thomas Dewar',
  },
  {
    content: 'If a man does his best, what else is there?',
    author: 'George Patton',
  },
  {
    content: 'The secret of success is constancy to purpose.',
    author: 'Benjamin Disraeli',
  },
  {
    content: 'Life is a progress, and not a station.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'All seasons are beautiful for the person who carries happiness within.',
    author: 'Horace Friess',
  },
  {
    content: 'To avoid criticism, do nothing, say nothing, be nothing.',
    author: 'Elbert Hubbard',
  },
  { content: 'All things change; nothing perishes.', author: 'Ovid' },
  { content: 'Absence makes the heart grow fonder.', author: 'Haynes Bayly' },
  {
    content: 'Imagination is the highest kite one can fly.',
    author: 'Lauren Bacall',
  },
  {
    content:
      'The beginning of knowledge is the discovery of something we do not understand.',
    author: 'Frank Herbert',
  },
  {
    content:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    author: 'Elizabeth Browning',
  },
  {
    content:
      'Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    author: 'Arthur Conan Doyle',
  },
  {
    content:
      'Good timber does not grow with ease; the stronger the wind, the stronger the trees.',
    author: 'J. Willard Marriott',
  },
  {
    content:
      'I believe that we are fundamentally the same and have the same basic potential.',
    author: 'Dalai Lama',
  },
  {
    content:
      'The winds and waves are always on the side of the ablest navigators.',
    author: 'Edward Gibbon',
  },
  {
    content:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    content:
      'To get something you never had, you have to do something you never did.',
    author: null,
  },
  {
    content:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    author: null,
  },
  {
    content:
      'Strength does not come from physical capacity. It comes from an indomitable will.',
    author: 'Mahatma Gandhi',
  },
  {
    content:
      'Each misfortune you encounter will carry in it the seed of tomorrows good luck.',
    author: 'Og Mandino',
  },
  {
    content:
      'To forgive is to set a prisoner free and realize that prisoner was you.',
    author: 'Lewis B. Smedes',
  },
  {
    content:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: 'Buddha',
  },
  {
    content:
      'By believing passionately in something that does not yet exist, we create it.',
    author: 'Nikos Kazantzakis',
  },
  {
    content:
      'Letting go is not the end of the world; it is the beginning of a new life.',
    author: null,
  },
  {
    content:
      'All the great performers I have worked with are fuelled by a personal dream.',
    author: 'John Eliot',
  },
  {
    content:
      'One of the advantages of being disorderly is that one is constantly making exciting discoveries.',
    author: 'A. A. Milne',
  },
  {
    content:
      'I never see what has been done; I only see what remains to be done.',
    author: 'Marie Curie',
  },
  {
    content:
      'Begin at once to live and count each separate day as a separate life.',
    author: 'Seneca',
  },
  {
    content:
      "If you don't know where you are going, you will probably end up somewhere else.",
    author: 'Lawrence Peter',
  },
  {
    content:
      'It is not so important to know everything as to appreciate what we learn.',
    author: 'Hannah More',
  },
  {
    content:
      'The bird of paradise alights only upon the hand that does not grasp.',
    author: 'John Berry',
  },
  {
    content:
      'Think as a wise man but communicate in the language of the people.',
    author: 'William Yeats',
  },
  {
    content:
      'Practice yourself, for heavens sake in little things, and then proceed to greater.',
    author: 'Epictetus',
  },
  {
    content:
      'If one does not know to which port is sailing, no wind is favorable.',
    author: 'Seneca',
  },
  {
    content:
      'Our greatest glory is not in never failing but rising everytime we fall.',
    author: null,
  },
  {
    content:
      'Being right is highly overrated. Even a stopped clock is right twice a day.',
    author: null,
  },
  {
    content:
      "To be upset over what you don't have is to waste what you do have.",
    author: 'Ken S. Keyes',
  },
  {
    content:
      'If we did the things we are capable of, we would astound ourselves.',
    author: 'Thomas Edison',
  },
  {
    content: 'Nothing in life is to be feared. It is only to be understood.',
    author: 'Marie Curie',
  },
  {
    content:
      'Successful people ask better questions, and as a result, they get better answers.',
    author: 'Tony Robbins',
  },
  {
    content:
      'Love is not blind; it simply enables one to see things others fail to see.',
    author: null,
  },
  {
    content: 'Life is a process. We are a process. The universe is a process.',
    author: 'Anne Schaef',
  },
  {
    content:
      'I think somehow we learn who we really are and then live with that decision.',
    author: 'Eleanor Roosevelt',
  },
  {
    content:
      'We learn what we have said from those who listen to our speaking.',
    author: 'Kenneth Patton',
  },
  {
    content:
      'A little knowledge that acts is worth infinitely more than much knowledge that is idle.',
    author: 'Kahlil Gibran',
  },
  {
    content:
      'If you get up one more time than you fall, you will make it through.',
    author: null,
  },
  {
    content: 'The doors we open and close each day decide the lives we live.',
    author: 'Flora Whittemore',
  },
  {
    content:
      'The worst bankrupt in the world is the person who has lost his enthusiasm.',
    author: 'H. W. Arnold',
  },
  {
    content:
      'Happiness comes when your work and words are of benefit to yourself and others.',
    author: 'Buddha',
  },
  {
    content:
      "Don't focus on making the right decision, focus on making the decision the right one.",
    author: null,
  },
  {
    content:
      'Everything is perfect in the universe even your desire to improve it.',
    author: 'Wayne Dyer',
  },
  {
    content:
      'The universe is full of magical things, patiently waiting for our wits to grow sharper.',
    author: 'Eden Phillpotts',
  },
  {
    content:
      'Just as a candle cannot burn without fire, men cannot live without a spiritual life.',
    author: 'Buddha',
  },
  {
    content:
      'A thing long expected takes the form of the unexpected when at last it comes.',
    author: 'Mark Twain',
  },
  {
    content:
      'Action may not always bring happiness; but there is no happiness without action.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      "I don't believe in failure. It is not failure if you enjoyed the process.",
    author: 'Oprah Winfrey',
  },
  {
    content: 'What you do not want done to yourself, do not do to others.',
    author: 'Confucius',
  },
  {
    content:
      'Short words are best and the old words when short are best of all.',
    author: 'Winston Churchill',
  },
  {
    content:
      'If you light a lamp for somebody, it will also brighten your path.',
    author: 'Buddha',
  },
  {
    content:
      'I have done my best: that is about all the philosophy of living one needs.',
    author: 'Lin-yutang',
  },
  {
    content:
      'Through perseverance many people win success out of what seemed destined to be certain failure.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      'Give thanks for the rain of life that propels us to reach new horizons.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Love is just a word until someone comes along and gives it meaning.',
    author: null,
  },
  {
    content:
      'We all have problems. The way we solve them is what makes us different.',
    author: null,
  },
  {
    content:
      'The secret to a rich life is to have more beginnings than endings.',
    author: 'Dave Weinbaum',
  },
  {
    content:
      'It is only when the mind and character slumber that the dress can be seen.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content:
      "If you don't like something, change it. If you can't change it, change your attitude.",
    author: 'Maya Angelou',
  },
  {
    content:
      'Reviewing what you have learned and learning anew, you are fit to be a teacher.',
    author: 'Confucius',
  },
  {
    content:
      'The world is a book, and those who do not travel read only a page.',
    author: 'Augustinus Sanctus',
  },
  {
    content:
      'So long as a person is capable of self-renewal they are a living being.',
    author: 'Henri-Frederic Amiel',
  },
  {
    content: "I'm not afraid of storms, for I'm learning how to sail my ship.",
    author: 'Louisa Alcott',
  },
  {
    content:
      'Think for yourselves and let others enjoy the privilege to do so too.',
    author: 'Voltaire',
  },
  {
    content: 'How we spend our days is, of course, how we spend our lives.',
    author: 'Annie Dillard',
  },
  {
    content:
      'It has never been my object to record my dreams, just to realize them.',
    author: 'Man Ray',
  },
  {
    content:
      'The most complicated achievements of thought are possible without the assistance of consciousness.',
    author: 'Sigmund Freud',
  },
  {
    content:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: 'Wayne Dyer',
  },
  {
    content:
      'Most great people have attained their greatest success just one step beyond their greatest failure.',
    author: 'Napoleon Hill',
  },
  {
    content:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: 'Henry Ford',
  },
  {
    content: 'Better to have loved and lost, than to have never loved at all.',
    author: 'St. Augustine',
  },
  {
    content:
      'Everyone thinks of changing the world, but no one thinks of changing himself.',
    author: 'Leo Tolstoy',
  },
  {
    content: 'The best way to pay for a lovely moment is to enjoy it.',
    author: 'Richard Bach',
  },
  {
    content:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: 'Winston Churchill',
  },
  {
    content:
      'Slow down and everything you are chasing will come around and catch you.',
    author: 'John De Paola',
  },
  {
    content:
      'Your worst enemy cannot harm you as much as your own unguarded thoughts.',
    author: 'Buddha',
  },
  {
    content:
      'I always wanted to be somebody, but I should have been more specific.',
    author: 'Lily Tomlin',
  },
  {
    content: 'Yeah we all shine on, like the moon, and the stars, and the sun.',
    author: 'John Lennon',
  },
  {
    content:
      'Knowledge is a process of piling up facts; wisdom lies in their simplification.',
    author: 'Martin Fischer',
  },
  {
    content:
      'Life is like riding a bicycle. To keep your balance you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    content:
      'We should all be thankful for those people who rekindle the inner spirit.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'Opportunity is missed by most because it is dressed in overalls and looks like work.',
    author: 'Thomas Edison',
  },
  {
    content:
      'Feeling and longing are the motive forces behind all human endeavor and human creations.',
    author: 'Albert Einstein',
  },
  {
    content:
      'In the end we retain from our studies only that which we practically apply.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      'If you correct your mind, the rest of your life will fall into place.',
    author: 'Lao Tzu',
  },
  {
    content: 'The world makes way for the man who knows where he is going.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'When your desires are strong enough you will appear to possess superhuman powers to achieve.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.',
    author: 'John Adams',
  },
  {
    content: 'I cannot make my days longer so I strive to make them better.',
    author: 'Henry David Thoreau',
  },
  {
    content:
      'Tension is who you think you should be. Relaxation is who you are.',
    author: 'Chinese proverb',
  },
  {
    content:
      'Never bend your head. Always hold it high. Look the world right in the eye.',
    author: 'Helen Keller',
  },
  {
    content:
      'One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'We cannot do everything at once, but we can do something at once.',
    author: 'Calvin Coolidge',
  },
  {
    content:
      'You have to do your own growing no matter how tall your grandfather was.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'Invent your world. Surround yourself with people, color, sounds, and work that nourish you.',
    author: null,
  },
  {
    content: 'It is fatal to enter any war without the will to win it.',
    author: 'General Douglas MacArthur',
  },
  {
    content:
      'Be what you are. This is the first step toward becoming better than you are.',
    author: 'Julius Charles Hare',
  },
  {
    content:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: 'Buckminster Fuller',
  },
  {
    content:
      'Love and compassion open our own inner life, reducing stress, distrust and loneliness.',
    author: 'Dalai Lama',
  },
  {
    content:
      'Ideals are an imaginative understanding of that which is desirable in that which is possible.',
    author: 'Walter Lippmann',
  },
  {
    content:
      'The superior man is satisfied and composed; the mean man is always full of distress.',
    author: 'Confucius',
  },
  {
    content:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: 'Bruce Lee',
  },
  {
    content: 'The way is not in the sky. The way is in the heart.',
    author: 'Buddha',
  },
  {
    content:
      'Most people are about as happy as they make up their minds to be.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'Three things cannot be long hidden: the sun, the moon, and the truth.',
    author: 'Buddha',
  },
  {
    content:
      'More often than not, anger is actually an indication of weakness rather than of strength.',
    author: 'Dalai Lama',
  },
  {
    content:
      'Before you put on a frown, make absolutely sure there are no smiles available.',
    author: 'Jim Beggs',
  },
  {
    content:
      'A man of ability and the desire to accomplish something can do anything.',
    author: 'Donald Kircher',
  },
  {
    content:
      'You, yourself, as much as anybody in the entire universe, deserve your love and affection.',
    author: 'Buddha',
  },
  {
    content:
      'It is not uncommon for people to spend their whole life waiting to start living.',
    author: 'Eckhart Tolle',
  },
  {
    content: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: 'H. Jackson Browne',
  },
  {
    content:
      'Wicked people are always surprised to find ability in those that are good.',
    author: 'Marquis Vauvenargues',
  },
  {
    content:
      'Life is so constructed that an event does not, cannot, will not, match the expectation.',
    author: 'Charlotte Bronte',
  },
  {
    content:
      'If you change the way you look at things, the things you look at change.',
    author: 'Wayne Dyer',
  },
  {
    content: 'No man can succeed in a line of endeavor which he does not like.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'You will not be punished for your anger, you will be punished by your anger.',
    author: 'Buddha',
  },
  {
    content:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    author: 'Robert Stevenson',
  },
  {
    content:
      'They say that time changes things, but you actually have to change them yourself.',
    author: 'Andy Warhol',
  },
  {
    content:
      'Never apologize for showing feelings. When you do so, you apologize for the truth.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      'The truth you believe and cling to makes you unavailable to hear anything new.',
    author: 'Pema Chodron',
  },
  {
    content:
      'Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.',
    author: 'Horace',
  },
  {
    content:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
    author: 'Morris West',
  },
  {
    content:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin Roosevelt',
  },
  {
    content:
      'Every action of our lives touches on some chord that will vibrate in eternity.',
    author: 'Edwin Chapin',
  },
  {
    content:
      "Shoot for the moon. Even if you miss, you'll land among the stars.",
    author: 'Les Brown',
  },
  {
    content:
      'It does not matter how slowly you go, as long as you do not stop.',
    author: 'Confucius',
  },
  {
    content:
      "Every day may not be good, but there's something good in every day.",
    author: null,
  },
  {
    content: 'Most folks are about as happy as they make up their minds to be.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'If you would take, you must first give, this is the beginning of intelligence.',
    author: 'Lao Tzu',
  },
  {
    content:
      "Some people think it's holding that makes one strong, when sometimes it's letting go.",
    author: null,
  },
  {
    content:
      'It is on our failures that we base a new and different and better success.',
    author: 'Havelock Ellis',
  },
  {
    content:
      'Quality is never an accident; it is always the result of intelligent effort.',
    author: 'John Ruskin',
  },
  {
    content:
      'To study and not think is a waste. To think and not study is dangerous.',
    author: 'Confucius',
  },
  {
    content:
      'Life is a succession of lessons, which must be lived to be understood.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Time changes everything except something within us which is always surprised by change.',
    author: 'Thomas Hardy',
  },
  {
    content:
      'You are important enough to ask and you are blessed enough to receive back.',
    author: 'Wayne Dyer',
  },
  {
    content: 'If you cannot do great things, do small things in a great way.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'If you want your life to be more rewarding, you have to change the way you think.',
    author: 'Oprah Winfrey',
  },
  {
    content:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.',
    author: 'Leonardo Ruiz',
  },
  {
    content:
      'The free man is he who does not fear to go to the end of his thought.',
    author: 'Leon Blum',
  },
  {
    content:
      'Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.',
    author: 'Bernard Shaw',
  },
  {
    content:
      'The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.',
    author: 'Lao Tzu',
  },
  {
    content:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    author: 'Charles Dickens',
  },
  {
    content:
      'By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.',
    author: 'Dalai Lama',
  },
  {
    content:
      'We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.',
    author: 'Sam Keen',
  },
  {
    content:
      'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Walt Emerson',
  },
  {
    content:
      'There are things so deep and complex that only intuition can reach it in our stage of development as human beings.',
    author: 'John Astin',
  },
  {
    content:
      'A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.',
    author: 'Elbert Hubbard',
  },
  {
    content:
      "There is no retirement for an artist, it's your way of living so there is no end to it.",
    author: 'Henry Moore',
  },
  {
    content:
      'Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?',
    author: null,
  },
  {
    content:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: 'Laozi',
  },
  {
    content:
      'Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.',
    author: 'William Shakespeare',
  },
  {
    content:
      'Success means having the courage, the determination, and the will to become the person you believe you were meant to be.',
    author: 'George Sheehan',
  },
  {
    content:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: 'Thomas Jefferson',
  },
  {
    content:
      'It is only with the heart that one can see rightly, what is essential is invisible to the eye.',
    author: 'Antoine de Saint-Exupery',
  },
  {
    content:
      'Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.',
    author: 'Marcel Proust',
  },
  {
    content:
      'Make the best use of what is in your power, and take the rest as it happens.',
    author: 'Epictetus',
  },
  {
    content:
      'The thoughts we choose to think are the tools we use to paint the canvas of our lives.',
    author: 'Louise Hay',
  },
  {
    content:
      'No matter how carefully you plan your goals they will never be more than pipe dreams unless you pursue them with gusto.',
    author: 'W. Clement Stone',
  },
  {
    content:
      'The reason most goals are not achieved is that we spend our time doing second things first.',
    author: 'Robert McKain',
  },
  {
    content:
      'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.',
    author: 'John Quincy Adams',
  },
  {
    content:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author: 'Thomas Jefferson',
  },
  {
    content:
      'Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'The person born with a talent they are meant to use will find their greatest happiness in using it.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    author: 'William Saroyan',
  },
  {
    content:
      "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.',
    author: 'Leonardo da Vinci',
  },
  {
    content:
      'A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.',
    author: 'Isaac Asimov',
  },
  {
    content:
      'Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.',
    author: 'Henry Van Dyke',
  },
  {
    content:
      "You got to be careful if you don't know where you're going, because you might not get there.",
    author: 'Yogi Berra',
  },
  {
    content:
      'You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.',
    author: 'Naguib Mahfouz',
  },
  {
    content:
      'Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more',
    author: 'Anthony Robbins',
  },
  {
    content:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
    author: 'John Wooden',
  },
  {
    content:
      'I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.',
    author: 'Og Mandino',
  },
  {
    content:
      'Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.',
    author: 'Jane Addams',
  },
  {
    content:
      'By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.',
    author: 'Thomas Carlyle',
  },
  {
    content:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    author: 'M. Scott Peck',
  },
  {
    content:
      'The minute you settle for less than you deserve, you get even less than you settled for.',
    author: 'Maureen Dowd',
  },
  {
    content:
      'The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.',
    author: 'Charles Darwin',
  },
  {
    content:
      'It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.',
    author: null,
  },
  {
    content:
      'If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.',
    author: 'Dalai Lama',
  },
  {
    content:
      'There is only one success to be able to spend your life in your own way.',
    author: 'Christopher Morley',
  },
  {
    content:
      'Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.',
    author: 'Hannah Arendt',
  },
  {
    content:
      'Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.',
    author: 'Alan Cohen',
  },
  {
    content:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: 'Aldous Huxley',
  },
  {
    content:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    author: 'Marian Edelman',
  },
  {
    content:
      'Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.',
    author: 'Sue Patton Thoele',
  },
  {
    content:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
    author: 'Frank Crane',
  },
  {
    content:
      'Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.',
    author: 'Lao Tzu',
  },
  {
    content:
      'All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.',
    author: 'Kathleen Norris',
  },
  {
    content:
      'Choose a job you love, and you will never have to work a day in your life.',
    author: 'Confucius',
  },
  {
    content:
      'You cannot find yourself by going into the past. You can find yourself by coming into the present.',
    author: 'Eckhart Tolle',
  },
  {
    content:
      'All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.',
    author: 'Anne Bronte',
  },
  {
    content:
      'In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.',
    author: 'Richard Bach',
  },
  {
    content:
      'The fox has many tricks. The hedgehog has but one. But that is the best of all.',
    author: 'Desiderius Erasmus',
  },
  {
    content:
      'Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.',
    author: 'Arthur Rubinstein',
  },
  {
    content:
      'Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity',
    author: 'Louis Pasteur',
  },
  {
    content:
      'Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.',
    author: 'Rumi',
  },
  {
    content:
      'We must never forget that it is through our actions, words, and thoughts that we have a choice.',
    author: 'Sogyal Rinpoche',
  },
  {
    content:
      'We see things not as they are, but as we are. Our perception is shaped by our previous experiences.',
    author: 'Dennis Kimbro',
  },
  {
    content:
      'True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.',
    author: 'William Penn',
  },
  {
    content:
      'All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.',
    author: 'Immanuel Kant',
  },
  {
    content:
      'The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.',
    author: 'Buddha',
  },
  {
    content:
      'As the rest of the world is walking out the door, your best friends are the ones walking in.',
    author: null,
  },
  {
    content:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.',
    author: 'Robert Lynd',
  },
  {
    content:
      'If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.',
    author: 'Donald Trump',
  },
  {
    content:
      'Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.',
    author: 'Eleanor Roosevelt',
  },
  {
    content:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
    author: 'Robert Fulghum',
  },
  {
    content:
      'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
    author: 'Bruce Lee',
  },
  {
    content:
      'Every man takes the limits of his own field of vision for the limits of the world.',
    author: 'Arthur Schopenhauer',
  },
  {
    content:
      'One does not discover new lands without consenting to lose sight of the shore for a very long time.',
    author: 'Andre Gide',
  },
  {
    content:
      'What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.',
    author: 'Sai Baba',
  },
  {
    content:
      'Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?',
    author: 'Dalai Lama',
  },
  {
    content:
      'Life is like a sewer. What you get out of it depends on what you put into it.',
    author: 'Tom Lehrer',
  },
  {
    content:
      'Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.',
    author: 'Bruce Lee',
  },
  {
    content:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: 'Alfred Sheinwold',
  },
  {
    content:
      'Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.',
    author: 'Sri Chinmoy',
  },
  {
    content:
      'People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      'We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.',
    author: 'James Freeman Clarke',
  },
  {
    content:
      'The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.',
    author: 'Anais Nin',
  },
  {
    content:
      'Everything that happens happens as it should, and if you observe carefully, you will find this to be so.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.',
    author: 'Wayne Dyer',
  },
  {
    content:
      'In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.',
    author: 'Buddha',
  },
  {
    content:
      'It is the greatest of all mistakes to do nothing because you can only do little do what you can.',
    author: 'Sydney Smith',
  },
  {
    content:
      'When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.',
    author: 'Confucius',
  },
  {
    content:
      "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
    author: 'Mary Kay Ash',
  },
  {
    content:
      'Those who try to do something and fail are infinitely better than those who try nothing and succeed.',
    author: 'Lloyd Jones',
  },
  {
    content:
      'Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.',
    author: 'Vista Kelly',
  },
  {
    content:
      'The first step to getting the things you want out of life is this: decide what you want.',
    author: 'Ben Stein',
  },
  {
    content:
      'Why compare yourself with others? No one in the entire world can do a better job of being you than you.',
    author: null,
  },
  {
    content:
      'Experience is not what happens to a man. It is what a man does with what happens to him.',
    author: 'Aldous Huxley',
  },
  {
    content:
      'A good teacher is like a candle, it consumes itself to light the way for others.',
    author: null,
  },
  {
    content:
      'The only thing to do with good advice is to pass it on. It is never of any use to oneself.',
    author: 'Oscar Wilde',
  },
  {
    content:
      'Life is not measured by the breaths we take, but by the moments that take our breath.',
    author: null,
  },
  {
    content:
      'The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.',
    author: 'Honore de Balzac',
  },
  {
    content:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    author: 'Jacob Braude',
  },
  {
    content:
      "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
    author: 'Vince Lombardi',
  },
  {
    content:
      'What lies behind us and what lies before us are small matters compared to what lies within us.',
    author: 'Oliver Holmes',
  },
  {
    content:
      'With the realization of ones own potential and self-confidence in ones ability, one can build a better world.',
    author: 'Dalai Lama',
  },
  {
    content:
      'There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.',
    author: 'Nelson Mandela',
  },
  {
    content:
      'Forget about all the reasons why something may not work. You only need to find one good reason why it will.',
    author: 'Robert Anthony',
  },
  {
    content:
      'It is the mark of an educated mind to be able to entertain a thought without accepting it.',
    author: 'Aristotle',
  },
  {
    content:
      'Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.',
    author: 'Washington Irving',
  },
  {
    content:
      'We all live with the objective of being happy; our lives are all different and yet the same.',
    author: 'Anne Frank',
  },
  {
    content:
      'Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.',
    author: 'Thich Nhat Hanh',
  },
  {
    content:
      'Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.',
    author: 'Buddha',
  },
  {
    content:
      'It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.',
    author: 'Jessamyn West',
  },
  {
    content:
      'Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.',
    author: 'Plato',
  },
  {
    content:
      'Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.',
    author: 'Bruce Lee',
  },
  {
    content:
      'Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!',
    author: 'Charlotte Gilman',
  },
  {
    content:
      'Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.',
    author: 'Mother Teresa',
  },
  {
    content:
      'Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.',
    author: 'Margaret Runbeck',
  },
  {
    content:
      'The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.',
    author: 'Dalai Lama',
  },
  {
    content:
      'If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      'Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.',
    author: 'Ovid',
  },
  {
    content:
      'I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.',
    author: 'Og Mandino',
  },
  {
    content:
      'We never understand how little we need in this world until we know the loss of it.',
    author: 'James Barrie',
  },
  {
    content:
      'The real measure of your wealth is how much youd be worth if you lost all your money.',
    author: null,
  },
  {
    content:
      'To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.',
    author: 'Buddha',
  },
  {
    content:
      'Take no thought of who is right or wrong or who is better than. Be not for or against.',
    author: 'Bruce Lee',
  },
  {
    content:
      'I am a man of fixed and unbending principles, the first of which is to be flexible at all times.',
    author: 'Everett Dirksen',
  },
  {
    content:
      'Today, giving a stranger a smile without waiting for it may be the joy they need to have a great day.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.',
    author: 'Henry Miller',
  },
  {
    content:
      'At the center of your being you have the answer; you know who you are and you know what you want.',
    author: 'Lao Tzu',
  },
  {
    content:
      'How wonderful that we have met with a paradox. Now we have some hope of making progress.',
    author: 'Niels Bohr',
  },
  {
    content:
      'Everyone is a genius at least once a year. A real genius has his original ideas closer together.',
    author: 'Georg Lichtenberg',
  },
  {
    content:
      'Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.',
    author: 'Anais Nin',
  },
  {
    content:
      'Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.',
    author: 'Gloria Steinem',
  },
  {
    content:
      'Sadness may be part of life but there is no need to let it dominate your entire life.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.',
    author: 'Charles Schwab',
  },
  {
    content:
      'Nature gave us one tongue and two ears so we could hear twice as much as we speak.',
    author: 'Epictetus',
  },
  {
    content:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
    author: 'Barbara Baron',
  },
  {
    content:
      'You are always free to change your mind and choose a different future, or a different past.',
    author: 'Richard Bach',
  },
  {
    content:
      'You were not born a winner, and you were not born a loser. You are what you make yourself be.',
    author: 'Lou Holtz',
  },
  {
    content:
      'Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'To be what we are, and to become what we are capable of becoming, is the only end of life.',
    author: 'Robert Stevenson',
  },
  {
    content:
      'The road leading to a goal does not separate you from the destination; it is essentially a part of it.',
    author: 'Charles DeLint',
  },
  {
    content:
      'Take things as they are. Punch when you have to punch. Kick when you have to kick.',
    author: 'Bruce Lee',
  },
  {
    content:
      'I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.',
    author: 'Albert Einstein',
  },
  {
    content:
      'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.',
    author: null,
  },
  {
    content:
      'Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.',
    author: 'Paavo Nurmi',
  },
  {
    content:
      'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    author: 'Anne Frank',
  },
  {
    content:
      'A friend is someone who understands your past, believes in your future, and accepts you just the way you are.',
    author: null,
  },
  {
    content:
      'It is one of the blessings of old friends that you can afford to be stupid with them.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.',
    author: 'Tryon Edwards',
  },
  {
    content:
      'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'One must be fond of people and trust them if one is not to make a mess of life.',
    author: 'E. M. Forster',
  },
  {
    content:
      'We cannot change our memories, but we can change their meaning and the power they have over us.',
    author: 'David Seamans',
  },
  {
    content:
      'Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?',
    author: 'Confucius',
  },
  {
    content:
      'To give hope to someone occurs when you teach them how to use the tools to do it for themselves.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Id rather regret the things that I have done than the things that I have not done.',
    author: 'Lucille Ball',
  },
  {
    content:
      'The past has no power to stop you from being present now. Only your grievance about the past can do that.',
    author: 'Eckhart Tolle',
  },
  {
    content:
      'If the stars should appear but one night every thousand years how man would marvel and adore.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'There are two kinds of failures: those who thought and never did, and those who did and never thought.',
    author: 'Laurence J. Peter',
  },
  {
    content:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
    author: 'Elizabeth Arden',
  },
  {
    content:
      'I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.',
    author: 'Dalai Lama',
  },
  {
    content:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: 'Confucius',
  },
  {
    content:
      'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.',
    author: 'Nikola Tesla',
  },
  {
    content:
      'Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.',
    author: 'Leo Aikman',
  },
  {
    content:
      "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
    author: 'Pablo Picasso',
  },
  {
    content:
      'These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.',
    author: 'Vernon Cooper',
  },
  {
    content:
      'One secret of success in life is for a man to be ready for his opportunity when it comes.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      "People take different roads seeking fulfillment and happiness. Just because they're not on your road doesn't mean they've gotten lost.",
    author: 'Dalai Lama',
  },
  {
    content:
      'The shoe that fits one person pinches another; there is no recipe for living that suits all cases.',
    author: 'Carl Jung',
  },
  {
    content:
      'There are only two mistakes one can make along the road to truth; not going all the way, and not starting.',
    author: 'Buddha',
  },
  {
    content:
      'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
    author: null,
  },
  {
    content:
      'Treat people as if they were what they ought to be and you help them to become what they are capable of being.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      'The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.',
    author: 'Thich Nhat Hanh',
  },
  {
    content:
      'If you focus on results, you will never change. If you focus on change, you will get results.',
    author: 'Jack Dixon',
  },
  {
    content:
      'I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.',
    author: 'G. K. Chesterton',
  },
  {
    content:
      'There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.',
    author: 'Denis Waitley',
  },
  {
    content:
      'All difficult things have their origin in that which is easy, and great things in that which is small.',
    author: 'Lao-Tzu',
  },
  {
    content:
      'You can be what you want to be. You have the power within and we will help you always.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.',
    author: 'Johannes Gaertner',
  },
  {
    content:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    author: 'Doug Larson',
  },
  {
    content:
      'The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.',
    author: 'Charles Lamb',
  },
  {
    content:
      'When one tugs at a single thing in nature, he finds it attached to the rest of the world.',
    author: 'John Muir',
  },
  {
    content:
      'Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.',
    author: 'Winston Churchill',
  },
  {
    content:
      'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    content:
      'To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.',
    author: 'Buddha',
  },
  {
    content:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: 'Thomas Edison',
  },
  {
    content:
      'When we seek to discover the best in others, we somehow bring out the best in ourselves.',
    author: 'William Ward',
  },
  {
    content:
      'If you accept the expectations of others, especially negative ones, then you never will change the outcome.',
    author: 'Michael Jordan',
  },
  {
    content:
      'A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.',
    author: 'Oliver Holmes',
  },
  {
    content:
      'I am not bothered by the fact that I am unknown. I am bothered when I do not know others.',
    author: 'Confucius',
  },
  {
    content:
      'He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.',
    author: 'Epictetus',
  },
  {
    content:
      'I am always doing that which I cannot do, in order that I may learn how to do it.',
    author: 'Pablo Picasso',
  },
  {
    content:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: 'Barack Obama',
  },
  {
    content:
      'The world is round and the place which may seem like the end may also be the beginning.',
    author: 'Ivy Baker Priest',
  },
  {
    content:
      'Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.',
    author: null,
  },
  {
    content:
      "Give it all you've got because you never know if there's going to be a next time.",
    author: 'Danielle Ingrum',
  },
  {
    content:
      'You have to take it as it happens, but you should try to make it happen the way you want to take it.',
    author: 'Old German proverb',
  },
  {
    content:
      'Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.',
    author: 'Ralph Blum',
  },
  {
    content:
      "I'm not in this world to live up to your expectations and you're not in this world to live up to mine.",
    author: 'Bruce Lee',
  },
  {
    content:
      'Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.',
    author: 'Thich Nhat Hanh',
  },
  {
    content:
      "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
    author: 'Walter Cronkite',
  },
  {
    content:
      'The greatest way to live with honor in this world is to be what we pretend to be.',
    author: 'Socrates',
  },
  {
    content:
      'The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.',
    author: 'Seneca',
  },
  {
    content:
      'The grand essentials of happiness are: something to do, something to love, and something to hope for.',
    author: 'Chalmers',
  },
  {
    content:
      'By living deeply in the present moment we can understand the past better and we can prepare for a better future.',
    author: 'Thich Nhat Hanh',
  },
  {
    content:
      'Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.',
    author: 'Robert Louis Stevenson',
  },
  {
    content:
      'Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.',
    author: 'Napoleon Hill',
  },
  {
    content:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: null,
  },
  {
    content:
      'The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.',
    author: 'Henry Thoreau',
  },
  {
    content:
      'The greatest good you can do for another is not just to share your riches but to reveal to him his own.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
    author: 'Brian Tracy',
  },
  {
    content:
      'To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.',
    author: 'Joan Didion',
  },
  {
    content:
      'It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.',
    author: 'Mabel Newcomber',
  },
  {
    content:
      "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
    author: null,
  },
  {
    content:
      'Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.',
    author: 'Robert Graves',
  },
  {
    content:
      'The thing always happens that you really believe in; and the belief in a thing makes it happen.',
    author: 'Frank Wright',
  },
  {
    content:
      'A true friend is the most precious of all possessions and the one we take the least thought about acquiring.',
    author: 'Francois de La Rochefoucauld',
  },
  {
    content:
      'There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.',
    author: 'Epictetus',
  },
  {
    content:
      'Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.',
    author: 'Margaret Cousins',
  },
  {
    content:
      'Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.',
    author: null,
  },
  {
    content:
      'This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.',
    author: 'Thomas Carlyle',
  },
  {
    content:
      'Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.',
    author: 'Pearl Buck',
  },
  {
    content:
      'You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.',
    author: 'Catherine Pulsifer',
  },
  {
    content:
      'The happiness of a man in this life does not consist in the absence but in the mastery of his passions.',
    author: 'Alfred Tennyson',
  },
  {
    content:
      'Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.',
    author: 'Margaret Mead',
  },
  {
    content:
      'Let your hook always be cast; in the pool where you least expect it, there will be a fish.',
    author: 'Ovid',
  },
  {
    content:
      'You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.',
    author: 'Remez Sasson',
  },
  {
    content:
      'Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.',
    author: 'Richard Bach',
  },
  {
    content:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: 'Lao Tzu',
  },
  {
    content:
      "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
    author: 'Pema Chodron',
  },
  {
    content:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: 'Richard Bach',
  },
  {
    content:
      'Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.',
    author: 'David Jordan',
  },
  {
    content:
      'Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!',
    author: 'Richard Bach',
  },
  {
    content:
      'No valid plans for the future can be made by those who have no capacity for living now.',
    author: 'Alan Watts',
  },
  {
    content:
      'The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.',
    author: 'Oscar Wilde',
  },
  {
    content:
      'To accomplish great things, we must not only act, but also dream; not only plan, but also believe.',
    author: 'Anatole France',
  },
  {
    content:
      'The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.',
    author: 'Thomas Edison',
  },
  {
    content:
      'If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.',
    author: 'John Steinbeck',
  },
  {
    content:
      'If we are facing in the right direction, all we have to do is keep on walking.',
    author: null,
  },
  {
    content:
      'Remember always that you not only have the right to be an individual, you have an obligation to be one.',
    author: 'Eleanor Roosevelt',
  },
  {
    content:
      'There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.',
    author: 'Denis Waitley',
  },
  {
    content:
      'If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.',
    author: 'Epictetus',
  },
  {
    content:
      'Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.',
    author: 'Eknath Easwaran',
  },
  {
    content:
      'We could never learn to be brave and patient if there were only joy in the world.',
    author: 'Helen Keller',
  },
  {
    content:
      'If it is not right do not do it; if it is not true do not say it.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'The truth of the matter is that you always know the right thing to do. The hard part is doing it.',
    author: 'Norman Schwarzkopf',
  },
  {
    content:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: 'Julie Morgenstern',
  },
  {
    content:
      'Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.',
    author: 'Blaise Pascal',
  },
  {
    content:
      'Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.',
    author: 'Laura Teresa Marquez',
  },
  {
    content:
      'If you are patient in one moment of anger, you will escape one hundred days of sorrow.',
    author: 'Chinese proverb',
  },
  {
    content:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: 'Abraham Lincoln',
  },
  {
    content:
      'Courage is not about taking risks unknowingly, but putting your own being in front of challenges that others may not be able to.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    author: 'Richard Bach',
  },
  {
    content:
      'The poor man is not he who is without a cent, but he who is without a dream.',
    author: 'Harry Kemp',
  },
  {
    content:
      'The greatest good you can do for another is not just share your riches, but reveal to them their own.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
  },
  {
    content:
      'Peace of mind is not the absence of conflict from life, but the ability to cope with it.',
    author: null,
  },
  {
    content:
      'Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.',
    author: 'Helen Keller',
  },
  {
    content:
      'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
    author: 'John Kennedy',
  },
  {
    content:
      'You have power over your mind not outside events. Realize this, and you will find strength.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.',
    author: 'Louis Pasteur',
  },
  {
    content:
      'We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.',
    author: 'Buddha',
  },
  {
    content:
      'He that respects himself is safe from others; he wears a coat of mail that none can pierce.',
    author: 'Henry Longfellow',
  },
  {
    content:
      'I cannot always control what goes on outside. But I can always control what goes on inside.',
    author: 'Wayne Dyer',
  },
  {
    content:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: 'Daisaku Ikeda',
  },
  {
    content:
      "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
    author: 'Epictetus',
  },
  {
    content:
      'Everyone has been made for some particular work, and the desire for that work has been put in every heart.',
    author: 'Rumi',
  },
  {
    content:
      'Take time to deliberate, but when the time for action has arrived, stop thinking and go in.',
    author: 'Napoleon Bonaparte',
  },
  {
    content:
      'With realization of ones own potential and self-confidence in ones ability, one can build a better world.',
    author: 'Dalai Lama',
  },
  {
    content:
      'Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.',
    author: 'Franklin Roosevelt',
  },
  {
    content:
      'You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.',
    author: 'Pearl Buck',
  },
  {
    content:
      "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
    author: 'Mary Kay Ash',
  },
  {
    content:
      'Try not to become a man of success, but rather try to become a man of value.',
    author: 'Albert Einstein',
  },
  {
    content:
      'All difficult things have their origin in that which is easy, and great things in that which is small.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.',
    author: 'Sophocles',
  },
  {
    content:
      'It is not enough to have a good mind; the main thing is to use it well.',
    author: 'Rene Descartes',
  },
  {
    content:
      'Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Never do things others can do and will do, if there are things others cannot do or will not do.',
    author: 'Amelia Earhart',
  },
  {
    content:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: 'Jimmy Dean',
  },
  {
    content:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    author: 'George Allen',
  },
  {
    content:
      'A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.',
    author: 'Joseph Roux',
  },
  {
    content:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
    author: 'Bernice Reagon',
  },
  {
    content:
      'The greatest way to live with honour in this world is to be what we pretend to be.',
    author: 'Socrates',
  },
  {
    content:
      'To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.',
    author: 'Henri Bergson',
  },
  {
    content:
      'Try not to become a man of success but rather try to become a man of value.',
    author: 'Albert Einstein',
  },
  {
    content:
      "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Your work is to discover your world and then with all your heart give yourself to it.',
    author: 'Buddha',
  },
  {
    content:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    author: 'Daisaku Ikeda',
  },
  {
    content:
      "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
    author: 'Richard Bach',
  },
  {
    content:
      'A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.',
    author: 'David Brinkley',
  },
  {
    content:
      'All that we are is the result of what we have thought. The mind is everything. What we think we become.',
    author: 'Buddha',
  },
  {
    content:
      'Work while you have the light. You are responsible for the talent that has been entrusted to you.',
    author: 'Henri-Frederic Amiel',
  },
  {
    content:
      'How far that little candle throws its beams! So shines a good deed in a naughty world.',
    author: 'William Shakespeare',
  },
  {
    content:
      'Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.',
    author: 'Napoleon Hill',
  },
  {
    content: 'It is in your moments of decision that your destiny is shaped.',
    author: 'Tony Robbins',
  },
  {
    content: 'An obstacle may be either a stepping stone or a stumbling block.',
    author: null,
  },
  {
    content: 'The pain passes, but the beauty remains.',
    author: 'Pierre Auguste Renoir',
  },
  {
    content: 'All I can say about life is, Oh God, enjoy it!',
    author: 'Bob Newhart',
  },
  {
    content:
      'Creativity comes from trust. Trust your instincts. And never hope more than you work.',
    author: 'Rita Mae Brown',
  },
  {
    content:
      'Your outlook on life is a direct reflection on how much you like yourself.',
    author: 'Lululemon',
  },
  {
    content:
      'I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.',
    author: 'Lao Tzu',
  },
  { content: "You won't skid if you stay in a rut.", author: 'Kin Hubbard' },
  {
    content:
      'You block your dream when you allow your fear to grow bigger than your faith.',
    author: 'Mary Morrissey',
  },
  { content: 'Happiness depends upon ourselves.', author: 'Aristotle' },
  {
    content: 'Wherever a man turns he can find someone who needs him.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'If one is lucky, a solitary fantasy can totally transform one million realities.',
    author: 'Maya Angelou',
  },
  {
    content:
      'Never idealize others. They will never live up to your expectations.',
    author: 'Leo Buscaglia',
  },
  {
    content:
      'When you realize there is nothing lacking, the whole world belongs to you.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    content: 'Meaning is not what you start with but what you end up with.',
    author: 'Peter Elbow',
  },
  { content: 'No one has ever become poor by giving.', author: 'Anne Frank' },
  {
    content:
      'Be faithful in small things because it is in them that your strength lies.',
    author: 'Mother Teresa',
  },
  { content: 'All is flux; nothing stays still.', author: 'Heraclitus' },
  {
    content: 'He who is fixed to a star does not change his mind.',
    author: 'Leonardo da Vinci',
  },
  {
    content:
      'He who lives in harmony with himself lives in harmony with the universe.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: 'Sophocles',
  },
  {
    content: 'When the solution is simple, God is answering.',
    author: 'Albert Einstein',
  },
  {
    content:
      'All achievements, all earned riches, have their beginning in an idea.',
    author: 'Napoleon Hill',
  },
  {
    content: 'Do not turn back when you are just at the goal.',
    author: 'Publilius Syrus',
  },
  {
    content:
      "You can't trust without risk but neither can you live in a cocoon.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.',
    author: 'Rudolf Arnheim',
  },
  {
    content: 'Error is discipline through which we advance.',
    author: 'Channing',
  },
  {
    content:
      'The truth is always exciting. Speak it, then. Life is dull without it.',
    author: 'Pearl Buck',
  },
  {
    content:
      'The superior man is modest in his speech, but exceeds in his actions.',
    author: 'Confucius',
  },
  {
    content:
      'The longer we dwell on our misfortunes, the greater is their power to harm us.',
    author: 'Voltaire',
  },
  {
    content: 'Those who will play with cats must expect to be scratched.',
    author: 'Cervantes',
  },
  {
    content: "I've never seen a smiling face that was not beautiful.",
    author: null,
  },
  {
    content: 'In all things of nature there is something of the marvellous.',
    author: 'Aristotle',
  },
  {
    content:
      'The universe is transformation; our life is what our thoughts make it.',
    author: 'Marcus Aurelius',
  },
  { content: 'Memory is the mother of all wisdom.', author: 'Samuel Johnson' },
  {
    content: 'Silence is the true friend that never betrays.',
    author: 'Confucius',
  },
  {
    content:
      'You might well remember that nothing can bring you success but yourself.',
    author: 'Napoleon Hill',
  },
  {
    content: 'Watch the little things; a small leak will sink a great ship.',
    author: 'Benjamin Franklin',
  },
  {
    content: 'God has given you one face, and you make yourself another.',
    author: 'William Shakespeare',
  },
  {
    content: 'To be wronged is nothing unless you continue to remember it.',
    author: 'Confucius',
  },
  { content: 'Kindness is the greatest wisdom.', author: null },
  {
    content: 'Action will remove the doubts that theory cannot solve.',
    author: 'Tehyi Hsieh',
  },
  {
    content:
      "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
    author: null,
  },
  {
    content: 'Your big opportunity may be right where you are now.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'People who say it cannot be done should not interrupt those who are doing it.',
    author: 'Chinese proverb',
  },
  {
    content: 'The day you decide to do it is your lucky day.',
    author: 'Japanese proverb',
  },
  {
    content: 'We must not say every mistake is a foolish one.',
    author: 'Cicero',
  },
  {
    content:
      'Accept challenges, so that you may feel the exhilaration of victory.',
    author: 'George Patton',
  },
  {
    content: 'It is better to understand a little than to misunderstand a lot.',
    author: 'Anatole France',
  },
  {
    content: "You don't drown by falling in water. You drown by staying there.",
    author: null,
  },
  {
    content:
      'Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.',
    author: null,
  },
  {
    content: 'Correction does much, but encouragement does more.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'Know, first, who you are, and then adorn yourself accordingly.',
    author: 'Epictetus',
  },
  {
    content:
      'The biggest adventure you can ever take is to live the life of your dreams.',
    author: 'Oprah Winfrey',
  },
  {
    content: 'Life is 10% what happens to you and 90% how you react to it.',
    author: 'Charles Swindoll',
  },
  {
    content: 'To want to be what one can be is purpose in life.',
    author: 'Cynthia Ozick',
  },
  {
    content:
      'Remember that sometimes not getting what you want is a wonderful stroke of luck.',
    author: 'Dalai Lama',
  },
  {
    content: 'History will be kind to me for I intend to write it.',
    author: 'Winston Churchill',
  },
  {
    content: 'Our lives are a sum total of the choices we have made.',
    author: 'Wayne Dyer',
  },
  {
    content: 'Time stays long enough for anyone who will use it.',
    author: 'Leonardo da Vinci',
  },
  {
    content: 'You must welcome change as the rule but not as your ruler.',
    author: 'Denis Waitley',
  },
  {
    content:
      'Give whatever you are doing and whoever you are with the gift of your attention.',
    author: 'Jim Rohn',
  },
  {
    content: 'Always be smarter than the people who hire you.',
    author: 'Lena Horne',
  },
  {
    content: 'Formula for success: under promise and over deliver.',
    author: 'Tom Peters',
  },
  {
    content: 'The eye sees only what the mind is prepared to comprehend.',
    author: 'Henri Bergson',
  },
  {
    content: 'People seldom notice old clothes if you wear a big smile.',
    author: 'Lee Mildon',
  },
  {
    content:
      'The more light you allow within you, the brighter the world you live in will be.',
    author: 'Shakti Gawain',
  },
  {
    content: 'Nothing diminishes anxiety faster than action.',
    author: 'Walter Anderson',
  },
  {
    content:
      'Man cannot discover new oceans unless he has the courage to lose sight of the shore.',
    author: 'Andre Gide',
  },
  {
    content:
      'Everything that irritates us about others can lead us to an understanding about ourselves.',
    author: 'Carl Jung',
  },
  {
    content: 'Can you imagine what I would do if I could do all I can?',
    author: 'Sun Tzu',
  },
  {
    content: 'Ignorance never settle a question.',
    author: 'Benjamin Disraeli',
  },
  {
    content: 'The awareness of our own strength makes us modest.',
    author: 'Paul Cezanne',
  },
  {
    content:
      'They must often change, who would be constant in happiness or wisdom.',
    author: 'Confucius',
  },
  {
    content:
      'There are no failures. Just experiences and your reactions to them.',
    author: 'Tom Krause',
  },
  {
    content: 'Your future depends on many things, but mostly on you.',
    author: 'Frank Tyger',
  },
  {
    content:
      'Fear grows in darkness; if you think theres a bogeyman around, turn on the light.',
    author: 'Dorothy Thompson',
  },
  {
    content:
      'The most important point is to accept yourself and stand on your two feet.',
    author: 'Shunryu Suzuki',
  },
  {
    content:
      'Do not expect the world to look bright, if you habitually wear gray-brown glasses.',
    author: 'Tomas Eliot',
  },
  {
    content: 'As long as your going to be thinking anyway, think big.',
    author: 'Donald Trump',
  },
  {
    content:
      'Without some goals and some efforts to reach it, no man can live.',
    author: 'John Dewey',
  },
  {
    content: 'He who obtains has little. He who scatters has much.',
    author: 'Richard Braunstein',
  },
  {
    content: 'Myths which are believed in tend to become true.',
    author: 'George Orwell',
  },
  {
    content: 'The foot feels the foot when it feels the ground.',
    author: 'Buddha',
  },
  {
    content: 'Not what we have but what we enjoy constitutes our abundance.',
    author: 'John Petit-Senn',
  },
  {
    content: 'It is never too late to be what you might have been.',
    author: 'George Eliot',
  },
  { content: 'The beginning is always today.', author: 'Mary Wollstonecraft' },
  {
    content:
      'In the long run we get no more than we have been willing to risk giving.',
    author: 'Sheldon Kopp',
  },
  {
    content: 'Self-trust is the first secret of success.',
    author: 'Ralph Emerson',
  },
  {
    content: "Don't look back. Something might be gaining on you.",
    author: 'Satchel Paige',
  },
  {
    content:
      'Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.',
    author: 'George Bernard Shaw',
  },
  {
    content:
      'Men are disturbed not by things, but by the view which they take of them.',
    author: 'Epictetus',
  },
  {
    content:
      'Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.',
    author: 'Blaise Pascal',
  },
  {
    content:
      'Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it.',
    author: 'Mark Twain',
  },
  {
    content:
      'A smile is a light in the window of your face to show your heart is at home.',
    author: null,
  },
  {
    content:
      'Look forward to spring as a time when you can start to see what nature has to offer once again.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.',
    author: 'Billy Wilder',
  },
  {
    content:
      'The least movement is of importance to all nature. The entire ocean is affected by a pebble.',
    author: 'Blaise Pascal',
  },
  {
    content:
      'I am always doing that which I can not do, in order that I may learn how to do it.',
    author: 'Pablo Picasso',
  },
  {
    content:
      'Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.',
    author: 'Niccolo Machiavelli',
  },
  {
    content:
      'You may only be someone in the world, but to someone else, you may be the world.',
    author: null,
  },
  {
    content:
      'Every artist dips his brush in his own soul, and paints his own nature into his pictures.',
    author: 'Henry Ward Beecher',
  },
  {
    content:
      'If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.',
    author: 'James Faust',
  },
  {
    content:
      'Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.',
    author: 'Denis Waitley',
  },
  {
    content:
      'Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.',
    author: 'Hasidic saying',
  },
  {
    content:
      'When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.',
    author: 'Joseph Campbell',
  },
  {
    content:
      'Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.',
    author: 'Peter Drucker',
  },
  {
    content:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    author: 'Bernice Reagon',
  },
  {
    content:
      'There is one thing you have got to learn about our movement. Three people are better than no people.',
    author: 'Fannie Hamer',
  },
  {
    content:
      'Happiness is a perfume you cannot pour on others without getting a few drops on yourself.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content:
      'It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.',
    author: 'Byron Roberts',
  },
  {
    content:
      'The amount of happiness that you have depends on the amount of freedom you have in your heart.',
    author: 'Thich Nhat Hanh',
  },
  {
    content:
      'Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.',
    author: 'Carl Jung',
  },
  {
    content:
      'Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.',
    author: 'Babatunde Olatunji',
  },
  {
    content:
      'The way we communicate with others and with ourselves ultimately determines the quality of our lives.',
    author: 'Tony Robbins',
  },
  {
    content:
      'Sometimes it is better to lose and do the right thing than to win and do the wrong thing.',
    author: 'Tony Blair',
  },
  {
    content:
      'Let us always meet each other with smile, for the smile is the beginning of love.',
    author: 'Mother Teresa',
  },
  {
    content:
      'A bend in the road is not the end of the road...unless you fail to make the turn.',
    author: null,
  },
  {
    content:
      'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    author: 'Aristotle',
  },
  {
    content:
      'Living at risk is jumping off the cliff and building your wings on the way down.',
    author: 'Ray Bradbury',
  },
  {
    content:
      'In the depth of winter, I finally learned that there was within me an invincible summer.',
    author: 'Albert Camus',
  },
  {
    content:
      'Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.',
    author: 'Madame de Stael',
  },
  {
    content:
      'A failure is a man who has blundered but is not capable of cashing in on the experience.',
    author: 'Elbert Hubbard',
  },
  {
    content:
      'I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.',
    author: 'Herbert Swope',
  },
  {
    content:
      'One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.',
    author: null,
  },
  {
    content:
      'The power of intuitive understanding will protect you from harm until the end of your days.',
    author: 'Laozi',
  },
  {
    content:
      'The best thing about the future is that it only comes one day at a time.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'We have two ears and one mouth so that we can listen twice as much as we speak.',
    author: 'Epictetus',
  },
  {
    content:
      'Fear of failure is one attitude that will keep you at the same point in your life.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Friends are those rare people who ask how we are and then wait to hear the answer.',
    author: 'Ed Cunningham',
  },
  {
    content:
      'If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.',
    author: 'Pema Chodron',
  },
  {
    content:
      'People grow through experience if they meet life honestly and courageously. This is how character is built.',
    author: 'Eleanor Roosevelt',
  },
  {
    content:
      'A hero is no braver than an ordinary man, but he is braver five minutes longer.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content:
      'While we try to teach our children all about life, our children teach us what life is all about.',
    author: 'Angela Schwindt',
  },
  {
    content:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    author: 'Wayne Dyer',
  },
  {
    content:
      'The Creator has not given you a longing to do that which you have no ability to do.',
    author: 'Orison Marden',
  },
  {
    content:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: 'Sam Levenson',
  },
  {
    content:
      'Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.',
    author: 'Dalai Lama',
  },
  {
    content:
      'Until you make peace with who you are, you will never be content with what you have.',
    author: 'Doris Mortman',
  },
  {
    content:
      'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.',
    author: 'Buddha',
  },
  {
    content:
      'The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.',
    author: 'Henry Miller',
  },
  {
    content:
      'Happiness is when what you think, what you say, and what you do are in harmony.',
    author: 'Mohandas Gandhi',
  },
  {
    content:
      "The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength",
    author: 'Dalai Lama',
  },
  {
    content:
      'Courage is the discovery that you may not win, and trying when you know you can lose.',
    author: null,
  },
  {
    content:
      'To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.',
    author: 'Mortimer Adler',
  },
  {
    content:
      'When you realize how perfect everything is you will tilt your head back and laugh at the sky.',
    author: 'Buddha',
  },
  {
    content:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: 'Mary Kay Ash',
  },
  {
    content:
      "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
    author: 'Walter Linn',
  },
  {
    content:
      'To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.',
    author: 'Tenzin Gyatso',
  },
  {
    content:
      'Nobody made a greater mistake than he who did nothing because he could do only a little.',
    author: 'Edmund Burke',
  },
  {
    content:
      'Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'The greatest minds are capable of the greatest vices as well as of the greatest virtues.',
    author: 'Rene Descartes',
  },
  {
    content:
      'A man should look for what is, and not for what he thinks should be.',
    author: 'Albert Einstein',
  },
  {
    content:
      'Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.',
    author: 'William Channing',
  },
  {
    content:
      'If you have no respect for your own values how can you be worthy of respect from others.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.',
    author: 'Alphonse Karr',
  },
  {
    content:
      'To choose what is difficult all ones days, as if it were easy, that is faith.',
    author: 'W. H. Auden',
  },
  {
    content:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
    author: 'Lou Holtz',
  },
  {
    content:
      'Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.',
    author: 'Thomas Carlyle',
  },
  {
    content:
      'Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.',
    author: 'Buddha',
  },
  {
    content:
      'I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.',
    author: 'Michel de Montaigne',
  },
  {
    content:
      'Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.',
    author: 'Margaret Laurence',
  },
  {
    content:
      'To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.',
    author: 'Napoleon Bonaparte',
  },
  {
    content:
      'If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.',
    author: 'Ajahn Chah',
  },
  {
    content:
      'There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.',
    author: 'Dalai Lama',
  },
  {
    content:
      'The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.',
    author: 'Vincent Lombardi',
  },
  {
    content:
      'Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.',
    author: 'Jean-Paul Sartre',
  },
  {
    content:
      "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
    author: 'Richard Bach',
  },
  {
    content:
      'I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.',
    author: 'Elisabeth Kubler-Ross',
  },
  {
    content:
      'Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.',
    author: 'Kahlil Gibran',
  },
  {
    content:
      'I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.',
    author: 'Bernard Shaw',
  },
  {
    content:
      'Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
    author: 'Albert Einstein',
  },
  {
    content:
      'When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.',
    author: 'Confucius',
  },
  {
    content:
      'If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.',
    author: 'Anne Lindbergh',
  },
  {
    content:
      'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
    author: 'Dale Carnegie',
  },
  {
    content:
      "You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one.",
    author: 'John Lennon',
  },
  {
    content:
      'Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.',
    author: 'Nathaniel Hawthorne',
  },
  {
    content:
      'He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.',
    author: 'Buddha',
  },
  {
    content:
      'In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.',
    author: 'Buddha',
  },
  {
    content:
      "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
    author: 'Caroline Myss',
  },
  {
    content:
      'Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.',
    author: 'Winston Churchill',
  },
  {
    content:
      'The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.',
    author: 'William James',
  },
  {
    content:
      'If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagined, he will meet with a success unexpected in common hours.',
    author: 'Henry David Thoreau',
  },
  {
    content:
      'The secret of joy in work is contained in one word - excellence. To know how to do something well is to enjoy it.',
    author: 'Pearl Buck',
  },
  {
    content:
      'When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.',
    author: 'Confucius',
  },
  {
    content:
      'We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.',
    author: 'Uta Hagen',
  },
  {
    content:
      'Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.',
    author: 'Orison Marden',
  },
  {
    content:
      'Everything can be taken from a man but... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way.',
    author: 'Victor Frankl',
  },
  {
    content:
      'It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.',
    author: 'Edward de Bono',
  },
  {
    content:
      'Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.',
    author: 'Lao Tzu',
  },
  {
    content:
      'I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.',
    author: 'Amy Tan',
  },
  {
    content:
      'Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.',
    author: 'Epictetus',
  },
  {
    content:
      'We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.',
    author: 'Stephen Covey',
  },
  {
    content:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    author: 'Paul Graham',
  },
  {
    content:
      'Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.',
    author: 'Buddha',
  },
  {
    content:
      "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
    author: 'Chuck Norris',
  },
  {
    content:
      'Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.',
    author: 'Amiel',
  },
  {
    content:
      'Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.',
    author: 'Amy Bloom',
  },
  {
    content:
      'With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.',
    author: 'Keshavan Nair',
  },
  {
    content:
      'The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.',
    author: 'Margaret Smith',
  },
  {
    content:
      'I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.',
    author: 'Frederick Douglass',
  },
  {
    content:
      'No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.',
    author: 'Helen Keller',
  },
  {
    content:
      'When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.',
    author: 'Helen Keller',
  },
  {
    content:
      "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
    author: 'Oprah Winfrey',
  },
  {
    content:
      'You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide.',
    author: 'Ingrid Bergman',
  },
  {
    content:
      'Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.',
    author: 'John Kennedy',
  },
  {
    content:
      'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
    author: 'Marie Curie',
  },
  {
    content:
      'Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.',
    author: 'Anne Frank',
  },
  {
    content:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.',
    author: 'Robert Fulghum',
  },
  {
    content:
      'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.',
    author: 'Albert Einstein',
  },
  {
    content:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate that's my philosophy.",
    author: 'Thornton Wilder',
  },
  {
    content:
      'Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.',
    author: 'John Dewey',
  },
  {
    content:
      'He who conquers others is strong; He who conquers himself is mighty.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Anything you really want, you can attain, if you really go after it.',
    author: 'Wayne Dyer',
  },
  {
    content: 'Arriving at one point is the starting point to another.',
    author: 'John Dewey',
  },
  {
    content:
      'The foolish man seeks happiness in the distance, the wise grows it under his feet.',
    author: 'James Oppenheim',
  },
  {
    content:
      'The greatest part of our happiness depends on our dispositions, not our circumstances.',
    author: 'Martha Washington',
  },
  {
    content:
      'It is only possible to live happily ever after on a day to day basis.',
    author: 'Margaret Bonnano',
  },
  {
    content: 'A man sees in the world what he carries in his heart.',
    author: 'Goethe',
  },
  {
    content:
      'Action may not always bring happiness, but there is no happiness without action.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      "Believe deep down in your heart that you're destined to do great things.",
    author: 'Joe Paterno',
  },
  {
    content: 'Sooner or later, those who win are those who think they can.',
    author: 'Richard Bach',
  },
  {
    content:
      'The only limit to your impact is your imagination and commitment.',
    author: 'Tony Robbins',
  },
  {
    content: 'You are special, you are unique, you are the best!',
    author: 'Cathy Pulsifer',
  },
  {
    content:
      'Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.',
    author: 'William Arthur Ward',
  },
  {
    content:
      'To know oneself is to study oneself in action with another person.',
    author: 'Bruce Lee',
  },
  {
    content: 'We must not allow ourselves to become like the system we oppose.',
    author: 'Bishop Desmond Tutu',
  },
  { content: 'Smile, breathe and go slowly.', author: 'Thich Nhat Hanh' },
  {
    content: 'Reality is merely an illusion, albeit a very persistent one.',
    author: 'Albert Einstein',
  },
  {
    content: 'When you come to the end of your rope, tie a knot and hang on.',
    author: 'Franklin Roosevelt',
  },
  {
    content: 'Always be mindful of the kindness and not the faults of others.',
    author: 'Buddha',
  },
  {
    content:
      'Everything that irritates us about others can lead us to an understanding of ourselves.',
    author: 'Carl Jung',
  },
  {
    content: 'When fate hands us a lemon, lets try to make lemonade.',
    author: 'Dale Carnegie',
  },
  {
    content:
      'The weak can never forgive. Forgiveness is the attribute of the strong.',
    author: 'Mohandas Gandhi',
  },
  { content: 'A man is great by deeds, not by birth.', author: 'Chanakya' },
  {
    content:
      'Success is getting what you want. Happiness is wanting what you get.',
    author: 'Dale Carnegie',
  },
  {
    content:
      "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
    author: 'Byron Pulsifer',
  },
  { content: 'A good rest is half the work.', author: null },
  {
    content:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: 'Robert Stevenson',
  },
  {
    content:
      'Small opportunities are often the beginning of great enterprises.',
    author: 'Demosthenes',
  },
  {
    content:
      'To be tested is good. The challenged life may be the best therapist.',
    author: 'Gail Sheehy',
  },
  {
    content: 'Take heed: you do not find what you do not seek.',
    author: 'English proverb',
  },
  {
    content:
      'Happiness is the reward we get for living to the highest right we know.',
    author: 'Richard Bach',
  },
  { content: 'Be slow of tongue and quick of eye.', author: 'Cervantes' },
  {
    content:
      'Freedom is not worth having if it does not connote freedom to err.',
    author: 'Mohandas Gandhi',
  },
  {
    content:
      'I have always thought the actions of men the best interpreters of their thoughts.',
    author: 'John Locke',
  },
  {
    content: 'He who obtains has little. He who scatters has much.',
    author: 'Lao Tzu',
  },
  {
    content:
      'To dare is to lose ones footing momentarily. To not dare is to lose oneself.',
    author: 'Soren Kierkegaard',
  },
  {
    content: 'No day in which you learn something is a complete loss.',
    author: 'David Eddings',
  },
  {
    content:
      'Peace cannot be kept by force. It can only be achieved by understanding.',
    author: 'Albert Einstein',
  },
  {
    content: 'Real success is finding your lifework in the work that you love.',
    author: 'David McCullough',
  },
  {
    content:
      'Better than a thousand hollow words, is one word that brings peace.',
    author: 'Buddha',
  },
  {
    content: 'All the flowers of all the tomorrows are in the seeds of today.',
    author: null,
  },
  {
    content:
      'Your sacred space is where you can find yourself again and again.',
    author: 'Joseph Campbell',
  },
  { content: 'As you think, so shall you become.', author: 'Bruce Lee' },
  {
    content: 'In seed time learn, in harvest teach, in winter enjoy.',
    author: 'William Blake',
  },
  {
    content:
      'Happiness does not come from having much, but from being attached to little.',
    author: 'Cheng Yen',
  },
  {
    content: 'Every gift from a friend is a wish for your happiness.',
    author: 'Richard Bach',
  },
  {
    content: 'Go put your creed into the deed. Nor speak with double tongue.',
    author: 'Ralph Emerson',
  },
  {
    content: 'The wisest men follow their own direction.',
    author: 'Euripides',
  },
  {
    content:
      'Hope arouses, as nothing else can arouse, a passion for the possible.',
    author: 'William Sloane Coffin',
  },
  {
    content: 'Everything has beauty, but not everyone sees it.',
    author: 'Confucius',
  },
  {
    content:
      'Nothing ever goes away until it has taught us what we need to know.',
    author: 'Pema Chodron',
  },
  {
    content: 'When you learn, teach. When you get, give.',
    author: 'Maya Angelou',
  },
  {
    content: 'Only when we are no longer afraid do we begin to live.',
    author: 'Dorothy Thompson',
  },
  {
    content: 'If you smile when no one else is around, you really mean it.',
    author: 'Andy Rooney',
  },
  {
    content:
      'Love is the only force capable of transforming an enemy into friend.',
    author: 'Martin Luther King, Jr.',
  },
  {
    content: 'In all chaos there is a cosmos, in all disorder a secret order.',
    author: 'Carl Jung',
  },
  { content: 'A man is not where he lives but where he loves.', author: null },
  {
    content: 'The price of greatness is responsibility.',
    author: 'Winston Churchill',
  },
  {
    content: 'Decision is a risk rooted in the courage of being free.',
    author: 'Paul Tillich',
  },
  {
    content:
      'Your mind will answer most questions if you learn to relax and wait for the answer.',
    author: 'William Burroughs',
  },
  {
    content: 'The world does not happen to you it happens from you.',
    author: null,
  },
  {
    content:
      'We cannot solve our problems with the same thinking we used when we created them.',
    author: 'Albert Einstein',
  },
  {
    content: 'More powerful than the will to win is the courage to begin.',
    author: null,
  },
  {
    content: 'Learning is finding out what you already know.',
    author: 'Richard Bach',
  },
  {
    content:
      'Saying thank you is more than good manners. It is good spirituality.',
    author: 'Alfred Painter',
  },
  { content: 'Silence is a source of great strength.', author: 'Lao Tzu' },
  { content: 'Joy is the best makeup.', author: 'Anne Lamott' },
  {
    content: 'There is no great genius without some touch of madness.',
    author: 'Seneca',
  },
  { content: 'A jug fills drop by drop.', author: 'Buddha' },
  {
    content:
      "Until you make peace with who you are, you'll never be content with what you have.",
    author: 'Doris Mortman',
  },
  {
    content: 'We aim above the mark to hit the mark.',
    author: 'Ralph Emerson',
  },
  {
    content: 'Being angry never solves anything.',
    author: 'Catherine Pulsifer',
  },
  {
    content: 'All men who have achieved great things have been great dreamers.',
    author: 'Orison Marden',
  },
  {
    content:
      'Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.',
    author: 'Arthur Conan Doyle',
  },
  {
    content: 'Where all think alike, no one thinks very much.',
    author: 'Walter Lippmann',
  },
  {
    content:
      'Everything that exists is in a manner the seed of that which will be.',
    author: 'Marcus Aurelius',
  },
  {
    content: 'Be less curious about people and more curious about ideas.',
    author: 'Marie Curie',
  },
  {
    content: 'The heart has eyes which the brain knows nothing of.',
    author: 'Charles Perkhurst',
  },
  {
    content: 'Only those who dare to fail greatly can ever achieve greatly.',
    author: 'Robert Kennedy',
  },
  {
    content:
      'Lose an hour in the morning, and you will spend all day looking for it.',
    author: 'Richard Whately',
  },
  {
    content:
      'Mistakes are always forgivable, if one has the courage to admit them.',
    author: 'Bruce Lee',
  },
  {
    content:
      'Go to your bosom: Knock there, and ask your heart what it doth know.',
    author: 'William Shakespeare',
  },
  {
    content:
      'Happiness mainly comes from our own attitude, rather than from external factors.',
    author: 'Dalai Lama',
  },
  {
    content:
      'If you do not change direction, you may end up where you are heading.',
    author: 'Lao Tzu',
  },
  { content: 'What we see is mainly what we look for.', author: null },
  {
    content: 'Stay away from what might have been and look at what will be.',
    author: 'Marsha Petrie Sue',
  },
  {
    content: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
  {
    content:
      'Passion creates the desire for more and action fuelled by passion creates a future.',
    author: 'Byron Pulsifer',
  },
  {
    content: 'Do good by stealth, and blush to find it fame.',
    author: 'Alexander Pope',
  },
  {
    content:
      'Opportunity often comes disguised in the form of misfortune, or temporary defeat.',
    author: 'Napoleon Hill',
  },
  {
    content: "Don't talk about what you have done or what you are going to do.",
    author: 'Thomas Jefferson',
  },
  {
    content: 'Most powerful is he who has himself in his own power.',
    author: 'Seneca',
  },
  {
    content:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    author: 'Bernard Shaw',
  },
  {
    content:
      'Experience can only be gained by doing not by thinking or dreaming.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      "Always tell the truth. That way, you don't have to remember what you said.",
    author: 'Mark Twain',
  },
  { content: 'From wonder into wonder existence opens.', author: 'Lao Tzu' },
  {
    content: 'He who fears being conquered is sure of defeat.',
    author: 'Napoleon Bonaparte',
  },
  {
    content: 'Life is what happens while you are making other plans.',
    author: 'John Lennon',
  },
  {
    content:
      'Doing what you love is the cornerstone of having abundance in your life.',
    author: 'Wayne Dyer',
  },
  {
    content: 'Kindness is the golden chain by which society is bound together.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'You need chaos in your soul to give birth to a dancing star.',
    author: 'Nietzsche',
  },
  {
    content: "It can't be spring if your heart is filled with past failures.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'No yesterdays are ever wasted for those who give themselves to today.',
    author: 'Brendan Francis',
  },
  {
    content: 'Action is the foundational key to all success.',
    author: 'Pablo Picasso',
  },
  {
    content:
      'What is necessary to change a person is to change his awareness of himself.',
    author: 'Abraham Maslow',
  },
  {
    content:
      'Positive thinking will let you do everything better than negative thinking will.',
    author: 'Zig Ziglar',
  },
  {
    content: 'We shall never know all the good that a simple smile can do.',
    author: 'Mother Teresa',
  },
  {
    content:
      'Nothing is so strong as gentleness. Nothing is so gentle as real strength.',
    author: 'Frances de Sales',
  },
  {
    content:
      'Imagination is not a talent of some men but is the health of every man.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content: 'We must embrace pain and burn it as fuel for our journey.',
    author: 'Kenji Miyazawa',
  },
  {
    content: "Don't wait for people to be friendly. Show them how.",
    author: null,
  },
  {
    content:
      'A gem cannot be polished without friction, nor a man perfected without trials.',
    author: 'Chinese proverb',
  },
  {
    content: 'Each day can be one of triumph if you keep up your interests.',
    author: 'George Matthew Adams',
  },
  {
    content:
      "The place to improve the world is first in one's own heart and head and hands.",
    author: 'Robert M. Pirsig',
  },
  {
    content:
      'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.',
    author: 'Winston Churchill',
  },
  {
    content:
      "Winners have simply formed the habit of doing things losers don't like to do.",
    author: 'Albert Gray',
  },
  {
    content: 'Nature is a mutable cloud which is always and never the same.',
    author: 'Ralph Emerson',
  },
  {
    content: 'Life is what you make of it. Always has been, always will be.',
    author: 'Grandma Moses',
  },
  {
    content: 'Worry often gives a small thing a big shadow.',
    author: 'Swedish proverb',
  },
  {
    content:
      "I want you to be everything that's you, deep at the center of your being.",
    author: 'Confucius',
  },
  {
    content: 'We know what we are, but know not what we may be.',
    author: 'William Shakespeare',
  },
  {
    content: "Freedom is what you do with what's been done to you.",
    author: 'Jean-Paul Sartre',
  },
  {
    content:
      'The truth which has made us free will in the end make us glad also.',
    author: 'Felix Adler',
  },
  {
    content: 'He who has imagination without learning has wings but no feet.',
    author: 'Joseph Joubert',
  },
  {
    content: 'Whoso loves, believes the impossible.',
    author: 'Elizabeth Browning',
  },
  {
    content:
      "It isn't where you come from, it's where you're going that counts.",
    author: 'Ella Fitzgerald',
  },
  {
    content: 'The greatest obstacle to connecting with our joy is resentment.',
    author: 'Pema Chodron',
  },
  {
    content: 'When anger use your energy to do something productive.',
    author: 'C. Pulsifer',
  },
  {
    content: 'We are all something, but none of us are everything.',
    author: 'Blaise Pascal',
  },
  {
    content:
      "If you can't explain it simply, you don't understand it well enough.",
    author: 'Albert Einstein',
  },
  {
    content:
      'He who lives in harmony with himself lives in harmony with the world.',
    author: 'Marcus Aurelius',
  },
  { content: 'He who knows himself is enlightened.', author: 'Lao Tzu' },
  {
    content:
      'Build a better mousetrap and the world will beat a path to your door.',
    author: 'Ralph Emerson',
  },
  {
    content: 'As our case is new, we must think and act anew.',
    author: 'Abraham Lincoln',
  },
  {
    content: "If you can't feed a hundred people, then feed just one.",
    author: 'Mother Teresa',
  },
  {
    content:
      'In three words I can sum up everything Ive learned about life: it goes on.',
    author: 'Robert Frost',
  },
  {
    content:
      "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
    author: null,
  },
  {
    content: 'You always succeed in producing a result.',
    author: 'Tony Robbins',
  },
  {
    content:
      'Everything you are against weakens you. Everything you are for empowers you.',
    author: 'Wayne Dyer',
  },
  {
    content: 'As we risk ourselves, we grow. Each new experience is a risk.',
    author: 'Fran Watson',
  },
  {
    content: 'Who we are never changes. Who we think we are does.',
    author: 'Mary Almanac',
  },
  {
    content:
      'The final proof of greatness lies in being able to endure criticism without resentment.',
    author: 'Elbert Hubbard',
  },
  {
    content:
      'An invasion of armies can be resisted, but not an idea whose time has come.',
    author: 'Victor Hugo',
  },
  {
    content: 'Never let lack of money interfere with having fun.',
    author: null,
  },
  {
    content: 'Excellence is not a skill. It is an attitude.',
    author: 'Ralph Marston',
  },
  {
    content:
      'People may doubt what you say, but they will believe what you do.',
    author: 'Lewis Cass',
  },
  {
    content:
      'The most formidable weapon against errors of every kind is reason.',
    author: 'Thomas Paine',
  },
  {
    content:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: 'Danilo Dolci',
  },
  {
    content:
      'Beware of missing chances; otherwise it may be altogether too late some day.',
    author: 'Franz Liszt',
  },
  { content: 'You only lose what you cling to.', author: 'Buddha' },
  {
    content: 'Life is a succession of moments. To live each one is to succeed.',
    author: 'Corita Kent',
  },
  {
    content:
      'Most of the shadows of life are caused by standing in our own sunshine.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content:
      'Good actions give strength to ourselves and inspire good actions in others.',
    author: 'Plato',
  },
  {
    content: 'I know but one freedom and that is the freedom of the mind.',
    author: 'Antoine de Saint-Exupery',
  },
  {
    content: 'In the middle of every difficulty lies opportunity.',
    author: 'Albert Einstein',
  },
  {
    content: 'Every human being is the author of his own health or disease.',
    author: 'Buddha',
  },
  { content: 'When in doubt, tell the truth.', author: 'Mark Twain' },
  {
    content:
      'Every great advance in science has issued from a new audacity of the imagination.',
    author: 'John Dewey',
  },
  {
    content: 'The path to success is to take massive, determined action.',
    author: 'Anthony Robbins',
  },
  {
    content: 'The ladder of success is never crowded at the top.',
    author: 'Napoleon Hill',
  },
  {
    content: 'He who has health has hope, and he who has hope has everything.',
    author: null,
  },
  { content: 'All great achievements require time.', author: 'Maya Angelou' },
  {
    content:
      'No person is your friend who demands your silence, or denies your right to grow.',
    author: 'Alice Walker',
  },
  {
    content: 'Impossibilities are merely things which we have not yet learned.',
    author: 'Charles Chesnutt',
  },
  {
    content:
      'Vision without action is a daydream. Action without vision is a nightmare.',
    author: 'Japanese proverb',
  },
  {
    content:
      'The Superior Man is aware of Righteousness, the inferior man is aware of advantage.',
    author: 'Confucius',
  },
  { content: 'He who angers you conquers you.', author: 'Elizabeth Kenny' },
  {
    content: 'I never worry about action, but only inaction.',
    author: 'Winston Churchill',
  },
  {
    content: 'No man is free who is not master of himself.',
    author: 'Epictetus',
  },
  {
    content: 'Those that know, do. Those that understand, teach.',
    author: 'Aristotle',
  },
  {
    content:
      'If we are not fully ourselves, truly in the present moment, we miss everything.',
    author: 'Thich Nhat Hanh',
  },
  {
    content: 'No act of kindness, no matter how small, is ever wasted.',
    author: 'Aesop',
  },
  {
    content: 'Every man is a volume if you know how to read him.',
    author: 'Channing',
  },
  {
    content:
      'The difficulties of life are intended to make us better, not bitter.',
    author: null,
  },
  {
    content: 'Quality means doing it right when no one is looking.',
    author: 'Henry Ford',
  },
  { content: 'Change your words. Change your world.', author: null },
  { content: 'Great acts are made up of small deeds.', author: 'Lao Tzu' },
  {
    content:
      'The odds of hitting your target go up dramatically when you aim at it.',
    author: 'Mal Pancoast',
  },
  { content: 'Open minds lead to open doors.', author: null },
  { content: 'They can do all because they think they can.', author: 'Virgil' },
  {
    content: 'You have to think anyway, so why not think big?',
    author: 'Donald Trump',
  },
  {
    content:
      'On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.',
    author: 'Edward Young',
  },
  {
    content:
      'Your body is precious. It is our vehicle for awakening. Treat it with care.',
    author: 'Buddha',
  },
  {
    content:
      'The one who always loses, is the only person who gets the reward.',
    author: 'Claire Charmont',
  },
  {
    content:
      'The future is completely open, and we are writing it moment to moment.',
    author: 'Pema Chodron',
  },
  {
    content:
      'Each time we face a fear, we gain strength, courage, and confidence in the doing.',
    author: null,
  },
  {
    content:
      'Ask yourself the secret of your success. Listen to your answer, and practice it.',
    author: 'Richard Bach',
  },
  {
    content:
      "Don't frown because you never know who is falling in love with your smile.",
    author: 'Sinvyest Tan',
  },
  {
    content:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
    author: 'Joyce Brothers',
  },
  {
    content: 'Nothing is at last sacred but the integrity of your own mind.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Listen to your intuition. It will tell you everything you need to know.',
    author: "Anthony D'Angelo",
  },
  {
    content:
      'The personal life deeply lived always expands into truths beyond itself.',
    author: 'Anais Nin',
  },
  {
    content:
      'Whenever something negative happens to you, there is a deep lesson concealed within it.',
    author: 'Eckhart Tolle',
  },
  {
    content: 'What is not started today is never finished tomorrow.',
    author: 'Goethe',
  },
  {
    content:
      'Our kindness may be the most persuasive argument for that which we believe.',
    author: 'Gordon Hinckley',
  },
  {
    content:
      'Chaos is inherent in all compounded things. Strive on with diligence.',
    author: 'Buddha',
  },
  {
    content: 'Be sure you put your feet in the right place, then stand firm.',
    author: 'Abraham Lincoln',
  },
  {
    content: 'Nothing great was ever achieved without enthusiasm.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'The meaning I picked, the one that changed my life: Overcome fear, behold wonder.',
    author: 'Richard Bach',
  },
  {
    content:
      'Know how to listen, and you will profit even from those who talk badly.',
    author: 'Plutarch',
  },
  {
    content: 'A man is not old as long as he is seeking something.',
    author: 'Edmond Rostand',
  },
  {
    content: "The time you think you're missing, misses you too.",
    author: 'Ymber Delecto',
  },
  {
    content:
      'Life is not measured by the breaths you take, but by its breathtaking moments.',
    author: 'Michael Vance',
  },
  { content: 'Much wisdom often goes with fewer words.', author: 'Sophocles' },
  {
    content:
      "If you love life, don't waste time, for time is what life is made up of.",
    author: 'Bruce Lee',
  },
  {
    content:
      'Imagination is the living power and prime agent of all human perception.',
    author: 'Samuel Taylor Coleridge',
  },
  {
    content:
      'It is impossible to feel grateful and depressed in the same moment.',
    author: 'Naomi Williams',
  },
  {
    content:
      "Progress always involves risks. You can't steal second base and keep your foot on first.",
    author: 'Frederick Wilcox',
  },
  {
    content:
      'Liberty, taking the word in its concrete sense, consists in the ability to choose.',
    author: 'Simone Weil',
  },
  {
    content: 'A thing well said will be wit in all languages.',
    author: 'John Dryden',
  },
  {
    content: 'Always do your best. What you plant now, you will harvest later.',
    author: 'Og Mandino',
  },
  {
    content:
      "My mama always said: life's like a box of chocolates. You never know what you gonna get.",
    author: 'Forrest Gump',
  },
  {
    content:
      'We are the leaves of one branch, the drops of one sea, the flowers of one garden.',
    author: 'Jean Lacordaire',
  },
  { content: 'If you come to a fork in the road, take it.', author: null },
  {
    content:
      'It is not only for what we do that we are held responsible, but also for what we do not do.',
    author: 'Moliere',
  },
  {
    content: 'Nobody can do everything, but everybody can do something.',
    author: null,
  },
  {
    content:
      'The world has the habit of making room for the man whose actions show that he knows where he is going.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'You cannot step twice into the same river, for other waters are continually flowing in.',
    author: 'Heraclitus',
  },
  {
    content: 'Excellence is to do a common thing in an uncommon way.',
    author: 'Booker Washington',
  },
  {
    content: 'No matter how hard the past, you can always begin again.',
    author: 'Buddha',
  },
  {
    content: 'I begin with an idea and then it becomes something else.',
    author: 'Pablo Picasso',
  },
  {
    content: 'Whoever is happy will make others happy, too.',
    author: 'Mark Twain',
  },
  {
    content:
      'Your work is to discover your work and then with all your heart to give yourself to it.',
    author: 'Buddha',
  },
  {
    content:
      "It's not what happens to you, but how you react to it that matters.",
    author: 'Epictetus',
  },
  { content: 'Take it easy, but take it.', author: 'Woody Guthrie' },
  {
    content:
      'Never apologize for showing feeling. When you do so, you apologize for truth.',
    author: 'Benjamin Disraeli',
  },
  {
    content: 'Take rest; a field that has rested gives a bountiful crop.',
    author: 'Ovid',
  },
  {
    content:
      'Age does not protect you from love. But love, to some extent, protects you from age.',
    author: 'Anais Nin',
  },
  {
    content: 'Do what you can. Want what you have. Be who you are.',
    author: 'Forrest Church',
  },
  {
    content: 'There are people who have money and people who are rich.',
    author: 'Coco Chanel',
  },
  {
    content: 'Why worry about tomorrow, when today is all we have?',
    author: null,
  },
  {
    content:
      'Speak when you are angry and you will make the best speech you will ever regret.',
    author: 'Ambrose Bierce',
  },
  { content: 'Things do not change, we change.', author: 'Henry Thoreau' },
  {
    content:
      'The exercise of an extraordinary gift is the supremest pleasure in life.',
    author: 'Mark Twain',
  },
  {
    content:
      'Sometimes the most important thing in a whole day is the rest we take between two deep breaths.',
    author: 'Etty Hillesum',
  },
  {
    content:
      'Forgiveness is choosing to love. It is the first skill of self-giving love.',
    author: 'Mohandas Gandhi',
  },
  {
    content:
      'To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.',
    author: 'William Londen',
  },
  { content: 'Most smiles are started by another smile.', author: null },
  {
    content:
      'Nothing is softer or more flexible than water, yet nothing can resist it.',
    author: 'Lao Tzu',
  },
  {
    content:
      'It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.',
    author: 'Dalai Lama',
  },
  {
    content:
      'Experience keeps a dear school, but fools will learn in no other.',
    author: 'Benjamin Franklin',
  },
  {
    content:
      'We can only be said to be alive in those moments when our hearts are conscious of our treasures.',
    author: 'Thornton Wilder',
  },
  {
    content:
      'Fine words and an insinuating appearance are seldom associated with true virtue',
    author: 'Confucius',
  },
  {
    content:
      'We do not quit playing because we grow old, we grow old because we quit playing.',
    author: 'Oliver Holmes',
  },
  {
    content: "You can't choose up sides on a round world.",
    author: 'Wayne Dyer',
  },
  {
    content:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate, that's my philosophy.",
    author: 'Thornton Wilder',
  },
  {
    content:
      'Kindness is the language which the deaf can hear and the blind can see.',
    author: 'Mark Twain',
  },
  {
    content:
      'I may not know everything, but everything is not known yet anyway.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'If we could see the miracle of a single flower clearly, our whole life would change.',
    author: 'Buddha',
  },
  {
    content:
      'Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.',
    author: 'Carl Jung',
  },
  {
    content:
      'You cannot travel the path until you have become the path itself.',
    author: 'Buddha',
  },
  {
    content: 'Keep your eyes on the stars and your feet on the ground.',
    author: 'Theodore Roosevelt',
  },
  {
    content:
      'I am not afraid of tomorrow, for I have seen yesterday and I love today.',
    author: 'William White',
  },
  {
    content:
      'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
    author: 'Jamie Paolinetti',
  },
  { content: "When you lose, don't lose the lesson.", author: null },
  {
    content: 'If you want a thing done well, do it yourself.',
    author: 'Napoleon Bonaparte',
  },
  {
    content: 'The greatest barrier to success is the fear of failure.',
    author: 'Eriksson',
  },
  {
    content:
      'Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.',
    author: 'John Ruskin',
  },
  {
    content: "If you aren't going all the way, why go at all?",
    author: 'Joe Namath',
  },
  {
    content:
      'Our greatest glory is not in never falling, but in rising every time we fall.',
    author: 'Confucius',
  },
  {
    content:
      'The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.',
    author: 'Pierre Abelard',
  },
  {
    content:
      "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
    author: null,
  },
  {
    content:
      'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.',
    author: 'Buddha',
  },
  {
    content:
      'Stay committed to your decisions, but stay flexible in your approach.',
    author: 'Tony Robbins',
  },
  {
    content:
      'An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'What separates the winners from the losers is how a person reacts to each new twist of fate.',
    author: 'Donald Trump',
  },
  {
    content:
      'Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'To change ones life, start immediately, do it flamboyantly, no exceptions.',
    author: 'William James',
  },
  {
    content:
      'As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.',
    author: 'John F. Kennedy',
  },
  {
    content:
      'The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.',
    author: 'Booker Washington',
  },
  {
    content:
      'The steeper the mountain the harder the climb the better the view from the finishing line',
    author: null,
  },
  {
    content:
      'Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.',
    author: 'Dr. David M. Burns',
  },
  {
    content: 'When I let go of what I am, I become what I might be.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Time is not a measure of the length of a day or month or year, but more a measure of what you have accomplished.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content:
      'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.',
    author: 'Buddha',
  },
  {
    content:
      'When there is no enemy within, the enemies outside cannot hurt you.',
    author: 'African proverb',
  },
  {
    content:
      'He who controls others may be powerful, but he who has mastered himself is mightier still.',
    author: 'Lao Tzu',
  },
  {
    content:
      'There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.',
    author: 'Wayne Dyer',
  },
  {
    content:
      'Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.',
    author: 'Wolfgang Amadeus Mozart',
  },
  {
    content:
      'The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.',
    author: 'H. Bertram Lewis',
  },
  {
    content:
      'As an organizer I start from where the world is, as it is, not as I would like it to be.',
    author: 'Saul Alinsky',
  },
  {
    content: 'You are the only person on Earth who can use your ability.',
    author: 'Zig Ziglar',
  },
  {
    content: "Don't let what you can't do stop you from doing what you can do.",
    author: null,
  },
  {
    content: "Complaining doesn't change a thing only taking action does.",
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.',
    author: 'Charles A. Lindbergh',
  },
  {
    content:
      'Enjoy the little things, for one day you may look back and realize they were the big things.',
    author: 'Robert Brault',
  },
  {
    content:
      'With every experience, you alone are painting your own canvas, thought by thought, choice by choice.',
    author: 'Oprah Winfrey',
  },
  {
    content: 'Let the beauty of what you love be what you do.',
    author: 'Rumi',
  },
  {
    content:
      'The world turns aside to let any man pass who knows where he is going.',
    author: 'Epictetus',
  },
  {
    content: 'Beauty is not in the face; beauty is a light in the heart.',
    author: 'Kahlil Gibran',
  },
  {
    content: 'A day of worry is more exhausting than a day of work.',
    author: 'John Lubbock',
  },
  {
    content:
      'Truth, and goodness, and beauty are but different faces of the same all.',
    author: 'Ralph Emerson',
  },
  { content: 'To be great is to be misunderstood.', author: 'Ralph Emerson' },
  {
    content:
      'Trust only movement. Life happens at the level of events, not of words. Trust movement.',
    author: 'Alfred Adler',
  },
  { content: 'Never, never, never give up.', author: 'Winston Churchill' },
  {
    content:
      'The most decisive actions of our life... are most often unconsidered actions.',
    author: 'Andre Gide',
  },
  {
    content:
      'As we grow as unique persons, we learn to respect the uniqueness of others.',
    author: 'Robert Schuller',
  },
  {
    content:
      "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
    author: 'Robert Schuller',
  },
  {
    content:
      'It is the quality of our work which will please God, not the quantity.',
    author: 'Mahatma Gandhi',
  },
  { content: "Try and fail, but don't fail to try.", author: 'Stephen Kaggwa' },
  {
    content:
      'First say to yourself what you would be; and then do what you have to do.',
    author: 'Epictetus',
  },
  {
    content:
      'Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.',
    author: 'Carl Jung',
  },
  {
    content:
      'Keep silence for the most part, and speak only when you must, and then briefly.',
    author: 'Epictetus',
  },
  {
    content: 'Fear not for the future, weep not for the past.',
    author: 'Percy Shelley',
  },
  {
    content:
      'We are Divine enough to ask and we are important enough to receive.',
    author: 'Wayne Dyer',
  },
  {
    content: "If you kick a stone in anger, you'll hurt your own foot.",
    author: 'Korean proverb',
  },
  { content: 'To see things in the seed, that is genius.', author: 'Lao Tzu' },
  {
    content:
      'The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.',
    author: 'Bertrand Russell',
  },
  {
    content:
      'Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.',
    author: 'Douglas Adams',
  },
  {
    content: 'Make the most of yourself, for that is all there is of you.',
    author: 'Ralph Emerson',
  },
  {
    content: 'The universe is made of stories, not atoms.',
    author: 'Muriel Rukeyser',
  },
  {
    content: 'Respect should be earned by actions, and not acquired by years.',
    author: 'Frank Wright',
  },
  {
    content:
      'I hear and I forget. I see and I remember. I do and I understand.',
    author: 'Confucius',
  },
  {
    content:
      'The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.',
    author: 'Will Durant',
  },
  {
    content:
      'A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.',
    author: 'Chuck Norris',
  },
  {
    content: 'Sometimes the biggest act of courage is a small one.',
    author: 'Lauren Raffo',
  },
  {
    content:
      'People are not lazy. They simply have impotent goals that is, goals that do not inspire them.',
    author: 'Tony Robbins',
  },
  {
    content:
      'You do not become good by trying to be good, but by finding the goodness that is already within you.',
    author: 'Eckhart Tolle',
  },
  {
    content:
      'Waste no more time arguing about what a good man should be. Be one.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      "Happiness often sneaks in through a door you didn't know you left open.",
    author: 'John Barrymore',
  },
  {
    content:
      'There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.',
    author: 'Mark Twain',
  },
  {
    content:
      'The things that one most wants to do are the things that are probably most worth doing.',
    author: 'Winifred Holtby',
  },
  {
    content:
      'Always bear in mind that your own resolution to succeed is more important than any one thing.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'Setting an example is not the main means of influencing another, it is the only means.',
    author: 'Albert Einstein',
  },
  {
    content: 'Chaos and Order are not enemies, only opposites.',
    author: 'Richard Garriott',
  },
  {
    content:
      'Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.',
    author: 'Henry Longfellow',
  },
  {
    content:
      'Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.',
    author: 'Harriet Lerner',
  },
  {
    content:
      'He who deliberates fully before taking a step will spend his entire life on one leg.',
    author: 'Chinese proverb',
  },
  { content: 'Peace begins with a smile.', author: 'Mother Teresa' },
  {
    content: "Be your own hero, it's cheaper than a movie ticket.",
    author: 'Doug Horton',
  },
  {
    content:
      'Turn your face toward the sun and the shadows will fall behind you.',
    author: 'Maori proverb',
  },
  {
    content:
      'Things turn out best for those who make the best of the way things turn out.',
    author: 'Jack Buck',
  },
  {
    content:
      'Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.',
    author: 'Whoopi Goldberg',
  },
  {
    content:
      'To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.',
    author: 'Anthony Robbins',
  },
  {
    content: 'Ability will never catch up with the demand for it.',
    author: 'Confucius',
  },
  {
    content:
      'Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.',
    author: 'Albert Schweitzer',
  },
  {
    content:
      'Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.',
    author: 'Henry Reed',
  },
  {
    content:
      'Setting goals is the first step in turning the invisible into the visible.',
    author: 'Tony Robbins',
  },
  {
    content:
      'Courage is not the absence of fear, but simply moving on with dignity despite that fear.',
    author: 'Pat Riley',
  },
  {
    content:
      'All truths are easy to understand once they are discovered; the point is to discover them.',
    author: 'Galileo Galilei',
  },
  {
    content:
      'The smallest act of kindness is worth more than the grandest intention.',
    author: 'Oscar Wilde',
  },
  {
    content:
      'We know from science that nothing in the universe exists as an isolated or independent entity.',
    author: 'Margaret Wheatley',
  },
  {
    content:
      'Everything in the universe goes by indirection. There are no straight lines.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'What do we live for, if it is not to make life less difficult for each other?',
    author: 'George Eliot',
  },
  {
    content:
      'When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.',
    author: 'Tenzin Gyatso',
  },
  {
    content: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
  {
    content:
      'Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.',
    author: 'Richard Bach',
  },
  {
    content:
      'Logic will get you from A to B. Imagination will take you everywhere.',
    author: 'Albert Einstein',
  },
  {
    content:
      'Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.',
    author: 'Sarah Breathnach',
  },
  {
    content: 'The world is but a canvas to the imagination.',
    author: 'Henry Thoreau',
  },
  {
    content:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
    author: 'Lisa Alther',
  },
  {
    content:
      'To be happy is to be able to become aware of oneself without fright.',
    author: 'Walter Benjamin',
  },
  {
    content:
      'Strength to carry on despite the odds means you have faith in your own abilities and know how.',
    author: 'Byron Pulsifer',
  },
  {
    content: 'Make the most of yourself for that is all there is of you.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Be gentle first with yourself if you wish to be gentle with others.',
    author: 'Lama Yeshe',
  },
  {
    content:
      "A man who doesn't trust himself can never really trust anyone else.",
    author: 'Cardinal Retz',
  },
  {
    content: 'We make our own fortunes and we call them fate.',
    author: 'Benjamin Disraeli',
  },
  {
    content:
      "Leaders aren't born, they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.",
    author: 'Vince Lombardi',
  },
  {
    content: 'It takes courage to grow up and become who you really are.',
    author: 'E. E. Cummings',
  },
  {
    content: 'Always seek out the seed of triumph in every adversity.',
    author: 'Og Mandino',
  },
  {
    content:
      'Rather than wishing for change, you first must be prepared to change.',
    author: 'Catherine Pulsifer',
  },
  {
    content:
      'I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.',
    author: 'Buddha',
  },
  {
    content:
      'Fame usually comes to those who are thinking about something else.',
    author: 'Holmes',
  },
  {
    content:
      'First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'The superior man acts before he speaks, and afterwards speaks according to his action.',
    author: 'Confucius',
  },
  {
    content:
      'A single conversation across the table with a wise person is worth a months study of books.',
    author: 'Chinese proverb',
  },
  {
    content:
      'The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.',
    author: 'Mohandas Gandhi',
  },
  {
    content:
      'You can never cross the ocean unless you have the courage to lose sight of the shore.',
    author: null,
  },
  {
    content:
      'Work for something because it is good, not just because it stands a chance to succeed.',
    author: 'Vaclav Havel',
  },
  {
    content: 'Knowledge rests not upon truth alone, but upon error also.',
    author: 'Carl Jung',
  },
  {
    content:
      "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
    author: 'Katherine Mansfield',
  },
  {
    content:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    author: 'Victoria Holt',
  },
  {
    content:
      'When deeds and words are in accord, the whole world is transformed.',
    author: 'Chuang Tzu',
  },
  {
    content:
      'Kind words can be short and easy to speak but their echoes are truly endless.',
    author: 'Mother Teresa',
  },
  {
    content: 'For everything that lives is holy, life delights in life.',
    author: 'William Blake',
  },
  {
    content:
      'The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.',
    author: 'Dalai Lama',
  },
  { content: 'Our passion is our strength.', author: 'Billie Armstrong' },
  {
    content:
      'In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.',
    author: 'Leonardo da Vinci',
  },
  {
    content: 'Spring is a time for rebirth and the fulfilment of new life.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'There is nothing happens to any person but what was in his power to go through with.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.',
    author: 'Alfred Korzybski',
  },
  {
    content:
      'The art of progress is to preserve order amid change, and to preserve change amid order.',
    author: 'Alfred Whitehead',
  },
  {
    content:
      'We make a living by what we get, but we make a life by what we give.',
    author: 'Winston Churchill',
  },
  {
    content:
      'If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart.',
    author: 'Friedrich von Schiller',
  },
  {
    content:
      'Maxim for life: You get treated in life the way you teach people to treat you.',
    author: 'Wayne Dyer',
  },
  {
    content:
      'The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it.',
    author: 'Charlotte Perkins Gilman',
  },
  {
    content:
      'The key to growth is the introduction of higher dimensions of consciousness into our awareness.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Thought is the blossom; language the bud; action the fruit behind it.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.',
    author: 'Daisaku Ikeda',
  },
  {
    content:
      'There is nothing so useless as doing efficiently that which should not be done at all.',
    author: 'Peter Drucker',
  },
  {
    content:
      'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
    author: 'Leonardo da Vinci',
  },
  {
    content:
      'All the world is a stage, And all the men and women merely players. They have their exits and entrances; Each man in his time plays many parts.',
    author: 'William Shakespeare',
  },
  {
    content:
      'As we are liberated from our own fear, our presence automatically liberates others.',
    author: 'Nelson Mandela',
  },
  {
    content: 'The most successful people are those who are good at plan B.',
    author: 'James Yorke',
  },
  {
    content:
      'Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.',
    author: 'Aristotle',
  },
  {
    content:
      'To fly as fast as thought, you must begin by knowing that you have already arrived.',
    author: 'Richard Bach',
  },
  {
    content:
      'Obstacles are those things you see when you take your eyes off the goal.',
    author: 'Hannah More',
  },
  {
    content:
      'The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.',
    author: 'Michelangelo',
  },
  {
    content:
      'Great ideas often receive violent opposition from mediocre minds.',
    author: 'Albert Einstein',
  },
  {
    content:
      'We can change our lives. We can do, have, and be exactly what we wish.',
    author: 'Tony Robbins',
  },
  {
    content: 'You are the only person on earth who can use your ability.',
    author: 'Zig Ziglar',
  },
  {
    content:
      'Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.',
    author: 'Jean Lacordaire',
  },
  {
    content:
      'The least of things with a meaning is worth more in life than the greatest of things without it.',
    author: 'Carl Jung',
  },
  {
    content:
      'The noblest worship is to make yourself as good and as just as you can.',
    author: 'Isocrates',
  },
  {
    content:
      'Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.',
    author: 'Carl Bard',
  },
  {
    content:
      'A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.',
    author: 'Denis Waitley',
  },
  {
    content:
      "Don't think of it as failure. Think of it as time-released success.",
    author: 'Robert Orben',
  },
  {
    content:
      'We are what we repeatedly do. Excellence, then, is not an act but a habit.',
    author: 'Aristotle',
  },
  {
    content: 'I walk slowly, but I never walk backward.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'Divide each difficulty into as many parts as is feasible and necessary to resolve it.',
    author: 'Rene Descartes',
  },
  {
    content:
      'The best place to find a helping hand is at the end of your own arm.',
    author: null,
  },
  {
    content: 'We know the truth, not only by the reason, but by the heart.',
    author: 'Blaise Pascal',
  },
  {
    content: 'We choose our joys and sorrows long before we experience them.',
    author: 'Kahlil Gibran',
  },
  {
    content: 'Anybody can make history. Only a great man can write it.',
    author: 'Oscar Wilde',
  },
  {
    content: 'If I know what love is, it is because of you.',
    author: 'Hermann Hesse',
  },
  {
    content:
      'Allow the world to live as it chooses, and allow yourself to live as you choose.',
    author: 'Richard Bach',
  },
  {
    content:
      'Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.',
    author: 'Barack Obama',
  },
  {
    content:
      'Compassion and happiness are not a sign of weakness but a sign of strength.',
    author: 'Dalai Lama',
  },
  {
    content:
      'It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.',
    author: 'Franklin D. Roosevelt',
  },
  {
    content: 'Be here now. Be someplace else later. Is that so complicated?',
    author: 'David Bader',
  },
  {
    content:
      'To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.',
    author: 'Mahummad Ali',
  },
  {
    content:
      'Learning without reflection is a waste, reflection without learning is dangerous.',
    author: 'Confucius',
  },
  {
    content:
      "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
    author: null,
  },
  {
    content:
      'All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.',
    author: 'Bruce Lee',
  },
  {
    content:
      "I don't believe in failure. It's not failure if you enjoyed the process.",
    author: 'Oprah Winfrey',
  },
  {
    content:
      'The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.',
    author: 'Helen Keller',
  },
  {
    content:
      "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
    author: 'David Rockefeller',
  },
  {
    content:
      'The man who trusts men will make fewer mistakes than he who distrusts them.',
    author: 'Cavour',
  },
  {
    content: 'The less effort, the faster and more powerful you will be.',
    author: 'Bruce Lee',
  },
  {
    content:
      'We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.',
    author: 'Anais Nin',
  },
  {
    content:
      'The cure for boredom is curiosity. There is no cure for curiosity.',
    author: 'Ellen Parr',
  },
  {
    content: 'We can do no great things, only small things with great love.',
    author: 'Mother Teresa',
  },
  {
    content: 'Be like the flower, turn your face to the sun.',
    author: 'Kahlil Gibran',
  },
  {
    content: 'Remembering a wrong is like carrying a burden on the mind.',
    author: 'Buddha',
  },
  {
    content:
      'The foolish man seeks happiness in the distance; the wise grows it under his feet.',
    author: 'James Openheim',
  },
  {
    content: 'Gratitude is the fairest blossom which springs from the soul.',
    author: 'Henry Beecher',
  },
  {
    content:
      'If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?',
    author: 'Confucius',
  },
  { content: 'You cannot have what you do not want.', author: 'John Acosta' },
  {
    content:
      'Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    content:
      'It is not fair to ask of others what you are unwilling to do yourself.',
    author: 'Eleanor Roosevelt',
  },
  {
    content:
      'Knowing your own darkness is the best method for dealing with the darknesses of other people.',
    author: 'Carl Jung',
  },
  {
    content: 'The best thing in every noble dream is the dreamer...',
    author: 'Moncure Conway',
  },
  {
    content:
      'Weve got to have a dream if we are going to make a dream come true.',
    author: 'Walt Disney',
  },
  {
    content:
      'If you want things to be different, perhaps the answer is to become different yourself.',
    author: 'Norman Peale',
  },
  {
    content: 'There is nothing impossible to him who will try.',
    author: 'Alexander the Great',
  },
  {
    content:
      'Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.',
    author: 'Theodore Rubin',
  },
  {
    content:
      'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.',
    author: 'Harriet Tubman',
  },
  {
    content:
      'The only real failure in life is not to be true to the best one knows.',
    author: 'Buddha',
  },
  {
    content:
      "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
    author: 'Albert Einstein',
  },
  {
    content:
      'Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.',
    author: 'Barack Obama',
  },
  {
    content: 'Those who cannot learn from history are doomed to repeat it.',
    author: 'George Santayan',
  },
  {
    content:
      'The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.',
    author: 'Carlos Castaneda',
  },
  {
    content:
      'Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.',
    author: 'Dhammapada',
  },
  {
    content: 'Things that were hard to bear are sweet to remember.',
    author: 'Seneca',
  },
  {
    content:
      'Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.',
    author: 'Henry James',
  },
  {
    content:
      'However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?',
    author: 'Buddha',
  },
  { content: 'They can conquer who believe they can.', author: 'Virgil' },
  {
    content:
      'Learn to listen. Opportunity could be knocking at your door very softly.',
    author: 'Frank Tyger',
  },
  {
    content: 'All action results from thought, so it is thoughts that matter.',
    author: 'Sai Baba',
  },
  {
    content:
      'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
    author: 'Albert Einstein',
  },
  {
    content:
      "I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer.",
    author: 'Colette',
  },
  {
    content:
      'Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.',
    author: 'Maya Angelou',
  },
  {
    content: 'Just as much as we see in others we have in ourselves.',
    author: 'William Hazlitt',
  },
  {
    content:
      'Prosperity depends more on wanting what you have than having what you want.',
    author: 'Geoffrey F. Abert',
  },
  {
    content:
      'How many cares one loses when one decides not to be something but to be someone.',
    author: 'Coco Chanel',
  },
  {
    content: 'He who knows, does not speak. He who speaks, does not know.',
    author: 'Lao Tzu',
  },
  {
    content: 'We cannot direct the wind but we can adjust the sails.',
    author: null,
  },
  {
    content:
      'One may say the eternal mystery of the world is its comprehensibility.',
    author: 'Albert Einstein',
  },
  {
    content:
      'The self is not something ready-made, but something in continuous formation through choice of action.',
    author: 'John Dewey',
  },
  {
    content:
      'Our greatness lies not so much in being able to remake the world as being able to remake ourselves.',
    author: 'Mahatma Gandhi',
  },
  {
    content: 'Moments of complete apathy are the best for new creations.',
    author: 'Philip Breedveld',
  },
  {
    content: 'The only real mistake is the one from which we learn nothing.',
    author: 'John Powell',
  },
  {
    content:
      'To dream of the person you would like to be is to waste the person you are.',
    author: 'Tim Menchen',
  },
  {
    content:
      'The important thing is this: to be able at any moment to sacrifice what we are for what we could become.',
    author: 'Charles Dubois',
  },
  {
    content:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
    author: 'Cicero',
  },
  {
    content:
      'It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.',
    author: 'Lama Yeshe',
  },
  {
    content:
      'Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.',
    author: 'Byron Pulsifer',
  },
  { content: 'Things do not change; we change.', author: 'Henry Thoreau' },
  {
    content:
      'We must learn our limits. We are all something, but none of us are everything.',
    author: 'Blaise Pascal',
  },
  {
    content:
      'Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.',
    author: 'Stephen Sigmund',
  },
  {
    content:
      'We are all faced with a series of great opportunities brilliantly disguised as impossible situations.',
    author: 'Charles R. Swindoll',
  },
  {
    content:
      'All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.',
    author: 'Albert Camus',
  },
  {
    content: 'Be a good listener. Your ears will never get you in trouble.',
    author: 'Frank Tyger',
  },
  {
    content:
      'Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.',
    author: 'Buddha',
  },
  {
    content:
      'You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.',
    author: 'Anatole France',
  },
  {
    content:
      'To listen well is as powerful a means of communication and influence as to talk well.',
    author: 'John Marshall',
  },
  {
    content: 'There is only one happiness in life, to love and be loved.',
    author: 'George Sand',
  },
  {
    content:
      'Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.',
    author: 'Matt Zotti',
  },
  {
    content:
      'Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Reason and free inquiry are the only effectual agents against error.',
    author: 'Thomas Jefferson',
  },
  {
    content: 'The best cure for the body is a quiet mind.',
    author: 'Napoleon Bonaparte',
  },
  {
    content: 'See the positive side, the potential, and make an effort.',
    author: 'Dalai Lama',
  },
  {
    content:
      'By accepting yourself and being fully what you are, your presence can make others happy.',
    author: 'Jane Roberts',
  },
  {
    content:
      'Never deny a diagnosis, but do deny the negative verdict that may go with it.',
    author: 'Norman Cousins',
  },
  {
    content:
      "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: "You cannot be lonely if you like the person you're alone with.",
    author: 'Wayne Dyer',
  },
  {
    content:
      'I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.',
    author: 'G. K. Chesterton',
  },
  {
    content:
      'If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.',
    author: 'Buddha',
  },
  {
    content:
      'Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical. Expect more than others think is possible.',
    author: 'Cadet Maxim',
  },
  {
    content:
      'Failure will never overtake me if my determination to succeed is strong enough.',
    author: 'Og Mandino',
  },
  {
    content:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    author: 'Ralph Marston',
  },
  {
    content: 'Wrinkles should merely indicate where smiles have been.',
    author: 'Mark Twain',
  },
  {
    content: 'Your attitude, not your aptitude, will determine your altitude.',
    author: 'Zig Ziglar',
  },
  {
    content:
      'Let yourself be silently drawn by the stronger pull of what you really love.',
    author: 'Rumi',
  },
  {
    content:
      'I gave my life to become the person I am right now. Was it worth it?',
    author: 'Richard Bach',
  },
  {
    content: 'Give thanks for a little and you will find a lot.',
    author: 'Hausa',
  },
  {
    content:
      'Your ability to learn faster than your competition is your only sustainable competitive advantage.',
    author: 'Arie de Gues',
  },
  {
    content:
      'Forgiveness does not change the past, but it does enlarge the future.',
    author: 'Paul Boese',
  },
  {
    content:
      'Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.',
    author: 'Nikola Tesla',
  },
  {
    content:
      'Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.',
    author: 'Aristotle',
  },
  {
    content:
      'The deepest craving of human nature is the need to be appreciated.',
    author: 'William James',
  },
  {
    content:
      'Love does not consist of gazing at each other, but in looking together in the same direction.',
    author: 'Antoine de Saint-Exupery',
  },
  {
    content:
      'We have committed the Golden Rule to memory; let us now commit it to life.',
    author: 'Edwin Markham',
  },
  {
    content:
      'It is with words as with sunbeams. The more they are condensed, the deeper they burn.',
    author: 'Robert Southey',
  },
  {
    content: 'When people are like each other they tend to like each other.',
    author: 'Tony Robbins',
  },
  {
    content:
      'Sincerity is the way of Heaven. The attainment of sincerity is the way of men.',
    author: 'Confucius',
  },
  {
    content: 'Be the change that you want to see in the world.',
    author: 'Mohandas Gandhi',
  },
  {
    content: 'The more you care, the stronger you can be.',
    author: 'Jim Rohn',
  },
  {
    content:
      'Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.',
    author: 'Oprah Winfrey',
  },
  {
    content: 'Just trust yourself, then you will know how to live.',
    author: 'Goethe',
  },
  {
    content:
      'To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.',
    author: 'Pema Chodron',
  },
  {
    content:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: 'Jim Rohn',
  },
  {
    content:
      'It all depends on how we look at things, and not how they are in themselves.',
    author: 'Carl Jung',
  },
  {
    content:
      "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
    author: null,
  },
  {
    content: 'To climb steep hills requires a slow pace at first.',
    author: 'William Shakespeare',
  },
  {
    content:
      'An idea that is developed and put into action is more important than an idea that exists only as an idea.',
    author: 'Buddha',
  },
  {
    content:
      'It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.',
    author: 'Max Planck',
  },
  {
    content: 'Truth is generally the best vindication against slander.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'To follow, without halt, one aim: There is the secret of success.',
    author: 'Anna Pavlova',
  },
  {
    content:
      'And as we let our own light shine, we unconsciously give other people permission to do the same.',
    author: 'Nelson Mandela',
  },
  {
    content:
      'What is a weed? A plant whose virtues have not yet been discovered.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Many people have gone further than they thought they could because someone else thought they could.',
    author: null,
  },
  {
    content: 'We read the world wrong and say that it deceives us.',
    author: 'Rabindranath Tagore',
  },
  {
    content: 'If only wed stop trying to be happy wed have a pretty good time.',
    author: 'Edith Wharton',
  },
  {
    content: 'You must do the things you think you cannot do.',
    author: 'Eleanor Roosevelt',
  },
  {
    content: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    content:
      'The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.',
    author: 'Richard Bach',
  },
  {
    content:
      'I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.',
    author: 'Edna Millay',
  },
  {
    content: 'Most folks are as happy as they make up their minds to be.',
    author: 'Abraham Lincoln',
  },
  {
    content: 'Love is the master key that opens the gates of happiness.',
    author: 'Oliver Holmes',
  },
  {
    content:
      'The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.',
    author: 'Cecil B. DeMille',
  },
  { content: 'My reputation grows with every failure.', author: 'George Shaw' },
  {
    content:
      'Good thoughts are no better than good dreams, unless they be executed.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.',
    author: 'Dalai Lama',
  },
  {
    content:
      'However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?',
    author: 'Buddha',
  },
  {
    content: 'For success, attitude is equally as important as ability.',
    author: 'Harry Banks',
  },
  {
    content:
      'If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.',
    author: 'Colin Powell',
  },
  {
    content: 'A person who never made a mistake never tried anything new.',
    author: 'Albert Einstein',
  },
  {
    content:
      'Better than a thousand hollow words is one word that brings peace.',
    author: 'Buddha',
  },
  {
    content:
      'The possibilities are numerous once we decide to act and not react.',
    author: 'George Bernard Shaw',
  },
  { content: 'Almost everything comes from nothing.', author: 'Henri Amiel' },
  {
    content: 'Sometimes by losing a battle you find a new way to win the war.',
    author: 'Donald Trump',
  },
  {
    content: 'Listen to what you know instead of what you fear.',
    author: 'Richard Bach',
  },
  {
    content:
      'It is easier to live through someone else than to become complete yourself.',
    author: 'Betty Friedan',
  },
  {
    content:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    author: 'John Simone',
  },
  {
    content: 'Remember that failure is an event, not a person.',
    author: 'Zig Ziglar',
  },
  {
    content: "Don't settle for a relationship that won't let you be yourself.",
    author: 'Oprah Winfrey',
  },
  {
    content:
      'What the caterpillar calls the end of the world, the master calls a butterfly.',
    author: 'Richard Bach',
  },
  {
    content:
      'Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.',
    author: 'Thomas Carlyle',
  },
  {
    content:
      "If you do what you've always done, you'll get what youve always gotten.",
    author: 'Tony Robbins',
  },
  {
    content: 'Do not wait for leaders; do it alone, person to person.',
    author: 'Mother Teresa',
  },
  {
    content:
      'Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.',
    author: 'Plotinus',
  },
  {
    content:
      'Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.',
    author: 'Mary Parrish',
  },
  {
    content: 'We never live; we are always in the expectation of living.',
    author: 'Voltaire',
  },
  {
    content: 'Think like a man of action; act like a man of thought.',
    author: 'Henri L. Bergson',
  },
  {
    content:
      'You can complain because roses have thorns, or you can rejoice because thorns have roses.',
    author: 'Ziggy',
  },
  {
    content:
      'There is not one big cosmic meaning for all, there is only the meaning we each give to our life.',
    author: 'Anais Nin',
  },
  {
    content:
      'A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.',
    author: 'Lao Tzu',
  },
  {
    content: 'Time you enjoyed wasting was not wasted.',
    author: 'John Lennon',
  },
  {
    content:
      'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.',
    author: 'Albert Camus',
  },
  {
    content:
      "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
    author: 'Daisaku Ikeda',
  },
  {
    content:
      'To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.',
    author: 'Confucius',
  },
  {
    content: "A man's dreams are an index to his greatness.",
    author: 'Zadok Rabinowitz',
  },
  {
    content:
      'This is the final test of a gentleman: his respect for those who can be of no possible value to him.',
    author: 'William Lyon Phelps',
  },
  {
    content: 'You teach best what you most need to learn.',
    author: 'Richard Bach',
  },
  {
    content:
      'Continuous effort, not strength or intelligence is the key to unlocking our potential.',
    author: 'Winston Churchill',
  },
  {
    content:
      'Obstacles are those frightful things you see when you take your eyes off your goal.',
    author: 'Henry Ford',
  },
  {
    content: 'Go for it now. The future is promised to no one.',
    author: 'Wayne Dyer',
  },
  {
    content:
      'Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.',
    author: 'John Holmes',
  },
  {
    content:
      'Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'If we look at the world with a love of life, the world will reveal its beauty to us.',
    author: 'Daisaku Ikeda',
  },
  {
    content: 'In skating over thin ice our safety is in our speed.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.',
    author: 'W. Clement Stone',
  },
  {
    content: 'Never promise more than you can perform.',
    author: 'Publilius Syrus',
  },
  {
    content:
      "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
    author: 'Nora Roberts',
  },
  {
    content: "I can't believe that God put us on this earth to be ordinary.",
    author: 'Lou Holtz',
  },
  {
    content:
      'There are no limitations to the mind except those we acknowledge.',
    author: 'Napoleon Hill',
  },
  {
    content:
      'It is through science that we prove, but through intuition that we discover.',
    author: 'Jules Poincare',
  },
  {
    content:
      "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
    author: 'Richard Bach',
  },
  {
    content:
      'If someone in your life talked to you the way you talk to yourself, you would have left them long ago.',
    author: 'Carla Gordon',
  },
  {
    content:
      'The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.',
    author: 'Edward Ericson',
  },
  {
    content:
      'If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.',
    author: 'Daisaku Ikeda',
  },
  {
    content:
      'There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.',
    author: 'Linda Hogan',
  },
  {
    content:
      'Never tell me the sky is the limit when there are footprints on the moon.',
    author: null,
  },
  {
    content:
      'I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.',
    author: 'Georg Lichtenberg',
  },
  {
    content:
      'The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.',
    author: 'Eckhart Tolle',
  },
  { content: 'Take it easy but take it.', author: 'Woody Guthrie' },
  {
    content:
      'Blessed is the man who expects nothing, for he shall never be disappointed.',
    author: 'Alexander Pope',
  },
  {
    content:
      'He who knows others is wise. He who knows himself is enlightened.',
    author: 'Lao Tzu',
  },
  {
    content: 'The best way to predict your future is to create it.',
    author: 'Peter Drucker',
  },
  {
    content:
      'A garden is always a series of losses set against a few triumphs, like life itself.',
    author: 'May Sarton',
  },
  {
    content:
      'If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.',
    author: 'Rachel Carson',
  },
  { content: 'Never mistake motion for action.', author: 'Ernest Hemingway' },
  {
    content:
      'One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.',
    author: 'Hannah Senesh',
  },
  {
    content:
      'One who is too insistent on his own views, finds few to agree with him.',
    author: 'Lao Tzu',
  },
  {
    content:
      'Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.',
    author: 'Harry Burchell Mathews',
  },
  {
    content:
      'Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.',
    author: 'Voltaire',
  },
  {
    content:
      'The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.',
    author: 'George Shaw',
  },
  {
    content:
      'Good instincts usually tell you what to do long before your head has figured it out.',
    author: 'Michael Burke',
  },
  {
    content:
      "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
    author: 'Pema Chodron',
  },
  {
    content:
      'Those who dream by day are cognizant of many things which escape those who dream only by night.',
    author: 'Edgar Allan Poe',
  },
  {
    content:
      "We cannot hold a torch to light another's path without brightening our own.",
    author: 'Ben Sweetland',
  },
  {
    content:
      'You are never given a wish without also being given the power to make it come true. You may have to work for it, however.',
    author: 'Richard Bach',
  },
  {
    content:
      'Kind words can be short and easy to speak, but their echoes are truly endless.',
    author: 'Mother Teresa',
  },
  {
    content:
      'Count your joys instead of your woes. Count your friends instead of your foes.',
    author: null,
  },
  {
    content:
      'Dreams come true. Without that possibility, nature would not incite us to have them.',
    author: 'John Updike',
  },
  {
    content:
      'Staying in one place is the best path to be taken over and surpassed by many.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
    author: 'Carl Sagan',
  },
  {
    content:
      'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    author: 'Helen Keller',
  },
  {
    content:
      'A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.',
    author: 'Jawaharlal Nehru',
  },
  {
    content: 'I have no special talent. I am only passionately curious.',
    author: 'Albert Einstein',
  },
  {
    content:
      'I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.',
    author: 'Elizabeth Montagu',
  },
  {
    content:
      'The height of your accomplishments will equal the depth of your convictions.',
    author: 'William Scolavino',
  },
  {
    content:
      'If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?',
    author: 'Rabbi Hillel',
  },
  {
    content:
      'When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    author: 'Audre Lorde',
  },
  {
    content:
      'All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.',
    author: 'Alexis Carrel',
  },
  {
    content:
      'To get the full value of joy you must have someone to divide it with.',
    author: 'Mark Twain',
  },
  {
    content:
      'Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    content: 'We lost because we told ourselves we lost.',
    author: 'Leo Tolstoy',
  },
  {
    content:
      'Success is determined by those whom prove the impossible, possible.',
    author: 'James Pence',
  },
  {
    content:
      "Good advice is always certain to be ignored, but that's no reason not to give it.",
    author: 'Agatha Christie',
  },
  {
    content:
      "The winner ain't the one with the fastest car it's the one who refuses to lose.",
    author: 'Dale Earnhardt',
  },
  {
    content:
      'Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.',
    author: 'Robert C. Solomon',
  },
  {
    content:
      'No one has a finer command of language than the person who keeps his mouth shut.',
    author: 'Sam Rayburn',
  },
  {
    content:
      'The only person who never makes mistakes is the person who never does anything.',
    author: 'Denis Waitley',
  },
  {
    content:
      "Life is what happens to you while you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    content:
      'Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.',
    author: 'Jonathan Swift',
  },
  {
    content: 'If you have knowledge, let others light their candles in it.',
    author: 'Margaret Fuller',
  },
  {
    content:
      'It is impossible for a man to learn what he thinks he already knows.',
    author: 'Epictetus',
  },
  {
    content:
      'If you find yourself in a hole, the first thing to do is stop digging.',
    author: 'Will Rogers',
  },
  {
    content:
      'To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.',
    author: 'Plutarch',
  },
  {
    content:
      'I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.',
    author: 'Lee Womack',
  },
  {
    content:
      'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
    author: 'Marcus Aurelius',
  },
  {
    content:
      'Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.',
    author: 'William Menninger',
  },
  {
    content:
      'I have an everyday religion that works for me. Love yourself first, and everything else falls into line.',
    author: 'Lucille Ball',
  },
  {
    content:
      'Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.',
    author: 'Chuang Tzu',
  },
  {
    content:
      'Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.',
    author: 'Jane Addams',
  },
  {
    content: 'The energy of the mind is the essence of life.',
    author: 'Aristotle',
  },
  { content: 'Begin, be bold, and venture to be wise.', author: 'Horace' },
  {
    content:
      'Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.',
    author: 'Lao Tzu',
  },
  {
    content: 'A wise man will make more opportunities than he finds.',
    author: 'Francis Bacon',
  },
  {
    content:
      "Slow down and enjoy life. It's not only the scenery you miss by going too fast, you also miss the sense of where you are going and why.",
    author: 'Eddie Cantor',
  },
  {
    content: 'Miracles come in moments. Be ready and willing.',
    author: 'Wayne Dyer',
  },
  {
    content:
      'Numberless are the worlds wonders, but none more wonderful than man.',
    author: 'Sophocles',
  },
  {
    content:
      'So is cheerfulness, or a good temper, the more it is spent, the more remains.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'The true way to render ourselves happy is to love our work and find in it our pleasure.',
    author: 'Francoise de Motteville',
  },
  {
    content:
      'When you judge another, you do not define them, you define yourself.',
    author: 'Wayne Dyer',
  },
  {
    content: "Argue for your limitations, and sure enough they're yours.",
    author: 'Richard Bach',
  },
  {
    content:
      'He who wishes to secure the good of others, has already secured his own.',
    author: 'Confucius',
  },
  {
    content:
      'Wise men talk because they have something to say; fools, because they have to say something.',
    author: 'Plato',
  },
  {
    content: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    content:
      'The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.',
    author: 'Jim Bishop',
  },
  {
    content:
      'Everything that irritates us about others can lead us to a better understanding of ourselves.',
    author: 'Carl Jung',
  },
  {
    content:
      'Beware of the half truth. You may have gotten hold of the wrong half.',
    author: null,
  },
  {
    content:
      'The greatest mistake you can make in life is to be continually fearing you will make one.',
    author: 'Elbert Hubbard',
  },
  {
    content: "I have never been hurt by anything I didn't say.",
    author: 'Calvin Coolidge',
  },
  {
    content:
      'Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.',
    author: 'Thomas Kempis',
  },
  {
    content: 'Adversity causes some men to break, others to break records.',
    author: 'William Ward',
  },
  {
    content:
      'An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.',
    author: 'Thomas Fuller',
  },
  {
    content:
      'The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.',
    author: 'Abernathy',
  },
  {
    content: 'Example has more followers than reason.',
    author: 'Christian Bovee',
  },
  {
    content:
      'One that desires to excel should endeavour in those things that are in themselves most excellent.',
    author: 'Epictetus',
  },
  {
    content:
      'If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.',
    author: 'Mary Pickford',
  },
  {
    content:
      'The only Zen you find on the tops of mountains is the Zen you bring up there.',
    author: 'Robert Pirsig',
  },
  {
    content: 'Gratitude is riches. Complaint is poverty.',
    author: 'Doris Day',
  },
  {
    content:
      'Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.',
    author: 'Richard Needham',
  },
  {
    content:
      'To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'You can stand tall without standing on someone. You can be a victor without having victims.',
    author: 'Harriet Woods',
  },
  {
    content:
      'Bad times have a scientific value. These are occasions a good learner would not miss.',
    author: 'Ralph Emerson',
  },
  {
    content:
      "It's not who you are that holds you back, it's who you think you're not.",
    author: null,
  },
  {
    content:
      'All children are artists. The problem is how to remain an artist once he grows up.',
    author: 'Pablo Picasso',
  },
  {
    content: 'Either I will find a way, or I will make one.',
    author: 'Philip Sidney',
  },
  {
    content: 'He who knows that enough is enough will always have enough.',
    author: 'Lao Tzu',
  },
  {
    content: 'The only way to have a friend is to be one.',
    author: 'Ralph Emerson',
  },
  {
    content:
      'If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.',
    author: 'Anne Bradstreet',
  },
  {
    content:
      'Joy is what happens to us when we allow ourselves to recognize how good things really are.',
    author: 'Marianne Williamson',
  },
  {
    content:
      'Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  {
    content:
      'There is never enough time to do everything, but there is always enough time to do the most important thing.',
    author: 'Brian Tracy',
  },
  {
    content: 'You really can change the world if you care enough.',
    author: 'Marian Edelman',
  },
  {
    content:
      'What you are is what you have been. What you will be is what you do now.',
    author: 'Buddha',
  },
  {
    content:
      'Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.',
    author: 'Gordon Hinckley',
  },
  {
    content:
      'There surely is in human nature an inherent propensity to extract all the good out of all the evil.',
    author: 'Benjamin Haydon',
  },
  {
    content: 'Music in the soul can be heard by the universe.',
    author: 'Lao Tzu',
  },
  {
    content: 'What we see depends mainly on what we look for.',
    author: 'John Lubbock',
  },
  {
    content: 'To hell with circumstances; I create opportunities.',
    author: 'Bruce Lee',
  },
  {
    content:
      'The truest greatness lies in being kind, the truest wisdom in a happy mind.',
    author: 'Ella Wilcox',
  },
  {
    content: 'An ounce of emotion is equal to a ton of facts.',
    author: 'John Junor',
  },
  {
    content:
      'We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.',
    author: 'Barbara De Angelis',
  },
  {
    content: 'Great is the art of beginning, but greater is the art of ending.',
    author: 'Lazurus Long',
  },
  {
    content:
      'Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.',
    author: 'Wayne Dyer',
  },
  { content: 'Nothing will work unless you do.', author: 'Maya Angelou' },
  {
    content:
      'Our ability to achieve happiness and success depends on the strength of our wings.',
    author: 'Catherine Pulsifer',
  },
  {
    content:
      'To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.',
    author: 'Theodore H. White',
  },
  {
    content:
      'Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.',
    author: 'Melody Beattie',
  },
  {
    content:
      'Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.',
    author: 'Byron Pulsifer',
  },
  {
    content:
      'We are all inclined to judge ourselves by our ideals; others, by their acts.',
    author: 'Harold Nicolson',
  },
  {
    content: 'Nothing is a waste of time if you use the experience wisely.',
    author: 'Rodin',
  },
  {
    content:
      'If one way be better than another, that you may be sure is natures way.',
    author: 'Aristotle',
  },
  {
    content:
      'Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.',
    author: 'Napoleon Hill',
  },
  {
    content: 'It is not in the stars to hold our destiny but in ourselves.',
    author: 'William Shakespeare',
  },
  {
    content:
      'Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.',
    author: 'Tony Robbins',
  },
  {
    content: 'I will prepare and some day my chance will come.',
    author: 'Abraham Lincoln',
  },
  {
    content:
      'Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.',
    author: 'Tom Jackson',
  },
];
export default quotes;
