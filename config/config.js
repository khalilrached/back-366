import Joi from 'joi';
import dotenv from 'dotenv';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config({ path: '.env' });

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production').default('development'),
  PORT: Joi.number().default(3000),
  APP_NAME: Joi.string().required().description('Application name is required'),
  FILE_SIZE_LIMIT_MB: Joi.number(),
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  appName: envVars.APP_NAME,
  fileSize: envVars.FILE_SIZE_LIMIT_MB,

};

export default config;
