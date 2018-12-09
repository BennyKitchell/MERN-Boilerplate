let config = {
    development: {
        //url to be used in link generation
        url: '',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '27017',
            db:     'site_dev'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3422'
        }
    },
    production: {
        //url to be used in link generation
        url: '',
        //mongodb connection settings
        database: {
            host: '',
            port: '',
            db: 'site'
        },
        //server details
        server: {
            host:   '',
            port:   ''
        }
    }
};
export default config;