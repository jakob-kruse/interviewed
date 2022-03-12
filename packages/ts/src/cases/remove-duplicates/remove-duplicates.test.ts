import { removeDuplicates } from "./remove-duplicates";

describe("removeDuplicates", () => {
  it("should be defined", () => {
    expect(removeDuplicates).toBeDefined();
  });

  it("should remove duplicate integers", () => {
    const input = [2, 2, 2, 4, 5, 5];
    const expected = [2, 4, 5];

    expect(removeDuplicates(input)).toEqual(expected);
  });

  it("should remove duplicate floats", () => {
    const input = [2.2, 2.2, 2.2, 4.4, 5.5, 5.5];
    const expected = [2.2, 4.4, 5.5];

    expect(removeDuplicates(input)).toEqual(expected);
  });
});
