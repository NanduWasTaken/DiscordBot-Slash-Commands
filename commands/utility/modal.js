const {
  SlashCommandBuilder,
  ActionRowBuilder,
  Events,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalSubmitInteraction,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Shows You A Pop Up Form"),
  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId(`modal-${interaction.user.id}`)
      .setTitle("My Favorite Colour");

    const favoriteColor = new TextInputBuilder()
      .setCustomId("favoriteColorInput")
      .setLabel("What's your favorite color?")
      .setPlaceholder("Enter a colour.")
      .setStyle(TextInputStyle.Short);

    const reason = new TextInputBuilder()
      .setCustomId("reasonInput")
      .setLabel("Why is it your favorite colour?")
      .setPlaceholder("Your Reason.Reason.")
      .setStyle(TextInputStyle.Paragraph);

    const firstActionRow = new ActionRowBuilder().addComponents(favoriteColor);
    const secondActionRow = new ActionRowBuilder().addComponents(reason);

    modal.addComponents(firstActionRow, secondActionRow);

    await interaction.showModal(modal);

    try {
      const filter = (interaction) =>
        interaction.customId === `modal-${interaction.user.id}`;

      interaction
        .awaitModalSubmit({ filter, time: 30_000 })
        .then((ModalSubmitInteraction) => {
          const favoriteColor =
            ModalSubmitInteraction.fields.getTextInputValue(
              "favoriteColorInput"
            );
          const reason =
            ModalSubmitInteraction.fields.getTextInputValue("reasonInput");

            ModalSubmitInteraction.reply(
            `**FavoriteColor**\n${favoriteColor}\n**Reason**\n${reason}`
          );
        });
    } catch (err) {
      console.log(err);
    }
  },
};
