const conf = {
    port: 9002,
    publicPath: '/'
}

const base = {
    tobe: '@@@'
}

conf.dev = {
    ...base,
    name: 'dev'
}

conf.test = {
    ...base,
    name: 'test'
}

conf.uat = {
    ...base,
    name: 'uat'
}

conf.prod = {
    ...base,
    name: 'prod'
}

module.exports = conf;
