import { foo, calc } from './main';
describe("foo", () => {
  it("ignores an if statment in any case", () => {
    expect(foo(0)).toBe(undefined);
    expect(foo(10)).toBe(undefined);
  })
});
describe("calc", () => {
  it("performs a comparison", () => {
    expect(calc(0)).toBe(1);
    expect(calc(20)).toBe(3);
  })
});
