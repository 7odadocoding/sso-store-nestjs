import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IUser } from 'src/user/user.interface';
@Injectable()
export class MailService {
   constructor(private mailerService: MailerService) {}

   async sendUserConfirmation(user: IUser, sso: string) {
      await this.mailerService.sendMail({
         to: user.email,
         subject: 'Welcome to NestStore',
         template: './sso.ejs',
         context: {
            sso,
            name: user.firstname,
         },
      });
   }
}