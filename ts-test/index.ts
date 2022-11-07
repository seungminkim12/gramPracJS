import net from 'net'

net.createServer(socket => {
    console.log(socket)
}).listen(1111)

const bf = Buffer.from('sfsdf1')
console.log(bf.toJSON())

setInterval(() => {
    console.log(new Date,'tt')
},1000);;;;;

console.log('www')