export const configs = {
    apis: {
        cep:process.env.REACT_APP_CEP_URL,
        starWars:process.env.REACT_APP_STAR_WARS_BASE_URL || 'https://star-wars-api-unifacef.herokuapp.com',
        github:process.env.REACT_APP_GITHUB_URL,
    },
    sentry: process.env.REACT_APP_SENTRY_DSN || 'https://e3809b7cca6a43238284a3056ad727ba@o1196607.ingest.sentry.io/6319616',

};
export default configs;