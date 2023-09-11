import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "./auth.entity";
import { Repository } from "typeorm";

export class AuthService{
    constructor(
        @InjectRepository(Auth) private readonly userRepository: Repository<Auth>,
    ){}

    async createUser(dto){
        const user = await this.userRepository.create(dto);

        return await this.userRepository.save(user)
    }

    async updateUser(id:string,userDto:any){
        const user = await this.userRepository.findOne({where:{id}})

        if(!user){
            return {message:'user not found'}
        }
        return await this.userRepository.save(userDto)
    }

    async deleteUser(id:string){
        
        const user = await this.userRepository.findOne({where:{id}})

        if(!user){
            return {message:'user not found'}
        }
        return await this.userRepository.remove(user)
    }
    
    async getAll(){
        const users = await this.userRepository.find();

        if(!users.length){
            return {message :'users not found'}
        }
        return users
    }
}