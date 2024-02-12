const { AoiClient } = require("aoi.js");
const client = new AoiClient({
  token: process.env['TOKEN'],
  prefix: "d.",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "mrzhaaieohbtrcdnhyzdnmhyhpbdfehx", // Access the environment variable correctly
  }
});

client.loadCommands("./commands/", true);

client.variables({
  money: 0,
  jogadores: "",
  formação: "4-3-3",
  nome: "Nenhum",
  escudo: "Nenhum",
})