const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆 𝗳𝗼𝗿 𝗠𝗮𝗿𝗶𝘀𝗲𝗹");
  }

  const {exec}=require("child_process")

    repondre("𝗧𝗲𝘀𝗹𝗮 𝗶𝘀 𝗿𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴⏳");

  exec("pm2 restart all");
  

  



})
