function rollDice(min, max) {
  return min + Math.floor(Math.random() * (max-min + 1))
}
const rollDice4 = () => rollDice(1, 4)
const rollDice6 = () => rollDice(1, 6)
const rollDice8 = () => rollDice(1, 8)
const rollDice12 = () => rollDice(1, 12)
const rollDice20 = () => rollDice(1, 20)
// Note that the Math.ceil version for this would be:
// same function as above but we are using Math.ceil instead

function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1))
}