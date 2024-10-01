const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TournamentModule = buildModule("TournamentModule", (m) => {
    const tournament = m.contract("LocalTournament");
    return {tournament};
});

module.exports = TournamentModule;