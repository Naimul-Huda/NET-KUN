let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 Quest 〙 ═
╠═{Sofya}
╠➥Npc Yunis
╠Quest : Timber Storage
╠Type : Side Quest
╠Requirement : Level 27
╠Exp Reward : 8,160
╠Item Reward : 1X Water Staff
╠Objective : Collets 30x Nisel Wood
╠➥Npc Zono
╠Quest : A Dringking Pal at the Fortress
╠Type : Side Quest
╠Requirement : Level 57
╠Exp Reward : 117,000
╠Item Reward : 1x Bow Thimble Zac/1X Parryng Dagger Zc/1X Split Arrow
╠Objective : Defeat 90x Parasitized Dog
╠➥Npc Zono
╠Quest : Overlooked Snack
╠Type : Side Quest
╠Requirement : Level 25
╠Exp Reward : 14,900
╠Item Reward : 1x Ceramic Arrow
╠Objective : Collect 12x Bitter Nut
╠➥Npc Zono
╠Quest : Powdered Madicine
╠Type : Side Quest
╠Requirement : Level 17
╠Exp Reward : 1,200
╠Item Reward : 1x Speed Potion
╠Objective : Collect 1 Animal Horn
╠➥Npc Lefina
╠Quest : The Fiery Gem
╠Type : Side Quest
╠Requirement : Level 28
╠Exp Reward : 60,000
╠Item Reward : 1x Fluffy Tail
╠Objective : Collect 1x Fiery Gem
╠➥Npc Lefina
╠Quest : Proff Of Courage
╠Type : Side Quest
╠Requirement : Level 20
╠Exp Reward : 10,000
╠Item Reward : 1x Anti-Degradation
╠Objective : Collect 3 Minotaur Skin
╠═{El Scaro}
╠➥Npc Juan
╠Quest : Interrupted Construction
╠Type : Side Quest
╠Requirement : Level 72
╠Exp Reward : 73,000
╠Item Reward : 10x Dirty Antique
╠Objective : Collect 20x Greasy Liquid, Collect 30 Big Bolt, Collect 10x Magic Gear
╠═{Garden of Beginning}
╠➥Npc Researcher's Spirit
╠Quest : Free From Infesters!
╠Type : Side Quest
╠Requirement : Level 89
╠Exp Reward : 150,000
╠Item Reward : 1x Frame Helmet
╠Objective : Defeat 20x Controller Fighter & Defeat 20x Controller Knight (At Dark Castle:Area 1)
╠➥Npc Noble's Spirit
╠Quest : Rabbit In The Dark Realm?!
╠Type : Side Quest
╠Requirement : Level 83
╠Exp Reward : 344,000
╠Item Reward : 1x Training Gem
╠Objective : Collectb 1x Lapin's Soul
╠═〘 Net Kun 〙═
`.trim(), m)
}
handler.command = /^(Quest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

