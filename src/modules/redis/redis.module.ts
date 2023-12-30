import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import RedisConfig from 'src/configs/database/redis.config';

@Global()
@Module({
   providers: [RedisService, RedisConfig],
   exports: [RedisService],
})
export class RedisModule {}
