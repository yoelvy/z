const
	 {
	 WAConnection,
	 MessageType,
	 Presence,
	 MessageOptions,
	 Mimetype,
	 WALocationMessage,
	 WA_MESSAGE_STUB_TYPES,
	 WA_DEFAULT_EPHEMERAL,
	 ReconnectMode,
	 ProxyAgent,
	 GroupSettingChange,
	 waChatKey,
	 mentionedJid,
	 processTime,
	 } = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require('axios')
const speed = require('performance-now')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const request = require('request')
const hx = require('hxz-api')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const fromBuffer = require('file-type')
const FormData = require('form-data')
const yts = require('yt-search')
const { color, bgcolor } = require('../B/color')
const { antiSpam } = require('../B/antispam')
const { fetchJson } = require('../B/krbtz')
const { yta, upload } = require('../B/uptelegra')
const { mediafireDl } = require('../B/mediafire')
const { ngazap } = require('../B/ngazap')
const { emoji2 } = require('../B/emoji2')
const { 
         h2k, 
         getBuffer, 
         randomBytes, 
         generateMessageID, 
         getGroupAdmins, 
         getRandom, 
         start, 
         info, 
         success, 
         close 
       } = require('../B/functions')
const { mess } = require('../A/setting/mess')
const setting = JSON.parse(fs.readFileSync('./A/setting/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./A/database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./A/database/antilink.json'))

const ownerName = setting.OwnerName
const owner = setting.OwnerNumber
const ownerNumber = [`${owner}@s.whatsapp.net`]
const nameBotz = setting.BotName
const lolkey = setting.LolKeyy
const fake = 'Follow TT : rill or fekk×'
KirSelf = false

fakekir = fs.readFileSync('./A/image/fake.jpg')

module.exports = dekk = async (KirBotz, kiryt) => {
try {
     if (!kiryt.hasNewMessage) return
     kiryt = kiryt.messages.all()[0]
     if (!kiryt.message) return
     if (kiryt.key && kiryt.key.remoteJid == 'status@broadcast') return
     global.prefix
     global.blocked
     kiryt.message = (Object.keys(kiryt.message)[0] === 'ephemeralMessage') ? kiryt.message.ephemeralMessage.message : kiryt.message
     const content = JSON.stringify(kiryt.message)
     const from = kiryt.key.remoteJid
     const type = Object.keys(kiryt.message)[0]
     const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
     const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
     const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
     const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
     const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
     const hour_now = moment().format('HH:mm:ss')
     const cmd = (type === 'conversation' && kiryt.message.conversation) ? kiryt.message.conversation : (type == 'imageMessage') && kiryt.message.imageMessage.caption ? kiryt.message.imageMessage.caption : (type == 'videoMessage') && kiryt.message.videoMessage.caption ? kiryt.message.videoMessage.caption : (type == 'extendedTextMessage') && kiryt.message.extendedTextMessage.text ? kiryt.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
     const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
     body = (type === 'conversation' && kiryt.message.conversation.startsWith(prefix)) ? kiryt.message.conversation : (type == 'imageMessage') && kiryt.message[type].caption.startsWith(prefix) ? kiryt.message[type].caption : (type == 'videoMessage') && kiryt.message[type].caption.startsWith(prefix) ? kiryt.message[type].caption : (type == 'extendedTextMessage') && kiryt.message[type].text.startsWith(prefix) ? kiryt.message[type].text : (type == 'listResponseMessage') && kiryt.message[type].singleSelectReply.selectedRowId ? kiryt.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kiryt.message[type].selectedButtonId ? kiryt.message[type].selectedButtonId : ''
     budy = (type === 'conversation') ? kiryt.message.conversation : (type === 'extendedTextMessage') ? kiryt.message.extendedTextMessage.text : ''
     const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
     const args = body.trim().split(/ +/).slice(1)
     const isCmd = body.startsWith(prefix)
     const q = args.join(' ')
     const isGroup = from.endsWith('@g.us')
     const sender = isGroup ? kiryt.participant : kiryt.key.remoteJid
     const botNumber = KirBotz.user.jid
     const isKirBotz = ownerNumber.includes(sender)
     const totalchat = await KirBotz.chats.all()
	 const groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
	 const groupName = isGroup ? groupMetadata.subject : ''
	 const groupId = isGroup ? groupMetadata.jid : ''
	 const groupMembers = isGroup ? groupMetadata.participants : ''
	 const groupDesc = isGroup ? groupMetadata.desc : ''
	 const groupOwner = isGroup ? groupMetadata.owner : ''
	 const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	 const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	 const isGroupAdmins = groupAdmins.includes(sender) || false        
	 const conts = kiryt.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
	 const pushname = kiryt.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
	 const isWelkom = isGroup ? welkom.includes(from) : false
     const isAntiLink = isGroup ? antilink.includes(from) : false

selectedButton = (type == 'buttonsResponseMessage') ? kiryt.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? kiryt.message.listResponseMessage.title : ''

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButImage = async (from, context, fotext, img, but) => {
gam = img
kirtoddd = await KirBotz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: kirtoddd.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: kiryt})
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, todd) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: kiryt
})
}

const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: kiryt, contextInfo: {"mentionedJid": men ? men : []}})
}

const hideTag = async function(from, text){
let anu = await KirBotz.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
KirBotz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./A/image/fake.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

const fakevo = {
key: {
fromMe: false,
participant: '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
imageMessage: {
mimetype: 'image/jpeg',
caption: '©Nover',
jpegThumbnail: fakekir,
viewOnce: true
}
}
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
if(time2 < "11:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

const listmsg = (from, title, desc, list) => { 
let po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©Nover×*_","listType": "SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
KirBotz.sendMessage(from, teks, text, { sendEphemeral: true, quoted : fakevo, thumbnail: fakekir, contextInfo: {forwardingScore: 508, isForwarded: true} })
}
const sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: kiryt, contextInfo: { "mentionedJid": memberr } })
}
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
const costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const runtime = function(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor(seconds % (3600 * 24) / 3600);
const m = Math.floor(seconds % 3600 / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
const hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
const mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
const sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
KirBotz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}

if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('「 ❗ 」Sabar Kak Jangan Spam Tunggu 5 Detik')}

if (isCmd && antiSpam.isFiltered(from) && isGroup) {
console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('「 ❗ 」Sabar Kak Jangan Spam Tunggu 5 Detik')
}

if (isGroup && !kiryt.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Karena Kamu Admin Jadi Bot Gak Akan Kick Kamu')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group Terdeteksi!!_\n_Kamu Akan Di Kick Dari Group!!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && !isGroup) {console.log(color('| PRIVATE |', 'greenyellow'), color(moment(kiryt.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (isCmd && isGroup) {console.log(color('| GROUP |', 'greenyellow'), color(moment(kiryt.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (isCmd && !isKirBotz) antiSpam.addFilter(from)

if (!kiryt.key.fromMe && KirSelf === true) return
//━━━━━━━━━━━━━━━[ UNTUK PENAMBAHAN FITUR ]━━━━━━━━━━━━━━━\\
switch (command) {
case 'allmenu':
var Yy = 0
titid = `「 *Owner Menu* 」
     ${Yy+=1} ${prefix}self
     ${Yy+=1} ${prefix}public
     ${Yy+=1} ${prefix}leave
     ${Yy+=1} ${prefix}bc
     ${Yy+=1} ${prefix}bcg
     ${Yy+=1} ${prefix}bugkatalog

「 *Other Menu* 」
     ${Yy+=1} ${prefix}owner
     ${Yy+=1} ${prefix}sewabot
     ${Yy+=1} ${prefix}rules
     ${Yy+=1} ${prefix}sticker
     ${Yy+=1} ${prefix}toimg
     ${Yy+=1} ${prefix}tourl
     ${Yy+=1} ${prefix}attp
     ${Yy+=1} ${prefix}ttp
     
「 *Random Menu* 」
     ${Yy+=1} ${prefix}ppcp
     ${Yy+=1} ${prefix}waifu
     ${Yy+=1} ${prefix}loli
     ${Yy+=1} ${prefix}husbu
     ${Yy+=1} ${prefix}milf
     ${Yy+=1} ${prefix}cosplay
     ${Yy+=1} ${prefix}wallml
     ${Yy+=1} ${prefix}art
     ${Yy+=1} ${prefix}bts
     ${Yy+=1} ${prefix}exo
     ${Yy+=1} ${prefix}elf
     ${Yy+=1} ${prefix}neko
     ${Yy+=1} ${prefix}shota
     ${Yy+=1} ${prefix}sagiri
     ${Yy+=1} ${prefix}shinobu
     ${Yy+=1} ${prefix}megumin
     ${Yy+=1} ${prefix}wallnime
     ${Yy+=1} ${prefix}anime
     ${Yy+=1} ${prefix}teknologi
     ${Yy+=1} ${prefix}naruto 
     ${Yy+=1} ${prefix}kaneki 
     ${Yy+=1} ${prefix}shinomiya 
     ${Yy+=1} ${prefix}kurama 
     ${Yy+=1} ${prefix}rimuru 
     ${Yy+=1} ${prefix}akira 
     ${Yy+=1} ${prefix}dazai 
     ${Yy+=1} ${prefix}miku 
     ${Yy+=1} ${prefix}mikasa 
     ${Yy+=1} ${prefix}eren 
     ${Yy+=1} ${prefix}titan 
     ${Yy+=1} ${prefix}levi
     ${Yy+=1} ${prefix}sakura 
     ${Yy+=1} ${prefix}hinata 
     ${Yy+=1} ${prefix}neji 
     ${Yy+=1} ${prefix}shinobu 
     ${Yy+=1} ${prefix}kurumi 
     ${Yy+=1} ${prefix}inosuke  
     ${Yy+=1} ${prefix}jiraya 
     ${Yy+=1} ${prefix}tsunade 
     ${Yy+=1} ${prefix}kiba 
     ${Yy+=1} ${prefix}boruto 
     ${Yy+=1} ${prefix}sarada 
     ${Yy+=1} ${prefix}sasuke 
     ${Yy+=1} ${prefix}madara 
     ${Yy+=1} ${prefix}obito 
     ${Yy+=1} ${prefix}obito 
     ${Yy+=1} ${prefix}tanjiro 
     ${Yy+=1} ${prefix}nezuko 
     ${Yy+=1} ${prefix}luffy 
     ${Yy+=1} ${prefix}zoro 
     ${Yy+=1} ${prefix}sanji 
     ${Yy+=1} ${prefix}gon 
     ${Yy+=1} ${prefix}killua 
     ${Yy+=1} ${prefix}sagiri 
     ${Yy+=1} ${prefix}zenitsu 
     ${Yy+=1} ${prefix}natsu 
     ${Yy+=1} ${prefix}genos 
     ${Yy+=1} ${prefix}saitama 
     ${Yy+=1} ${prefix}rem
     ${Yy+=1} ${prefix}chiisaihentai
     ${Yy+=1} ${prefix}trap
     ${Yy+=1} ${prefix}blowjob
     ${Yy+=1} ${prefix}fox
     ${Yy+=1} ${prefix}dog
     ${Yy+=1} ${prefix}cat
     ${Yy+=1} ${prefix}panda
     ${Yy+=1} ${prefix}red_panda
     ${Yy+=1} ${prefix}bird
     ${Yy+=1} ${prefix}koala
     ${Yy+=1} ${prefix}bj
     ${Yy+=1} ${prefix}ero
     ${Yy+=1} ${prefix}cum
     ${Yy+=1} ${prefix}feet
     ${Yy+=1} ${prefix}yuri
     ${Yy+=1} ${prefix}trap
     ${Yy+=1} ${prefix}lewd
     ${Yy+=1} ${prefix}feed
     ${Yy+=1} ${prefix}eron
     ${Yy+=1} ${prefix}solo
     ${Yy+=1} ${prefix}gasm
     ${Yy+=1} ${prefix}poke
     ${Yy+=1} ${prefix}anal
     ${Yy+=1} ${prefix}holo
     ${Yy+=1} ${prefix}tits
     ${Yy+=1} ${prefix}kuni
     ${Yy+=1} ${prefix}kiss
     ${Yy+=1} ${prefix}erok
     ${Yy+=1} ${prefix}smug
     ${Yy+=1} ${prefix}baka
     ${Yy+=1} ${prefix}solog
     ${Yy+=1} ${prefix}feetg
     ${Yy+=1} ${prefix}lewdk
     ${Yy+=1} ${prefix}waifu
     ${Yy+=1} ${prefix}pussy
     ${Yy+=1} ${prefix}femdom
     ${Yy+=1} ${prefix}cuddle
     ${Yy+=1} ${prefix}hentai
     ${Yy+=1} ${prefix}eroyuri
     ${Yy+=1} ${prefix}cum_jpg
     ${Yy+=1} ${prefix}erofeet
     ${Yy+=1} ${prefix}holoero
     ${Yy+=1} ${prefix}classic
     ${Yy+=1} ${prefix}erokemo
     ${Yy+=1} ${prefix}fox_girl
     ${Yy+=1} ${prefix}futanari
     ${Yy+=1} ${prefix}lewdkemo
     ${Yy+=1} ${prefix}wallpaper
     ${Yy+=1} ${prefix}pussy_jpg
     ${Yy+=1} ${prefix}kemonomimi
     ${Yy+=1} ${prefix}nsfw_avatar
     ${Yy+=1} ${prefix}dosa1
     ${Yy+=1} ${prefix}dosa2
     ${Yy+=1} ${prefix}dosa3
     ${Yy+=1} ${prefix}dosa4
     ${Yy+=1} ${prefix}dosa5
     ${Yy+=1} ${prefix}dosa6
     ${Yy+=1} ${prefix}dosa7
     ${Yy+=1} ${prefix}dosa8
     ${Yy+=1} ${prefix}dosa9
     ${Yy+=1} ${prefix}dosa10
     ${Yy+=1} ${prefix}dosa11
     ${Yy+=1} ${prefix}dosa12
     ${Yy+=1} ${prefix}dosa13
     ${Yy+=1} ${prefix}dosa14
     ${Yy+=1} ${prefix}dosa15
     ${Yy+=1} ${prefix}dosa16
     ${Yy+=1} ${prefix}dosa17
     ${Yy+=1} ${prefix}dosa18
     ${Yy+=1} ${prefix}dosa19
     ${Yy+=1} ${prefix}dosa20
     ${Yy+=1} ${prefix}dosa21
     ${Yy+=1} ${prefix}dosa23
     ${Yy+=1} ${prefix}dosa24
     ${Yy+=1} ${prefix}yaoi
     ${Yy+=1} ${prefix}ecchi
     ${Yy+=1} ${prefix}ahegao
     ${Yy+=1} ${prefix}hololewd
     ${Yy+=1} ${prefix}sideoppai
     ${Yy+=1} ${prefix}animefeets
     ${Yy+=1} ${prefix}animebooty
     ${Yy+=1} ${prefix}animethighss
     ${Yy+=1} ${prefix}hentaiparadise
     ${Yy+=1} ${prefix}animearmpits
     ${Yy+=1} ${prefix}hentaifemdom
     ${Yy+=1} ${prefix}lewdanimegirls
     ${Yy+=1} ${prefix}biganimetiddies
     ${Yy+=1} ${prefix}animebellybutton
     ${Yy+=1} ${prefix}hentai4everyone

「 *Logo Menu* 」
     ${Yy+=1} ${prefix}pornhub
     ${Yy+=1} ${prefix}glitch
     ${Yy+=1} ${prefix}avenger
     ${Yy+=1} ${prefix}space
     ${Yy+=1} ${prefix}ninjalogo
     ${Yy+=1} ${prefix}marvelstudio
     ${Yy+=1} ${prefix}lionlogo
     ${Yy+=1} ${prefix}wolflogo
     ${Yy+=1} ${prefix}steel3d
     ${Yy+=1} ${prefix}wallgravity
     ${Yy+=1} ${prefix}shadow 
     ${Yy+=1} ${prefix}cup 
     ${Yy+=1} ${prefix}cup1 
     ${Yy+=1} ${prefix}romance 
     ${Yy+=1} ${prefix}smoke 
     ${Yy+=1} ${prefix}burnpaper 
     ${Yy+=1} ${prefix}lovemessage 
     ${Yy+=1} ${prefix}undergrass 
     ${Yy+=1} ${prefix}love 
     ${Yy+=1} ${prefix}coffe 
     ${Yy+=1} ${prefix}woodheart 
     ${Yy+=1} ${prefix}woodenboard 
     ${Yy+=1} ${prefix}summer3d 
     ${Yy+=1} ${prefix}wolfmetal 
     ${Yy+=1} ${prefix}nature3d 
     ${Yy+=1} ${prefix}underwater 
     ${Yy+=1} ${prefix}golderrose 
     ${Yy+=1} ${prefix}summernature 
     ${Yy+=1} ${prefix}letterleaves 
     ${Yy+=1} ${prefix}glowingneon 
     ${Yy+=1} ${prefix}fallleaves 
     ${Yy+=1} ${prefix}flamming 
     ${Yy+=1} ${prefix}harrypotter 
     ${Yy+=1} ${prefix}carvedwood
     ${Yy+=1} ${prefix}tiktokmaker
     ${Yy+=1} ${prefix}arcade8bit 
     ${Yy+=1} ${prefix}battlefield4 
     ${Yy+=1} ${prefix}pubg
     ${Yy+=1} ${prefix}wetglass 
     ${Yy+=1} ${prefix}multicolor3d 
     ${Yy+=1} ${prefix}watercolor 
     ${Yy+=1} ${prefix}luxurygold 
     ${Yy+=1} ${prefix}galaxywallpaper 
     ${Yy+=1} ${prefix}lighttext 
     ${Yy+=1} ${prefix}beautifulflower 
     ${Yy+=1} ${prefix}puppycute 
     ${Yy+=1} ${prefix}royaltext 
     ${Yy+=1} ${prefix}heartshaped 
     ${Yy+=1} ${prefix}birthdaycake 
     ${Yy+=1} ${prefix}galaxystyle 
     ${Yy+=1} ${prefix}hologram3d 
     ${Yy+=1} ${prefix}greenneon 
     ${Yy+=1} ${prefix}glossychrome 
     ${Yy+=1} ${prefix}greenbush 
     ${Yy+=1} ${prefix}metallogo 
     ${Yy+=1} ${prefix}noeltext 
     ${Yy+=1} ${prefix}glittergold 
     ${Yy+=1} ${prefix}textcake 
     ${Yy+=1} ${prefix}starsnight 
     ${Yy+=1} ${prefix}wooden3d 
     ${Yy+=1} ${prefix}textbyname 
     ${Yy+=1} ${prefix}writegalacy 
     ${Yy+=1} ${prefix}galaxybat 
     ${Yy+=1} ${prefix}snow3d 
     ${Yy+=1} ${prefix}birthdayday 
     ${Yy+=1} ${prefix}goldplaybutton 
     ${Yy+=1} ${prefix}silverplaybutton 
     ${Yy+=1} ${prefix}freefire
     ${Yy+=1} ${prefix}blackpink
     ${Yy+=1} ${prefix}neon
     ${Yy+=1} ${prefix}greenneon
     ${Yy+=1} ${prefix}advanceglow
     ${Yy+=1} ${prefix}futureneon
     ${Yy+=1} ${prefix}sandwriting
     ${Yy+=1} ${prefix}sandsummer
     ${Yy+=1} ${prefix}sandengraved
     ${Yy+=1} ${prefix}metaldark
     ${Yy+=1} ${prefix}neonlight
     ${Yy+=1} ${prefix}holographic
     ${Yy+=1} ${prefix}text1917
     ${Yy+=1} ${prefix}minion
     ${Yy+=1} ${prefix}deluxesilver
     ${Yy+=1} ${prefix}newyearcard
     ${Yy+=1} ${prefix}bloodfrosted
     ${Yy+=1} ${prefix}halloween
     ${Yy+=1} ${prefix}jokerlogo
     ${Yy+=1} ${prefix}fireworksparkle
     ${Yy+=1} ${prefix}natureleaves
     ${Yy+=1} ${prefix}bokeh
     ${Yy+=1} ${prefix}toxic
     ${Yy+=1} ${prefix}strawberry
     ${Yy+=1} ${prefix}box3d
     ${Yy+=1} ${prefix}roadwarning
     ${Yy+=1} ${prefix}breakwall
     ${Yy+=1} ${prefix}icecold
     ${Yy+=1} ${prefix}luxury
     ${Yy+=1} ${prefix}cloud
     ${Yy+=1} ${prefix}summersand
     ${Yy+=1} ${prefix}horrorblood
     ${Yy+=1} ${prefix}thunder

「 *Group Menu* 」
     ${Yy+=1} ${prefix}tagall
     ${Yy+=1} ${prefix}hidetag
     ${Yy+=1} ${prefix}linkgc
     ${Yy+=1} ${prefix}welcome
     ${Yy+=1} ${prefix}antilink
     ${Yy+=1} ${prefix}open
     ${Yy+=1} ${prefix}close
     ${Yy+=1} ${prefix}add
     ${Yy+=1} ${prefix}kick
     ${Yy+=1} ${prefix}promote
     ${Yy+=1} ${prefix}demote
     ${Yy+=1} ${prefix}listadmin
     ${Yy+=1} ${prefix}listonline

「 *Game Menu* 」
     ${Yy+=1} ${prefix}ganteng
     ${Yy+=1} ${prefix}cantik
     ${Yy+=1} ${prefix}jelek
     ${Yy+=1} ${prefix}goblok
     ${Yy+=1} ${prefix}bego
     ${Yy+=1} ${prefix}pintar
     ${Yy+=1} ${prefix}jago
     ${Yy+=1} ${prefix}nolep
     ${Yy+=1} ${prefix}monyet
     ${Yy+=1} ${prefix}babi
     ${Yy+=1} ${prefix}beban
     ${Yy+=1} ${prefix}baik
     ${Yy+=1} ${prefix}jahat
     ${Yy+=1} ${prefix}anjing
     ${Yy+=1} ${prefix}haram
     ${Yy+=1} ${prefix}kontol
     ${Yy+=1} ${prefix}pakboy
     ${Yy+=1} ${prefix}pakgirl
     ${Yy+=1} ${prefix}wibu
     ${Yy+=1} ${prefix}hebat
     ${Yy+=1} ${prefix}sadboy
     ${Yy+=1} ${prefix}sadgirl
     ${Yy+=1} ${prefix}suit
     ${Yy+=1} ${prefix}bisakah
     ${Yy+=1} ${prefix}kapankah
     ${Yy+=1} ${prefix}apakah
     ${Yy+=1} ${prefix}rate
     ${Yy+=1} ${prefix}jadian

「 *Download Menu* 」
     ${Yy+=1} ${prefix}play
     ${Yy+=1} ${prefix}ytmp4
     ${Yy+=1} ${prefix}ytmp3
     ${Yy+=1} ${prefix}tiktok
     ${Yy+=1} ${prefix}tiktoknowm
     ${Yy+=1} ${prefix}tiktokaudio
     ${Yy+=1} ${prefix}mediafire
     ${Yy+=1} ${prefix}tiktokstalk
     ${Yy+=1} ${prefix}youtubestalk
     ${Yy+=1} ${prefix}instagramstalk
     ${Yy+=1} ${prefix}githubstalk`
sendButMessage(from, titid, `Created By Nover`, [
{
buttonId: `${prefix}owner`,
buttonText: {
displayText: `OWNER`,
},
type: 1,
}
,
{
buttonId: `${prefix}rules`,
buttonText: {
displayText: `RULES`,
},
type: 1,
}
,
{
buttonId: `${prefix}sewabot`,
buttonText: {
displayText: `SEWABOT`,
},
type: 1,
}
]);
break
case 'sewabot':
gopeynya = 'https://telegra.ph/file/4298164dfed8dc5cd40d7.jpg'
buff = await getBuffer(gopeynya)
teksnya = `
 * *
 

* *


* *


* *


*🌹 PAYMENT 🌹*
Dana : 085781375237
*Note* KIRIM BUKTI TF

*🌹 DATA OWNER 🌹*
🔖 wa.me/6285781375237
🔖 IG ×
🔖 GH 
🔖 YT ×
🔖 © Developer Nover ぽ`
but = 
[
{buttonId: `${prefix}owner`,buttonText:{displayText: `👥 OWNER`},type:1}
]
sendButImage(from, `${teksnya}`, `Created By Nover`, buff, but)
break
case 'rules':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/6285781375237*_`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .allmenu*̵`, buttons: [
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'LIST MENU' }, type: 1 }
], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakekir, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'menu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: '♞   ♚   ❁',
footerText: `©ᴺᵒᵛᵉʳ ᴮᵒᵗᶻ`,
description: `「 *🄸🄽🄵🄾 🅄🅂🄴🅁* 」
*↻𝗞𝗼𝗻𝘁𝗮𝗸 𝗨𝘀𝗲𝗿* : @${sender.split('@')[0]} 
*↻𝗕𝗶𝗼 𝗨𝘀𝗲𝗿* : ${thu.status}

「 *🄸🄽🄵🄾 🄱🄾🅃* 」
*↻𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗕𝗼𝘁* : ${runtime(process.uptime())}
*↻𝗦𝗽𝗲𝗲𝗱 𝗕𝗼𝘁* : ${latensie.toFixed(4)} Detik ⚡
*↻𝗠𝗼𝗱𝗲 𝗕𝗼𝘁* : ${KirSelf ? '*S̶E̶L̶F̶*' : '*P̶U̶B̶L̶I̶C̶*'}
*↻𝗧𝗼𝘁𝗮𝗹 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁* : ${groups.length}
*↻𝗧𝗼𝘁𝗮𝗹 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗖𝗵𝗮𝘁* : ${privat.length}
*↻𝗧𝗼𝘁𝗮𝗹 𝗦𝗲𝗺𝘂𝗮 𝗖𝗵𝗮𝘁* : ${totalChat.length}
*↻𝗪𝗮𝗸𝘁𝘂 𝗪𝗜𝗕* : ${wib}
*↻𝗪𝗮𝗸𝘁𝘂 𝗪𝗜𝗧* : ${wit}
*↻𝗪𝗮𝗸𝘁𝘂 𝗪𝗜𝗧𝗔* : ${wita}
*↻𝗣𝗿𝗲𝗽𝗶x 𝗕𝗼𝘁* : *-> ${prefix} <-*`,
sections: [
{
"title": `━━━━━━━━━━━━━━━━[ LIST ]━━━━━━━━━━━━━━━`,
 rows: [
{
"title": "                                            ALL MENU",
"rowId": `${prefix}allmenu`
}
]
}
,
{
"title": `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
 rows: [
{
"title": "                                            SEWABOT",
"rowId": `${prefix}sewabot`
}
]
}
,
{
"title": `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
 rows: [
{
"title": "                                            RULES BOT",
"rowId": `${prefix}rules`
}
]
}
,
{
"title": `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
 rows: [
{
"title": "                                            OWNER BOT",
"rowId": `${prefix}owner`
}
]
}
],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fakevo})
break
case 'bugkatalog':
if (!kiryt.key.fromMe && !isKirBotz) return reply(mess.only.owner)
hmm4 = fs.readFileSync(`./A/image/fake.jpg`)
imeu = await KirBotz.prepareMessage('0@s.whatsapp.net', hmm4, image)
imeg = imeu.message.imageMessage
res = await KirBotz.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "", 
"title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
"productImageCount": "1",
},
"businessOwnerJid": "6281387996928@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 9999,
"isForwarded": true
}
}
}, {quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, 
remoteJid: "status@broadcast"
},
message: {
orderMessage: {
itemCount: 999999999, 
status: 1,
surface: 1,
message: '999999999',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}
})
KirBotz.relayWAMessage(res)
break
case 'bc':
if (!kiryt.key.fromMe && !isKirBotz) return reply(mess.only.owner)
if (args.length < 1) return reply('teks?')
anu = await KirBotz.chats.all()
if (isMedia && !kiryt.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kiryt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kiryt
bc = await KirBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `Base By *Noverꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakekir, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `Base By *Noverꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakekir, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
case 'bcg':
if (!kiryt.key.fromMe && !isKirBotz) return reply(mess.only.owner)
if (args.length < 1) return reply('teks?')
var anu = await KirBotz.chats.all().filter(v => v.jid.endsWith('g.us'))
if (isMedia && !kiryt.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kiryt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kiryt
bc = await KirBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST GROUP ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `Base By *Noverꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakekir, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST GROUP ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `Base By *ꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakekir, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
case 'public':
if (!kiryt.key.fromMe && !isKirBotz) return reply(mess.only.owner)
if (KirSelf === false) return
uptime = process.uptime()
KirSelf = false
reply(`「 *Berhasil Berubah Menjadi Mode Public* 」`)
break
case 'self':
if (!kiryt.key.fromMe && !isKirBotz) return reply(mess.only.owner)
if (KirSelf === true) return
uptime = process.uptime()
KirSelf = true
reply(`「 *Berhasil Berubah Menjadi Mode Self* 」`)
break
case 'leave':
{
if (!kiryt.key.fromMe && !isKirBotz) return reply(mess.only.owner)
KirBotz.groupLeave(from)
}
break
case 'owner':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (var mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:${ownerName}\n` +
`item1.TEL;waid=${owner}:${owner}\n` +
`item1.X-ABLabel: Creator Bot\n` +
`item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
`item2.X-ABLabel: Email\n` +
`item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
`item3.X-ABLabel: Channel Owner\n` +
'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
{ quoted: fakevo, 
})
reply(`*Ituh Owner Ku Jangan Galak" Yah*`)
break
/* Case Downloader */
case 'play':
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(mess.wait)
var yut = await yts(q)
yta(yut.videos[0].url)         
.then(async(res) => {
var { thumb, title, filesizeF, filesize } = res
var capti = `🜲 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬 🜲

𖥸 Judul : ${yut.all[0].title}
𖥸 ID Video : ${yut.all[0].videoId}
𖥸️ Diupload Pada : ${yut.all[0].ago}
𖥸️️ Views : ${yut.all[0].views}
𖥸️ Durasi : ${yut.all[0].timestamp}
𖥸 Channel : ${yut.all[0].author.name}
𖥸 Link Channel : ${yut.all[0].author.url}
𖥸 Link Video : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await KirBotz.prepareMessage(from, ya, image)
sendButloc(from,monospace(capti),'',`Base By *×*`,
[
{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
,
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp4':
if (args.length < 1) return reply('Link?')     
reply(mess.wait)
KirTid = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${q}`)
kirmp4 = await getBuffer(KirTid.result.link)
pll = `Nih Kak`
sendButVideo(from, pll, `Created By `, kirmp4, [
{
buttonId: `${prefix}makasih`,
buttonText: {
displayText: `Makasih Bot`,
},
type: 1,
}
])
break
case 'ytmp3':
if (args.length < 1) return reply('Link?')         
reply(mess.wait)      
KirTid = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${q}`)
kirmp3 = await getBuffer(KirTid.result.link)
await KirBotz.sendMessage(from, kirmp3, audio, { mimetype: 'audio/mp4', quoted: kiryt })
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(`Link Error`)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `MediaFire Downloader
  
Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Jika File Tidak Muncul Silahkan Download Melalui Link Di Atas*_
_*Tunggu File Lagi Di Kirim......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: kiryt})
break
case 'tiktok':
if (!q) return reply (`Link Nya Kak?`)
reply(mess.wait)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${q}`)
pll = `Nih Kak`
sendButVideo(from, pll, `Created By `, get_result, [
{
buttonId: `${prefix}tiktoknowm ${q}`,
buttonText: {
displayText: `NO WM`,
},
type: 1,
},
{
buttonId: `${prefix}tiktokaudio ${q}`,
buttonText: {
displayText: `AUDIO`,
},
type: 1,
}
])
break
case 'tiktoknowm':
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(`Error Bang`)
if (!q) return reply('Link?')
reply(mess.wait)
hx.ttdownloader(`${args[0]}`)
.then(result => {
const { wm, nowm, audio } = result
axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
.then(async (a) => {
me = `Nih Bree✔︎`
KirBotz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:fakevo,caption:me})
})
})
break
case 'tiktokaudio':
if (args.length < 1) return reply("Masukkan url tiktok")
reply(mess.wait)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${q}`)
KirBotz.sendMessage(from, get_result, audio, {mimetype: 'audio/mp4', quoted: fakevo})
break
case 'tiktokstalk':
if (args.length == 0) return reply(`Example: ${prefix + command} namatt`)
reply(mess.wait)
ttk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Username : ${get_result.username}\n`
txt += `Nickname : ${get_result.nickname}\n`
txt += `Bio : ${get_result.bio}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.followings}\n`
txt += `Likes : ${get_result.likes}\n`
txt += `Vidio : ${get_result.video}\n`
buffer = await getBuffer(get_result.user_picture)
KirBotz.sendMessage(from, buffer, image, {quoted: kiryt, caption: txt})
break
case 'githubstalk':
if (args.length == 0) return reply(`Example: ${prefix + command} namagh`)
reply(mess.wait)
ghk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Full : ${get_result.name}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.following}\n`
txt += `Publick : ${get_result.public_repos}\n`
txt += `Public Gits : ${get_result.public_gists}\n`
txt += `User : ${get_result.user}\n`
txt += `Compi : ${get_result.company}\n`
txt += `Lokasi : ${get_result.location}\n`
txt += `Email : ${get_result.email}\n`
txt += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.avatar)
KirBotz.sendMessage(from, buffer, image, {quoted: kiryt, caption: txt})
break
case 'instagramstalk':
if (args.length == 0) return reply(`Example: ${prefix + command} namaig`)
reply(mess.wait)
igk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Link : https://www.instagram.com/${get_result.username}\n`
txt += `Full : ${get_result.fullname}\n`
txt += `Post : ${get_result.posts}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.following}\n`
txt += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.photo_profile)
KirBotz.sendMessage(from, buffer, image, {quoted: kiryt, caption: txt})
break
case 'youtubestalk':
if (args.length == 0) return reply(`Example: ${prefix + command} namachannel`)
reply(mess.wait)
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
reply(cari.trim())
break
/* Case Group */
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih Enable Atau Disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah Aktif`)
antilink.push(from)
fs.writeFileSync('./A/database/antilink.json', JSON.stringify(antilink))
reply('「 *ANTILINK DI AKTIFKAN* 」\nYang Ngirim Link Group Bakal Ke Kick!')
} else if (args[0].toLowerCase() === 'disable'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./A/database/antilink.json', JSON.stringify(antilink))
reply('「 *ANTILINK DI NONAKTIFKAN* 」')
} else {
reply(`Pilih Enable Atau Disable`)
}
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Penggunaan ${prefix}welcome enable/disable`)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('Udah Aktif')
welkom.push(from)
fs.writeFileSync('./A/database/welcome.json', JSON.stringify(welkom))
reply('Sukses Mengaktifkan Fitur Welcome Di Group Ini ✔️')
} else if ((args[0]) === 'disable') {
welkom.splice(from, 1)
fs.writeFileSync('./A/database/welcome.json', JSON.stringify(welkom))
reply('Sukses Menonaktifkan Fitur Welcome Di Group Ini ✔️')
} else {
reply('Enable Untuk Mengaktifkan, Disable Untuk Menonaktifkan')
}
break
case 'listadmin':
if (!isGroup) return reply(mess.only.group)
teks = `List Admin Of Group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'listonline':
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(KirBotz.chats.get(ido).presences), KirBotz.user.jid]
KirBotz.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: kiryt, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await KirBotz.groupInviteCode(from)
yah = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
KirBotz.sendMessage(from, yah, text, { quoted: kiryt })
break
case 'hidetag':
if (!q) return reply('Tekss?')
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
try {
quotedText = kiryt.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!q) return reply('Teks?')
const arr = [];
const txti = `[ TAG ALL ]\n\n${q ? q : ''}\n\n`
for (var i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'open':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
reply(`Sukses Membuka Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
reply(`Sukses Menutup Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} 628×××××××`)
if (kiryt.message.extendedTextMessage === null || kiryt.message.extendedTextMessage === undefined) {
entah = q.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
KirBotz.groupAdd(from, [entah])
} else {
entah = kiryt.message.extendedTextMessage.contextInfo.participant
KirBotz.groupAdd(from, [entah])
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} @tag`)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
reply(`Succses Kick Target!!!`)
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (kiryt.message.extendedTextMessage === undefined || kiryt.message.extendedTextMessage === null) return reply(`Gunakan Seperti Ini ${prefix+command} @tag`)
mentioned = kiryt.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah Di Terima, Anda Menjdi Admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
KirBotz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah Di Terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
KirBotz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!kiryt.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (kiryt.message.extendedTextMessage === undefined || kiryt.message.extendedTextMessage === null) return reply(`Gunakan Seperti Ini ${prefix+command} @tag`)
mentioned = kiryt.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah Di Terima, Anda Tidak Menjadi Admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
KirBotz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah Di Terima, Menurunkan @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
KirBotz.groupDemoteAdmin(from, mentioned)
}
break
case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pintar': 
case 'jago': 
case 'nolep': 
case 'monyet':     	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (!isGroup) return reply(mess.only.group)
jds = []
var AS1 = groupMembers
var CS1 = AS1[Math.floor(Math.random() * AS1.length)]      
var vcardd = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:Ter${command}\n` 
+ `ORG: Anak ${command};\n`
+ `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
+ 'END:VCARD' 
KirBotz.sendMessage(from, {displayname: "Mikey", vcard: vcardd}, MessageType.contact, { quoted: kiryt})
reply(`Hahah Dia Yang *Ter${command}* Disini`)
break
case 'suit': 
if (!isGroup) return reply(mess.only.group)
but = [
{ buttonId: `${prefix}suitsamabot batu`, buttonText: { displayText: '✊BATU✊' }, type: 1 },
{ buttonId: `${prefix}suitsamabot gunting`, buttonText: { displayText: '✌️GUNTING✌️' }, type: 1 },
{ buttonId: `${prefix}suitsamabot kertas`, buttonText: { displayText: '✋KERTAS✋' }, type: 1 }
]
sendButton(from, `Silahkan Pilih Kak ${pushname}`, fake, but)
break
case 'suitsamabot':
if (!isGroup) return reply(mess.only.group)
if (args[0] === 'gunting' ) {
gunting = [
'Kamu *Gunting*\nBot *Kertas*\nKamu Menang 😔',
'Kamu *Gunting*\nBot *Batu*\nKamu Kalah 😆',
'Kamu *Gunting*\nBot *Gunting*\nKita Seri 😏'
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
'Kamu *Kertas*\nBot *Batu*\nKamu Menang 😔',
'Kamu *Kertas*\nBot *Gunting*\nKamu Kalah 🙂',
'Kamu *Kertas*\nBot *Kertas*\nKita Seri 😏'
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
'Kamu *Batu*\nBot *Gunting*\nKamu Menang 😔',
'Kamu *Batu*\nBot *Kertas*\nKamu Kalah 🙂',
'Kamu *Batu*\nBot *Batu*\nKita Seri 😏'
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply(`Penggunaan\n${prefix+command} batu/kertas/gunting`)
}
break
case 'bisakah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}bisakah aku terbang`)
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Jawaban : ${random}`
reply(tt)
break
case 'kapankah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}kapankah aku menikah`)
no = `${Math.floor(Math.random() * 100)}`
naon = ['Jam lagi','Hari lagi','Minggu lagi','Bulan lagi','Tahun lagi']
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Jawaban : ${no} ${random}`
reply(kapan)
break      	   
case 'rate':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
reply(rating)
break
case 'apakah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}apakah aku jelek`)
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Jawaban = ${random}`
reply(tz)
break
case 'jadian':
if (!isGroup) return reply(mess.only.group)
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee... Yang Lagi Jadian @${akuu.jid.split('@')[0]}  >♥<️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
/* Case Other */
case 'ttp':  
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp KirBotz`)
anu1 = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${q}`)
KirBotz.sendMessage(from, anu1, sticker, {quoted: kiryt })
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: kiryt })
break
case 'tourl':
if ((isMedia && !kiryt.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kiryt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kiryt
owgi = await KirBotz.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('Kirim Reply Gambar/Video')
}
break
case 'sticker':
case 'stiker':
case 'stickergif':
case 'stikergif':
case 'sgif':
case 's':
if ((isMedia && !kiryt.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kiryt).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kiryt
const media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('Eror')
})
.on('end', function () {
console.log('Finish')
KirBotz.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: kiryt })
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && kiryt.message.videoMessage.seconds < 11 || isQuotedVideo && kiryt.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kiryt).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kiryt
const media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
KirBotz.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: kiryt })
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else  {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim\nDurasi Sticker Video 1-9 Detik...`)
}
break
case 'toimg':{
if (!isQuotedSticker) return reply('Reply Sticker Nya!')
reply(mess.wait)
encmediaa = JSON.parse(JSON.stringify(kiryt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaa = await KirBotz.downloadAndSaveMediaMessage(encmediaa)
ran = getRandom('.png')
exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
fs.unlinkSync(mediaa)
if (err) return reply('Eror')
buffer = fs.readFileSync(ran)
KirBotz.sendMessage(from, buffer, image, {quoted: kiryt, thumbnail:Buffer.alloc(0), caption: 'Done'})
fs.unlinkSync(ran)
})
}
break
case 'naruto': 
case 'kaneki': 
case 'shinomiya': 
case 'kurama': 
case 'rimuru': 
case 'akira': 
case 'dazai': 
case 'miku': 
case 'mikasa': 
case 'eren': 
case 'titan': 
case 'levi':
case 'sakura': 
case 'hinata': 
case 'neji': 
case 'shinobu': 
case 'kurumi': 
case 'inosuke':
case 'jiraya': 
case 'tsunade': 
case 'kiba': 
case 'boruto': 
case 'sarada': 
case 'sasuke': 
case 'madara': 
case 'obito': 
case 'obito': 
case 'tanjiro': 
case 'nezuko': 
case 'luffy': 
case 'zoro': 
case 'sanji': 
case 'gon': 
case 'killua': 
case 'sagiri': 
case 'zenitsu': 
case 'natsu': 
case 'genos': 
case 'saitama': 
case 'rem':
reply(mess.wait)
const au = await hx.chara(`${command}`)
const aca = au[Math.floor(Math.random() * au.length)]
const ao = await getBuffer(aca)
but = 
[
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `Klik Next Untuk Melanjutkan`, ao, but)
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':
reply(mess.wait)
const wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
const wipi = wipu[Math.floor(Math.random() * (wipu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
const bb = await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
const buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
const ButtonssMessages = {
contentText: `*Nih Kak*`,
buttons: buttonnsss,
footerText: `Klik Next Untuk Melanjutkan`,
headerType: 4,
imageMessage: bb.message.imageMessage
}
await KirBotz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : kiryt})
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'anime':
reply(mess.wait)
const wiu = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)).data
const wii = wiu[Math.floor(Math.random() * (wiu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wii))
const ab = await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
const buonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT☕'}, type: 1}]
const ButtonssMessagess = {
contentText: `*Nih Kak*`,
buttons: buonnsss,
footerText: `Klik Next Untuk Melanjutkan`,
headerType: 4,
imageMessage: ab.message.imageMessage
}
await KirBotz.sendMessage(from, ButtonssMessagess, MessageType.buttonsMessage, {quoted : kiryt})
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'teknologi':
reply(mess.wait)
const asu = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)).data
const titit = asu[Math.floor(Math.random() * (asu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(titit))
const agb = await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
const bunnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT☕'}, type: 1}]
const ButsMessages = {
contentText: `*Nih Kak*`,
buttons: bunnsss,
footerText: `Klik Next Untuk Melanjutkan`,
headerType: 4,
imageMessage: agb.message.imageMessage
}
await KirBotz.sendMessage(from, ButsMessages, MessageType.buttonsMessage, {quoted : kiryt})
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
reply(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
but = 
[
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `Klik Next Untuk Melanjutkan`, hasil, but)
break
case 'ssweb':
if (!q) return reply(`Link Nya?`)
sshaha = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lolkey}&url=${q}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `${q}`, `Follow TT : rill or fekk×`, sshaha, but)
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
reply(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
but = 
[
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `Klik Next Untuk Melanjutkan`, hasil, but)
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
reply(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
but = 
[
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `Klik Next Untuk Melanjutkan`, hasil, but)
break
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'bird':
case 'koala':
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
but = 
[
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `Klik Next Untuk Melanjutkan`, res, but)
break
case 'dosa1': 
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'dosa2':
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
break
case 'dosa3':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' }) 
break
case 'dosa4':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
break
case 'dosa5':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
break
case 'dosa6':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
break
case 'dosa7':
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
break
case 'dosa8':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
break
case 'dosa10':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
break
case 'dosa11':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
break
case 'dosa12':			    
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
break
case 'dosa13':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
break
case 'dosa14':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
break
case 'dosa15':
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
break
case 'dosa16':
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
break
case 'dosa17':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
break
case 'dosa18':
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
break
case 'dosa19': 			
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
break
case 'dosa20':			
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
break
case 'dosa21': 			
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
break
case 'dosa22':		
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
break
case 'dosa23':	
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
break
case 'dosa24': 			
qute = fs.readFileSync('./A/image/fake.jpg') 
KirBotz.sendMessage(from, qute, image, { quoted: fakevo, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
res = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `*Follow TT : rill or fekk×*`, res, but)
break
case 'ppcp':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
cewe = await getBuffer(anu.result.female)
cowo = await getBuffer(anu.result.male)
KirBotz.sendMessage(from, cowo, image, {quoted: kiryt, caption: 'Nih Versi Cowo Nya ^_^' })
but = 
[
{ buttonId: `${prefix+command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
]
sendButImage(from, `Nih Versi Cowo Nya ^_^`, `*Subrek YT : Nover×*`, cewe, but)
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks`)
reply(mess.wait)
txt1 = args[0]
res = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `*Subrek YT : Nover×*`, res, but)
break
case 'tiktokmaker':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
res = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `*Subrek YT : Nover×*`, res, but)
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
res = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `*Subrek YT : Nover×*`, res, but)
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(mess.wait)
ini_txt = args.join(" ")
res = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `*Subrek YT : Nover×*`, res, but)
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
if (args.length == 0) return reply(`Example: ${prefix + command} Mimin Gantenk`)
reply(mess.wait)
ini_txt = args.join(" ")
res = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
but = 
[
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'BACK MENU' }, type: 1 }
]
sendButImage(from, `*Nih Kak*`, `*Subrek YT : Nover×*`, res, but)
break
default:
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('ERROR : %s', color(e, 'white'))
}
}
}