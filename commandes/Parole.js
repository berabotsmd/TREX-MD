const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const traduire = require('../framework/traduction');
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
zokou({
  'nomCom': "sondage",
  'reaction': '✨',
  'categorie': "Général"
}, async (_0x59d80e, _0x466b5c, _0x3c0247) => {
  const {
    repondre: _0x575df3,
    ms: _0x118226
  } = _0x3c0247;
  const _0x4cb158 = _0x3c0247.arg.join(" ");
  let [_0x288fdd, _0x40f6b8] = _0x4cb158.split('/');
  if (_0x40f6b8.split(',').length < 0x2) {
    return _0x575df3("Format incorrect.\nExemple : sondage Quelle est la réponse/Option 1, Option 2");
  }
  let _0x540b51 = [];
  for (let _0x2f74c of _0x40f6b8.split(',')) {
    _0x540b51.push(_0x2f74c.trim());
  }
  await _0x466b5c.sendMessage(_0x59d80e.id, {
    'poll': {
      'name': _0x288fdd.trim(),
      'values': _0x540b51
    }
  });
});
zokou({
  'nomCom': "faire",
  'reaction': '✌️',
  'categorie': "Fun"
}, async (_0x5ae547, _0x2c2b34, _0x100a4d) => {
  const {
    repondre: _0x473180,
    ms: _0x4221de
  } = _0x100a4d;
  const _0x16b658 = await axios.get("https://nekos.life/api/v2/fact");
  const _0x1f199d = _0x16b658.data;
  _0x473180("◆━━━━━━✦FAIRE✦━━━━━━◆\n*◇* " + _0x1f199d.fact + "\n\n*◇* Powered by *Bera*\n\n╔═════◇\n║◇ *FAIRE PAR TREX-MD*\n╚════════════════════>  ");
});
zokou({
  'nomCom': 'citation1',
  'reaction': '🗿',
  'categorie': "fun"
}, async (_0x10c1a4, _0x247f64, _0x4a4324) => {
  const {
    repondre: _0x14777e,
    ms: _0x5169ca
  } = _0x4a4324;
  _0x14777e(thomasss);
});
zokou({
  'nomCom': "definir",
  'reaction': '😁',
  'categorie': 'Recherche'
}, async (_0xbe2662, _0x548d4c, _0x522aa6) => {
  const {
    repondre: _0x14e00d,
    arg: _0x282504,
    ms: _0x5b820a
  } = _0x522aa6;
  if (!_0x282504 || _0x282504.length === 0x0) {
    return _0x14e00d("Veuillez fournir un terme à définir.");
  }
  const _0x4bd464 = _0x282504.join(" ");
  try {
    const {
      data: _0x1308a5
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x4bd464);
    const _0x34ca3c = "\n    Mot : " + _0x4bd464 + "\n    Définition: " + (await traduire(_0x1308a5.list[0x0].definition.replace(/\[/g, '').replace(/\]/g, ''), {
      'to': 'fr'
    })) + "\n    Définition : " + _0x1308a5.list[0x0].definition.replace(/\[/g, '').replace(/\]/g, '') + "\n    Exemple : " + _0x1308a5.list[0x0].example.replace(/\[/g, '').replace(/\]/g, '');
    _0x14e00d(_0x34ca3c);
  } catch (_0x841be8) {
    return _0x14e00d("Aucun résultat pour " + _0x4bd464);
  }
});
zokou({
  'nomCom': "lyrics",
  'reaction': '✨',
  'categorie': "Recherche"
}, async (_0xeba4e6, _0x8600a6, _0x1515a8) => {
  const {
    repondre: _0x109198,
    arg: _0x4c2de2,
    ms: _0x293477
  } = _0x1515a8;
  try {
    if (!_0x4c2de2 || _0x4c2de2.length === 0x0) {
      return _0x109198("Veuillez me fournir le nom de la chanson.");
    }
    const _0x538002 = _0x4c2de2.join(" ");
    const _0x42ebdb = await Client.songs.search(_0x538002);
    const _0x199082 = _0x42ebdb[0x0];
    const _0x7f3a37 = await _0x199082.lyrics();
    await _0x8600a6.sendMessage(_0xeba4e6, {
      'text': _0x7f3a37
    }, {
      'quoted': _0x293477
    });
  } catch (_0x5b9678) {
    console.log(_0x5b9678);
    return _0x109198("Je n'ai pas trouvé de paroles pour " + text + ". Essayez de chercher une autre chanson.");
  }
});
