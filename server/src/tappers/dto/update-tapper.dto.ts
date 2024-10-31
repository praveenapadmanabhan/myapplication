import { PartialType } from '@nestjs/mapped-types';
import { CreateTapperDto } from './create-tapper.dto';

export class UpdateTapperDto extends PartialType(CreateTapperDto) {}
