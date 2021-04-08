const tooltipText = {
  gameWpmTracker: {
    title: "Game WPM Tracker",
    body: "Displays gross words per minute, calculated as: (Total Chars Typed ÷ 5) ÷ Minutes"
  },
  expressionMode: {
    title: "Expression Mode",
    body: "Quote: generates a random quote. Phrase: generates a set of items, each separated by a space and chosen randomly from the selected item collections."
  },
  instantDeath: {
    title: "Instant Death",
    body: "When on, making a mistake will instantly disqualify and terminate the current game. Disqualified games don't count towards your WPM or accuracy statistics. Great for practicing typing accuracy."
  },
  keyboardVisual: {
    title: "Keyboard Visual",
    body: "When on, adds a keyboard visual underneath the input area which highlights keys when they are pressed. Not recommended on mobile or low spec devices."
  },
  punctuation: {
    title: "Punctuation",
    body: "Affects quotes and phrases. When on, expressions will consist of sentences with common punctuation characters and corresponding capitilization. When off, expressions will not add punctuation/capitilization - however, punctuation/capitalization from selected phrase item collections will still be added."
  },
  trackStatistics: {
    title: "Track Statistics",
    body: "When off, will prevent any WPM, accuracy, and participation statistics from being updated."
  },
  phraseItemCollections: {
    title: "Phrase Item Collections",
    body: "The item sets that the expression will randomly choose items from when generating a phrase. Items are single units and can be words, numbers, symbols, or any mix of the three depending on the collection." // Each row is a subset. When a single subset is selected exclusively, statistics will be tracked for that specific subset. Subset-specific statistics can be viewed in 'Your Statistics'.
  },
  wordsPerMinute: {
    title: "Net Words Per Minute",
    body: "Calculated as: (Text Length ÷ 5) ÷ Minutes"
  },
  accuracyPercentage: {
    title: "Accuracy Percentage",
    body: "Calculated as: (Text Length ÷ [Text Length + Mistakes]) × 100%"
  }
}