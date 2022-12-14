const interactionCreate = require("./listeners/interactionCreate");
const ready = require("./listeners/ready")
const { Client } = require("discord.js");
const dbClient = require("./db/dbClient");
const { token } = require("../config.json");

require('dotenv').config();

async function main() {
    if (token) {
        console.log("Bot is starting...");
    
        const client = new Client({
            intents: []
        });
    
        // LISTENERS
        ready(client);
        interactionCreate(client);
        //
    
        client.login(token);
    } else {
        console.log("Token is undefined");
    }
}

main()
    .then(async () => {
        await dbClient.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await dbClient.$disconnect();
        process.exit(1);
    });