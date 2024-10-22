//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "false";
global.owner = process.env.OWNER_NUMBER || "2347051958151";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || "2";
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lrZVVkTzk1RDVjczIrOU1SRkdUMkZmWWR4Z1gzYVdLV1d5T1dkanMyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXpDTEVOMklSaFlmYVJyTERHNEoxZzY3bGQ3NjdEWG4wMHVOQ0N2Y0RXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvUDBqMWpKTVg2eWwxYlJ4Q1JpUjV5RWVKbU85WFV2SG9scU84U0trTUVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzNFdFeXlTYTlWQmFCKzNPVXVWUmt2WFdrS2ZWbXM5L0dTb0tqU0s2MEdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNJTGtyV3d4K3lSMVNHQ2lmSWJyY2hhSmVVWC8yRGxNYWtPSCtWVE8vMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZwMUdRL0ptWjRmS1BTT3JSN0JBMVRaTjhZbG1lTlU3dmtiWm9kdjdnMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUp6RW9HZ1ZPczJEOG9sNjdMTWlmdFZGMDlkMThkbUYrWk1tUVVMdXMzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzMybVBGdlYrSlV5VWZ3cC9uRnFJamE4WHFBd0dPVUhCMzRydW1xSFhsQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpTYTc0cUdPdWtIMytpK3hjanU1cXVKaG9lV2R2ZmpqWWFNWHA2eDZBdU5MNXNQQXFvdWFYUlVvRkZBYVRCNi9Gc0FMbExzQ1dMOE9Zcy9XMEE4cURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJGSW5BQU8xVEt0SUloNTM2bWxtaTBhMjhhVHV1T3dhTHpWbDBmV0w2QWJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqNEM3TVltM1FycTVIUG5BVEQ0NDJRIiwicGhvbmVJZCI6ImM5YjY0NjI3LThhNjQtNDhhOC05ZDEzLWNlMDRmZWQyYjA1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUmQ1Wm90Q3U0dVphMU1renBwbUMvTjY0NXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjcxVlZUbHFEZE03REUxMFVsQmx6V0VybzVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg3RUNMUDg5IiwibWUiOnsiaWQiOiIyMzQ3MDUxOTU4MTUxOjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbTgxekFRak9pUnRnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoSkRjcVh2Q2dZYTZHZ0RYV1FtbzhWWjNuTnRaRk1BMTlYNG8zc1IzanpNPSIsImFjY291bnRTaWduYXR1cmUiOiJzWVRwam9VNlArbDcyT1c3UFJUNmswSkZ0Sm80aThpa0h6SjIrMllJbmloRGdmYmd4bWtDNkZ2NmJaTlJXTUN1d3ZhSHJraEVWTXZSZFVvS1FwUlVBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL3R6SmxFeGJqc0hic1hCNW9ERFk0bmF2WE5aZWR1Z0gwRmhQQ2FPTlFneDQ1TkM3OWMydlY4cnovSVNDSGtqR2N4YTlpK2E3WkRJZlRYQ3VaYUJlQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUxOTU4MTUxOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllTUTNLbDd3b0dHdWhvQTExa0pxUEZXZDV6YldSVEFOZlYrS043RWQ0OHoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQxNTA4MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRnJXIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2_Beta1™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "false",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "false",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "false",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "false",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "false",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
