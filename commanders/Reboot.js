const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("𝘛𝘩𝘪𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘪𝘴 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳 𝘉𝘦𝘳𝘢 ");
  }

  const {exec}=require("child_process")

    repondre("𝐓𝐫𝐞𝐱 𝐌𝐝 𝐈𝐬 𝐑𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠 ⏳");

  exec("pm2 restart all");
  

  



})
