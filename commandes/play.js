// TREX-MD

const _0x3dc0a1 = _0x33b3;
(function (_0x5bbab6, _0x2e25d3) {
    const _0x9d0086 = _0x33b3, _0x1a1d47 = _0x5bbab6();
    while (!![]) {
        try {
            const _0x51c793 = parseInt(_0x9d0086(0x1cc)) / 0x1 + -parseInt(_0x9d0086(0x1ed)) / 0x2 + parseInt(_0x9d0086(0x1b8)) / 0x3 + parseInt(_0x9d0086(0x1c9)) / 0x4 + -parseInt(_0x9d0086(0x1ba)) / 0x5 + -parseInt(_0x9d0086(0x1ce)) / 0x6 * (parseInt(_0x9d0086(0x1e3)) / 0x7) + parseInt(_0x9d0086(0x1cd)) / 0x8 * (-parseInt(_0x9d0086(0x1db)) / 0x9);
            if (_0x51c793 === _0x2e25d3)
                break;
            else
                _0x1a1d47['push'](_0x1a1d47['shift']());
        } catch (_0x5ae65f) {
            _0x1a1d47['push'](_0x1a1d47['shift']());
        }
    }
}(_0x2c2f, 0xdf21e));
function _0x33b3(_0x5dab8b, _0x386f53) {
    const _0x2c2fb8 = _0x2c2f();
    return _0x33b3 = function (_0x33b302, _0x1f6e39) {
        _0x33b302 = _0x33b302 - 0x1b8;
        let _0x136baa = _0x2c2fb8[_0x33b302];
        return _0x136baa;
    }, _0x33b3(_0x5dab8b, _0x386f53);
}
const {zokou} = require(_0x3dc0a1(0x1c3)), yts = require(_0x3dc0a1(0x1c1)), BaseUrl = _0x3dc0a1(0x1e9), giftedapikey = _0x3dc0a1(0x1c0);
zokou({
    'nomCom': _0x3dc0a1(0x1ef),
    'categorie': _0x3dc0a1(0x1b9),
    'reaction': '🎧'
}, async (_0x1a81cb, _0x5e2ded, _0x4697a4) => {
    const _0x18e591 = _0x3dc0a1, {
            ms: _0x377990,
            repondre: _0x33588c,
            arg: _0x127ac4
        } = _0x4697a4;
    if (!_0x127ac4[0x0]) {
        _0x33588c(_0x18e591(0x1e0));
        return;
    }
    try {
        let _0x386d98 = _0x127ac4[_0x18e591(0x1c7)]('\x20'), _0x579718 = [];
        const _0x2f733a = await yts(_0x386d98);
        _0x579718 = _0x2f733a[_0x18e591(0x1f1)];
        if (_0x579718 && _0x579718[_0x18e591(0x1d7)] > 0x0) {
            const _0x5365f4 = _0x579718[0x0][_0x18e591(0x1d1)], _0x5726ac = await fetch(BaseUrl + _0x18e591(0x1d6) + encodeURIComponent(_0x5365f4) + '&apikey=' + giftedapikey), _0x46fd63 = await _0x5726ac['json']();
            if (_0x46fd63[_0x18e591(0x1cb)] === 0xc8 && _0x46fd63['success']) {
                const _0x5314b1 = _0x46fd63[_0x18e591(0x1d9)]['download_url'], _0x1c95fb = {
                        'image': { 'url': _0x579718[0x0]['thumbnail'] },
                        'caption': _0x18e591(0x1d0) + _0x46fd63[_0x18e591(0x1d9)][_0x18e591(0x1cf)] + '\x0a│⿻\x20*Quality:*\x20' + _0x46fd63[_0x18e591(0x1d9)]['type'] + _0x18e591(0x1bc) + _0x579718[0x0][_0x18e591(0x1d5)] + _0x18e591(0x1e8) + _0x579718[0x0][_0x18e591(0x1ca)] + _0x18e591(0x1de) + _0x579718[0x0]['ago'] + '\x0a│⿻\x20*Artist:*\x20' + _0x579718[0x0][_0x18e591(0x1c5)]['name'] + _0x18e591(0x1f0) + _0x5365f4
                    };
                await _0x5e2ded[_0x18e591(0x1ea)](_0x1a81cb, _0x1c95fb, { 'quoted': _0x377990 }), await _0x5e2ded[_0x18e591(0x1ea)](_0x1a81cb, {
                    'audio': { 'url': _0x5314b1 },
                    'mimetype': _0x18e591(0x1d2)
                }, { 'quoted': _0x377990 });
            } else
                _0x33588c(_0x18e591(0x1ee));
        } else
            _0x33588c('No\x20audio\x20found.');
    } catch (_0x31c894) {
        console[_0x18e591(0x1eb)](_0x18e591(0x1c4), _0x31c894), _0x33588c(_0x18e591(0x1d8));
    }
}), zokou({
    'nomCom': _0x3dc0a1(0x1dd),
    'categorie': 'Download',
    'reaction': '💿'
}, async (_0x284e53, _0x2d27c6, _0x19f6e2) => {
    const _0x2c3cc0 = _0x3dc0a1, {
            ms: _0x87f2cb,
            repondre: _0x1121b0,
            arg: _0x3574a8
        } = _0x19f6e2;
    if (!_0x3574a8[0x0]) {
        _0x1121b0(_0x2c3cc0(0x1e0));
        return;
    }
    try {
        let _0x42bffa = _0x3574a8['join']('\x20'), _0x1e3cf6 = [];
        const _0x41e1bf = await yts(_0x42bffa);
        _0x1e3cf6 = _0x41e1bf[_0x2c3cc0(0x1f1)];
        if (_0x1e3cf6 && _0x1e3cf6[_0x2c3cc0(0x1d7)] > 0x0) {
            const _0x1e38ef = _0x1e3cf6[0x0][_0x2c3cc0(0x1d1)], _0x349582 = await fetch(BaseUrl + _0x2c3cc0(0x1d6) + encodeURIComponent(_0x1e38ef) + '&apikey=' + giftedapikey), _0x46e840 = await _0x349582[_0x2c3cc0(0x1da)]();
            if (_0x46e840['status'] === 0xc8 && _0x46e840[_0x2c3cc0(0x1bf)]) {
                const _0x347ce6 = _0x46e840[_0x2c3cc0(0x1d9)][_0x2c3cc0(0x1c8)], _0x48ee1b = {
                        'image': { 'url': _0x1e3cf6[0x0][_0x2c3cc0(0x1e4)] },
                        'caption': _0x2c3cc0(0x1d0) + _0x46e840[_0x2c3cc0(0x1d9)][_0x2c3cc0(0x1cf)] + _0x2c3cc0(0x1c2) + _0x46e840[_0x2c3cc0(0x1d9)][_0x2c3cc0(0x1d3)] + _0x2c3cc0(0x1bc) + _0x1e3cf6[0x0][_0x2c3cc0(0x1d5)] + _0x2c3cc0(0x1e8) + _0x1e3cf6[0x0][_0x2c3cc0(0x1ca)] + '\x0a│⿻\x20*Uploaded:*\x20' + _0x1e3cf6[0x0][_0x2c3cc0(0x1e2)] + _0x2c3cc0(0x1e1) + _0x1e3cf6[0x0][_0x2c3cc0(0x1c5)][_0x2c3cc0(0x1d4)] + _0x2c3cc0(0x1f0) + _0x1e38ef
                    };
                await _0x2d27c6['sendMessage'](_0x284e53, _0x48ee1b, { 'quoted': _0x87f2cb }), await _0x2d27c6[_0x2c3cc0(0x1ea)](_0x284e53, {
                    'document': { 'url': _0x347ce6 },
                    'mimetype': _0x2c3cc0(0x1d2)
                }, { 'quoted': _0x87f2cb });
            } else
                _0x1121b0(_0x2c3cc0(0x1ee));
        } else
            _0x1121b0(_0x2c3cc0(0x1df));
    } catch (_0x143534) {
        console['error'](_0x2c3cc0(0x1c4), _0x143534), _0x1121b0(_0x2c3cc0(0x1d8));
    }
}), zokou({
    'nomCom': _0x3dc0a1(0x1c6),
    'categorie': _0x3dc0a1(0x1b9),
    'reaction': '📽️'
}, async (_0x49889c, _0xcdf720, _0x25e15d) => {
    const _0x39b227 = _0x3dc0a1, {
            ms: _0xf38ba1,
            repondre: _0x5e04d3,
            arg: _0x381dc8
        } = _0x25e15d;
    if (!_0x381dc8[0x0]) {
        _0x5e04d3(_0x39b227(0x1dc));
        return;
    }
    try {
        let _0x3e460d = _0x381dc8[_0x39b227(0x1c7)]('\x20'), _0x192738 = [];
        const _0x56ad05 = await yts(_0x3e460d);
        _0x192738 = _0x56ad05['videos'];
        if (_0x192738 && _0x192738[_0x39b227(0x1d7)] > 0x0) {
            const _0x18a04c = _0x192738[0x0]['url'], _0x164cbb = await fetch(BaseUrl + _0x39b227(0x1ec) + encodeURIComponent(_0x18a04c) + _0x39b227(0x1bb) + giftedapikey), _0x2bfb19 = await _0x164cbb[_0x39b227(0x1da)]();
            if (_0x2bfb19['status'] === 0xc8 && _0x2bfb19[_0x39b227(0x1bf)]) {
                const _0x18280b = _0x2bfb19[_0x39b227(0x1d9)][_0x39b227(0x1c8)], _0x4a85ed = {
                        'image': { 'url': _0x192738[0x0][_0x39b227(0x1e4)] },
                        'caption': _0x39b227(0x1e7) + _0x2bfb19['result'][_0x39b227(0x1cf)] + _0x39b227(0x1c2) + _0x2bfb19['result']['type'] + _0x39b227(0x1bc) + _0x192738[0x0][_0x39b227(0x1d5)] + _0x39b227(0x1e8) + _0x192738[0x0][_0x39b227(0x1ca)] + '\x0a│⿻\x20*Uploaded:*\x20' + _0x192738[0x0][_0x39b227(0x1e2)] + _0x39b227(0x1e1) + _0x192738[0x0][_0x39b227(0x1c5)][_0x39b227(0x1d4)] + _0x39b227(0x1f0) + _0x18a04c
                    };
                await _0xcdf720['sendMessage'](_0x49889c, _0x4a85ed, { 'quoted': _0xf38ba1 }), await _0xcdf720['sendMessage'](_0x49889c, {
                    'video': { 'url': _0x18280b },
                    'mimetype': 'video/mp4'
                }, { 'quoted': _0xf38ba1 });
            } else
                _0x5e04d3(_0x39b227(0x1e5));
        } else
            _0x5e04d3(_0x39b227(0x1e6));
    } catch (_0x49edaf) {
        console['error'](_0x39b227(0x1c4), _0x49edaf), _0x5e04d3('An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20video.');
    }
}), zokou({
    'nomCom': 'videodoc',
    'categorie': _0x3dc0a1(0x1b9),
    'reaction': '🎥'
}, async (_0x5b0382, _0x4c8a4d, _0x53ac4b) => {
    const _0x5abec8 = _0x3dc0a1, {
            ms: _0x141fc0,
            repondre: _0x276af2,
            arg: _0x24d8c3
        } = _0x53ac4b;
    if (!_0x24d8c3[0x0]) {
        _0x276af2(_0x5abec8(0x1dc));
        return;
    }
    try {
        let _0x57d1ce = _0x24d8c3['join']('\x20'), _0x1a0f6c = [];
        const _0x5d64df = await yts(_0x57d1ce);
        _0x1a0f6c = _0x5d64df[_0x5abec8(0x1f1)];
        if (_0x1a0f6c && _0x1a0f6c[_0x5abec8(0x1d7)] > 0x0) {
            const _0x1187f8 = _0x1a0f6c[0x0]['url'], _0x1cad0e = await fetch(BaseUrl + _0x5abec8(0x1ec) + encodeURIComponent(_0x1187f8) + '&apikey=' + giftedapikey), _0x374a17 = await _0x1cad0e[_0x5abec8(0x1da)]();
            if (_0x374a17[_0x5abec8(0x1cb)] === 0xc8 && _0x374a17[_0x5abec8(0x1bf)]) {
                const _0x3196ce = _0x374a17[_0x5abec8(0x1d9)][_0x5abec8(0x1c8)], _0x5e3bfd = {
                        'image': { 'url': _0x1a0f6c[0x0][_0x5abec8(0x1e4)] },
                        'caption': _0x5abec8(0x1e7) + _0x374a17[_0x5abec8(0x1d9)][_0x5abec8(0x1cf)] + _0x5abec8(0x1c2) + _0x374a17[_0x5abec8(0x1d9)][_0x5abec8(0x1d3)] + _0x5abec8(0x1bc) + _0x1a0f6c[0x0]['timestamp'] + _0x5abec8(0x1e8) + _0x1a0f6c[0x0][_0x5abec8(0x1ca)] + _0x5abec8(0x1de) + _0x1a0f6c[0x0][_0x5abec8(0x1e2)] + '\x0a│⿻\x20*Artist:*\x20' + _0x1a0f6c[0x0][_0x5abec8(0x1c5)][_0x5abec8(0x1d4)] + _0x5abec8(0x1f0) + _0x1187f8
                    };
                await _0x4c8a4d[_0x5abec8(0x1ea)](_0x5b0382, _0x5e3bfd, { 'quoted': _0x141fc0 }), await _0x4c8a4d[_0x5abec8(0x1ea)](_0x5b0382, {
                    'document': { 'url': _0x3196ce },
                    'mimetype': _0x5abec8(0x1bd)
                }, { 'quoted': _0x141fc0 });
            } else
                _0x276af2('Failed\x20to\x20download\x20the\x20video.\x20Please\x20try\x20again\x20later.');
        } else
            _0x276af2(_0x5abec8(0x1e6));
    } catch (_0x33006c) {
        console[_0x5abec8(0x1eb)](_0x5abec8(0x1c4), _0x33006c), _0x276af2(_0x5abec8(0x1be));
    }
});
function _0x2c2f() {
    const _0x4a9b00 = [
        '6403176dxJObV',
        'views',
        'status',
        '1094187LuAxsE',
        '8PALYKU',
        '831492qbQlLw',
        'title',
        '*BUGATTI\x20SONG\x20PLAYER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20',
        'url',
        'audio/mp4',
        'type',
        'name',
        'timestamp',
        '/api/download/ytmp3?url=',
        'length',
        'An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.',
        'result',
        'json',
        '5984703iMZOea',
        'Please\x20insert\x20a\x20song/video\x20name.',
        'song',
        '\x0a│⿻\x20*Uploaded:*\x20',
        'No\x20audio\x20found.',
        'Please\x20insert\x20a\x20song\x20name.',
        '\x0a│⿻\x20*Artist:*\x20',
        'ago',
        '21YRNXsN',
        'thumbnail',
        'Failed\x20to\x20download\x20the\x20video.\x20Please\x20try\x20again\x20later.',
        'No\x20videos\x20found.',
        '*BUGATTI\x20VIDEO\x20PLAYER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20',
        '\x0a│⿻\x20*Viewers:*\x20',
        'https://gifted-apis-third-30b2fdbb9819.herokuapp.com',
        'sendMessage',
        'error',
        '/api/download/ytmp4?url=',
        '1655464kqWCzZ',
        'Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.',
        'play',
        '\x0a╰────────────────◆\x0a⦿\x20*Direct\x20YtLink:*\x20',
        'videos',
        '3679611sziVeq',
        'Download',
        '5495615pYZJkv',
        '&apikey=',
        '\x0a│⿻\x20*Duration:*\x20',
        'video/mp4',
        'An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20video.',
        'success',
        'giftedtechk',
        'yt-search',
        '\x0a│⿻\x20*Quality:*\x20',
        '../framework/zokou',
        'Error\x20from\x20API:',
        'author',
        'video',
        'join',
        'download_url'
    ];
    _0x2c2f = function () {
        return _0x4a9b00;
    };
    return _0x2c2f();
}

// TREX-MD
