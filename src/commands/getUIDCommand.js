const dbClient = require("../db/dbClient");

module.exports = async (interaction) => {

    const name = interaction.options.getString("name");

    const users = await interaction.guild.members.fetch({ query: name, limit: 1 });
   
    if (users.size < 1) {
        interaction.reply('Could not find this member');
        return;
    }


    const [guildMember] = users.values();

    try {
        const profile = await dbClient.genhsinToDiscord.findUnique({
            where: {
                id: guildMember.user.id
            }
        });

        if (!profile) {
            interaction.reply('This member did not save a UID');
            return;
        }

        console.log("Discord Client ID " + interaction.user.id + " fetched UID from " + name);
        interaction.reply(guildMember.user.username + "'s UID is " + profile.uid);
    } catch (error) {
        console.error(error);
        interaction.reply('Something went wrong. Please contact an admin');
    }

}