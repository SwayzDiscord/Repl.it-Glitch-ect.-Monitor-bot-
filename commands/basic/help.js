const discord = require('discord.js');

module.exports = {
  name: "help",
  run: async (client, message, args ) => {
      
      let embed = new discord.MessageEmbed()
      .setAuthor("Commands")
      .addField("> Admin", '`addrole`, `ban`, `kick`, `lockchannel`, `unlockchannel`, `mute`, `unmute`, `unban`, `warn`, `unwarn`, `warnings`, `purge`')
      .addField("> Basic", '`help`, `uptime`')
      .addField("> Monitor",'`Monitor`,`Remove`,`Stats`')
			.setFooter('Made by team incasx')
			.setColor("GREEN");
			message.channel.send(embed)
    }
  };
