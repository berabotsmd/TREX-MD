const {
    aitts,
    smd,
    prefix,
    Config,
    parsedJid,
    sleep,
  } = require("../lib");
  const axios = require("axios");
  const { send } = require("../lib");
  const fetch = require("node-fetch");
  function _0x2a0d(_0x32de74, _0xce23fd) {
    const _0x3ffb1a = _0x2953();
    _0x2a0d = function (_0x151552, _0x18c062) {
      _0x151552 = _0x151552 - 233;
      let _0x5c396f = _0x3ffb1a[_0x151552];
      return _0x5c396f;
    };
    return _0x2a0d(_0x32de74, _0xce23fd);
  }
  function _0x2953() {
    const _0x4f0c10 = [
      "json",
      "choices",
      "2KTKIiW",
      "application/json",
      "chat",
      "http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[",
      "4017447FwUKbt",
      "2673069xtYnEg",
      "REMOVE_BG_KEY",
      "Bearer ",
      "image-alpha-001",
      "320668Kzvhym",
      "data",
      "then",
      "message",
      "1548910BYiCAA",
      "error in aiResponce : ",
      "119490ILpvcx",
      "system",
      "sender",
      "binary",
      "from",
      "log",
      "dalle",
      "https://api.remove.bg/v1.0/removebg",
      "567277OBjzQH",
      "length",
      "get",
      "POST",
      "stringify",
      "content",
      "512x512",
      "78qmNvDj",
      "https://api.openai.com/v1/images/generations",
      "Error While getting Ai responce ",
      "url",
      "catch",
      "]&msg=[",
      "split",
      "8yTiNwA",
      "You",
      "gpt",
      "1769427SEqioY",
    ];
    _0x2953 = function () {
      return _0x4f0c10;
    };
    return _0x2953();
  }
  (function (_0x4f4b4b, _0x46381a) {
    const _0x23b0f7 = _0x2a0d;
    const _0x17ab9c = _0x4f4b4b();
    while (true) {
      try {
        const _0x24d937 =
          (parseInt(_0x23b0f7(264)) / 1) * (-parseInt(_0x23b0f7(241)) / 2) +
          parseInt(_0x23b0f7(238)) / 3 +
          -parseInt(_0x23b0f7(250)) / 4 +
          (-parseInt(_0x23b0f7(256)) / 5) * (parseInt(_0x23b0f7(271)) / 6) +
          (parseInt(_0x23b0f7(246)) / 7) * (parseInt(_0x23b0f7(235)) / 8) +
          parseInt(_0x23b0f7(245)) / 9 +
          -parseInt(_0x23b0f7(254)) / 10;
        if (_0x24d937 === _0x46381a) {
          break;
        } else {
          _0x17ab9c.push(_0x17ab9c.shift());
        }
      } catch (_0x1a2819) {
        _0x17ab9c.push(_0x17ab9c.shift());
      }
    }
  })(_0x2953, 305050);
  async function aiResponce(_0x109acf, _0xf00650, _0x2728a0 = "") {
    const _0x242f00 = _0x2a0d;
    let _0x2d78d9 = "";
    try {
      if (_0xf00650 === _0x242f00(243)) {
        _0x2d78d9 = await (
          await axios[_0x242f00(266)](
            _0x242f00(244) +
              _0x109acf[_0x242f00(258)][_0x242f00(234)]("@")[0] +
              _0x242f00(233) +
              _0x2728a0 +
              "]"
          )
        )[_0x242f00(251)].cnt;
      } else if (_0xf00650 === _0x242f00(237)) {
        const _0x3e1043 = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: _0x242f00(248) + Config.OPENAI_API_KEY,
            },
            body: JSON[_0x242f00(268)]({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: _0x242f00(257),
                  content: _0x242f00(236),
                },
                {
                  role: "user",
                  content: _0x2728a0,
                },
              ],
            }),
          }
        );
        const _0x26c61c = await _0x3e1043[_0x242f00(239)]();
        if (
          !_0x26c61c[_0x242f00(240)] ||
          _0x26c61c[_0x242f00(240)][_0x242f00(265)] === 0
        ) {
          _0x2d78d9 = "*Invalid ChatGPT API Key, Please Put New Key*";
        } else {
          _0x2d78d9 =
            _0x26c61c[_0x242f00(240)][0][_0x242f00(253)][_0x242f00(269)];
        }
      } else if (_0xf00650 === _0x242f00(262)) {
        const _0x1a4db1 = await fetch(_0x242f00(272), {
          method: _0x242f00(267),
          headers: {
            "Content-Type": _0x242f00(242),
            Authorization: _0x242f00(248) + Config.OPENAI_API_KEY,
          },
          body: JSON[_0x242f00(268)]({
            model: _0x242f00(249),
            prompt: _0x2728a0,
            size: _0x242f00(270),
            response_format: _0x242f00(274),
          }),
        });
        const _0x2cdadf = await _0x1a4db1[_0x242f00(239)]();
        _0x2d78d9 = _0x2cdadf[_0x242f00(251)][0][_0x242f00(274)];
      }
      if (_0xf00650 === "rmbg") {
        const _0x142226 = {
          image_url: _0x2728a0,
          size: "auto",
        };
        axios
          .post(_0x242f00(263), _0x142226, {
            headers: {
              "X-Api-Key": Config[_0x242f00(247)],
            },
            responseType: "arraybuffer",
          })
          [_0x242f00(252)]((_0x18f9bd) => {
            const _0x382416 = _0x242f00;
            _0x2d78d9 = Buffer[_0x382416(260)](
              _0x18f9bd[_0x382416(251)],
              _0x382416(259)
            );
          })
          [_0x242f00(275)]((_0x25d8c1) => {
            _0x2d78d9 = false;
          });
      }
      return _0x2d78d9;
    } catch (_0x4eee67) {
      console[_0x242f00(261)](_0x242f00(255), _0x4eee67);
      return _0x242f00(273);
    }
  }
  smd(
    {
      pattern: "rmbg",
      alias: ["removebg"],
      desc: "Removes the background from an image.",
      category: "ai",
      filename: __filename,
      use: "<image URL>",
    },
    async (message, input) => {
      try {
        const url = input.trim();
        if (!url || !isValidUrl(url)) {
          return await message.send("*_Please provide a valid image URL._*");
        }
  
        const apiUrl = `https://aemt.me/removebg?url=${encodeURIComponent(url)}`;
        const response = await axios.get(apiUrl, {
          headers: {
            "accept": "application/json",
          },
        });
        const data = response.data;
  
        if (!data || !data.url || !data.url.status === "true") {
          return await message.reply("*Failed to remove background from the image.*");
        }
  
        const resultUrl = data.url.result;
        const imageBuffer = await axios.get(resultUrl, { responseType: "arraybuffer" });
        const buffer = Buffer.from(imageBuffer.data, "binary");
        await message.bot.sendMessage(message.chat, { image: buffer }, { quoted: message });
      } catch (error) {
        await message.error(error + "\n\nCommand: rmbg", error, "*Failed to remove background from the image.*");
      }
    }
  );
  
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }
  smd(
    {
      pattern: "sd",
      desc: "Generates an image using Stable Diffusion AI.",
      category: "ai",
      filename: __filename,
      use: "<text>",
    },
    async (message, input) => {
      try {
        const text = input.trim();
        if (!text) {
          return await message.send("*_Please provide some text to generate an image._*");
        }
  
        const apiUrl = `https://aemt.me/stablediffusion?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
          headers: {
            "accept": "application/json",
          },
          responseType: "arraybuffer",
        });
  
        if (!response.data) {
          return await message.reply("*Failed to generate an image using Stable Diffusion AI.*");
        }
  
        const buffer = Buffer.from(response.data, "binary");
        await message.bot.sendMessage(message.chat, { image: buffer }, { quoted: message });
      } catch (error) {
        await message.error(error + "\n\nCommand: stablediffusion", error, "*Failed to use Stable Diffusion AI.*");
      }
    }
  );
  smd(
    {
      pattern: "bard",
      desc: "Generates a response from Bard AI.",
      category: "ai",
      filename: __filename,
      use: "<text>",
    },
    async (message, input) => {
      try {
        const text = input.trim();
        if (!text) {
          return await message.send("*_Please provide some text to generate a response._*");
        }
  
        const apiUrl = `https://aemt.me/bard?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
          headers: {
            "accept": "application/json",
          },
        });
        const data = response.data;
  
        if (!data || !data.status) {
          return await message.reply("*Failed to generate a response from Bard AI.*");
        }
  
        const result = data.result;
        return await message.send(`*QUEEN_ANITA-V2 ʙᴀʀᴅ ᴀɪ:*\n ${result}`, { quoted: message });
      } catch (error) {
        await message.error(error + "\n\nCommand: bard", error, "*Failed to use Bard AI.*");
      }
    }
  );
  smd({
    pattern: "gpt4",
    category: "ai",
    desc: "Chat with GPT-4 AI model",
    use: "<text>",
    filename: __filename,
  }, async (message, text, { cmdName }) => {
    if (!text) return message.reply(`*_Please provide a query_*\n*_Example ${prefix + cmdName} What is the meaning of life?_*`);
  
    try {
      const apiUrl = `https://ultimetron.guruapi.tech/gpt4?prompt=${encodeURIComponent(text)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (!data.result.success) return message.send("*There's a problem, try again later!*");
  
      const { reply } = data.result;
      const astro = "QUEEN_ANITA-V2 ɢᴘᴛ𝟺\n";
      const tbl = "```";
      await send(message, `${astro}${tbl}${reply}${tbl}`);
    } catch (error) {
      return await message.error(`${error}\n\n command: ${cmdName}`, error, `*_An error occurred while processing your request_*`);
    }
  });
  
  smd({
    pattern: "gemini",
    category: "ai",
    desc: "Chat with Bard AI model",
    use: "<text>",
    filename: __filename,
  }, async (message, text, { cmdName }) => {
    if (!text) return message.reply(`*_Please provide a query_*\n*_Example ${prefix + cmdName} What is the meaning of life?_*`);
  
    try {
      const res = await (await fetch(`https://api.maher-zubair.tech/ai/gemini?q=${text}`)).json();
  
      if (!res.status === 200) return message.send("*There's a problem, try again later!*");
  
      const { result } = res;
      const astro = "QUEEN_ANITA-V2 ɢᴇᴍɪɴɪ ᴀɪ"
      const tbl = "```";
      await send(message, `${astro}${tbl}${result}${tbl}`);
    } catch (e) {
      return await message.error(`${e}\n\n command: ${cmdName}`, e, `*_An error occurred while processing your request_*`);
    }
  });
  smd(
    {
      cmdname: "alexa2",
      category: "ai",
      use: "[text]",
      filename: __filename,
      info: "chat with simsimi alexa ai!",
    },
    async (_0xe6d6e, _0x23f786) => {
      try {
        if (!_0x23f786) {
          return await _0xe6d6e.reply(
            "Hi *" + _0xe6d6e.senderName + "*, do you want to talk?"
          );
        }
        const _0x55bb61 = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "text=" + encodeURIComponent(_0x23f786) + "&lc=en&key=",
        };
        const _0x5099c8 = await fetch(
          "https://api.simsimi.vn/v2/simtalk",
          _0x55bb61
        );
        const _0x2c3e12 = await _0x5099c8.json();
        if (_0x2c3e12.status === "200" && _0x2c3e12.message) {
          _0xe6d6e.reply(_0x2c3e12.message);
        } else {
          _0xe6d6e.reply("*No Responce!*");
        }
      } catch (_0xfee6e3) {
        await _0xe6d6e.error(
          _0xfee6e3 + "\n\ncommand : poetry",
          _0xfee6e3,
          false
        );
      }
    }
  );
  smd(
    {
      pattern: "chat",
      desc: "chat with an AI",
      category: "ai",
      use: "<Hii, Astro>",
      filename: __filename,
    },
    async (_0x1c0160, _0x482db1) => {
        let astro = "QUEEN_ANITA-V2 ᴄʜᴀᴛ ʙᴏᴛ"
      try {
        return _0x1c0160.reply(await aiResponce(_0x1c0160, "chat", _0x482db1));
      } catch (_0x4adf95) {
        await _0x1c0160.error(
          _0x4adf95 + "\n\ncommand: chat",
          _0x4adf95,
          "*_no responce from chatbot, sorry!!_*"
        );
      }
    }
  );
  smd(
    {
      pattern: "dalle",
      alias: ["dall", "dall-e"],
      desc: "chat with an AI",
      category: "ai",
      use: "<Hii, Astro>",
      filename: __filename,
    },
    async (m, q) => {
      try {
        if (!q) {
          return await m.reply("*Give Me A Query To Get Dall-E Response?*");
        }
  
        const apiUrl = `https://api.maher-zubair.tech/ai/dalle?q=${encodeURIComponent(q)}`;
  
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          if (data.status === 200 && data.img) {
            return await m.bot.sendMessage(m.chat, {
              img: { url: data.img },
              caption: `[PROMPT]: \`\`\`${q}\`\`\` \n ${Config.caption}`,
            });
          } else {
            return m.reply(`\`\`\`${data.err || "Error generating image"}\`\`\``);
          }
        } catch (err) {
          console.log("ERROR IN DALLE RESPONSE FROM API", err);
          return m.reply("*_No response from Dall-E AI, Sorry!_*");
        }
      } catch (err) {
        await m.error(err + "\n\ncommand: dalle", err, "*_No response from Dall-E AI, Sorry!_*");
      }
    }
  );
  smd(
    {
      pattern: "imagine",
      alias: ["imagin"],
      desc: "chat with an AI",
      category: "ai",
      use: "<boy walking on street>",
      filename: __filename,
    },
    async (_0x9bac01, _0x3700d4) => {
      try {
        let _0x2968fd = _0x3700d4 || _0x9bac01.reply_text;
        if (!_0x2968fd) {
          return await _0x9bac01.reply("*Give Me A Query To Get imagination?*");
        }
        let _0x24d5e9 = false;
        try {
          const _0x156dd7 = await fetch(
            "https://aemt.me/openai?text=" +
              (_0x2968fd +
                " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!")
          );
          const _0x49b22e = await _0x156dd7.json();
          _0x24d5e9 =
            _0x49b22e && _0x49b22e.status && _0x49b22e.result
              ? _0x49b22e.result
              : "";
        } catch (_0xf1623a) {
          _0x24d5e9 = false;
        }
        try {
          await Draw(_0x2968fd || _0x9bac01.reply_text).then((_0x1f03a3) => {
            _0x9bac01.bot.sendMessage(_0x9bac01.chat, {
              image: _0x1f03a3,
              caption:
                "*[IMAGININATION]:* ```" +
                _0x2968fd +
                " ```" +
                (_0x24d5e9
                  ? "\n\n*[RESPONCE]:* ```" + _0x24d5e9 + "``` \n"
                  : "") +
                "  \n " +
                Config.caption +
                " ",
            });
          });
          return;
        } catch (_0x45726b) {
          console.log("ERROR IN IMAGINE RESPONCE FROM IMAGINE API n", _0x45726b);
        }
        if (
          Config.OPENAI_API_KEY == "" ||
          !Config.OPENAI_API_KEY ||
          !("" + Config.OPENAI_API_KEY).startsWith("sk")
        ) {
          return _0x9bac01.reply(
            "```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```"
          );
        }
        return await _0x9bac01.bot.sendMessage(_0x9bac01.chat, {
          image: {
            url: await aiResponce(_0x9bac01, "dalle", _0x2968fd),
          },
          caption: "*---Your DALL-E Result---*\n" + Config.caption,
        });
      } catch (_0x5d8080) {
        await _0x9bac01.error(
          _0x5d8080 + "\n\ncommand: imagine",
          _0x5d8080,
          "*_No responce from Server side, Sorry!!_*"
        );
      }
    }
  );
  smd(
    {
      pattern: "imagine2",
      alias: ["imagin2"],
      desc: "chat with an AI",
      category: "ai",
      use: "<boy walking on street>",
      filename: __filename,
    },
    async (_0x39716c, _0xe79cfd) => {
      try {
        let _0x5e79d4 = _0xe79cfd || _0x39716c.reply_text;
        if (!_0x5e79d4) {
          return await _0x39716c.reply("*Give Me A Query To Get imagination?*");
        }
        const _0x14515f =
          "https://gurugpt.cyclic.app/dalle?prompt=" +
          encodeURIComponent(
            _0x5e79d4 + " \nNOTE: Make sure to looks like imagination"
          );
        let _0x5d0b6a = false;
        try {
          const _0x37057d = await fetch(
            "https://aemt.me/openai?text=" +
              (_0x5e79d4 +
                " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!")
          );
          const _0x644785 = await _0x37057d.json();
          _0x5d0b6a =
            _0x644785 && _0x644785.status && _0x644785.result
              ? _0x644785.result
              : "";
        } catch (_0x3ecac9) {
          _0x5d0b6a = false;
        }
        try {
          return await _0x39716c.bot.sendMessage(_0x39716c.chat, {
            image: {
              url: _0x14515f,
            },
            caption:
              "*[IMAGININATION]:* ```" +
              _0x5e79d4 +
              " ```" +
              (_0x5d0b6a ? "\n\n*[RESPONCE]:* ```" + _0x5d0b6a + "``` \n" : "") +
              "  \n " +
              Config.caption +
              " ",
          });
        } catch (_0x484392) {
          console.log("ERROR IN IMAGINE RESPONCE FROM API GURUGPT\n", _0x484392);
        }
        if (
          Config.OPENAI_API_KEY == "" ||
          !Config.OPENAI_API_KEY ||
          !("" + Config.OPENAI_API_KEY).startsWith("sk")
        ) {
          return _0x39716c.reply(
            "```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```"
          );
        }
        return await _0x39716c.bot.sendMessage(_0x39716c.chat, {
          image: {
            url: await aiResponce(_0x39716c, "dalle", _0x5e79d4),
          },
          caption: "*---Your DALL-E Result---*\n" + Config.caption,
        });
      } catch (_0x110b5d) {
        await _0x39716c.error(
          _0x110b5d + "\n\ncommand: imagine",
          _0x110b5d,
          "*_No responce from Server side, Sorry!!_*"
        );
      }
    }
  );
  async function Draw(_0x3ab488) {
    const _0x54c8a4 = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer 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",
        },
        body: JSON.stringify({
          inputs: _0x3ab488,
        }),
      }
    ).then((_0x5838c2) => _0x5838c2.blob());
    const _0x1c59a6 = await _0x54c8a4.arrayBuffer();
    return Buffer.from(_0x1c59a6);
  }
  smd(
    {
      pattern: "aitts",
      desc: "Text to Voice Using Eleven Lab Ai",
      category: "ai",
      use: "<Hii, Astro>",
      filename: __filename,
    },
    async (_0x1a01af, _0x1ac85a) => {
      await aitts(_0x1a01af, _0x1ac85a || _0x1a01af.reply_text);
    }
  );
  const astro_patch_AnonyMsg = {};
  let isAnnonyMsgAlive = "";
  let cmdName = "rcg";
  class AnonymousMsg {
    constructor() {
      this.id = "";
      this.sender = "";
      this.reciever = "";
      this.senderMsg = "";
      this.tellinfo = 0;
      this.howmanyreply = 0;
    }
  }
  smd(
    {
      pattern: "anonymsg",
      alias: ["recognition", "anonychat"],
      desc: "Send message Annonymously",
      category: "ai",
      use: "<Hii, Astro>",
      filename: __filename,
    },
    async (_0x358984, _0x20693a, { smd: _0x12d243 }) => {
      try {
        let _0x32512b = _0x20693a ? _0x20693a : _0x358984.reply_text;
        if (!_0x32512b
