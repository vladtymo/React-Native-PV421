import { getNextDay, getSumm, getUser } from "../utils";

const date = new Date("2026-3-15");
jest.useFakeTimers().setSystemTime(date);

describe("getSumm", () => {
  it("returns the sum of two numbers", () => {
    const result = getSumm(1, 2);
    expect(result).toBe(3);
  });

  it("throws an error if second argument is undefined", () => {
    // act
    const result = () => getSumm(1, undefined);
    // assert
    expect(result).toThrow(Error);
    expect(result).toThrow("Both arguments must be provided");
  });

  it("throws an error if first argument is undefined", () => {
    expect(() => getSumm(undefined, 1)).toThrow(Error);
  });

  it("throws a TypeError if arguments are not numbers", () => {
    expect(() => getSumm(1, "2")).toThrow(TypeError);
  });

  // x... - skip this test
  xit("throws an error if first argument is undefined", () => {
    expect(() => getSumm(null, null)).toThrow(Error);
  });
});

test("getUser works correctly", () => {
  const result = getUser(54);
  expect(result).toEqual({ id: "#54", name: "John Doe" }); // ignore undefined
  expect(result).not.toStrictEqual({ id: "#54", name: "John Doe" }); // check undefined also
});

test("getNextDay works correctly", () => {
  const result = getNextDay();

  expect(result).toEqual(new Date(2026, 2, 16));
});
