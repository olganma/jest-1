const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const result = sorting.sortByName(input);
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(result).toEqual(expected);
  });

  test("Books have the same names", () => {
    const input = [
      "Властелин Колец",
      "Властелин Колец",
    ];
    const result = sorting.sortByName(input);
    const expected = [
      "Властелин Колец",
      "Властелин Колец",
    ];
    expect(result).toEqual(expected);
  });

});
