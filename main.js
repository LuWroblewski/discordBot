//Codigo feito por mim
//Se quiser entrar em contato: #Lexy#3138

const { userMention } = require('discord.js');
const discord = require('discord.js');
const { GatewayIntentBits  } = discord;
const client = new discord.Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
});
const {token} = require("./config.json"); 


client.on("ready", () => {
  console.log(`O bot ${client.user.tag} esta ativo!`)
  client.user.setActivity('Minecraft',{
    type: 0
  })
})

client.on("interactionCreate", interaction => {
  if (interaction.isChatInputCommand()) {
const { commandName } = interaction;

if(commandName == `sexo`){
return interaction.reply({
  content: `<@${interaction.user.id}> voce fez sexo com <@${client.user.id}>`
})
}
else if(commandName == `beijo`){
  return interaction.reply({
    content: `<@${interaction.user.id}> voce beijou <@${client.user.id}>`
  })
  }
else if(commandName == `abraço`){
  return interaction.reply({
    content: `<@${interaction.user.id}> voce abraçou <@${client.user.id}>`
  })
  }  
}
})
client.login(token); 
