import genderSlice, { genderActions } from "./gender-slice";

describe("Redux Gender-slice", () => {
  it("should return the initial state for genderActions", () => {
    expect(genderSlice.reducer(undefined, {})).toEqual({
      data: {
        count: "",
        gender: "",
        name: "",
        probability: "",
      },
    });
  });

  it("should handle a new gender data", () => {
    const previousState = {
      data: {
        count: "",
        gender: "",
        name: "",
        probability: "",
      },
    };
    const dataInsert = {
      count: "5",
      gender: "male",
      name: "oliver",
      probability: "0.99",
    };

    expect(
      genderSlice.reducer(previousState, genderActions.setgender(dataInsert))
    ).toEqual({
      data: {
        count: "5",
        gender: "male",
        name: "oliver",
        probability: "0.99",
      },
    });
  });

  it("should clear the data", () => {
    const previousState = {
      data: {
        count: "5",
        gender: "male",
        name: "oliver",
        probability: "0.99",
      },
    };

    expect(genderSlice.reducer(previousState, genderActions.clear())).toEqual({
      data: {
        count: "",
        gender: "",
        name: "",
        probability: "",
      },
    });
  });
});
