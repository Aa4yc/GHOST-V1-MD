const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gEZAmYRS#6xPXbQReLXc5FFdg6QN4EblKwvBRezt9EP3IA-iiRXo",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi Shisui-MD Is Online Now 💻\n*💻 Owner* - GHOST-MD\n\n*💻 Owner Number* 94741140620",
SUDO_NB: process.env.SUDO_NB || "94741140620",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
AUTO_VOICE:"false"
};
