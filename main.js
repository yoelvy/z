const { 
         WAConnection, 
         MessageType, 
         Presence, 
         Mimetype, 
         GroupSettingChange 
       } = require('@adiwajshing/baileys')
const fs = require('fs')
const colors = require('colors')
const chalk = require('chalk')
const qrcode = require('qrcode-terminal')
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
       } = require('./B/functions')
const welcome = require('./A/message/group')
       
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

require('./Command/Case.js')
nocache('./Command/Case.js', module => console.log(`${module} is now updated!`))

const starts = async (KirBotz = new WAConnection()) => {
                  KirBotz.logger.level = 'warn'
                  KirBotz.version = [2, 2143, 3]
                  KirBotz.browserDescription = [ 'KirBotz Official', 'IE', '9.1' ]
                  
KirBotz.on('qr', () => {
console.log(color('[','white'), color('!','white'), color(']','white'), color('Scan Kak'))
})
fs.existsSync(`./A/session/kirbotz.json`) && KirBotz.loadAuthInfo(`./A/session/kirbotz.json`)
KirBotz.on('connecting', () => {
console.log(color('[ LOADING ]', 'magenta'), color('Loading Kak Sabar Yaa...', 'yellow'));
})
KirBotz.on('open', () => {
console.log(color('[ SUCCES ]', 'magenta'), color('Tersambung Kak Silahkan Gunakan Dengan Baik Yaa...', 'yellow'));
})
await KirBotz.connect({
timeoutMs: 30 * 1000
})
fs.writeFileSync(`./A/session/kirbotz.json`, JSON.stringify(KirBotz.base64EncodedAuthInfo(), null, '\t'))
                   KirBotz.sendMessage(`6287705048235@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR AKIRA_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                   KirBotz.sendMessage(`6287705048235@s.whatsapp.net`, `|-| DATABASE BOT |-|\n\n•NAMA BOT : KirBotz\n•OWNER BOT : KirBotz\n•NOMER OWNER : wa.me/6287705048235\n\n*[Bot Sudah Terconnect Ke WhatsApp Kak !! Makasih Kak KirBotz Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
start('2',colors.bold.white('\nAnjayyy'));
KirBotz.on('group-participants-update', async (anu) => {
await welcome(KirBotz, anu)
})
KirBotz.on('chat-update', async (message) => {
require('./Command/Case.js')(KirBotz, message)
})
}
            function nocache(module, cb = () => { }) {
            console.log('Module', `'${module}'`, 'Di Awasi KirBotz')
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
starts()