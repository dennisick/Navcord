const dbClient = require("../db/dbClient");
const { uidChannels } = require('../../config.json');

module.exports = async (interaction) => {

    if (!uidChannels.includes(interaction.channelId)) {
        interaction.reply('This command is not allowed in this channel!');
        return;
    }

    const user = interaction.options.getUser("member");

    try {
        const profile = await dbClient.genhsinToDiscord.findUnique({
            where: {
                id: user.id
            }
        });

        if (!profile) {
            interaction.reply('This member did not save a UID');
            return;
        }

        console.log("Discord Client ID " + interaction.user.id + " fetched UID from " + user.name);
        interaction.reply(guildMember.user.username + "'s UID is " + profile.uid);
    } catch (error) {
        console.error(error);
        interaction.reply('Something went wrong. Please contact an admin');
    }

}