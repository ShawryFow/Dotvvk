let handler = async (m, {conn, text}) => {
  conn.sendFile(
    m.chat,
    global.API("https://some-random-api.com", "/canvas/pixelate", {
      avatar: await conn.profilePictureUrl(m.sender, "image").catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png"),
      comment: text,
      username: conn.getName(m.sender),
    }),
    "error.png",
    "*¡¡𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙸𝚇𝙴𝙻𝙴𝙰𝙳𝙰 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾!!*",
    m
  );
};
handler.help = ["pixel", "difuminar"];
handler.tags = ["maker"];
handler.command = /^(pixel|pixelar|difuminar)$/i;
export default handler;
