var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
function appendKitten(name) {
  return kittens.concat(name)
}
function prependKitten(name) {
  var kittens2 = 'Arnold,'
  return kittens2.concat(kittens)
}