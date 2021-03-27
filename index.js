const Discord = require("discord.js")

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready" , () => {
    console.log("Bot LucasLeaks Prêt");
});
 
Client.on("message" , message => {
    if(message.author.bot) return;

    //!Saison6
    if(message.content == prefix + "Saison7"){
        message.channel.send("La Saison 7 Sort le 6 Juin 2021.");
    }
});




Client.login("ODE5MzU0NTM4MDU4MTg2Nzky.YElZYA.cw39OeXmwZieVCB1vrF9-Up1Zm0");