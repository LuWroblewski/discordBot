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
   let user = interaction.options.getUser('user')
const { commandName } = interaction;

if(commandName == `ajuda`){
  return interaction.reply({
    content: `Para usar algum comando digite / oNomeDoComando e a pessoa. Exemplo: /beijo lexyBot`
  })
  }

if(commandName == `sexo`){
return interaction.reply({
  content: `<@${interaction.user.id}> voce fez sexo com ${user}`
})
}
else if(commandName == `beijo`){
  return interaction.reply({
    content: `<@${interaction.user.id}> voce beijou ${user}`
  })
  }
else if(commandName == `abraço`){
  return interaction.reply({
    content: `<@${interaction.user.id}> voce abraçou ${user}`
  })
  }  
}
})
client.login(token); 
