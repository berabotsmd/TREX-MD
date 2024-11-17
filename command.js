var commands = [];
function cmd(_0x1c0d65, _0x3640a2) {
  _0x1c0d65["function"] = _0x3640a2;
  if (!_0x1c0d65.dontAddCommandList) {
    _0x1c0d65.dontAddCommandList = false;
  }
  if (!_0x1c0d65.desc) {
    _0x1c0d65.desc = '';
  }
  if (!_0x1c0d65.fromMe) {
    _0x1c0d65.fromMe = false;
  }
  if (!_0x1c0d65.category) {
    _0x1c0d65.category = "misc";
  }
  if (!_0x1c0d65.filename) {
    _0x1c0d65.filename = "Not Provided";
  }
  commands.push(_0x1c0d65);
  return _0x1c0d65;
}
module.exports = {
  'cmd': cmd,
  'AddCommand': cmd,
  'Function': cmd,
  'Module': cmd,
  'commands': commands
};
