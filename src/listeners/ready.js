module.exports = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        client.user.setStatus('idle');

        console.log(client.user.username + ' is online');
    });
}