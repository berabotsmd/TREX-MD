(function (_0x2c4a45, _0x4aeed9) {
  const _0x410e7b = _0x2c4a45();
  while (true) {
    try {
      const _0x3c324c = parseInt(_0x2097(331, 0x3c)) / 1 + -parseInt(_0x2097(890, 0x2cc)) / 2 * (-parseInt(_0x2097(690, 0x37f)) / 3) + -parseInt(_0x2097(564, -0x160)) / 4 * (parseInt(_0x2097(643, 0x2da)) / 5) + parseInt(_0x2097(896, 0x38f)) / 6 + parseInt(_0x2097(368, -0xcf)) / 7 * (-parseInt(_0x2097(730, 0x297)) / 8) + parseInt(_0x2097(445, 0x75)) / 9 * (-parseInt(_0x2097(800, 0x4cc)) / 10) + -parseInt(_0x2097(608, 0x82)) / 11 * (-parseInt(_0x2097(662, 0x1d8)) / 12);
      if (_0x3c324c === _0x4aeed9) {
        break;
      } else {
        _0x410e7b.push(_0x410e7b.shift());
      }
    } catch (_0x5b393c) {
      _0x410e7b.push(_0x410e7b.shift());
    }
  }
})(_0x2f78, 203110);
const fs = require('fs');
const path = require("path");
const configPath = path.join(__dirname, "../config.cjs");
let config = require(configPath);
const {
  cmd
} = require("../plugin");
const _0x2fef88 = {
  pattern: "setprefix",
  desc: "Set the command prefix",
  category: "settings",
  filename: __filename
};
cmd(_0x2fef88, async (_0x2ab7a3, _0x487cf6, _0x3da671, {
  from: _0x5e36c2,
  q: _0x4e4b86,
  reply: _0x28c6f1,
  isOwner: _0xccd279
}) => {
  if (!_0xccd279) {
    return _0x28c6f1("❌ You are not the owner!");
  }
  if (!_0x4e4b86) {
    return _0x28c6f1("Please specify a prefix.");
  }
  config.PREFIX = _0x4e4b86;
  _0x28c6f1("Prefix has been set to \"" + _0x4e4b86 + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
});
function _0x566130(_0x455eaa, _0x32699b, _0x124332, _0x355baf, _0x16ce76) {
  return _0x2097(_0x32699b + 0x322, _0x16ce76);
}
function _0x2097(_0x4740f0, _0x364e50) {
  const _0x1cdeb9 = _0x2f78();
  _0x2097 = function (_0x2f78a5, _0x2097a3) {
    _0x2f78a5 = _0x2f78a5 - 328;
    let _0x50270a = _0x1cdeb9[_0x2f78a5];
    return _0x50270a;
  };
  return _0x2097(_0x4740f0, _0x364e50);
}
function _0x48c25a(_0x24e5c7, _0x12ad9c, _0x2264e2, _0x4761c0, _0x275904) {
  return _0x2097(_0x12ad9c + 0x3be, _0x2264e2);
}
const _0x182b19 = {
  pattern: "setnews",
  desc: "Set the news jid",
  category: "settings",
  filename: __filename
};
cmd(_0x182b19, async (_0x32238b, _0x5cb0bb, _0x5bb3dc, {
  from: _0x8ac072,
  q: _0x3f05b,
  reply: _0x5ef606,
  isOwner: _0x3bc5d5
}) => {
  if (!_0x3bc5d5) {
    return _0x5ef606("❌ You are not the owner!");
  }
  if (!_0x3f05b) {
    return _0x5ef606("Please specify a jid.");
  }
  config.NEWS_JID = _0x3f05b;
  _0x5ef606("News Jid has been set to \"" + _0x3f05b + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
});
function _0x2f78() {
  const _0x84f7c2 = ["orts ", "o \"", 'wWfgh', 'fix.', 'PtGnn', 'READ_', 'SUcma', 'THfVF', 'WGiBA', '0|2|1', "a jid", 'funct', 'REPLY', "ff\" t", 'lcome', 'AWuMi', 'OERUi', 'OFiyn', 'SzZSE', 'NEWS_', 'ply', 'desc', 'rTwer', 'IilLb', "t pro", 'auton', 'STICK', 'twwnp', "ps\" o", 'nTdSo', 'readc', 'WKZZj', 'zJnwY', 'test', 'sVjes', 'veWzB', 'ovwtV', 'ufPne', 'YCpKM', "Bot n", '74qRQazB', " filt", 'ZgQGt', 'RECOR', 'ner!', 'setbo', '944154DFWnjd', 'REACT', 'NEsca', 'while', "\\( *\\", 'LINK', 'tOHWM', 'mEAij', 'FKmCF', 'off', 'Hezro', 'srqxt', 'Zalzi', 'IAxFm', "he co", 'coblo', 'zltdT', 'TwWtM', 'vCFJr', 'WBFAW', 'DjxxU', 'xjlgE', 'jXJiP', 'EGkOz', 'Pleas', 'bYmEB', 'IoMai', "e spe", "t to ", "cify ", "ad st", 'uxkyB', 'FileS', 'heDXx', 'VrPcW', 'pnHfW', "d fea", 'vVqZJ', 'call', 'RAWOa', 'setmo', 'fQnRL', 'SwheV', 'jIXfX', 'XWlIe', 'group', 'Gaiep', 'VOICE', 'Wdqdc', "\\+\\+ ", '3|1|2', 'QwyNU', 'DQluK', 'GjeQo', 'NFzVg', 'ups,i', 'Fgnbl', '236565Ggimgn', 'dMUNT', 'HFWzw', 'uWYem', 'LOSiO', 'CkWWb', 'JGsnG', 'aCFdC', 'erCas', "o set", "Bot m", 'rocco', 'ONMoo', 'AQhIN', "k fea", 'KwyZt', 'FgXek', 'Ofxxn', 'FJeuS', 'ews', "\"on\" ", 'qWFxn', 'OCK', 'CsTac', 'ALLWA', 'znYUp', 'atus', "ff\".", 'init', '*(?:[', 'Friip', 'wxEAE', 'zYFDd', "a bot", 'UPqrV', 'RFAGp', 'zStmh', '21yQXiEm', 'wKhIN', 'aSTlx', 'e.exp', 'HlsJv', 'GykkU', 'KgWWF', 'EVvVx', "e or ", 'Z_$][', "S has", 'LcbMm', " are ", "ode h", 'DMfDD', 'dMuxQ', 'oice', 'ihThH', "r \"pr", 'setne', 'MODE', 'filen', 'LmGYu', 'WHNJg', "ion *", 'umber', 'jIkbq', 'AKbnV', 'NokyH', 'BAD', 'ame', "ad Cm", 'FDnLM', 'pUuiP', 'NQekB', "le Re", 'IXAsF', " numb", 'SVoyB', 'Kxggs', 'Jymtp', 'ZxfsC', '|0|4', 'EbLTQ', 'jVcju', "\"grou", 'aiquK', 'HJUTQ', 'hiumP', 'eGHSr', 'Prefi', " pref", 'write', "as be", "to \"", 'guSox', 'TYPIN', 'zBmRY', 'log', 'const', 'jJGdV', "le an", 'xyphs', 'lgWwz', 'nzfBF', 'WJdbz', 'zqUUd', 'WMfEF', 'RAVBi', 'hkhQw', 'nCkDZ', 'ructo', 'WnKjj', 'YBymn', 'YS_ON', 'dLaiG', 'yZFSY', '729tUSAPm', 'UMBER', "ws ji", 'NGVKo', 'modul', 'qMxRX', 'CiDpw', " been", 'SlcIS', 'wqDKT', "nk fi", 'nstru', 'nZIEC', '0-9a-', 'kABhD', 'gger', "n (fu", 'TcSvY', 'antil', 'llFGi', 'debu', '4|1|3', "en se", 'kolPE', 'wrLVc', 'xdkCi', 'OLkgo', "been ", 'zFzIx', 'apply', 'hMAhK', "❌ You", 'Enabl', 'xFKLh', 'IYBzs', 'xycpk', 'autot', 'amMZq', 'fFkSF', 'yping', 'Xczju', 'VNQEB', 'ZLjnV', 'guage', 'HgdSc', 'ejayg', 'uOowd', 'xmGKD', 'MEQUR', 'JWvug', 'ticke', 'JID', 'antib', 'rAnbO', "ways ", "or pr", 'TFEzo', "d ON.", 'eply', 'actio', 'yRSWG', "le au", 'JxsZe', 'EGlgZ', 'HvPwa', 'publi', 'LINE', 'voDWl', "r \"in", 'terva', 'KPYle', "d lan", 'bWkMU', 'ZDngk', 'ACgWr', 'ing', 'AruGU', " bloc", 'nJOfw', 'eadst', 'zA-Z_', 'NbXGl', "or \"o", "\"publ", 'setti', 'YnVWB', 'lUOxV', 'olRUB', '1|4|2', "Set t", "to vo", 'ti-ba', "e) {}", 'Srmfa', 'ysonl', 'AfXdm', 'IYwmK', 'mmand', "le Mo", "he ow", 'KIkyL', 'ZZTvp', 'gadwX', 'autov', 'HLepv', 'yHbPI', 'Objec', 'Wfphe', 'GBFLP', 'PipBQ', 'oFcFz', 'zmlBg', 'CO_BL', 'khkCe', 'WbMXF', 'turne', '(((.+', 'uppxp', 'path', '1222204pbdQHL', "ic\" o", 'rUIuS', 'KchIN', 'mbxdj', "to Ty", 'toStr', 'DJSnQ', 'zeFit', 'ink', 'ages', 'EfjiG', '$]*)', 'ti-bo', 'EGVdT', 'jsSQt', 'cjs', '|3|4', 'chain', 'ory', "ed OF", 'essag', 'cHTKF', 'XJLaC', 'join', 'WdGQb', 'state', 'ecord', 'lQOOW', 'XGAgO', '|2|0', 'EIcMC', 'nCZZU', "e to ", 'cdAGB', 'qzmpx', 'pCQcg', 'edCuI', 'NdCJT', 'lqtBO', 'JQLeI', 'xJArQ', "for t", 'priva', '600501UJLiTZ', 'RARwo', 'qQrqo', 'patte', 'DEWjS', 'gFTQq', 'Xrdha', 'KkkQy', '../co', 'aJLSj', 'nxeET', 'JJCRS', "a pre", 'cwVot', "he ne", 'RAEUE', 'split', 'ejOwP', 'UkSEA', 'nfig.', 'searc', 'COYMB', 'mXLyz', 'vyvjv', 'tnumb', 'MOqef', 'gify', 'QpehA', '2|0|3', " turn", 'oKEeI', 'JzLnH', " set ", "x has", 'rhwCi', '5ShrvVC', 'IvgbF', " has ", 'JmoiH', "nbox ", 'lter', 'aoZEC', 'mNtsr', 'FrfUL', 'repla', ')+)+)', "rn th", 'HTmyi', 'ERDlr', 'setpr', 'icker', 'tYBqk', 'autos', 'qjqQm', '60NCasIh', 'sRGDi', 'imQKE', 'kHQcP', 'dhJzp', 'ping', 'de.', "is\")(", 'wzarY', 'rwDFd', 'XPPKO', 'CMD', 'DCgvY', 'omQLg', 'lengt', "e mod", 'StOAj', "le al", 'calOU', "d OFF", 'SeefT', 'iOTiU', 'rHsXa', '|3|0', 'strin', 'gVBsv', "le we", "\" or ", '7044bblzou', 'jxxAO', 'tecti', 'fRaIM', "t mod", 'rzilW', '{}.co', "ed ON", 'onlin', 'RWqPx', 'AUTO_', 'aRfme', 'er.', 'JcLjI', 'iFvlb', 'ivate', 'wdlYL', 'PIXPb', 'tAReB', 'nctio', 'BOT', 'PpSHJ', 'keGcL', "box\" ", "he mo", 'fVpjs', 'toLow', 'WELCO', 'nAWws', 'QTogU', 'ANTI_', 'ungyu', 'YjPaB', 'cfMZr', "to st", 'qXhlA', 'fOtxF', 'c,gro', 'PETpF', 'fOkWH', '625720uXfocT', 'AzaQU', " mess", 'dQUoq', 'kDQQm', 'tzNAn', 'allwa', 'IRluV', 'PREFI', "set t", 'input', 'DCBrv', 'PNemO', 'eHmVa', 'gtoXL', 'JwaZy', 'OloaH', "News ", 'EjYDn', 'retur', 'oufcx', 'BHOtP', 'ygQwc', 'eact', "Jid h", 'vAGCq', "AUTO ", 'XjjLI', 'ti-li', 'DING', 'efix', 'inbox', 'QnBNN', 'AyaDI', 'OOUhe', 'UwHqU', "he bo", 'sRvtg', 'ebBhB', 'mcGTA', 'gUJIG', "ice m", 'auYiw', 'categ', 'PiGXx', 'wytkw', 'ync', 'to-re', '|4|1', 'DMRfX', 'HIMCV', 'CfLBR', 'GOEJN', 'HHbfB', 'MOROC', 'anTNI', 'ONQpy', 'pjPLj', 'dofVS', 'lGNHK', 'eWiJr', 'BtMiR', 'YGyjz', 'OzJKL', 'IwSbr', 'nEteN', 'BOT_N', 'TLhOe', 'GmGDI', 'disab', '1290OpIJZM', 'moroc', 'setIn', 'cdKUs', "not t", 'VDLom', 'auZHV', "READ ", 'uPKsV', " (tru", 'bhBvF', "\"retu", 'STATU', 'pXmWs', 'CZUnp', 'ture', 'cscZE', 'KVMEk', 'YrRhU', 'welco', 'xZSVe', 'HXFWu', 'EzrOd', 'baqmd', 'ctor(', 'a-zA-', 'qwrvD', 'KGXaS', '2|1|0', 'zvCRY', 'Mqddt', 'ine', "t num", 'ngs', "n() ", 'count', 'iMbPf', 'dUxHy', 'BbSNc', 'ber', 'fzPhx', 'TAMIy', 'NxUrt', 'FSFVD', 'Nztuk', 'nyZlN', 'GxyGl', 'hawcH', 'autor', 'NEWS'];
  _0x2f78 = function () {
    return _0x84f7c2;
  };
  return _0x2f78();
}
const _0x29fd59 = {
  pattern: "autoreadstatus",
  desc: "Enable or disable auto-read status",
  category: "settings",
  filename: __filename
};
cmd(_0x29fd59, async (_0x2a5e65, _0x2e9db4, _0x56a1cd, {
  from: _0x3f6681,
  q: _0x328592,
  reply: _0x56e734,
  isOwner: _0x4be476
}) => {
  if (!_0x4be476) {
    return _0x56e734("❌ You are not the owner!");
  }
  if (_0x328592 === 'on') {
    config.AUTO_READ_STATUS = true;
    _0x56e734("AUTO READ STATUS has been turned ON.");
  } else {
    if (_0x328592 === "off") {
      config.AUTO_READ_STATUS = false;
      _0x56e734("AUTO READ STATUS has been turned OFF.");
    } else {
      return _0x56e734("Please specify \"on\" or \"off\".");
    }
  }
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
});
const _0x21cfda = {
  pattern: "setmode",
  desc: "Set the bot mode to public,groups,inbox or private",
  category: "settings",
  filename: __filename
};
cmd(_0x21cfda, async (_0x5bfa46, _0x4fce0c, _0x5d3a1f, {
  from: _0x3161b3,
  q: _0x5c20a8,
  reply: _0x92ca9c,
  isOwner: _0x22b0ac
}) => {
  if (!_0x22b0ac) {
    return _0x92ca9c("❌ You are not the owner!");
  }
  if (_0x5c20a8 === "public" || _0x5c20a8 === "private" || _0x5c20a8 === "groups" || _0x5c20a8 === "inbox") {
    config.MODE = _0x5c20a8;
    _0x92ca9c("Bot mode has been set to \"" + _0x5c20a8 + "\".");
    fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
  } else {
    _0x92ca9c("Please specify \"public\" or \"private\" or \"groups\" or \"inbox\" for the mode.");
  }
});
const _0x25dc42 = {
  pattern: "setbotnumber",
  desc: "Set the bot number",
  category: "settings",
  filename: __filename
};
cmd(_0x25dc42, async (_0x5af6ac, _0x1ec2c7, _0x383b4b, {
  from: _0x301c09,
  q: _0x25802f,
  reply: _0x13d1a5,
  isOwner: _0x3b10e5
}) => {
  if (!_0x3b10e5) {
    return _0x13d1a5("❌ You are not the owner!");
  }
  if (!_0x25802f) {
    return _0x13d1a5("Please specify a bot number.");
  }
  config.BOT_NUMBER = _0x25802f;
  _0x13d1a5("Bot number has been set to \"" + _0x25802f + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
});
function createBooleanConfigCommand(_0x175438) {
  const _0x4bce18 = function () {
    let _0xa553cb = true;
    return function (_0xa51fe4, _0x7c532e) {
      const _0x8ee68a = _0xa553cb ? function () {
        if (_0x7c532e) {
          const _0x3ca41d = _0x7c532e.apply(_0xa51fe4, arguments);
          _0x7c532e = null;
          return _0x3ca41d;
        }
      } : function () {};
      _0xa553cb = false;
      return _0x8ee68a;
    };
  }();
  const _0x23dc8a = _0x4bce18(this, function () {
    return _0x23dc8a.toString().search("(((.+)+)+)+$").toString().constructor(_0x23dc8a).search("(((.+)+)+)+$");
  });
  _0x23dc8a();
  const _0x4f27bd = function () {
    let _0x9d2871 = true;
    return function (_0x386834, _0x18bfa0) {
      const _0x5f0928 = _0x9d2871 ? function () {
        if (_0x18bfa0) {
          const _0x1f5238 = _0x18bfa0.apply(_0x386834, arguments);
          _0x18bfa0 = null;
          return _0x1f5238;
        }
      } : function () {};
      _0x9d2871 = false;
      return _0x5f0928;
    };
  }();
  (function () {
    _0x4f27bd(this, function () {
      const _0x33f8dc = new RegExp("function *\\( *\\)");
      const _0x330a10 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x3201f5 = _0x4beeb9("init");
      if (!_0x33f8dc.test(_0x3201f5 + "chain") || !_0x330a10.test(_0x3201f5 + "input")) {
        _0x3201f5('0');
      } else {
        _0x4beeb9();
      }
    })();
  })();
  return async (_0x444dc4, _0x1220d2, _0x2264ce, {
    from: _0x562c35,
    q: _0x4988f0,
    reply: _0x106fb2,
    isOwner: _0x12d6fb
  }) => {
    if (!_0x12d6fb) {
      return _0x106fb2("❌ You are not the owner!");
    }
    try {
      if (_0x4988f0 === 'on') {
        config[_0x175438] = true;
        _0x106fb2(_0x175438.replace('_', " ") + " has been turned ON.");
      } else {
        if (_0x4988f0 === "off") {
          config[_0x175438] = false;
          _0x106fb2(_0x175438.replace('_', " ") + " has been turned OFF.");
        } else {
          _0x106fb2("Please specify \"on\" or \"off\" to set " + _0x175438.replace('_', " ").toLowerCase() + '.');
          return;
        }
      }
      fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
    } catch (_0xfb673) {
      console.log(_0xfb673);
      _0x106fb2('' + _0xfb673);
    }
  };
}
const _0x24c0e0 = {
  pattern: "autovoice",
  desc: "Enable or disable auto voice messages"
};
function _0xb599b6(_0x783433, _0x287a59, _0x4198d3, _0xf3cbc1, _0x4666d0) {
  return _0x2097(_0xf3cbc1 + 0x3d0, _0x4666d0);
}
_0x24c0e0.category = "settings";
_0x24c0e0.filename = __filename;
cmd(_0x24c0e0, createBooleanConfigCommand("AUTO_VOICE"));
const _0x377e9a = {
  pattern: "autosticker",
  desc: "Enable or disable auto sticker",
  category: "settings",
  filename: __filename
};
cmd(_0x377e9a, createBooleanConfigCommand("AUTO_STICKER"));
const _0x5807da = {
  pattern: "autoreply",
  desc: "Enable or disable auto-reply",
  category: "settings",
  filename: __filename
};
cmd(_0x5807da, createBooleanConfigCommand("AUTO_REPLY"));
(function () {
  const _0x1ab84b = function () {
    let _0x359b19;
    try {
      _0x359b19 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x19c283) {
      _0x359b19 = window;
    }
    return _0x359b19;
  };
  const _0x2f19ce = _0x1ab84b();
  _0x2f19ce.setInterval(_0x4beeb9, 4000);
})();
const _0xd14d3e = {
  pattern: "autoreact",
  desc: "Enable or disable auto-reaction",
  category: "settings",
  filename: __filename
};
cmd(_0xd14d3e, createBooleanConfigCommand("AUTO_REACT"));
const _0x466cdb = {
  pattern: "welcome",
  desc: "Enable or disable welcome messages",
  category: "settings",
  filename: __filename
};
cmd(_0x466cdb, createBooleanConfigCommand("WELCOME"));
const _0x197fec = {
  pattern: "antibad",
  desc: "Enable or disable anti-bad language filter",
  category: "settings",
  filename: __filename
};
cmd(_0x197fec, createBooleanConfigCommand("ANTI_BAD"));
const _0x20fd47 = {
  pattern: "antibot",
  desc: "Enable or disable anti-bot protection",
  category: "settings"
};
function _0x2fe664(_0x2666f6, _0x193f9b, _0x5e1f2b, _0x508c33, _0x579950) {
  return _0x2097(_0x193f9b + 0x189, _0x579950);
}
_0x20fd47.filename = __filename;
cmd(_0x20fd47, createBooleanConfigCommand("ANTI_BOT"));
const _0x2e339e = {
  pattern: "antilink",
  desc: "Enable or disable anti-link filter",
  category: "settings",
  filename: __filename
};
cmd(_0x2e339e, createBooleanConfigCommand("ANTI_LINK"));
const _0x74581c = {
  pattern: "allwaysonline",
  desc: "Enable or disable always online mode",
  category: "settings",
  filename: __filename
};
cmd(_0x74581c, createBooleanConfigCommand("ALLWAYS_ONLINE"));
const _0x363195 = {
  pattern: "moroccoblock",
  desc: "Enable or disable Morocco block feature",
  category: "settings",
  filename: __filename
};
cmd(_0x363195, createBooleanConfigCommand("MOROCCO_BLOCK"));
const _0xe9464f = {
  pattern: "readcmd",
  desc: "Enable or disable Read Cmd feature"
};
function _0x2cee6c(_0x3c621f, _0x4276bd, _0x376ea7, _0x1dfd58, _0x25a514) {
  return _0x2097(_0x376ea7 - 0x1f7, _0x1dfd58);
}
_0xe9464f.category = "settings";
_0xe9464f.filename = __filename;
cmd(_0xe9464f, createBooleanConfigCommand("READ_CMD"));
const _0xa34aa = {
  pattern: "autotyping",
  desc: "Enable or disable auto Typing",
  category: "settings",
  filename: __filename
};
cmd(_0xa34aa, createBooleanConfigCommand("AUTO_TYPING"));
const _0xe0566 = {
  pattern: "autorecording",
  desc: "Enable or disable auto Typing",
  category: "settings",
  filename: __filename
};
cmd(_0xe0566, createBooleanConfigCommand("AUTO_RECORDING"));
const _0xd60bca = {
  pattern: "autonews",
  desc: "Enable or disable auto Typing",
  category: "settings",
  filename: __filename
};
cmd(_0xd60bca, createBooleanConfigCommand("AUTO_NEWS"));
function _0x4beeb9(_0x4f7617) {
  function _0x311ae3(_0x536239) {
    if (typeof _0x536239 === "string") {
      return function (_0x572012) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x536239 / _0x536239).length !== 1 || _0x536239 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x311ae3(++_0x536239);
  }
  try {
    if (_0x4f7617) {
      return _0x311ae3;
    } else {
      _0x311ae3(0);
    }
  } catch (_0x231f34) {}
}
