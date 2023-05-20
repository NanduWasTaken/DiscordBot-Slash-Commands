const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  Collection,
  Events,
  IntentsBitField,
  ActivityType,
  REST,
  Routes,
} = require("discord.js");
const config = require("./config.json");
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

client.commands = new Collection();
const commands = [];

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

const rest = new REST({ version: "10" }).setToken(config.TOKEN);

(async () => {
  try {
    const data = await rest.put(Routes.applicationCommands(config.CLIENT_ID), {
      body: commands,
    });
    console.log(
      `[✅] Successfully Registered ${data.length} Application (/) Commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();

// client.on("debug", console.log)
// client.on("warn", console.log)

client.login(config.TOKEN);
