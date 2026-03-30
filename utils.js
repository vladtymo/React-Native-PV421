export function getSumm(a, b) {
  if (a === undefined || b === undefined)
    throw new Error("Both arguments must be provided");
  if (typeof a !== "number" || typeof b !== "number")
    throw new TypeError("Both arguments must be numbers");

  return a + b;
}

export function getUser(id) {
  return { id: `#${id}`, name: "John Doe", phone: undefined };
}

export function getNextDay() {
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  return new Date(tomorrow);
}
