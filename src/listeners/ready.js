const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        client.user.setPresence({
            status: 'idle',
            activity: {
                name: 'searching for food',
                type: 'PLAYING'
            }
        })

        console.log(client.user.username + ' is online');
    });
}