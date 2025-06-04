interface Config {
    urlService: string;
    urlWhm: string;
    token: string;
}

const config: Config = {
    urlService: import.meta.env.VITE_URL_SERVICE,
    urlWhm: import.meta.env.VITE_URL_WHM,
    token: import.meta.env.VITE_TOKEN,
};

export default config;
