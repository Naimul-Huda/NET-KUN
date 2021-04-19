let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Untuk leveling silahkan ketik
Lv (level kalian)
═〘 Net Kun 〙═
`.trim(), m)
}
handler.command = /^(Leveling)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

