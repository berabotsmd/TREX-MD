"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🔎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/betingrich/bugatti';
  const img = 'https://telegra.ph/file/46131539229f7e5614ea7.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*𝐇𝐢 𝐔𝐬𝐞𝐫,𝐈𝐭 𝐒𝐞𝐞𝐦𝐬 𝐘𝐨𝐮 𝐋𝐢𝐤𝐞 𝐁𝐮𝐠𝐚𝐭𝐭𝐢*\n  
      *𝐀𝐥𝐥 𝐘𝐨𝐮 𝐍𝐞𝐞𝐝 𝐓𝐨 𝐊𝐧𝐨𝐰 𝐢𝐬 𝐇𝐞𝐫𝐞.*
🥇 *𝐏𝐚𝐢𝐫 𝐂𝐨𝐝𝐞* https://web-vvvf.onrender.com/
🥇 *𝐑𝐞𝐩𝐨:* ${data.html_url}
🥇 *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
🥇 *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
🥇 *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
🥇 *𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐨𝐧:* ${repoInfo.lastUpdate}
🥇 *𝐎𝐰𝐧𝐞𝐫:* *𝐌𝐚𝐫𝐢𝐬𝐞𝐥*
__________________________________
                     *𝐁𝐔𝐆𝐀𝐓𝐓𝐈*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
