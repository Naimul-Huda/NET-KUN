let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

╠═〘 OWNER BOT 〙 ═
╠➥ Nama : M. Na'imul Huda
╠➥ Wa      : wa.me/085955117798
╠➥ Fb       : Muhammad Na'imul Huda
╠➥ Ig        : muhammad_nh_32
║
╠═〘 Net Kun 〙═
`.trim(), m)
}
handler.command = /^(owner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

