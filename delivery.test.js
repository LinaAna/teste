import { taxaEntrega } from "./delivery.js";

describe("taxaEntrega", () => {
  test("2 km", () => expect(taxaEntrega(2)).toBe(0));
  test("5 km", () => expect(taxaEntrega(5)).toBe(6));
  test("10 km", () => expect(taxaEntrega(10)).toBe(9));
});