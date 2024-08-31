const {zokou} =require("../framework/zokou");

king({ nomCom: "bible",
        reaction: "🎎",
        categorie: "General" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions; 

const verse = arg.join(' ');

if (!verse) return repondre(`Please specify the book, the chapter and the verse you want to read. Example: bible john 3:16`);

let VerseRes = await fetch(`https://bible-api.com/${verse}`);

if (!VerseRes.ok) return repondre(`Please specify the chapter number or name. Example: bible john 3:16`);

let verseData = await VerseRes.json();

let bibleChapter = `📖 *THE HOLY BIBLE*\n
📜 *_Book:_* ${verseData.reference}\n
🔢 *_Verses:_* ${verseData.verses.length}\n
🤍 *_Content:_* ${verseData.text}\n
🌍 *_Language_:* ${verseData.translation_name}\n\n`

await repondre(bibleChapter);

});
