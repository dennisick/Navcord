const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder()
		.setName('setuid')
		.setDescription('Saves your UID')
		.addIntegerOption(option =>
			option.setName('uid')
				  .setDescription('Your UID')
				  .setRequired(true)),
	new SlashCommandBuilder()
		.setName('uid')
		.setDescription('Get the UID of a member')
		.addUserOption(option =>
			option.setName('member')
				  .setDescription('Member')
				  .setRequired(true))
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
