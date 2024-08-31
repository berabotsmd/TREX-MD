const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    nomCom: "apk",
    alias: ["ps","downapk","playstore"],
    desc: "download playstore app",
    reaction: "📥",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, {
        image: {
            url: icon,
        },
        caption: `
        \n ✧ *𝐓𝐑𝐄𝐗 𝐌𝐃  APP DOWNLOADER*
        \n━━━━━━━━━━━━━━━━━━
        
        \n ┇📚 *ᴀᴘᴘ ɴᴀᴍᴇ:* ${getname}
        
        \n ┇⬆️ *ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ:* ${lastupdate}
        
        \n ┇💻 *ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ:* ${packagename}
        
        \n ┇📊 *ꜰɪʟᴇ ꜱɪᴢᴇ:* ${size}
        
        \n ❭ *𝐓𝐑𝐄𝐗 𝐌𝐃  ° 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐁𝐞𝐫𝐚`,
    })
    return Void.sendMessage(citel.chat, {
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
        caption: `👑 *𝐓𝐑𝐄𝐗 𝐌𝐃 *
👩‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐁𝐞𝐫𝐚*`,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(` *❌ An error occurred while processing your request. Please try again later.* ${err}`);
  }
})
  //---------------------------------------------------------------------------
