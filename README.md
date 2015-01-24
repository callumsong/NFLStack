Stack Data Structure via the NFL Stack

A stack data structure is a collection of data that is structured in the way of a one row jenga game - if one piece falls then the whole thing falls apart. Only the most recently input data can be accessed, and the latest piece of data goes to the top of the pile.

The reason why I call it a stack data structure is because the last one standing (aka the Superbowl champions) are the first to be praised upon. So this particular data structure goes on the principle of 'last stand first champion.'

Bubble Sort Method

A bubble sort method grabs the value at the front of a collection of data, and compares it to a piece of data that is in front of it. In the case of the value at the very front of the collection, it would compare this with the second 'placed' piece of data in the collection. If it is a larger value, the two values swap. If the second value is larger than the first, then the algorithm moves to the next value. It repeats itself until it gets to the very last piece of data, then starts from the top.

This simulates a bubble sort method by taking the power rankings of each team. If one team's ranking is lower than the one next to it, then it moves to the bottom. The algorithm continues until the NFL order is restored.

I chose to have a bubble sort method to simulate the length of a season. Because it is a long season, and ideally all teams have to play all teams, the best are separated individually by playing each other until eventually the Superbowl champion is found.

I will demonstrate these by:

1. Sorting my randomly placed teams by 'bubbling' the bottom team to the bottom (my lowest value that goes to the top of the stack)
2. Once these teams are sorted the user has the ability to pop these teams one by one, until there is one winner left.
