import attack from "./attack";

test("should return damage sentence when called correctly", () => {
  const result = attack("Smelly Ogre", 23);
  expect(result).toMatch(/^Smelly Ogre(.*)23/);
  expect(result).not.toBe("Hello");
  expect(result).not.toBe("Hello BI");
  expect(result).toMatchInlineSnapshot('"Smelly Ogre dealt 23 damage!"');
});
