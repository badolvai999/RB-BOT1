/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "lovebadol",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Badol",
  description: "Love VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🍁𝐁𝐀𝐃𝐎𝐋🍀𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬🌺"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/file/d/1Qfp0zS0Mf2q5MQiwjJ-9AqISJtPGicoi",
    "https://drive.google.com/file/d/1Qi0rJsSYE86cnQ9fYPSlB-2BbKwxdEKq",
    
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };