export {};

declare global {
  namespace NodeJS{
    interface ProcessEnv{
      PORT: number;
      BASE_HOST: string;
      BASE_PATH: string;
      SECRET: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_DIALECT: string;
      NODE_ENV: string;
    }
  }
}
