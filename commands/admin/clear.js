const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "Purge Messages",
    aliases: ['purge'],
    run: async(client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`You Do Not Have Permissions To Use This Command, ${message.author.username}`);

        if (!args[0]) {
            return message.channel.send("Please Enter An Amount Between 1 and 100")
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;

        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        message.channel.send(`Successfully Deleted ${deleteAmount} Messages`).then(message => message.delete({timeout: 4500}))


    }
}
