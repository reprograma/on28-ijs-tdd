// 7

const reverse = require("./revertString");
describe("RevertString function", () => {
  test("'casa' => 'asac'", () => {
    expect(reverse("casa")).toEqual("asac");
  });

  test("'javascript' => 'tpircsavaj'", () => {
    expect(reverse("javascript")).toEqual("tpircsavaj");
  });
});
