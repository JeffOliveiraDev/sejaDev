import { Module } from '@nestjs/common';
import { ItemModule } from './modules/item/item.module';
import { FrameworkModule } from './modules/framework/framework.module';
import { LibraryModule } from './modules/library/library.module';
import { ToolsModule } from './modules/tools/tools.module';

@Module({
  imports: [ItemModule, FrameworkModule, LibraryModule, ToolsModule],
})
export class AppModule {}
