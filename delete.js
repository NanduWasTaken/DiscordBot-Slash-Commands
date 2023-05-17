const { REST, Routes } = require("discord.js");
const config = require("./config.json");

const rest = new REST({ version: "10" }).setToken(config.TOKEN);

// for global commands
rest
  .put(Routes.applicationCommands(config.CLIENT_ID), { body: [] })
  .then(() =>
    console.log("[⚙️] Successfully deleted all application commands.")
  )
  .catch(console.error);
