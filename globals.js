//Modules
const say = (name) => {
    console.log(`hello there ${name}`)

}


module.exports = say
module.exports.items=['item1','item2']
const person={
    name:'bob'
}
module.exports.singleperson=person