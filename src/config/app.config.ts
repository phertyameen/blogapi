import { registerAs } from "@nestjs/config"

export default registerAs('appConfig', () => ({
    envirment: process.env.NODE_ENV || 'development',
}) )