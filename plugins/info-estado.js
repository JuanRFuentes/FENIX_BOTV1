let handler = async (m, { conn, command, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let texto = `${uptime}`
let fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":`Activo por ${texto}`, "title": 'Kitzia-MD', 'jpegThumbnail': false}}}
conn.reply(m.chat, `ð³ððð ðððð ðð ðð ðððððð ððð ððð ðððððð <ð²ðððððð ððð ðððððð ðð ððð>`, fakemsg)}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' *DÃ­as* â¢', d, ' *Horas* â¢', h, ' *Minutos* â¢', m, ' *Segundos* â¢', s].map(v => v.toString().padStart(2, 0)).join('')
}
