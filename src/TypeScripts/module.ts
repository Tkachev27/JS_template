console.log('module')

async function start() {
    let st: string = 'async works !'
    return await Promise.resolve(st)
}
start().then(console.log)
