const conf = {
    port: 9111,
    publicPath: '/'
}

const base = {
    staticUrl: '//noobweb.cc'
}

conf.dev = {
    ...base,
    name: 'dev',
    // axiosBase: '//noobweb.cc/api/noobweb/'
    axiosBase: 'http://localhost:8687'
}

conf.test = {
    ...base,
    name: 'test',
    axiosBase: 'http://localhost:8687'
}

conf.uat = {
    ...base,
    name: 'uat'
}

conf.prod = {
    ...base,
    name: 'prod',
    axiosBase: 'http://noobweb.cc/api/noobweb'
}

module.exports = conf;
