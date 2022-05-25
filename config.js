/**
   * Base By Dika Ardnt.
   * Recode By GuaAbuzz
   * Sc Ya Gua Enc
   * Harga Sc No Enc 20k
   * Contact Me On wa.me/6289636827082
   * Follow https://github.com/Abuzzpoet
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'GuaAbuzz17', // Pake Apikey Ini Aja Gratis Kok
}

// Other
global.namabot = 'AsunaChan'
global.namaowner = 'GuaAbuzz'
global.owner = ['6289636827082']
global.premium = ['6289636827082']
global.github = 'https://github.com/Abuzzpoet'
global.myweb = 'https://tiktok.com/@guaabuzz'
global.gcbot = 'https://chat.whatsapp.com/BESqnCSWWfq1aTkYiqDrog'
global.footer = 'GuaAbuzz | © 2022'
global.sc = 'Bikin Sendiri Bang :)'
global.packname = 'GuaAbuzz'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*Jepang*\n_seikō shimashita_\n*Indonesia*\n_Berhasil_',
    admin: '*Jepang*\n_kono kinō wa , gurūpu kanrisha nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP!!!_',
    botAdmin: '*Jepang*\n_kono kinō wa , botto ga kanrisha ni natta toki ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN!!!_',
    owner: '*Jepang*\n_kono kinō wa , shoyūsha gurūpu nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH PEMILIK BOT!!!_',
    group: '*Jepang*\n_kono kinō wa gurūpu ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!!_',
    private: '*Jepang*\n_kono kinō wa , puraibēto chatto de nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK PRIVATE CHAT!!!_',
    bot: '*Jepang*\n_kono kinō wa , yūzā koyū no botto bangō nomidesu_\n*Indonesia*\n_FITUR INI HANYA KHUSUS PENGGUNA NOMOR BOT!!!_',
    wait: '*Jepang*\n_chotto matte_\n*Indonesia*\n_Tunggu Sebentar_',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    error: 'Fitur sedang error!',
}
    global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./storage/menu/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/de381b0caeb315a99c68a.mp4' }

//Ambil dr chika
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
