import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import {sign} from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../Repositories/User/UserRepositories";
const nodemailer = require('nodemailer');

interface IAuthenticateRequest{
    email:string;
    senha:string;
}

class AuthenticateUserService {
    async execute ({email, senha}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email,
        });

        if(!user){
            throw new Error("Email incorreto!");
        }

        const passwordMatch = await compare(senha,user?.senha);

        if(!passwordMatch){
            throw new Error("Senha incorreta!");
        }
   
        const token = sign(
            {
                email:user.email,
            },
            "_Z}q)r6=e7<2",
            {
                subject: (user.admin?"Admin":"others"),
                expiresIn: "1d",
            }
        );
        return token;
        
}

async resetPassword(email:any){
    console.log(email);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepositories.findOne({
     email,
    });
 
    if (!userAlreadyExists){
     throw new Error("Email incorreto!")
    }
    const passwordHash = await hash ("UMC", 8);
    userAlreadyExists.senha = passwordHash
 
    const user = await usersRepositories.update(userAlreadyExists.id, userAlreadyExists)
 
    const mailOptions ={
     from: 'mail@mestresdaweb.io',
     to: email,
     subject: 'A sua nova senha do Remember é...',
     html: '<p>Seu novo Password é:</p><b>UMC</b>'
    };

    let transporter = nodemailer.createTransport({
        host: "mail.mestresdaweb.io",
        port: 465,
        auth: {
            user: "mail@mestresdaweb.io",
            pass: "OZF6Cyf,ahw^"
        },
    });

    return await transporter.sendMail(mailOptions, (err: any, info: any) => {
        if(err)
            console.log(err);
            
        else
            return  "Senha enviada com sucecesso!";
    }); 
 }
}

export {AuthenticateUserService};