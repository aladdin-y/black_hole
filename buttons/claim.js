const client = require("../.")
const config = client.config;
const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');

module.exports = {
	id: 'claim',
	permissions: [],
	run: async (client, interaction) => {

        const embed1 = new EmbedBuilder()
          .setColor(0x0099FF)
          .setDescription('تم استلام التكت من قبل اداري')
          .setTimestamp();
        const claim2 = new ButtonBuilder()
          .setCustomId('claim2')
          .setLabel(`${interaction.member.user.globalName}`)
          .setEmoji('<:Yaktori_pleverified:1036722260238684231>')
          .setStyle(ButtonStyle.Success)
          .setDisabled(true);

        const row1 = new ActionRowBuilder()
          .addComponents(claim2);

        interaction.message.edit({ embeds: [embed1], components: [row1] });

        interaction.reply(`تم استلام التذكره من قبل <@${interaction.member.id}>`)

    }
};
