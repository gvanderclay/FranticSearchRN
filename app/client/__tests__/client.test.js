import { Client } from "..";
describe("client", () => {
  describe("getallcards", () => {
    it("can get all cards", async () => {
      const client = new Client();
      const cards = await client.getCards();
    });

    it("can use params to filter cards", async () => {
      const client = new Client();
      const cards = await client.getCards({
        name: "air"
      });
      expect(cards.length === 100).toBeTruthy();
    });
  });

  describe("getCard", () => {
    it("can get a card by id", async () => {
      const client = new Client();
      const card = await client.getCard(
        "0cb2cbb53ae14dc1c1c03f23b5e21e0da848241c"
      );

      expect(card).toBeTruthy();
    });

    it("can get a card by multiverseid", async () => {
      const client = new Client();
      const card = await client.getCard(74360);

      expect(card).toBeTruthy();
    });
  });

  describe("getSets", () => {
    it("can get sets", async () => {
      const client = new Client();
      const sets = await client.getSets();
      expect(sets).toBeTruthy();
    });
  });

  describe("getSet", async () => {
    const client = new Client();

    const set = await client.getSet("ktk");

    expect(set).toBeTruthy();
  });

  describe("getTypes", () => {
    it("gets types", async () => {
      const client = new Client();
      const types = await client.getTypes();

      expect(types).toBeTruthy();
    });
  });

  describe("getSubtypes", () => {
    it("gets subtypes", async () => {
      const client = new Client();
      const types = await client.getSubtypes();

      expect(types).toBeTruthy();
    });
  });

  describe("getSupertypes", () => {
    it("gets supertypes", async () => {
      const client = new Client();
      const types = await client.getSupertypes();

      expect(types).toBeTruthy();
    });
  });

  it("gets formats", async () => {
    const client = new Client();
    const formats = await client.getFormats();

    expect(formats).toBeTruthy();
  });
});
