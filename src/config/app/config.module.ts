import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { AppConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        APP_NAME: Joi.string().default('BASIC_NEST'),
        APP_URL: Joi.string().default('http://localhost:3000'),
        APP_PORT: Joi.number().default(3000),
      }),
    }),
  ],
  providers: [AppConfigService],
})
export class AppConfigModule {}
