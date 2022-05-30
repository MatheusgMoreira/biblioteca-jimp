const Jimp = require("jimp");
const fs = require("fs");
const imagens = fs.readdirSync("./img/");

imagens.forEach(function (arquivo) {
  Jimp.read("img/" + arquivo)
    .then(function (imagem) {
      imagem
        .cover(400, 400)
        .greyscale()
        .write("img-otimizadas/" + arquivo);
    })
    .catch(function (err) {
      console.error(err);
    });
});
