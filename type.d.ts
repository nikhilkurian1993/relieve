// some import
// AND/OR some export

declare module NodeJS {
  interface Global {
    prisma?: PrismaClient;
  }
  export interface ProcessEnv {
    REDIS_HOST: string | undefined;
    REDIS_PASSWORD: string | undefined;
    REDIS_PORT: number | undefined;
    REDIS_USERNAME: string | undefined;
    NODE_ENV: 'production' | 'development';
  }
}
declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}
declare module 'html2pdf.js' {
  const value: any; // markdown is just a string
  export default value;
}
