 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "olubisiolumidesodiq12@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Nigeria";
global.github = process.env.GITHUB || "https://github.com";
global.gurl = process.env.GURL || "https://whatsapp.com/";
global.website = process.env.GURL || "https://whatsapp.com/channel/";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://drive.google.com/file/d/16VbrCSYVQjv_85TPtJuXx1FAwZSCI_HV/view?usp=drivesdk";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "09014334521";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT055SUQ0MnUzTkR5UjlLeHFIZUtKZk1EcWFqaUVjazl0TTRGWUM1cWRGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1lpS1duWkVsQ1lvekcyd1FBS2pIemt5SGIyclNlck5sTGVabzBsZkt6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSktGb3gySE0vbUFXRkNNVXRQRWV0d1BHS3NsMGxTRVlsTHZ5ejRjbTJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1SGtZRkpUdXB2MW05MHhnclZ4Q1haRUNqUGt1aTVUdnVibUF2WHZrK0g0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIemkyVVF3aHZ3RWttbEtoZ0VaaVhHRFBORGF4VFlqNnlEeERTZlVnSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxRDJZbE92SUtYREVGRE9XQ2lXUm9OTXBud2NxUWlsdTRIRkVUalpIRHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9VQS9EYlRoSzY5T0JSYzRZR2ZnZ1pzTXJiNDQ5Y0pEaGROOFR2N0QzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjJaUktzMWZCc3dwelV2Sk5jMkdWNVZPVEdRSnovVmpkT3Vja3R4bzlFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNaYW1TaDk2alYwL1hZVjZTYWJoT25VRzNEOWx4V1g0eXZrTlY2L3lnWm01Qnh5SEQzTDlackVaL2xvKzhUTHVBL0NnMFN4VlNqL1dKUkVPSjJLZkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJlUERnakFMK0RLS1BDN0dWTXlBU3M5RVljemZxZ2ZWK1dEdWFaVzU1VFhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBdHRsVmZQNFJRR0lMMDJfazlrYnNnIiwicGhvbmVJZCI6IjFjOWYyMWQwLWVmMjEtNGQ0NC04YjMyLTE5OTNhMTI0ZmFkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxL00vb1ZGVmZObUs2Z2MyeDhIUlVNRkNabEk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVyY0NCNFVCdnZMQjErUzAySm1QMTI5WTg0TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2S3NzQURFS3ZUdzdVR0dDVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNud2dVdmtEZmhPL09DTnRldVd0WWhtKzBxakVsUHBUaWRyY3FhU3hpMkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVRcERYS0lFVEtoWVlUempsNjRmVkhqay91TzJQMWM2S05hUGROcTNybjVxeWYvWkRuMVo0WnlrSDdZWXg2OXlrNW5WVjNaTmxpZ2g2bGNwSVlPY0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRTmhjYlkyWTJMWSt0eUhYNSt1UnVFT0hXTE9aZXNlc3g1RFFPZ1V1Q3dFYUd2UnhoazhzVDZwaElKbmxobmUzclBidXVCTTJSemJrRmg5bisra2hEQT09In0sIm1lIjp7ImlkIjoiMjM0OTAxNDMzNDUyMTozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHb3RoIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTQzMzQ1MjE6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEo4SUZMNUEzNFR2emdqYlhybHJXSVp2dEtveEpUNlU0bmEzS21rc1l0aCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjg3MDIwMH0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By GOTH*",
  author: process.env.PACK_AUTHER || "GOTH",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "GOTH-BOT",
  ownername: process.env.OWNER_NAME || "GOTH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
