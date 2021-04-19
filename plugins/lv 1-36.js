let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  Untuk leveling Level 1-36 silahkan selesaikan quest sampai di gunung nisel, ketika sudah di gunung nisel silahkan leveling di shell mask, setelah selesai ambil quest npc zono level 25 dan npc yunis timber storage.
  ═〘 Net Kun 〙═
`.trim(), m)
}
handler.command = /^(lv 1|lv 2| lv 3|lv 4|lv 5|lv 6|lv 7|lv 8|lv 9|lv 10|lv 11|lv 12|lv 13|lv 14|lv 15|lv 16|lv 17|lv 18|lv 19|lv 20|lv 21|lv 22|lv 23|lv 24|lv 25|lv 26|lv 27|lv 28|lv 29|lv 30|lv 35|lv 36|\?)$/i
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
