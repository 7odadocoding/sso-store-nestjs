import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { UserDTO, createUserDto } from './user.dto';

@Injectable()
export class UserRepository {
   constructor(@InjectModel(User.name) private userModel: Model<User>) {}

   async create(userData: UserDTO): Promise<UserDTO> {
      const user = await this.userModel.create(userData);
      const _id = user._id.toString();
      return createUserDto(
         _id,
         user.firstname,
         user.lastname,
         user.email,
         user.otp,
      );
   }

   async update(newUserData: Partial<UserDTO>): Promise<UserDTO> {
      const { _id, ...newData } = newUserData;
      const user = await this.userModel.findByIdAndUpdate(_id, {
         ...newData,
      });
      const id = user._id.toString();
      return createUserDto(
         id,
         user.firstname,
         user.lastname,
         user.email,
         user.otp,
      );
   }
}