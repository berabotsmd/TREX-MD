import { writeFileSync } from 'fs';

const saveContact = async (message, client) => {
  const commandPrefix = message.body.match(/^[\\/!#.]/);
  const command = commandPrefix ? commandPrefix[0] : '/';
  const commandName = message.body.startsWith(command) ? message.body.slice(command.length).split(" ")[0].toLowerCase() : '';
  const validCommands = ["vcf", "contacts", "vcard", "savecontact"];

  if (validCommands.includes(commandName)) {
    try {
      // React with a clock emoji while processing
      await message.React('🕘');
      await message.reply("A moment, *TREX-MD* is compiling contacts. Please wait...");

      // Ensure the command is used in a group chat
      if (!message.isGroup) {
        return message.reply("This command can only be used in group chats.");
      }

      // Fetch group metadata
      const groupMetadata = await client.groupMetadata(message.from);
      const participants = groupMetadata.participants;
      const groupName = groupMetadata.subject;

      if (!participants || participants.length === 0) {
        return message.reply("No participants found in this group.");
      }

      // Compile contacts in VCard format
      let vcfData = '';
      participants.forEach((participant, index) => {
        const displayName = `BERA ${index + 1}`;
        const phoneNumber = participant.id.split('@')[0];
        vcfData += `\nBEGIN:VCARD\nVERSION:3.0\nFN:${displayName}\nTEL;TYPE=CELL:${phoneNumber}\nEND:VCARD\n`;
      });

      // Save the VCard file
      writeFileSync("contacts.vcf", vcfData);

      // Send the VCard file to the group
      await client.sendMessage(message.from, {
        document: { url: "./contacts.vcf" },
        mimetype: "text/x-vcard",
        fileName: `${groupName}.vcf`,
        caption: `VCF for: *${groupName}*\nGroup contacts saved successfully. Feel free to import the VCF file.`,
      }, { quoted: message });

      // Notify the total number of contacts saved
      await message.reply(`Total number of contacts saved: *${participants.length} Contacts*`);
      await message.React('✅');
      await message.reply('Success...');
    } catch (error) {
      console.error("Error saving contacts:", error.message);
      await message.reply(`Error saving contacts: ${error.message}`);
      await message.React('❌');
    }
  }
};

export default saveContact;
