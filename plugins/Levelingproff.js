let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠➥ Pilihan 1
╠ 0-13 Adv Garb, bwing 21 stk (kuil runtuh) beak
╠ 13-140 Tombak Baskara, halo terputus 115 stk, prasasti bersinar 29 stk (kuil para dewa area 2) cube, bb
╠ 140-170 tombak giok, lentera biru pucat 4stk, kapar 27stk (dasar tebing lunagent, ducia area 1) jinjang, porgy
╠170-185: topeng kuzto 61pcs, kacang mistis 61pcs, herbal berkualitas 2stk (zirah pepagan)-drop kuzto
╠➥ Pilihan 2
╠0-5 Pedang kayu atau pedang pendek
╠5-10 Adv Grab, bwing 8 stk (kuil runtuh) beak
╠10-40 Hard knukles, Pelat abu abu 32 stk, Minyak jernih murni 8 stk (makam ratu) Bone dragonewt, Black jelly
╠50-90 Pedang Indigo, sirip pedang panas 32 stk, Pedang cacat 8 stk (Graben membara) Baby Salamander, (Istana gelap) Ksatria Terkontrol
╠90-120 Baju diomedea, kain lembu 32 stk, batu ultimea 12 stk (saluran bawah tanah ultimea tenggara) jelly, (laboratorium brahe gedung 2) lyark spesialis
╠120-160 Tombak ignis, permata merah darah 8 stk, gigi depan patah 40 stk, (Pos depan plastida area 3) kristaldarah embara, (distrik altoale) tikus ganggang
╠160-170 tombak giok, lentera biru pucat 2 stk, kapar 9 stk (dasar tebing lunagent) jinjang, (pesisir ducia) porgy
╠170-185: topeng kuzto 61pcs, kacang mistis 61pcs, herbal berkualitas 2stk (zirah pepagan)-drop kuzto
╠═〘 Net Kun 〙═

`.trim(), m)
}
handler.command = /^(Levelingproff)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

