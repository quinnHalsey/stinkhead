const { expect } = require("chai");
const request = require("supertest");
const { db, models: gameRoom } = require("../server/db");
const seed = require("../server/db/seed");
const app = require("../server");

describe("Game Room routes", () => {
  beforeEach(async () => {
    await seed();
  });

  describe("/api/gameRoom", () => {
    it("POST /api/gameRoom", async () => {
      // const newPlayer = await request(app).post({
      //   username: "SlyPickle",
      //   turnOrder: 1,
      // });
      const res = await request(app).post("/api/gameRoom ", {
        roomCode: "12345",
      });
      console.log(res.body, "response");
      expect(res.body).to.be.an("object");
      expect(res.body.players).to.be.an("array");
      expect(res.body.players[0].username).to.be("SlyPickle");
    });
  });
});

// describe("/api/categories/", () => {
//     it("GET /api/categories", async () => {
//       const res = await request(app).get("/api/categories").expect(200);
//       expect(res.body).to.be.an("array");
//       expect(res.body.length).to.equal(3);
//     });
//     it("POST /api/categories", async () => {
//       await request(app)
//         .post("/api/categories", { name: "new-category" })
//         .expect(200);
//       const res = await request(app).get("/api/categories");
//       expect(res.body).to.be.an("array");
//       expect(res.body.length).to.equal(4);
//     });
//   });
// });
