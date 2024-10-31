// tappers.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TappersService } from './tappers.service';
import { Tappers } from './entities/tapper.entity';


@Controller('tappers')
export class TappersController {
  constructor(private readonly tappersService: TappersService) {}

  // Create a new tapper
  @Post()
  async createTapper(@Body() body: {
    name: string;
    taperId: number;
    rubberNumber: string;
    address?: string;
    password: string;
    active?: boolean;
  }): Promise<Tappers> {
    try {
      
      return this.tappersService.createTapper(body);
    } catch (error) {
      console.log(error)
    }
  }

  // Get all tappers
  @Get()
  async findAll(): Promise<Tappers[]> {
    return this.tappersService.findAll();
  }

  // Get a specific tapper by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tappers | null> {
    return this.tappersService.findOne(id);
  }

  // Update a tapper by ID
  @Put(':id')
  async updateTapper(
    @Param('id') id: string,
    @Body() updateData: Partial<Tappers>,
  ): Promise<Tappers | null> {
    return this.tappersService.updateTapper(id, updateData);
  }

  // Delete a tapper by ID
  @Delete(':id')
  async deleteTapper(@Param('id') id: string): Promise<Tappers | null> {
    return this.tappersService.deleteTapper(id);
  }
}
