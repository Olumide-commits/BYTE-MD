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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Q0dENNSC93eGVFWlJlOWR5YmlnYmdxTk9qL0phV3AvL3ZLdXYyVVEwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzh6bFB6cUlYcko3ajg0Qk5tWjlZYW16MXZvYmw4djB3OFZxVGxtM3BsVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRHdOVlBDMERZcnE1bmRQeUJOTExSY1pRLzZwRmhnaUZ4VmpqVElUNjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaXQ5MzE3L1hNczN4QWNBMFRvNGowdG1sM3VKb0RoeEQvRlhKdWptSGtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GOWlXTzhoaUNGMEJDVjlTYnkvUEVxNmRxTVhuLzBzRWdKclJnRHVabmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJMWXM0YXlaa2tTQVhDcG1MTzJFbDBJSSt0ZUI4L29PR1FZT0R3OTBmbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05nakQ2YTBJSUJQQ053YlYxaEYrcTZ1QmJSVDczSlFhalpzOGUwSVBuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9qWWkzTThoWVdaMm1UL1VtYkRRbGl5QTI4c1dYczBiTDRxaFlvejczOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im44YnZFckpSMEdkWkw1SDF5RmJpU2tLNVZoOHVGVFBORGg5Tk9kTTZJNFhCSDBwYmZleG9zOWliTmVteS8wMVZVbFBuek1Tam9ReHBmcG1uN3ZoNGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6InJSemZTQVBhNlUwT25Qc2VuQ2ZJdFhicGJ3NG5XVWhqdStFWUkxbWY5cUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlgzOGV6S21vVFMyZlpBcFpoQWJzUWciLCJwaG9uZUlkIjoiZTU4NWZiMmQtNTZiZC00YmM1LWI2MDMtYWU2ZGM5MjJkNjRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8xUU9NVEZ0cEtKbURab2xtUUZyN0hRR3pSRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJneTVBMlR3a2l4ZXhGVnlaS3crMUtZalZISlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0dXUVNIQ04iLCJtZSI6eyJpZCI6IjIzNDkwMTQzMzQ1MjE6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR290aCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDZLc3NBREVJMkJ5TFVHR0NZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY253Z1V2a0RmaE8vT0NOdGV1V3RZaG0rMHFqRWxQcFRpZHJjcWFTeGkyRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSEFFeTVhWjI4emFXYjYyR2VDa2QyelNrQkh0eGFkSkpDa1J1eU93Z3U5QlhJaHBjUzMySEtZRzBlVmYzc0V6aW1kNVA2T3lnWTBHdEpWdWMzeERlQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkVFdDhDSlZicUs1UUpXeUJlRGF1UzNaaFgvNEF1SDgweFhCejNEQ2ZINHJFMlYwUDlHYzhYZ2QyMVgrTG13QW91N3l6N3hYSUxjckNGOXNaZ1EzWGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxNDMzNDUyMTozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSjhJRkw1QTM0VHZ6Z2piWHJscldJWnZ0S294SlQ2VTRuYTNLbWtzWXRoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTQxNTk0fQ==" //Make sure session id starts with Byte;;;



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
