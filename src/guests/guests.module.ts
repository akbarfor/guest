import { Module } from '@nestjs/common';
import { GuestappService } from './guests.service';
import { GuestappController } from './guests.controller';

@Module({
  controllers: [GuestappController],
  providers: [GuestappService]
})
export class GuestsModule {}
