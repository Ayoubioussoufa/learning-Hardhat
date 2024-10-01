// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
const {expect} = require('chai');

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Contract", function() {
    // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
    async function deployTokenFixture() {    
        const contract = await ethers.deployContract("LocalTournament");
        console.log(contract);
        // Fixtures can return anything you consider useful for your tests
        return { contract };
      }
    describe("get all matched played by certain player", function() {
        it("getAllMatchesPlayedByThePlayer", async function() {
            const {contract} = await loadFixture(deployTokenFixture);
            console.log(contract);
            await contract.createTournament();
            await contract.recordMatch(0,
                "Ayoub",
                'Hamid',
                10,
                12);
            const PlayerAyoub = await contract.getAllMatchesPlayedByThePlayer("Ayoub");
            console.log(PlayerAyoub);
            // expect(await contract.getTournamentMatches(0)).to.equal(ownerBalance);
        });
    });
});