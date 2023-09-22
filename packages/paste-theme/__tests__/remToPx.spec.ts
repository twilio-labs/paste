import { remToPx } from "../src/utils/remToPx";

describe("remToPx", () => {
  it("handles input strings", (): void => {
    expect(remToPx("1.5rem")).toBe(24);
    expect(remToPx("1.5rem", "number")).toBe(24);
    expect(remToPx("1.5rem", "string")).toBe("24px");
  });

  it("handles input numbers", (): void => {
    expect(remToPx(2)).toBe(32);
    expect(remToPx(2, "number")).toBe(32);
    expect(remToPx(2, "string")).toBe("32px");
  });

  it("rounds returned pixel values", (): void => {
    expect(remToPx("1.912rem", "number")).toBe(31);
    expect(remToPx(1.3, "string")).toBe("21px");
  });
});
