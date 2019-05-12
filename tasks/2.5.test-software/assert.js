function strictEqual(actual, expected, message) {
  if (!Object.is(actual, expected)) {
    throw new Error(`expect ${actual} equal ${expected},actual value is:${actual}`)
  }
}
