// @ts-check
// Refactor this
/*
const moment = require('moment');

exports.execute = (bot, msg, match) => {
    return new Promise((resolve, reject) => {
        try
        {
            const chatId = msg.chat.id;
            const userId = msg.from.id;    
            const mention = generic.generateMention(msg);    
            const replyMessageId = msg.reply_to_message != undefined ? msg.reply_to_message.message_id : null;
            //const possibleAmount = match[0].replace(/^([a-z]|[A-Z]| |\/)*/, '');
            const typeOfUnit = match[1];
            var possibleAmount = match[0];

            switch(typeOfUnit)
            {
                case 'm':
                    possibleAmount = possibleAmount.substring(10, generic.getPosition(possibleAmount, typeOfUnit, 3));
                    break;
                case 'd':
                    possibleAmount = possibleAmount.substring(10, generic.getPosition(possibleAmount, typeOfUnit, 2));
                    break;
                default:
                    possibleAmount = possibleAmount.substring(10, possibleAmount.indexOf(typeOfUnit));
                    break;
            }
            
	// Esto es una negrada
	if(!['days', 'hours', 'minutes', 'day','hour','minute'].includes(match[2]))
		return;

	const chatId = msg.chat.id;
	const userId = msg.from.id;    
	const mention = generic.generateMention(msg);    
	const replyMessageId = (msg.reply_to_message) ? msg.reply_to_message.message_id : null;        
	const textToRemember = match[3]; // extra text
            
	const timeToSet = moment().add(parseInt(match[1]), match[2]).unix();
	// const spanishTypeOfUnit = results[1];
            
	//Que es esto? WHYYYYYYY
	var counter = 0;

    // Esta parte... esta bien. PONELE ahora que borre variables, no.
	bot.sendMessage(chatId, `Te voy a recordar dentro de ${amount} ${spanishTypeOfUnit} ${mention}!`, { parse_mode: 'Markdown' }).catch(e => reject(e));
	// Consultar a la DB aca
    // Hay que guardar todo en la DB y hacer un job que la consulte cada TANTO para ver si tiene que tirar algun timeout
    // O sea, cambiar todo de aca para abajo. Lo dejo de referencia
	setInterval(() => {
		counter++;

		if(counter == timeToSet)
		{
			bot.getChatMember(chatId, userId).then(member => {
				if(member.status == 'kicked' || member.status == 'left')
					return;


				if(replyMessageId != null)
				{
							
					bot.sendMessage(chatId, `Te recuerdo ${mention}!`, {
						reply_to_message_id: replyMessageId, 
						parse_mode: generic.markDownParseMode
					}).catch(() => {
						reject();
					});
				}
				else
				{
					bot.sendMessage(chatId, `Te recuerdo ${textToRemember || ''} ${mention} !`, {
						parse_mode: generic.markDownParseMode
					}).catch(() => {
						reject();
					});
				}
			}).catch(e => reject(e));
		}
	}, 1000);
};
*/