import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { 
        name:Pokemon.name, //ese name tiene que ver con que estamos extendiendo del document Pokemon extends Document 
        schema:PokemonSchema,
      }
    ])
  ],
  exports:[
    MongooseModule
  ]
})
export class PokemonModule {}
