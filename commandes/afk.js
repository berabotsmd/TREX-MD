const {
  zokou
} = require("../framework/zokou");
const traduire = require("../framework/traduction");
const axios = require('axios');
zokou({
  'nomCom': "bot",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x224577, _0x32b6fd, _0x3099ee) => {
  const {
    repondre: _0x11aae3,
    ms: _0x1db197,
    arg: _0x1968d5
  } = _0x3099ee;
  if (!_0x1968d5 || !_0x1968d5[0x0]) {
    return _0x11aae3("yes my brother how are you I'm listening to you today.");
  }
  try {
    const _0x47c0b6 = await traduire(_0x1968d5.join(" "), {
      'to': 'en'
    });
    console.log(_0x47c0b6);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x47c0b6).then(_0x23f866 => _0x23f866.json()).then(_0x3898ac => {
      const _0x12ac0c = _0x3898ac.cnt;
      console.log(_0x12ac0c);
      traduire(_0x12ac0c, {
        'to': 'fr'
      }).then(_0x14437b => {
        _0x11aae3(_0x14437b);
      })["catch"](_0x38e011 => {
        console.error("Erreur lors de la traduction en français :", _0x38e011);
        _0x11aae3("Erreur lors de la traduction en français");
      });
    })["catch"](_0x4cef77 => {
      console.error("Erreur lors de la requête à BrainShop :", _0x4cef77);
      _0x11aae3("Erreur lors de la requête à BrainShop");
    });
  } catch (_0x227589) {
    _0x11aae3("oupsaa une erreur : " + _0x227589);
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '🌐',
  'categorie': 'IA'
}, async (_0x4b2bf0, _0xdbe46e, _0x283965) => {
  const {
    repondre: _0x17ca66,
    arg: _0x13e667,
    ms: _0x27fe4f
  } = _0x283965;
  try {
    if (!_0x13e667 || _0x13e667.length === 0x0) {
      return _0x17ca66("Veuillez poser une question.");
    }
    const _0x2168aa = _0x13e667.join(" ");
    const _0x498278 = "https://api.giftedtechnexus.co.ke/api/ai/gpt4?q=" + encodeURIComponent(_0x2168aa) + "&apikey=giftedtechk";
    const _0x5b97e1 = await axios.get(_0x498278);
    const {
      data: _0x356e2c
    } = _0x5b97e1;
    if (_0x356e2c && _0x356e2c.result) {
      _0x17ca66(_0x356e2c.result);
    } else {
      _0x17ca66("Erreur lors de la génération de la réponse");
    }
  } catch (_0x55b3e7) {
    console.error("Erreur:", _0x55b3e7.message || "Une erreur s'est produite");
    _0x17ca66("Oups, une erreur est survenue lors du traitement de votre demande.");
  }
});
zokou({
  'nomCom': "Alpha",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x37d1f7, _0x540e95, _0x5569d2) => {
  const {
    repondre: _0x186849,
    ms: _0x1c9c05,
    arg: _0x1fcd00
  } = _0x5569d2;
  if (!_0x1fcd00 || !_0x1fcd00[0x0]) {
    return _0x186849("yes my brother how are you I'm listening to you today.");
  }
  try {
    const _0x5e717c = await traduire(_0x1fcd00.join(" "), {
      'to': 'en'
    });
    console.log(_0x5e717c);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x5e717c).then(_0x20fa21 => _0x20fa21.json()).then(_0x43b7c2 => {
      const _0x3771ed = _0x43b7c2.cnt;
      console.log(_0x3771ed);
      traduire(_0x3771ed, {
        'to': 'en'
      }).then(_0x2f8d33 => {
        _0x186849(_0x2f8d33);
      })["catch"](_0x152f41 => {
        console.error("Erreur lors de la traduction en français :", _0x152f41);
        _0x186849("Erreur lors de la traduction en français");
      });
    })["catch"](_0x41f6a3 => {
      console.error("Erreur lors de la requête à BrainShop :", _0x41f6a3);
      _0x186849("Erreur lors de la requête à BrainShop");
    });
  } catch (_0x3cdcef) {
    _0x186849("oupsaa une erreur : " + _0x3cdcef);
  }
});
zokou({
  'nomCom': "dalle",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x42ce95, _0x37416b, _0x3350e8) => {
  const {
    repondre: _0x515bcb,
    arg: _0x2aea41,
    ms: _0xe583f3
  } = _0x3350e8;
  try {
    if (!_0x2aea41 || _0x2aea41.length === 0x0) {
      return _0x515bcb("Veuillez entrer les informations nécessaires pour générer l'image.");
    }
    const _0x2b4e86 = _0x2aea41.join(" ");
    const _0x1ea759 = "https://widipe.com/dalle?text=" + encodeURIComponent(_0x2b4e86);
    await _0x37416b.sendMessage(_0x42ce95, {
      'image': {
        'url': _0x1ea759
      },
      'caption': "*powered by TREX-MD*"
    }, {
      'quoted': _0xe583f3
    });
  } catch (_0x1144e3) {
    console.error("Erreur:", _0x1144e3.message || "Une erreur s'est produite");
    _0x515bcb("Oups, une erreur s'est produite lors du traitement de votre demande");
  }
});
