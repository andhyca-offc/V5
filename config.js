let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['62895330584590', '𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ', true], //Owner1
['6287829536442', 'ShiroBotz-MD, true], //Owner2
['6285794408499', 'MR•Andhyca', true], //Owner3
['6285872761910', '🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ', true]
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://melcanz.com': 'melcantik',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.WM = '𝑴𝒚𝑩𝒐𝒕-𝑴𝒖𝒍𝒕𝒊 𝑫𝒆𝒗𝒊𝒄𝒆 𝑩𝒚 🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ'
global.linkgc = 'https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M'
global.linkig = 'https://www.instagram.com/andhycarsrofficial'
global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@andhycarsrofficial'

global.wait = '```█ ▇ ▆ ▅ ▄ ▃ ▂ 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ...```'
global.eror = '_*⚠️ мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'

//========Url Template Buttons==========//
global.dtu = '📸 Instagran Official'
global.urlnya = "https://www.instagram.com/andhycarsrofficial"

//============= callButtons ============//
global.dtc = '📞 Call Owner'
global.phn = '+62 858-7276-1910'

//========== Tampilan Bot =============//
global.sa = '❏––––––『'
global.gx = '│✦'
global.gy = '┊•'
global.gz = '┊'
global.sb = '┗━═┅═━––––––๑'
global.kki = '––––––『'
global.kka = '』––––––'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/fad378b0cb7ad25569926.jpg', 'https://telegra.ph/file/fad378b0cb7ad25569926.jpg',
  'https://telegra.ph/file/fad378b0cb7ad25569926.jpg', 'https://telegra.ph/file/fad378b0cb7ad25569926.jpg',
  'https://telegra.ph/file/fad378b0cb7ad25569926.jpg', 'https://telegra.ph/file/fad378b0cb7ad25569926.jpg',
  'https://telegra.ph/file/fad378b0cb7ad25569926.jpg', 'https://telegra.ph/file/fad378b0cb7ad25569926.jpg'
]

//============= Games ================//
global.benar = '*ᴄᴏᴍᴍᴀɴᴅ* • ʏᴏᴜ ᴀʀᴇ ʀɪɢʜᴛ'
global.salah = '*ᴄᴏᴍᴍᴀɴᴅ* • ʏᴏᴜ ᴀʀᴇ ᴡʀᴏɴɢ'
global.dikit = "*ᴄᴏᴍᴍᴀɴᴅ* • ᴀʟᴍᴏsᴛ, ᴛʀʏ ᴀɢᴀɪɴ"

global.multiplier = 34 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
