module.exports = [{
  name: "obter",
  aliases: ['ob', 'obtain'],
  code: `
  $title[♦️ | Obter]
  $description[]
  $createObject[card;$get[card]]
  $let[card;$readFile[./mydatabase/cards/$randomText[centroavante;goleiro;laterais;meiocampo;pontas;zagueiros]/$random[1;5].json]]
  `
}]