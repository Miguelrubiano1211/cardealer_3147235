import { Module } from '@nestjs/common';
import { PrismaService } from './prismaService';

@Module({
    exports:[PrismaService],
    providers:[PrismaService]

})

export class PrismaModule {}