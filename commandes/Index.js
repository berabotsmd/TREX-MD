'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0x324100, _0x5289bd, _0x9084ee, _0x1e5813) {
  if (_0x1e5813 === undefined) {
    _0x1e5813 = _0x9084ee;
  }
  var _0x41a40a = Object.getOwnPropertyDescriptor(_0x5289bd, _0x9084ee);
  if (!_0x41a40a || ("get" in _0x41a40a ? !_0x5289bd.__esModule : _0x41a40a.writable || _0x41a40a.configurable)) {
    _0x41a40a = {
      'enumerable': true,
      'get': function () {
        return _0x5289bd[_0x9084ee];
      }
    };
  }
  Object.defineProperty(_0x324100, _0x1e5813, _0x41a40a);
} : function (_0x390bbe, _0x976fe8, _0x1981bf, _0x3a0a8b) {
  if (_0x3a0a8b === undefined) {
    _0x3a0a8b = _0x1981bf;
  }
  _0x390bbe[_0x3a0a8b] = _0x976fe8[_0x1981bf];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x6e8c76, _0x6732f4) {
  Object.defineProperty(_0x6e8c76, "default", {
    'enumerable': true,
    'value': _0x6732f4
  });
} : function (_0x5a5ed0, _0xdf1333) {
  _0x5a5ed0["default"] = _0xdf1333;
});
var __importStar = this && this.__importStar || function (_0x4f02e0) {
  if (_0x4f02e0 && _0x4f02e0.__esModule) {
    return _0x4f02e0;
  }
  var _0x29563 = {};
  if (_0x4f02e0 != null) {
    for (var _0x5745fa in _0x4f02e0) if (_0x5745fa !== "default" && Object.prototype.hasOwnProperty.call(_0x4f02e0, _0x5745fa)) {
      __createBinding(_0x29563, _0x4f02e0, _0x5745fa);
    }
  }
  __setModuleDefault(_0x29563, _0x4f02e0);
  return _0x29563;
};
var __importDefault = this && this.__importDefault || function (_0xd7ac1) {
  return _0xd7ac1 && _0xd7ac1.__esModule ? _0xd7ac1 : {
    'default': _0xd7ac1
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require('@whiskeysockets/baileys'));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1['default'].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require('@hapi/boom');
const conf = require("./set");
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require('./bdd/antibot');
let evt = require(__dirname + "/framework/zokou");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require('./bdd/banUser');
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./bdd/onlyAdmin");
let {
  reagir
} = require(__dirname + "/framework/app");
var session = conf.session.replace(/TREX-MD;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + '/auth/creds.json')) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != 'zokk') {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    }
  } catch (_0x3e69d1) {
    console.log("Session Invalide " + _0x3e69d1);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': 'silent',
    'stream': 'store'
  })
});
setTimeout(() => {
  async function _0x571006() {
    0x0;
    const {
      version: _0x53acf4,
      isLatest: _0x3462c6
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x207fdc,
      saveCreds: _0x10ab0d
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0x0;
    const _0xd9a585 = {
      'version': _0x53acf4,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ['HACKING-MD', 'safari', "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x207fdc.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x207fdc.keys, logger)
      },
      'getMessage': async _0x4b64ba => {
        if (store) {
          const _0x26a283 = await store.loadMessage(_0x4b64ba.remoteJid, _0x4b64ba.id, undefined);
          return _0x26a283.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x41157d = baileys_1["default"](_0xd9a585);
    store.bind(_0x41157d.ev);
    setInterval(() => {
      store.writeToFile("store.json");
    }, 0xbb8);
    _0x41157d.ev.on("messages.upsert", async _0xfdcf33 => {
      const {
        messages: _0x3f3d21
      } = _0xfdcf33;
      const _0x3029c4 = _0x3f3d21[0x0];
      if (!_0x3029c4.message) {
        return;
      }
      const _0x34455c = _0x376072 => {
        if (!_0x376072) {
          return _0x376072;
        }
        if (/:\d+@/gi.test(_0x376072)) {
          0x0;
          let _0x3d5b42 = baileys_1.jidDecode(_0x376072) || {};
          return _0x3d5b42.user && _0x3d5b42.server && _0x3d5b42.user + '@' + _0x3d5b42.server || _0x376072;
        } else {
          return _0x376072;
        }
      };
      0x0;
      var _0x59690b = baileys_1.getContentType(_0x3029c4.message);
      var _0x256b45 = _0x59690b == "conversation" ? _0x3029c4.message.conversation : _0x59690b == "imageMessage" ? _0x3029c4.message.imageMessage?.['caption'] : _0x59690b == "videoMessage" ? _0x3029c4.message.videoMessage?.['caption'] : _0x59690b == "extendedTextMessage" ? _0x3029c4.message?.["extendedTextMessage"]?.['text'] : _0x59690b == 'buttonsResponseMessage' ? _0x3029c4?.["message"]?.['buttonsResponseMessage']?.['selectedButtonId'] : _0x59690b == "listResponseMessage" ? _0x3029c4.message?.['listResponseMessage']?.["singleSelectReply"]?.['selectedRowId'] : _0x59690b == "messageContextInfo" ? _0x3029c4?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x3029c4.message?.['listResponseMessage']?.["singleSelectReply"]?.["selectedRowId"] || _0x3029c4.text : '';
      var _0x2a9ad4 = _0x3029c4.key.remoteJid;
      var _0x57354f = _0x34455c(_0x41157d.user.id);
      var _0x5091c9 = _0x57354f.split('@')[0x0];
      const _0x30d651 = _0x2a9ad4?.["endsWith"]("@g.us");
      var _0x377027 = _0x30d651 ? await _0x41157d.groupMetadata(_0x2a9ad4) : '';
      var _0x229479 = _0x30d651 ? _0x377027.subject : '';
      var _0x584b88 = _0x3029c4.message.extendedTextMessage?.["contextInfo"]?.['quotedMessage'];
      var _0x559b3b = _0x34455c(_0x3029c4.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
      var _0x9e4074 = _0x30d651 ? _0x3029c4.key.participant ? _0x3029c4.key.participant : _0x3029c4.participant : _0x2a9ad4;
      if (_0x3029c4.key.fromMe) {
        _0x9e4074 = _0x57354f;
      }
      var _0x5bf6f9 = _0x30d651 ? _0x3029c4.key.participant : '';
      const {
        getAllSudoNumbers: _0x8e88ed
      } = require("./bdd/sudo");
      const _0x42c9ce = _0x3029c4.pushName;
      const _0x12fc29 = await _0x8e88ed();
      const _0x1514e3 = [_0x5091c9, '255781144539', "255714595078", "255767570963", '255714595078', conf.NUMERO_OWNER].map(_0x4ee16c => _0x4ee16c.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x3c3f7b = _0x1514e3.concat(_0x12fc29);
      const _0x468ada = _0x3c3f7b.includes(_0x9e4074);
      var _0x59d6eb = ['255781144539', "255714595078", "255767570963", '255714595078'].map(_0x30d7a3 => _0x30d7a3.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x9e4074);
      function _0x1d2c8f(_0x22c561) {
        _0x41157d.sendMessage(_0x2a9ad4, {
          'text': _0x22c561
        }, {
          'quoted': _0x3029c4
        });
      }
      console.log("\t [][]...{Lamborghini}...[][]");
      console.log("=========== Nouveau message ===========");
      if (_0x30d651) {
        console.log("message provenant du groupe : " + _0x229479);
      }
      console.log("message envoyé par : [" + _0x42c9ce + " : " + _0x9e4074.split("@s.whatsapp.net")[0x0] + " ]");
      console.log("type de message : " + _0x59690b);
      console.log("------ contenu du message ------");
      console.log(_0x256b45);
      function _0xd5347e(_0x406b49) {
        let _0xe19b03 = [];
        for (_0xfdcf33 of _0x406b49) {
          if (_0xfdcf33.admin == null) {
            continue;
          }
          _0xe19b03.push(_0xfdcf33.id);
        }
        return _0xe19b03;
      }
      var _0x132f3e = conf.ETAT;
      if (_0x132f3e == 0x1) {
        await _0x41157d.sendPresenceUpdate('available', _0x2a9ad4);
      } else {
        if (_0x132f3e == 0x2) {
          await _0x41157d.sendPresenceUpdate("composing", _0x2a9ad4);
        } else if (_0x132f3e == 0x3) {
          await _0x41157d.sendPresenceUpdate("recording", _0x2a9ad4);
        } else {
          await _0x41157d.sendPresenceUpdate("unavailable", _0x2a9ad4);
        }
      }
      const _0x2bf6ac = _0x30d651 ? await _0x377027.participants : '';
      let _0x22b1cf = _0x30d651 ? _0xd5347e(_0x2bf6ac) : '';
      const _0x303c9f = _0x30d651 ? _0x22b1cf.includes(_0x9e4074) : false;
      var _0x3bb635 = _0x30d651 ? _0x22b1cf.includes(_0x57354f) : false;
      const _0x1526f6 = _0x256b45 ? _0x256b45.trim().split(/ +/).slice(0x1) : null;
      const _0x59bdbe = _0x256b45 ? _0x256b45.startsWith(prefixe) : false;
      const _0x495f01 = _0x59bdbe ? _0x256b45.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x1a8e79 = conf.URL.split(',');
      function _0x2406fd() {
        const _0x306f8f = Math.floor(Math.random() * _0x1a8e79.length);
        const _0xcfd509 = _0x1a8e79[_0x306f8f];
        return _0xcfd509;
      }
      var _0x24ce86 = {
        'superUser': _0x468ada,
        'dev': _0x59d6eb,
        'verifGroupe': _0x30d651,
        'mbre': _0x2bf6ac,
        'membreGroupe': _0x5bf6f9,
        'verifAdmin': _0x303c9f,
        'infosGroupe': _0x377027,
        'nomGroupe': _0x229479,
        'auteurMessage': _0x9e4074,
        'nomAuteurMessage': _0x42c9ce,
        'idBot': _0x57354f,
        'verifzokouAdmin': _0x3bb635,
        'prefixe': prefixe,
        'arg': _0x1526f6,
        'repondre': _0x1d2c8f,
        'mtype': _0x59690b,
        'groupeAdmin': _0xd5347e,
        'msgRepondu': _0x584b88,
        'auteurMsgRepondu': _0x559b3b,
        'ms': _0x3029c4,
        'mybotpic': _0x2406fd
      };
      if (_0x3029c4.message.protocolMessage && _0x3029c4.message.protocolMessage.type === 0x0 && conf.ADM.toLocaleLowerCase() === "yes") {
        if (_0x3029c4.key.fromMe || _0x3029c4.message.protocolMessage.key.fromMe) {
          console.log("Message supprimer me concernant");
          return;
        }
        console.log("Message supprimer");
        let _0x7c3fd3 = _0x3029c4.message.protocolMessage.key;
        try {
          const _0xc699a0 = fs.readFileSync("./store.json", "utf8");
          const _0x56285d = JSON.parse(_0xc699a0);
          let _0xfe3bfa = _0x56285d.messages[_0x7c3fd3.remoteJid];
          let _0x1f220a;
          for (let _0x13af2b = 0x0; _0x13af2b < _0xfe3bfa.length; _0x13af2b++) {
            if (_0xfe3bfa[_0x13af2b].key.id === _0x7c3fd3.id) {
              _0x1f220a = _0xfe3bfa[_0x13af2b];
              break;
            }
          }
          if (_0x1f220a === null || !_0x1f220a || _0x1f220a === "undefined") {
            console.log("Message non trouver");
            return;
          }
          await _0x41157d.sendMessage(_0x57354f, {
            'image': {
              'url': "./media/deleted-message.jpg"
            },
            'caption': "        Anti-delete-message by TREX-MD\n Message from @" + _0x1f220a.key.participant.split('@')[0x0] + '',
            'mentions': [_0x1f220a.key.participant]
          }).then(() => {
            _0x41157d.sendMessage(_0x57354f, {
              'forward': _0x1f220a
            }, {
              'quoted': _0x1f220a
            });
          });
        } catch (_0x4ad910) {
          console.log(_0x4ad910);
        }
      }
      if (_0x3029c4.key && _0x3029c4.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === 'yes') {
        await _0x41157d.readMessages([_0x3029c4.key]);
      }
      if (_0x3029c4.key && _0x3029c4.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === 'yes') {
        if (_0x3029c4.message.extendedTextMessage) {
          var _0x2d8cc1 = _0x3029c4.message.extendedTextMessage.text;
          await _0x41157d.sendMessage(_0x57354f, {
            'text': _0x2d8cc1
          }, {
            'quoted': _0x3029c4
          });
        } else {
          if (_0x3029c4.message.imageMessage) {
            var _0xc84d84 = _0x3029c4.message.imageMessage.caption;
            var _0x593917 = await _0x41157d.downloadAndSaveMediaMessage(_0x3029c4.message.imageMessage);
            await _0x41157d.sendMessage(_0x57354f, {
              'image': {
                'url': _0x593917
              },
              'caption': _0xc84d84
            }, {
              'quoted': _0x3029c4
            });
          } else {
            if (_0x3029c4.message.videoMessage) {
              var _0xc84d84 = _0x3029c4.message.videoMessage.caption;
              var _0x545d55 = await _0x41157d.downloadAndSaveMediaMessage(_0x3029c4.message.videoMessage);
              await _0x41157d.sendMessage(_0x57354f, {
                'video': {
                  'url': _0x545d55
                },
                'caption': _0xc84d84
              }, {
                'quoted': _0x3029c4
              });
            }
          }
        }
      }
      if (!_0x59d6eb && _0x2a9ad4 == "120363158701337904@g.us") {
        return;
      }
      if (_0x256b45 && _0x9e4074.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x3b6d74
        } = require("./bdd/level");
        try {
          await _0x3b6d74(_0x9e4074);
        } catch (_0x265d51) {
          console.error(_0x265d51);
        }
      }
      try {
        if (_0x3029c4.message[_0x59690b].contextInfo.mentionedJid && (_0x3029c4.message[_0x59690b].contextInfo.mentionedJid.includes(_0x57354f) || _0x3029c4.message[_0x59690b].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + '@s.whatsapp.net'))) {
          if (_0x2a9ad4 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x468ada) {
            console.log('hummm');
            return;
          }
          let _0x4cbb16 = require("./bdd/mention");
          let _0x511791 = await _0x4cbb16.recupererToutesLesValeurs();
          let _0xf9849f = _0x511791[0x0];
          if (_0xf9849f.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x466869;
          if (_0xf9849f.type.toLocaleLowerCase() === "image") {
            _0x466869 = {
              'image': {
                'url': _0xf9849f.url
              },
              'caption': _0xf9849f.message
            };
          } else {
            if (_0xf9849f.type.toLocaleLowerCase() === "video") {
              _0x466869 = {
                'video': {
                  'url': _0xf9849f.url
                },
                'caption': _0xf9849f.message
              };
            } else {
              if (_0xf9849f.type.toLocaleLowerCase() === 'sticker') {
                let _0x3420cd = new Sticker(_0xf9849f.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x849fee = await _0x3420cd.toBuffer();
                _0x466869 = {
                  'sticker': _0x849fee
                };
              } else if (_0xf9849f.type.toLocaleLowerCase() === 'audio') {
                _0x466869 = {
                  'audio': {
                    'url': _0xf9849f.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x41157d.sendMessage(_0x2a9ad4, _0x466869, {
            'quoted': _0x3029c4
          });
        }
      } catch (_0x10752b) {}
      try {
        const _0x59d8da = await verifierEtatJid(_0x2a9ad4);
        if (_0x256b45.includes('https://') && _0x30d651 && _0x59d8da) {
          console.log("lien detecté");
          var _0x51e1ae = _0x30d651 ? _0x22b1cf.includes(_0x57354f) : false;
          if (_0x468ada || _0x303c9f || !_0x51e1ae) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x4a456e = {
            'remoteJid': _0x2a9ad4,
            'fromMe': false,
            'id': _0x3029c4.key.id,
            'participant': _0x9e4074
          };
          var _0x394f96 = "lien detected, \n";
          var _0x5e05f3 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Zoou-MD",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x5e05f3.toFile("st1.webp");
          var _0x8b4429 = await recupererActionJid(_0x2a9ad4);
          if (_0x8b4429 === 'remove') {
            _0x394f96 += "message deleted \n @" + _0x9e4074.split('@')[0x0] + " removed from group.";
            await _0x41157d.sendMessage(_0x2a9ad4, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x41157d.sendMessage(_0x2a9ad4, {
              'text': _0x394f96,
              'mentions': [_0x9e4074]
            }, {
              'quoted': _0x3029c4
            });
            try {
              await _0x41157d.groupParticipantsUpdate(_0x2a9ad4, [_0x9e4074], "remove");
            } catch (_0x225593) {
              console.log("antiien ") + _0x225593;
            }
            await _0x41157d.sendMessage(_0x2a9ad4, {
              'delete': _0x4a456e
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x8b4429 === "delete") {
              _0x394f96 += "message deleted \n @" + _0x9e4074.split('@')[0x0] + " avoid sending link.";
              await _0x41157d.sendMessage(_0x2a9ad4, {
                'text': _0x394f96,
                'mentions': [_0x9e4074]
              }, {
                'quoted': _0x3029c4
              });
              await _0x41157d.sendMessage(_0x2a9ad4, {
                'delete': _0x4a456e
              });
              await fs.unlink('st1.webp');
            } else {
              if (_0x8b4429 === "warn") {
                const {
                  getWarnCountByJID: _0xde2162,
                  ajouterUtilisateurAvecWarnCount: _0x1741af
                } = require("./bdd/warn");
                let _0x3e6541 = await _0xde2162(_0x9e4074);
                let _0x47b296 = conf.WARN_COUNT;
                if (_0x3e6541 >= _0x47b296) {
                  var _0x4d4c15 = "link detected , you will be remove because of reaching warn-limit";
                  await _0x41157d.sendMessage(_0x2a9ad4, {
                    'text': _0x4d4c15,
                    'mentions': [_0x9e4074]
                  }, {
                    'quoted': _0x3029c4
                  });
                  await _0x41157d.groupParticipantsUpdate(_0x2a9ad4, [_0x9e4074], 'remove');
                  await _0x41157d.sendMessage(_0x2a9ad4, {
                    'delete': _0x4
