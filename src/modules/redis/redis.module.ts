import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import RedisConfig from 'src/configs/database/redis.config';
@Module({
   providers: [RedisService, RedisConfig],
   exports: [RedisService],
})
export class RedisModule {}
