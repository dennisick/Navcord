const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        client.user.setPresence({
            status: 'idle',
            activities: [
                {
                    type: 'playing',
                    name: 'searching for food'
                }
            ]
        })

        console.log(client.user.username + ' is online');
    });
}