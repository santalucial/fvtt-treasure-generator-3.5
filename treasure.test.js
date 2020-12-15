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
  it("test roll", async () => {
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

  it("test double ability", async () => {
    window.ItemRollFudge = [98, 2, 92, 60, 15, 100, 5, 30];
    window.rollTreasure();

    expect(window.treasure.items[0]).toMatchInlineSnapshot(`
      Object {
        "ability": Array [
          "Arrow catching",
          "Bashing",
        ],
        "amount": 1,
        "enhancement": 1,
        "type": " Shield, light, wooden",
        "value": 9153,
      }
    `);
  });

  it("test double ability 2", async () => {
    window.ItemRollFudge = [98, 2, 92, 92, 60, 15, 100, 5, 30, 70];
    window.rollTreasure();

    expect(window.treasure.items[0]).toMatchInlineSnapshot(`
      Object {
        "ability": Array [
          "Fortification, light",
          "Arrow catching",
          "Bashing",
        ],
        "amount": 1,
        "enhancement": 1,
        "type": "  Shield, light, wooden",
        "value": 16153,
      }
    `);
  });

  it("test double ability 3", async () => {
    window.ItemRollFudge = [98, 2, 96, 100, 89, 59, 25, 70];
    window.rollTreasure();
    expect(window.treasure.items[0]).toMatchInlineSnapshot(`
      Object {
        "ability": Array [
          "Shadow",
          "Glamered",
        ],
        "amount": 1,
        "enhancement": 0,
        "type": "  Dragonhide plate",
        "value": 9750,
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

describe("Magic weapon rolls", () => {
  it("test magic weapon with bane (fey)", async () => {
    window.ItemRollFudge = [98, 5, 100, 1, 99, 1, 2, 26, 1, 28];
    window.rollTreasure();
    expect(window.treasure.items).toMatchInlineSnapshot(`
      Array [
        Object {
          "ability": Array [],
          "amount": 0,
          "enhancement": 0,
          "type": "Common ranged weapon Arrows (50)",
          "value": 350,
        },
        Object {
          "ability": Array [
            "Bane, Fey",
          ],
          "amount": 1,
          "enhancement": 0,
          "type": " Crossbow, light",
          "value": 3335,
        },
      ]
    `);
  });

  it("full roll magic weapon table", async () => {
    //Array.from({length: 100}, (_, i) => i + 1).forEach(t7_2 =>{})
    Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_9) => {
      window.ItemRollFudge = [98, 5, t7_9];
      window.rollTreasure(); 
    });
  });

  // it("1000 full roll magic weapon table", async () => {
  //   //Array.from({length: 100}, (_, i) => i + 1).forEach(t7_2 =>{})
  //   Array.from({ length: 1000 }, (_, i) => i + 1).forEach((roll) => {
  //     Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_9) => {
  //       window.ItemRollFudge = [98, 5, t7_9];
  //       window.rollTreasure();
  //     });
  //   });
  // });

});
