/**
 * @returns {number} - A random number between 1 and 6.
 */
function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations) {
  if (numSimulations <= 0) return []

  const results = []

  Array.from({ length: numSimulations }).forEach(() => {
    const dice1 = rollDice()
    const dice2 = rollDice()
    const sum = dice1 + dice2

    let result = 'roll again'
    if ([7, 11].includes(sum)) {
      result = 'win'
    } else if ([2, 3, 12].includes(sum)) {
      result = 'lose'
    }

    results.push({
      dice1,
      dice2,
      sum,
      result,
    })
  })

  return results
}

module.exports = diceGameSimulation
