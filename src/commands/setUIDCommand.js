const dbClient = require("../db/dbClient");

module.exports = async (interaction) => {   
    
    const clientId = String(interaction.user.id);
    const uid = String(interaction.options.getInteger("uid"));

    try {
        let profile = await dbClient.genhsinToDiscord.findUnique({
            where: {
                id: clientId
            }
        });

        if (!profile) {
            profile = await dbClient.genhsinToDiscord.create({
                data: {
                    id: clientId,
                    uid: uid
                }
            });
        } else {
            profile = await dbClient.genhsinToDiscord.update({
                data: {
                    id: clientId,
                    uid: uid
                },
                where: {
                    id: clientId
                }
            });
        }
    
        if (profile.id != clientId || profile.uid != uid) {
            console.error("Could not save UID" + uid + " of Discord Client ID " + clientId + " because the updated version from the database is not synced");
            interaction.reply('Saving UID failed. Please contact an admin');
            return;
        }

        console.log("Discord Client ID " + clientId + " saved the UID " + uid);
        interaction.reply('UID successfully saved');
    } catch (error) {
        console.error(error);
        interaction.reply('Saving UID failed. Please contact an admin');
    }
};