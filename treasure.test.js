beforeAll(() => {
  window.canvas = { tokens: { controlled: [{ data: { actorId: "0" } }] } };

  window.game = {
    actors: new Map([
      ["0", { data: { type: "npc", data: { details: { cr: 0 } } } }],
    ]),
  };
  class ChatMessage {
    static create({ content }) {}
  }
  window.ChatMessage = ChatMessage;

  class Roll {
    constructor(roll) {
      // console.log(roll);
      this.formula = roll;
    }
    roll() {
      let diceNo = [...Array(parseInt(this.formula.split("d")[0])).keys()];
      let diceSize = parseInt(
        this.formula.split("d")[1].split("+")[0].split("*")[0]
      );

      var result = 0;
      diceNo.forEach((step) => {
        result += Math.floor(Math.random() * diceSize) + 1;
      });
      if (this.formula.includes("+"))
        result += parseInt(this.formula.split("d")[1].split("+")[1]);
      if (this.formula.includes("*"))
        result *= parseInt(this.formula.split("d")[1].split("*")[1]);
      // result = Math.max(1, result);

      // console.log(result);
      return { total: result };
    }
  }
  window.Roll = Roll;
  require("./treasure.js");
});

beforeEach(() => {
  window.treasure = {};
});

describe("Magic armor rolls", () => {
  it("test roll 1", async () => {
    window.ItemRollFudge = [98, 2, 95, 61, 43, 100, 94, 100, 63, 96];
    window.rollTreasure();

    expect(window.treasure.items[0]).toMatchInlineSnapshot(`
      Object {
        "ability": Array [
          "Spell resistance (13)",
          "Shadow",
        ],
        "amount": 1,
        "enhancement": 1,
        "type": " Scale mail",
        "value": 12950,
      }
    `);
  });

  it("test roll 2", async () => {
    window.ItemRollFudge = [98, 2, 62, 12];
    window.rollTreasure();

    expect(window.treasure.items[0]).toMatchInlineSnapshot(`
      Object {
        "ability": Array [],
        "amount": 1,
        "enhancement": 1,
        "type": "Studded leather",
        "value": 1175,
      }
    `);
  });
  it("full roll magic armor table", async () => {
    //Array.from({length: 100}, (_, i) => i + 1).forEach(t7_2 =>{})
    Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_2) => {
      window.ItemRollFudge = [98, 2, t7_2];
      window.rollTreasure();
    });
  });

  it("full roll magic armor abilty table", async () => {
    Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_5) => {
      window.ItemRollFudge = [98, 2, 100, 61, t7_5];
      window.rollTreasure();
    });
  });

  it("full roll magic shield abilty table", async () => {
    Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_6) => {
      window.ItemRollFudge = [98, 2, 100, 1, t7_6];
      window.rollTreasure();
    });
  });

  // it("full roll magic weapon table", async () => {
  //   //Array.from({length: 10}, (_, i) => i + 1).forEach(t7_2 =>{})
  //   Array.from({ length: 10 }, (_, i) => i + 1).forEach((t7_2) => {
  //     window.ItemRollFudge = [98, 2, t7_2];
  //     window.rollTreasure();
  //   });
  // });
});
