const getUIDCommand = require("../commands/getUIDCommand");
const setUIDCommand = require("../commands/setUIDCommand");

const commandHandlers = {
    setuid: setUIDCommand,
    uid: getUIDCommand
}

module.exports = (client) => {
    client.on("interactionCreate", async interaction => {
        if (!interaction.isChatInputCommand()) return;

        const { commandName } = interaction;

        const handle = commandHandlers[commandName];
        handle(interaction);
    });
}