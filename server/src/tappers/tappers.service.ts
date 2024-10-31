// tappers.service.ts
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tappers } from './entities/tapper.entity';

@Injectable()
export class TappersService {
  constructor(@InjectModel(Tappers.name) private tappersModel: Model<Tappers>) {}

  // Create a new tapper
  async createTapper(data: {
    name: string;
    taperId: number;
    rubberNumber: string;
    address?: string;
    password: string;
    active?: boolean;
  }): Promise<Tappers> {
    try {
      // Check if taperId already exists
      const existingTapper = await this.tappersModel.findOne({ taperId: data.taperId });
      if (existingTapper) {
        throw new ConflictException('Taper ID must be unique. A tapper with this ID already exists.');
      }

      const newTapper = new this.tappersModel(data);
      return await newTapper.save();
    } catch (error) {
      // Handle other potential errors (like validation, etc.)
      throw error; // Rethrow the error
    }
  }

  // Find all tappers
  async findAll(): Promise<Tappers[]> {
    try {
      return await this.tappersModel.find().exec();
    } catch (error) {
      throw error; // Rethrow the error
    }
  }

  // Find a specific tapper by ID
  async findOne(id: string): Promise<Tappers | null> {
    try {
      const tapper = await this.tappersModel.findById(id).exec();
      if (!tapper) {
        throw new NotFoundException('Tapper not found.');
      }
      return tapper;
    } catch (error) {
      throw error; // Rethrow the error
    }
  }

  // Update a tapper's information
  async updateTapper(id: string, updateData: Partial<Tappers>): Promise<Tappers | null> {
    try {
      const updatedTapper = await this.tappersModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
      if (!updatedTapper) {
        throw new NotFoundException('Tapper not found for updating.');
      }
      return updatedTapper;
    } catch (error) {
      throw error; // Rethrow the error
    }
  }

  // Delete a tapper by ID
  async deleteTapper(id: string): Promise<Tappers | null> {
    try {
      const deletedTapper = await this.tappersModel.findByIdAndDelete(id).exec();
      if (!deletedTapper) {
        throw new NotFoundException('Tapper not found for deletion.');
      }
      return deletedTapper;
    } catch (error) {
      throw error; // Rethrow the error
    }
  }
}
