import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { CategoriesModule } from './models/categories/categories.module';

@Module({
  imports: [CategoriesModule, AppConfigModule],
})
export class AppModule {}
