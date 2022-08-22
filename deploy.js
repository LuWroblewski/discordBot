const {token, guildID, clientID}= require("./config.json"); 
const { Routes, User } = require('discord.js');
const { REST } = require('@discordjs/rest');

const commands = [
  {
    name: `sexo`,
    description: 'sexo com o bot',
    options: [
      {
        name: 'user',
        description: 'Escolha alguém para abraçar',
        type: ApplicationCommandOptionType.User,
        required: true,
      }
]},

  {
    name: 'beijo',
    description: 'Beijar o bot',
    options: [
      {
        name: 'user',
        description: 'Escolha alguém para abraçar',
        type: ApplicationCommandOptionType.User,
        required: true,
      }
]},
  {
    name: 'abraço',
    description: 'Abraçar o bot',
    options: [
      {
        name: 'user',
        description: 'Escolha alguém para abraçar',
        type: ApplicationCommandOptionType.User,
        required: true,
      }
]},
{
name: 'ajuda',
description: 'Tutorial de como usar o bot',
},
];


const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(clientID, guildID), { body: commands });

    console.log('Successfully reloaded application (/) commands.' +guildID);
  } catch (error) {
    console.error(error);
  }
})();
