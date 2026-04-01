export function getSumm(a, b) {
  if (a === undefined || b === undefined)
    throw new Error("Both arguments must be provided");
  if (typeof a !== "number" || typeof b !== "number")
    throw new TypeError("Both arguments must be numbers");

  return a + b;
}

// getSum(3, 6) => 9
// getSum(-1, -4) => -5
// getSum(3.5, 6.1) => 9.6
// getSum(3) => Error
// getSum(3, "hello") => TypeError

export function getUser(id) {
  return { id: `#${id}`, name: "John Doe", phone: undefined };
}

export function getNextDay() {
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  return new Date(tomorrow);
}
