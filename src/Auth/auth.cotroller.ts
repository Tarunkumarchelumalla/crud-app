import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "src/dtos/user.dto";
import { JoiBodyValidator } from "src/middleware/pipe/joi.body.validator";
import { UserDetailsSchema } from "src/middleware/validations/user.validators";

@Controller('user')
export class AuthController{

    constructor( private readonly authService:AuthService ){}

    @Post()
    @UsePipes(new JoiBodyValidator(UserDetailsSchema))
    async createUser(@Body() user:UserDto){
        try{
        return await this.authService.createUser(user)
        }
        catch(error){
            console.log(error)

            throw new HttpException(
              error.message,
              error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }

    }

    @Put(':id')
    async updateUser(@Param() id:string,@Body() user:UserDto){
        return await this.authService.updateUser(id,user);
    }

    @Delete(':id')
    async deleteUser(@Param() id:string){
        return await this.authService.deleteUser(id)
    }

    @Get()
    async getAll(){
        return await this.authService.getAll();
    }
}