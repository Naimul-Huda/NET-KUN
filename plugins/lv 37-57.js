let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Bone Dragonewt lv 46 area 1
Bone Dragonewt lv 48 area 3
═〘 Net Kun 〙═
`.trim(), m)
}
handler.command = /^(lv 37|lv 38|lv 39|lv 40|lv 41|lv 42|lv 43|lv 44|lv 45|lv 46|lv 47|lv 48|lv 49|lv 50|lv 51|lv 52|lv 53|lv 54|lv 55|lv 56|lv 57|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
