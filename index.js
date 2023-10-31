class Logger {
  INFO_LEVEL = "INFO"
  DEBUG_LEVEL = "DEBUG"
  ERROR_LEVEL = "ERROR"

  constructor() {
  }

  log(opts = {}) {
    this.createMsgString(opts?.msg, opts?.filepath, opts?.errorLevel)
    if (opts?.data) console.log(">>> DATA:", opts?.data);
  }

  check(msg, filepath = '', data = '') {
    this.createMsgString(msg, filepath)
    if (data) console.log(">>> DATA:", data);
  }

  createMsgString(msg, filepath = '', errorLevel = '') {
    const str = `${errorLevel ? `>>> ${errorLevel}` : `>>> log`}: ${msg} ${filepath && `| ${filepath} `}| ${new Date().toISOString()}`

    switch(errorLevel){
      case this.INFO_LEVEL: console.info(str); break
      case this.DEBUG_LEVEL: console.log(str); break
      case this.ERROR_LEVEL: console.error(str); break
      default: console.log(str); break
    }
    
  }
}

module.exports = Logger
