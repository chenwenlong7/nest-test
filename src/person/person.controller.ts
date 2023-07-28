import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
// import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
// import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('api/person')
export class PersonController {
  constructor() {}

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received: id=${id}`;
  }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
