const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 এর মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗔𝗟 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣"];
  var rand = tl[Math.floor(Math.random() * tl.length)]



   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "বাসার সবাই কেমন আছ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-অনেক অনেক ভালো আছে তোমার বাসার সবাই কেমন আছে-💝🌻", threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n${name}\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n ${rand}\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•` 
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }