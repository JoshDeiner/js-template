function printCurrentEnv(environment: string) {
  switch (environment) {
    case 'development':
      console.log('Running in development mode')
      break
    case 'production':
      console.log('Running in production mode')
      break
    default:
      break
  }
}

const ENVIRONMENT: string | null = process.env.NODE_ENV || 'development'

printCurrentEnv(ENVIRONMENT)
