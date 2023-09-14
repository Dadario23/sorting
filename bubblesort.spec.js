describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Bubble Sort", function () {
  it("Probando la funcion con un arreglo", function () {
    expect(bubbleSort([2, 58, 65, 21, 5, 9, 4])).toEqual([
      2, 4, 5, 9, 21, 58, 65,
    ]);
  });
});
