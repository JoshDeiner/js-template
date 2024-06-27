function printCurrentEnv(environment:any) {
    switch (environment) {
        case 'development':
            console.log('Running in development mode');
            break;
        case 'production':
            console.log('Running in production mode');
            break;
        default:
            break;
    };
};

const ENVIRONMENT = process.env.NODE_ENV;

printCurrentEnv(ENVIRONMENT);