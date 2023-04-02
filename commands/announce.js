const { Client, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, TextChannel } = require(`discord.js`);
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
        .addBooleanOption(option=>
            option.setName(`publish`)
                .setDescription(`You still have to click 'publish' this just changes the way the bot messages the channel.`)
                .setRequired(true))
        .addChannelOption(option =>
            option.setName(`channel`)
                .setDescription(`What channel should it be posted in? Required if you put 'true' under publish.`)
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDMPermission(false),
        async execute(interaction) {

            const announcement = interaction.options.getString(`announcement`);
            const user = interaction.options.getUser(`user`);
            const pub = interaction.options.getBoolean(`publish`);
            const sendIn = interaction.options.getChannel(`channel`);
            const id = user.id
            const avatarURL = user.avatar
            const username = user.username
            const guildname = interaction.guild.name
            

            const sent = new EmbedBuilder()
                .setColor([50, 168, 82])
                .setTitle(`✅ Announcement sent!`)
                .setDescription(`You sent an announcement: \n ${announcement}`)
                .setFooter({ text: `Don't see the announcement? Make sure you specified a channel in the command.`})

            const announced = new EmbedBuilder()
                .setColor([50, 168, 82])
                .setTitle(`📢 New announcement!`)
                .setDescription(`${announcement}`)
                .setAuthor({name: `${username}`, iconURL: `https://cdn.discordapp.com/avatars/${id}/${avatarURL}.webp`})
                .setFooter({ text: `${guildname}`})

            function doPublish() {
                interaction.reply({ embeds: [sent], ephemeral: true })
                sendIn.send({ embeds: [announced], ephemeral: false })
            }

            function noPublish() {
                interaction.reply({ embeds: [announced], ephemeral: false })
            }

            if (pub === true) {
                doPublish();
            } else if (pub === false) {
                noPublish();
            }
        },
    };