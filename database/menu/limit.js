const limit = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: THEUZINMAKER
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *LIMIT*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}bal
  └─ ❏ ${prefix}buylimit
--------------------------------
Nota: Você pode comprar um limite coletando dinheiro primeiro. Verifique seu dinheiro digitando o comando *${prefix}bal*, o preço de 1 limite = 1000 dinheiro
}
exports.limit = limit
