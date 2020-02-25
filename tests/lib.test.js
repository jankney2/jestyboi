const lib = require("../lib");
const db = require("../db");
describe("absolute", () => {
  it("positive number", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it("negative number", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it(" return 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet function", () => {
  it("should return greeting message", () => {
    const result = lib.greet("mosh");

    expect(result).toMatch(/mosh/);
  });
});

describe("get currencies", () => {
  it("supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toBeDefined();
  });

  describe("currencies", () => {
    let result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });

  describe("get item off object", () => {
    it("returns object with id", () => {
      const result = lib.getProduct(1);

      expect(result).toMatchObject({ id: 1, price: 10 });
      expect(result).toHaveProperty("price", 10);
    });
  });

  describe("register user", () => {
    let args = [NaN, undefined, "", false, 0, null];

    args.forEach(el => {
      it("falsy user throws err", () => {
        expect(() => {
          lib.registerUser(el);
        }).toThrow();
      });
    });

    it("username should equal", () => {
      let result = lib.registerUser("jankney");
      expect(result).toHaveProperty("username", "jankney");
    });
  });
});

describe("discount function", () => {
  it("if customer has 10 points, apply 10% discount", () => {
    db.getCustomerSync = id => {
      console.log("fake reading customer");
      return {
        id: id,
        points: 20
      };
    };

    const order = { customerId: 1, totalPrice: 10 };
    const result = lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
