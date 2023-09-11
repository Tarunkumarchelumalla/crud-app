import { Module } from "@nestjs/common";
import { AuthController } from "./auth.cotroller";
import { Auth } from "./auth.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";

@Module({
    imports:[TypeOrmModule.forFeature([Auth])],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule{

}