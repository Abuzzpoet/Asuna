/**
   * Base By Dika Ardnt.
   * Recode By GuaAbuzz
   * Sc Ya Gua Enc
   * Harga Sc No Enc 20k
   * Kalau Mau Recode, Edit Aja Di confiq.js
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
global.namabot = 'AsunaChan' // Nama Bot
global.namaowner = 'GuaAbuzz' // Nama Owner 
global.owner = ['6289636827082'] // Nomor Telepon Kalian
global.premium = ['6289636827082'] // Nomor Yg Mau Jadi Premium
global.telkomsel = ['6282171978174'] // Nomor Telkomsel Kalian Kalau Ada
global.xl = ['-'] // Nomor XL Kalian Kalau Ada
global.indosat = ['-'] // Nomor Indosat Kalian Kalau Ada
global.tri = ['6289636827082'] // Nomor Tri Kalian Kalau Ada
global.smartfren = ['-'] // Nomor Smartfren Kalian Kalau Ada
global.gopay = ['6289636827082'] // Nomor Gopay Kalian Kalau Ada
global.dana = ['6289636827082'] // Nomor Dana Kalian Kalau Ada
global.ovo = ['-'] // Nomor Ovo Kalian Kalau Ada
global.github = 'https://github.com/Abuzzpoet' // Nama Github Kalian
global.myweb = 'https://tiktok.com/@guaabuzz' // Nama TikTok Kalian Ubah Aja dibagian (@guaabuzz)
global.footer = 'GuaAbuzz | © 2022' // Nama Owner/Terserah
global.packname = 'GuaAbuzz' // Packname Sticker
global.author = 'WhatsApp Bot' // Author/Pembuat Sticker
global.sessionName = 'session' // Jangan Diubah Tar Eror
global.prefa = ['','!','.','🐦','🐤','🗿'] // Jangan Diubah Tar Eror
global.sp = '⭔' // Jangan Diubah Tar Eror
global.mess = {
    success: '*Jepang*\n_seikō shimashita_\n*Indonesia*\n_Berhasil_', // Boleh Kalian Ubah
    admin: '*Jepang*\n_kono kinō wa , gurūpu kanrisha nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP!!!_', // Boleh Kalian Ubah
    botAdmin: '*Jepang*\n_kono kinō wa , botto ga kanrisha ni natta toki ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN!!!_', // Boleh Kalian Ubah
    owner: '*Jepang*\n_kono kinō wa , shoyūsha gurūpu nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH PEMILIK BOT!!!_', // Boleh Kalian Ubah
    group: '*Jepang*\n_kono kinō wa gurūpu ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!!_', // Boleh Kalian Ubah
    private: '*Jepang*\n_kono kinō wa , puraibēto chatto de nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK PRIVATE CHAT!!!_', // Boleh Kalian Ubah
    bot: '*Jepang*\n_kono kinō wa , yūzā koyū no botto bangō nomidesu_\n*Indonesia*\n_FITUR INI HANYA KHUSUS PENGGUNA NOMOR BOT!!!_', // Boleh Kalian Ubah
    wait: '*Jepang*\n_chotto matte_\n*Indonesia*\n_Tunggu Sebentar_', // Boleh Kalian Ubah
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12', // Boleh Kalian Ubah
    error: 'Fitur sedang error!', // Boleh Kalian Ubah
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
global.thumb = fs.readFileSync('./storage/menu/hisoka.jpg') // Jangan Diubah Ganti Aja Image/Gambar Ya
global.visoka = { url: 'https://telegra.ph/file/de381b0caeb315a99c68a.mp4' } // Terserah Mau Di Ubah/Kagak

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
