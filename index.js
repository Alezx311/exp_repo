require('dotenv').config()

const path = require('path')
const { Generate } = require('./generate')
const { Logger, Chalk } = require('./logger')

const env = {
	NODE_ENV: process.env.NODE_ENV,
	DATA_DIR: process.env.DATA_DIR,
	FILE_LOG: process.env.FILE_LOG,
	FILE_JSON: process.env.FILE_JSON,
	FILE_TEXT: process.env.FILE_TEXT,
	SECRET_PHRASE: process.env.SECRET_PHRASE,
	BOT_TOKEN: process.env.BOT_TOKEN,
	PORT: process.env.PORT,
	IP: process.env.IP,
}

class ShowExperiments {
	static generate = Generate
	static logger = Logger
	static chalk = Chalk
	static env = env

	static showEnv = () => this.logger.info('Env', this.env)
}

ShowExperiments.showEnv()
