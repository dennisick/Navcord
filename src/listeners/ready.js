module.exports = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        client.user.setStatus('Idle', 'searching for food');

        console.log(client.user.username + ' is online');
    });
}