const users = require('./mongo/users');
const errors = require('./mongo/errors');

exports.insertChatId = (userId, chatId) => users.insertChatId(userId, chatId).catch(err => errors.logError(err, chatId));
exports.getGroupIds = (userId, chatId) => users.getGroupIds(userId).catch(err => errors.logError(err, chatId));
exports.logError = (error, chatId) => errors.logError(error, chatId);

// Mongo Singleton Use Example
// Placeholder name, change for each collection.
const collectionName = 'mensajes';

async function getdocs() {
	let collection;
	(await db.getDb()).then((db)=> {collection = db.collection(collectionName);});
	collection.find({}).toArray(function(err, docs) {
		if (!err)
			console.log(`Se han cargado ${docs.length} documentos`);
	});
}

getdocs();

//#region Comentarios

// exports.setStartedUser = (userId, chatId) => users.setStartedUser(userId).catch(err => errors.logError(err, chatId));
// exports.getPrivateChatId = (userId, chatId) => users.getPrivateChatId(userId).catch(err => errors.logError(err, chatId));
// exports.hasStarted = (userId, chatId) => users.hasStarted(userId).catch(err => errors.logError(err, chatId));

//#endregion
