const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*BLAST-MD BOT*
╭–––––––––––––––––––––––––►
┆► *🎯OWNER:* DENZO-UCHIWA
┆►
├► *🎯NUMBER:* +244956100349 
├►
┆► *🎯Version:* 0.0.9
├►
┆► *🎯𝐁𝐋𝐀𝐒𝐓-𝐌𝐃*:  
├►
┆► *🎯Developed by*: 𝐃𝐄𝐍𝐙𝐎 𝐔𝐂𝐇𝐈𝐖𝐀
├►
┆► 🎯𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 BY DENZO-UCHIWA
╰––––––––––––––––––––––––––►
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/08f0eaf22ae3a2808b3a9.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
