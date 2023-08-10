const os = require('os')
//info abt curr user
const user=os.userInfo()
console.log(user)

//method to return system uptime in sec

onsole.log(`The system uptime is ${os.uptime()}`)

const currentos = {
    name:os.type(),
    release:os.release(),
    freemem: os.freemem(),
}
console.log(currentos)