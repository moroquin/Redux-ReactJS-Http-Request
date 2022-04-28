import genderlistSlice, { genderlistActions } from "./genderlist-slice";

describe("Gender List slice tests", () => {
  it("Should return an empty list", () => {
    const emptyResponse = { id: 0, list: [] };
    expect(genderlistSlice.reducer(undefined, {})).toStrictEqual(emptyResponse);
  });

  it("Should add one item to an emtpy list", () => {
    const payload = [{ id: 0, text: "hello world" }];

    let actualState = genderlistSlice.reducer(undefined, {});
    actualState = genderlistSlice.reducer(
      actualState,
      genderlistActions.addItem({ item: payload[0].text })
    );
    expect(actualState.list.length).toBe(1);
    expect(actualState.id).toBe(1);
    expect(actualState.list[0]).toStrictEqual(payload[0]);
    expect(actualState.list).toStrictEqual(payload);
  });

  it("Should add many items to an emtpy list", () => {
    const payload = [
      { id: 0, text: "hello world" },
      { id: 1, text: "hello world 2" },
      { id: 2, text: "hello world 3" },
    ];

    let actualState = genderlistSlice.reducer(undefined, {});

    for (let i = 0; i < 3; i++) {
      actualState = genderlistSlice.reducer(
        actualState,
        genderlistActions.addItem({ item: payload[i].text })
      );
      expect(actualState.list.length).toBe(i + 1);
      expect(actualState.id).toBe(i + 1);
      expect(actualState.list[i]).toStrictEqual(payload[i]);
    }
    expect(actualState.list).toStrictEqual(payload);
  });

  it("Should remove one item to an emtpy list", () => {
    const payload = [
      { id: 0, text: "hello world" },
      { id: 1, text: "hello world 2" },
      { id: 2, text: "hello world 3" },
    ];
    const result = [
      { id: 0, text: "hello world" },
      { id: 2, text: "hello world 3" },
    ];

    let actualState = genderlistSlice.reducer(undefined, {});

    for (let i = 0; i < 3; i++) {
      actualState = genderlistSlice.reducer(
        actualState,
        genderlistActions.addItem({ item: payload[i].text })
      );
    }
    actualState = genderlistSlice.reducer(
      actualState,
      genderlistActions.removeItem({ id: 1 })
    );
    expect(actualState.list).toStrictEqual(result);
  });

  it("Should remove all items to an emtpy list", () => {
    const payload = [
      { id: 0, text: "hello world" },
      { id: 1, text: "hello world 2" },
      { id: 2, text: "hello world 3" },
    ];
    const result = { id: 3, list: [] };

    let actualState = genderlistSlice.reducer(undefined, {});

    for (let i = 0; i < 3; i++) {
      actualState = genderlistSlice.reducer(
        actualState,
        genderlistActions.addItem({ item: payload[i].text })
      );
    }
    for (let i = 0; i < 3; i++) {
      actualState = genderlistSlice.reducer(
        actualState,
        genderlistActions.removeItem({ id: i })
      );
    }
    expect(actualState).toStrictEqual(result);
  });
});
