"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "📑", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/berabotsmd/TREX-MD';
  const img = 'https://telegra.ph/file/facc348fe55872516168d.jpg';

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

      const gitdata = `*𝐡𝐞𝐲 𝐬𝐬𝐮𝐩 𝐮𝐬𝐞𝐫 👋, 𝗜 𝗮𝗺* *𝗧𝗿𝗲𝘅-𝗠𝗱*\n 
╭⊱✫🔮𝐓𝐑𝐄𝐗-𝐌𝐃🔮✫⊱╮
│✫ - *📂Repository Name:* ${data.html_url}
│✫ - *📃 Release date:* ${repoInfo.lastUpdate}
│✫ - *🛡️Owner:*BRUCE BERA
│✫ - *⭐Stars:* ${repoInfo.stars}
│✫ - *💌Forks:* ${repoInfo.forks}
│✫ - *🌐Pair code:*https://web-vvvf.onrender.com/}
╰━━━━━━━━━━━━━━━━━╯

__________________________________
            *𝐓𝐑𝐄𝐗-𝐌𝐃*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
