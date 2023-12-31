const bitch = require("./counter");

describe("iting converting steps into km and cals", () => {
  it("should return +1", () => {
    expect(bitch(1)).toBe(2);
  });
  it("should return +1", () => {
    expect(bitch(2)).toBe(3);
  });
  it("should return +1", () => {
    expect(bitch(3)).toBe(4);
  });
  // Проверка значений
  it("toBe matcher", () => {
    expect(5 + 5).toBe(10);
  });
  it("toBe not matcher", () => {
    expect(5 + 5).not.toBe(0);
  });

  it("toEqual matcher", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it("toBeNull matcher", () => {
    const n = null;
    expect(n).toBeNull();
  });

  it("toBeDefined matcher", () => {
    const value = 10;
    expect(value).toBeDefined();
  });

  it("toBeTruthy and toBeFalsy matchers", () => {
    const t = true;
    const f = false;
    expect(t).toBeTruthy();
    expect(f).toBeFalsy();
  });

  // Проверка числовых значений
  it("toBeGreaterThan matcher", () => {
    expect(10).toBeGreaterThan(5);
  });

  it("toBeLessThan matcher", () => {
    expect(5).toBeLessThan(10);
  });

  // Проверка строк
  it("toContain matcher", () => {
    expect("Hello, Jest!").toContain("Jest");
  });
  it("toContain matcher", () => {
    expect("Hello, Jest!").toMatch(/Jest/);
  });

  // Проверка массивов
  it("toContain matcher for arrays", () => {
    const array = ["apple", "banana", "cherry"];
    expect(array).toContain("banana");
  });

  it("toHaveLength matcher", () => {
    const array = [1, 2, 3];
    expect(array).toHaveLength(3);
  });

  // Проверка функций
  it("toHaveBeenCalled matcher", () => {
    const mockFunction = jest.fn();
    mockFunction();
    expect(mockFunction).toHaveBeenCalled();
  });

  it("toHaveBeenCalledTimes matcher", () => {
    const mockFunction = jest.fn();
    mockFunction();
    mockFunction();
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
  it("resolves to lemon", async () => {
    await expect(Promise.resolve("lemon")).resolves.toBe("lemon");
    await expect(Promise.resolve("lemon")).resolves.not.toBe("octopus");
  });
  it("rejects to octopus", () => {
    // make sure to add a return statement
    return expect(Promise.reject(new Error("octopus"))).rejects.toThrow(
      "octopus"
    );
  });
  it("drinks returns", () => {
    const drink = jest.fn(() => true);

    drink();

    expect(drink).toHaveReturned();
  });

  it("drink returns La Croix", () => {
    const beverage = { name: "La Croix" };
    const drink = jest.fn((beverage) => beverage.name);

    drink(beverage);

    expect(drink).toHaveReturnedWith("La Croix");
  });
  // Проверка ошибок
  it("toThrow matcher", () => {
    const throwError = () => {
      throw new Error("it error");
    };
    expect(throwError).toThrow();
  });

  it("toThrowError matcher", () => {
    const throwError = () => {
      throw new Error("it error");
    };
    expect(throwError).toThrowError("it error");
  });
});
