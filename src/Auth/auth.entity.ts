import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('login')
export class Auth {

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string;

    @Column()
    mobile:string;

    @Column()
    address:string

}