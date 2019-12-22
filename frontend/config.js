import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API_URL = publicRuntimeConfig.PRODUCTION ? 'https://nextseoblog.com' : 'http://localhost:8000';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
