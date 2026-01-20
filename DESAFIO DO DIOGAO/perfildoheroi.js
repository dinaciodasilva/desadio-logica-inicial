// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let nickname = "Divine"


XP = 7555;

let nivel ="";

if (XP < 1000) {
nivel = "Ferro";
}
else if (XP <= 2000){
nivel = "Bronze";
}
else if (XP <= 5000) {
nivel = "Prata";
}
else if (XP <= 7000) {
nivel = "Ouro";
}
else if (XP <= 8000) {
nivel = "Platina";
}
else if (XP <= 9000) {
nivel = "Ascendente";
}
else if (XP <= 10000) {
nivel = "Imortal";
}
else { nivel = "Radiante";
}

//saida

console.log("A nossa heroína  " + nickname + " já está no nível de " 
+ nivel);

console.log("Bem-vinda de volta " + nickname + " continue na busca pelo nível Radiante !")
