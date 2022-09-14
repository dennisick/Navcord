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
                    name: 'searching for food',
                    type: ActivityType.Playing
                }
            ],
            shardId: 0
        })

        console.log(client.user.username + ' is online');
    });
}