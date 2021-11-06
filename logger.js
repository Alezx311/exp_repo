const logger = require('epic-logger')
const chalk = require('chalk')

class Chalk {
	static colors = [
		'black',
		'red',
		'green',
		'yellow',
		'blue',
		'magenta',
		'cyan',
		'white',
		'gray',
		'grey',
		'blackBright',
		'redBright',
		'greenBright',
		'yellowBright',
		'blueBright',
		'magentaBright',
		'cyanBright',
		'whiteBright',
	]

	static modifiers = ['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough', 'visible']

	static examples = () => [...this.colors, ...this.modifiers].map(m => console.log(chalk[m](`${m} message`)))
}

class Logger {
	static debug = logger.debug
	static info = logger.info
	static error = logger.error
	static emerg = logger.emerg
	static alert = logger.alert
	static crit = logger.crit
	static warning = logger.warning
	static notice = logger.notice

	static examples = () => {
		logger.debug('debug message')
		logger.info('info message')
		logger.error('error message')
		logger.emerg('emerg message')
		logger.alert('alert message')
		logger.crit('crit message')
		logger.warning('warning message')
		logger.notice('notice message')
	}
}

module.exports = { Logger, Chalk }
