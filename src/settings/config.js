require("dotenv").config();

module.exports = {

  token: process.env.TOKEN || "", // <==== PASTE YOU TOKEN
  prefix: process.env.PREFIX || ".", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
  color: process.env.EMBED_COLOR || "#2f3136", // <==== YOU EMBEDED HEX COLOR
  owner: process.env.OWNER_ID || "1053871662283628615", // <==== BOTS OWNER ID
  guildLogs: process.env.GUILD_LOGS || "1204057432112889926", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
  leaveTimeout: process.env.LEAVE_TIMEOUT || "1000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
  disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

  // ⬇⬇⬇ PORU DETAILS
  playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
  poruOptions: {
    defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
    clientID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8", // <==== SPOTIFY CLIENT ID
    clientSecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81", // <==== SPOTIFY CLIENT SECRET
    reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
    playlistLimit: 5, // <==== 1 = 100 TRACKS
    albumLimit: 5, // <==== 1 = 50 TRACKS
    artistLimit: 5, // <==== 1 = 50 TRACKS
    searchMarket: "us",
  },
  nodes: [
    {
      name: process.env.NODE_NAME1 || "Main", 
      host: process.env.NODE_HOST1 || "lava.link", 
      port: parseInt(process.env.NODE_PORT1 || "80"), 
      password: process.env.NODE_PASSWORD1 || "LAVA", 
      secure: parseBoolean(process.env.NODE_SECURE1 || "false"),
      regions: process.env.NODE_REGIONS1 || ["singapore"], 
    }
  ],


  mongoUri: process.env.MONGO_URI || "mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority", 
  supportUrl: process.env.SUPPORT_URL || "https://discord.gg/wZHjUG4AYC", 
  voteUrl: process.env.VOTE_URL || "https://discord.gg/wZHjUG4AYC",
  inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1207672831215669318&permissions=8&scope=bot", 
  imageUrl: process.env.IMAGE_URL || "https://media.discordapp.net/attachments/1204018606980071424/1207671823752503336/55e2c17d24b5888415c2a93c0b265c92.gif?ex=65e07f08&is=65ce0a08&hm=b22e02666f061bd708b6bc0cc9a53ebd2ebf46343cfd23b0d29ff25e99ff518d&",
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}

