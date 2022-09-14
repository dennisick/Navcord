module.exports = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        client.user.setStatus('Idle');

        console.log(client.user.username + ' is online');
    });
}