const sayNumber = require("../sayNumber");

test("property displays the number inserted in English", () => {
  expect(sayNumber(0)).toBe("Zero.");
  expect(sayNumber(11)).toBe("Eleven.");
  expect(sayNumber(14)).toBe("Fourteen.");
  expect(sayNumber(48)).toBe("Forty-eight.");
  expect(sayNumber(43)).toBe("Forty-three.");
  expect(sayNumber(111)).toBe("One hundred and eleven.");
  expect(sayNumber(20000)).toBe("Twenty thousand.");
  expect(sayNumber(12340005)).toBe(
    "Twelve million, three hundred and forty thousand and five."
  );
  expect(sayNumber(12000013)).toBe("Twelve million and thirteen.");
  expect(sayNumber(70376000010012)).toBe(
    "Seventy trillion, three hundred and seventy-six billion, ten thousand and twelve."
  );
});
