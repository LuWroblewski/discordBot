//Codigo feito por mim com algumas ajudas para aprender :)
//Se quiser entrar em contato: #Lexy#3138

const { userMention, ApplicationCommandType, messageLink, GuildMember, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageButton  } = require('discord.js');
const discord = require('discord.js');
const { GatewayIntentBits  } = discord;
const client = new discord.Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences] 
});
const {token} = require("./config.json"); 



client.on("ready", () => {
  console.log(`O bot ${client.user.tag} esta ativo!`)
  client.user.setActivity('Minecraft',{
    type: 0
  })
})

client.on("guildMemberAdd",  member => {
  member.guild.channels.cache.get('1013494771517497374').send({embeds: [new discord.EmbedBuilder().setDescription(`bem vindo ${member.user} `)
  .setTitle('Bem vindo ao server de teste :partying_face: ')
  .addFields(
		{ name: 'Como usar o bot?', value: 'Digite **/ajuda**' },
	)

  .setColor('Yellow')
  .setImage("https://c.tenor.com/I1JtFdfmNP8AAAAC/bem-vindo-cute.gif")

  ], components:[  new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('membro')
      .setLabel('Membro')
      .setStyle(ButtonStyle.Danger)
      )]
    })

      client.on('interactionCreate', async interaction => {
        
if (interaction.customId === 'membro'){ interaction.member.roles.add('1013318472412954726')
await  interaction.update ({components:[]})
      interaction.followUp({
        embeds: [new discord.EmbedBuilder().setDescription(`Cargo <@&1013318472412954726> adicionado para ${member.user}`)
        .setTitle(':white_check_mark: Cargo adicionado')
     .setColor('Purple')
     ]
    })
  }
      })
})

client.on("interactionCreate", interaction => {
  if (interaction.isChatInputCommand()) {
   let user = interaction.options.getUser('user')
const { commandName } = interaction;

if(commandName == `ajuda`){
  return interaction.reply({
    embeds: [new discord.EmbedBuilder().setDescription(`Para usar algum comando digite /oNomeDoComando e a pessoa. Exemplo: /beijo Tamaki`)
    .setTitle('Chamou ajuda? :sunglasses:')
 .setColor('White')
 .setImage("https://y.yarn.co/1db9c9f6-c612-4958-a6f7-2995393acfba_text.gif")
 ]})
  }

if(commandName == `sexo`){
return interaction.reply({

   embeds: [new discord.EmbedBuilder().setDescription(`<@${interaction.user.id}> fez sexo com ${user}`)
   .setTitle('Alguem aqui está com fogo no rabo :fire:')
.setColor('Gold')
.setImage("http://i.redd.it/bpx5l5b8dym41.gif")
]})
}
else if(commandName == `beijo`){
  return interaction.reply({

    embeds: [new discord.EmbedBuilder().setDescription(`<@${interaction.user.id}> **beijou** ${user}`)
    .setTitle('Um *beijinho* para lhe deixar feliz :heart:')
 .setColor('DarkRed')
 .setImage("https://acegif.com/wp-content/uploads/anime-kiss-23.gif")
]})
  }
else if(commandName == `abraço`){
  return interaction.reply({
    embeds: [new discord.EmbedBuilder().setDescription(`<@${interaction.user.id}> abraçou ${user}`)
    .setTitle('Um abraço quentinho? :pleading_face:')
  .setColor('DarkVividPink')
  .setImage("https://media2.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif")
  ]})
  }  
}
})


client.login(token); 
