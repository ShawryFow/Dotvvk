/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/

import fetch from "node-fetch";
let handler = async (m, {conn, command}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup)
    throw "*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*";
  let fgif = {
    key: {participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "6289643739077-1613049930@g.us"} : {})},
    message: {
      videoMessage: {
        title: `*Aʟʙᴇʀᴛᴏ Y Asʜʟʏ♥️*`,
        h: `Hmm`,
        seconds: "99999",
        gifPlayback: "true",
        caption: `👑 𝙳𝙾𝚁𝚁𝙰𝚃-𝙱𝙾𝚃-𝙼𝙳 👑`,
        jpegThumbnail: false,
      },
    },
  };
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let user = global.db.data.users[who];
  let name = await conn.getName[who];
  let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`);
  let jsons = await json.json();
  let res = jsons.result;
  conn.sendButton(
    m.chat,
    `- 𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘 𝚊 𝚃𝚒𝚔𝚃𝚘𝚔 𝙶𝚘𝚕𝚍🥵 -`,
    `*◈•@${who.split("@s.whatsapp.net")[0]}*`,
    res,
    [["🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄", `/${command}`]],
    fgif,
    {mentions: [who]}
  );
};
handler.command = /^(tiktokxxx)$/i;
export default handler;
global.mkbot = ["UfN5DLvV", "lwSUluWz", "KcrY8r8I", "HSxJ72Rf", "Gmc5DlDb", "H6pvVPJc", "uVAf54xz", "wF4gTpTZ", "nwJVzP6v"];
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())];
