import { allUnique } from "./all-unique";

describe("allUniquie", () => {
  it("should be defined", () => {
    expect(allUnique).toBeDefined();
  });

  it("should return true if there are no duplicate characters", () => {
    const input = "abcdef";

    expect(allUnique(input)).toBe(true);
  });

  it("should return false if there are duplicate characters", () => {
    const input = "abcdee";

    expect(allUnique(input)).toBe(false);
  });

  it("should return true for empty strings", () => {
    const input = "";

    expect(allUnique(input)).toBe(true);
  });
});
