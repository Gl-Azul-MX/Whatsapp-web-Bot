import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.postimg.cc/RZSx2W3M/IMG-20241022-WA0152.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*𝐇𝐎𝐋𝐀, 𝐓𝐄 𝐈𝐍𝐕𝐈𝐓𝐎 𝐀 𝐐𝐔𝐄 𝐓𝐄 𝐔𝐍𝐀𝐒 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐄 𝐄𝐋 𝐓𝐄𝐀𝐌 𝐍𝐀𝐊𝐀𝐍𝐎*

1- https://chat.whatsapp.com/LlWSHEMR67ZE8t8mfLm8fu
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➼ 𝐒𝐈 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐍𝐎 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀 𝐄𝐍𝐓𝐑𝐀 𝐀𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐀𝐁𝐀𝐉𝐎! 

Canal :
*✰* ${canal}

> 💥 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
