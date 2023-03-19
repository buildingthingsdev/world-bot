const { Client, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, TextChannel } = require(`discord.js`);
const { announceChannel } = require('../config/config.json');
module.exports = {
    data: new SlashCommandBuilder()
        .setName(`announce`)
        .setDescription(`Announces`)
        .addStringOption(option =>
            option.setName(`announcement`)
                .setDescription(`What do you want to announce?`)
                .setRequired(true))
        .addUserOption (option =>
            option.setName(`user`)
            .setDescription(`Who is making this annoucement?`)
            .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDMPermission(false),
        async execute(interaction) {

            const announcement = interaction.options.getString(`announcement`);
            const user = interaction.options.getUser(`user`);
            const id = user.id
            const avatarURL = user.avatar
            const username = user.username
            

            const sent = new EmbedBuilder()
                .setColor([50, 168, 82])
                .setTitle(`✅ Announcement sent!`)
                .setDescription(`You sent an announcement: \n ${announcement}`)

            const announced = new EmbedBuilder()
                .setColor([50, 168, 82])
                .setTitle(`📢 New announcement!`)
                .setDescription(`${announcement}`)
                .setAuthor({name: `${username}`, iconURL: `https://cdn.discordapp.com/avatars/${id}/${avatarURL}.webp`})
                .setFooter({ text: `This command is broken.` });

            const channel = interaction.client.channels.cache.get(`${announceChannel}`);
            channel.send({ embeds: [announced] })
            interaction.reply({ embeds: [sent], ephemeral: true })
        },
    };