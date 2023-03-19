const { Client, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ActivityType } = require(`discord.js`);
module.exports = {
    data: new SlashCommandBuilder()
        .setName(`status`)
        .setDescription(`Change the status of the bot!`)
        .addStringOption(option =>
            option.setName('base')
                .setDescription('Choose the base.')
                .setRequired(true)
                .addChoices(
                    { name: `Online`, value: `online` },
                    { name: `Do Not Disturb`, value: `dnd` },
                    { name: `Idle`, value: `idle` },
                    { name: `Invisible`, value: `invisible`},
                )),
                async execute(interaction) {
                    const base = interaction.options.getString(`base`);
                    var basecapitalised = `empty`

                    if (base === `online`) {
                        basecapitalised = `Online`
                    } else if (base === `dnd`) {
                        basecapitalised = `Do Not Disturb`
                    } else if (base === `idle`) {
                        basecapitalised = `Idle`
                    } else if (base === `invisible`) {
                        basecapitalised = `Invisible`
                    }

                    const feedback = new EmbedBuilder()
                        .setColor(`Green`)
                        .setTitle(`✅ Success!`)
                        .setDescription(`You've changed my status!`)
                        .addFields(
                            { name: `Status:`, value: `${basecapitalised}`},
                            { name: `Activity:`, value: `soon™️`},
                        )
                    await interaction.reply({ embeds: [feedback], ephemeral: true });
                },
        };