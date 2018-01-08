var card = (numString, suit) => {
  return {value: numString == 'Ace' ? 11 : (numString == 'King' || numString == 'Queen' || numString == 'Jack' ? 10 : Number(numString)) , name: `${numString} of ${suit}`
    
  }
}

var createDeck = () => {
  var n = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2']
  var s = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
  var uDeck = []
  for (var i = 0; i<s.length; i++) {
    for (var j = 0; j<n.length; j++) {
      var c = card(n[j], s[i])
      uDeck.push(c)
    }
  }
  return uDeck
}

var DECK = []

var shuffle = () => {
  var uDeck = createDeck()
  
  while (uDeck.length > 0) {
    var r = Math.floor(Math.random() * uDeck.length)
    var c = uDeck.splice(r, 1)
    DECK.push(c[0])
  }
  return DECK
}

var evalPlayerHand = (player, round) => {
    for (var i = 0; i < player.primaryHand.length; i++) {
      
      if (round == 3 && player.primaryHandVal !== 21) {
        player.canDoublePrimary = true
      }
      
      if (round == 3 && player.splitHandVal !== 21) {
        player.canDoubleSplit = true
      }
      
      if (round == 2 && player.hand[0].val == player[1].val) {
        player.canSplit = true
      }
      
      
      
      if (player.primaryHandVal + player.hand[i].value < 22) { // if primaryHandVal were 21 or less after card draw
        if (!double && !player.canDoublePrimary) {
          player.primaryHandVal += player.hand[i].value 
        }
      } else {
        if (player.hand[i].value == 11 && player.primaryHandVal + 1 < 22) { // if primaryHandVal were 21 or less after drawing Ace
          player.primaryHandVal += 1
        } else if (player.hand[i].value + player.primaryHandVal >= 22) {
          console.log('Busted...')
        }
      
      }


      
    }
    player.round += 1
  }

var dealFirstTwo = (round = 1, results = {}, name1 = '', name2 = '', name3 = '', name4 = '', name5 = '', name6 = '', bet1 = 0, bet2 = 0, bet3 = 0, bet4 = 0, bet5 = 0, bet6 = 0) => {
  var DECK = shuffle()
  round += 1
  
  class Player {
    constructor(name) {
      this.name = name
      this.primaryHand = []
      this.splitHand = []
      this.primaryHandVal = 0
      this.splitHandVal = 0
      this.primaryBet = 0 
      this.splitBet = 0
      this.canSplit = false
      this.canDoublePrimary = this.round == 3 && !this.hasDoubledPrimary && this.primaryHandVal < 21
      this.canDoubleSplit = this.round == 3 && !this.hasDoubledSplit && this.splitHandVal < 21
      this.hasDoubledPrimary = false
      this.hasDoubledSplit = false
      this.hasSplit = false
      this.round = 0
    }
  }
  
  if (!player1) {
    var player1 = new Player(name1)
    player1.primaryBet = bet1
  }
  if (!player2) {
    var player2 = new Player(name2)
    player3.primaryBet = bet2
  }
  if (!player3) {
    var player3 = new Player(name3)  
    player3.primaryBet = bet3
  }
  if (!player4) {
    var player4 = new Player(name4)  
    player4.primaryBet = bet4
  }
  if (!player5) {
    var player5 = new Player(name5)  
    player5.primaryBet = bet5
  }
  if (!player6) {
    var player6 = new Player(name6)  
    player6.primaryBet = bet6
  }
  
  if (round == 1 || round == 2) {
    if (player1) {
      var c = DECK.pop()
      player1.primaryHand.push(c)
      console.log(`${player1.name} received a ${c}`)
    }
    if (player2) {
      var c = DECK.pop()
      player2.primaryHand.push(c)
      console.log(`${player2.name} received a ${c}`)
    }
    if (player3) {
      var c = DECK.pop()
      player3.primaryHand.push(c)
      console.log(`${player3.name} received a ${c}`)
    }
    if (player4) {
      var c = DECK.pop()
      player4.primaryHand.push(c)
      console.log(`${player4.name} received a ${c}`)
    }
    if (player5) {
      var c = DECK.pop()
      player5.primaryHand.push(c)
      console.log(`${player5.name} received a ${c}`)
    }
    if (player6) {
      var c = DECK.pop()
      player6.primaryHand.push(c)
      console.log(`${player6.name} received a ${c}`)
    }
  }
    
  if (round == 2) {
    if (player1) {
    console.log(`${player1.name} has a ${player1.hand[0]} and a ${player1.hand[1]} for a total of ${player1.hand[0].value}`)
    }
     if (player2) {
    console.log(`${player2.name} has a ${player2.hand[0]} and a ${player2.hand[1]}`)
    }
     if (player3) {
    console.log(`${player1.name} has a ${player3.hand[0]} and a ${player3.hand[1]}`)
    }
     if (player4) {
    console.log(`${player4.name} has a ${player4.hand[0]} and a ${player4.hand[1]}`)
    }
     if (player5) {
    console.log(`${player5.name} has a ${player5.hand[0]} and a ${player5.hand[1]}`)
    }
     if (player6) {
    console.log(`${player6.name} has a ${player6.hand[0]} and a ${player6.hand[1]}`)
    }
  }
    
  if (round == 3) {
    if (player1 && player1.hits) {
    console.log(`${player1.name} has a ${player1.hand[0]} and a ${player1.hand[1]}`)
    }
     if (player2) {
    console.log(`${player2.name} has a ${player2.hand[0]} and a ${player2.hand[1]}`)
    }
     if (player3) {
    console.log(`${player1.name} has a ${player3.hand[0]} and a ${player3.hand[1]}`)
    }
     if (player4) {
    console.log(`${player4.name} has a ${player4.hand[0]} and a ${player4.hand[1]}`)
    }
     if (player5) {
    console.log(`${player5.name} has a ${player5.hand[0]} and a ${player5.hand[1]}`)
    }
     if (player6) {
    console.log(`${player6.name} has a ${player6.hand[0]} and a ${player6.hand[1]}`)
    }
  }
    
}

var double = (player, option) => {
  // option is either primaryHand or splitHand
  var canDoublePrimary = player.canDoublePrimary && !player.hasDoubledPrimary && player.primaryHand.length == 2
  var canDoubleSplit = player.canDoubleSplit && !player.hasDoubledSplit && player.splitHand.length == 2

  if (option == 'primary' && canDoublePrimary) {
    player.primaryBet *= 2
    var c = DECK.pop()
    player.primaryHand.push(c)
    console.log(`${player.name} doubled down and received a ${c}`)
    player.hasDoubledPrimary = true
  } else if (option == 'split' && canDoubleSplit) {
    player.splitBet *= 2
    var c = DECK.pop()
    player.splitHand.push(c)
    console.log(`${player.name} received a ${c}`)
    player.hasDoubledSplit = true
  } else {
    console.log(`${player.name}, you cannot double down`)
  }
}

var split = (player) => {
  if (player.canSplit && !player.hasSplit) {
    var c = player.primaryHand.pop()
    player.splitHand.push(c)
    var b = player.splitBet += player.primaryBet
    console.log(`${player.name} split hands.  Primary hand shows a ${player.primaryHand[0]} and split hand shows a ${player.splitHand[0]}`)
    player.hasSplit = true
  } else {
    console.log(`${player.name}, you cannot split`)
  }
}

var hitOnPrimary = (player) => {
   var canHit = !player.hasDoubledPrimary && player.primaryHand.length >= 2
   if (canHit) {
    var c = DECK.pop()
    player.primaryHand.push(c)
    console.log(`${player.name} received a ${c}`)
   } else {
    console.log('You cannot hit anymore')
   }
}

var hitOnSplit = (player) => {
  var canHit = !player.hasDoubledSplit && player.splitHand.length >= 2
   if (canHit) {
    var c = DECK.pop()
    player.splitHand.push(c)
    console.log(`${player.name} received a ${c}`)
   } else {
    console.log('You cannot hit anymore')
   }
}