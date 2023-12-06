import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    ManyToOne,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  import { Profile } from "./Profile";
  
  @Entity("users")
  class User {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    nome!:string;

    @Column()
    sobrenome!:string;

    @Column()
    email!:string;

    @Column()
    senha!:string;

    @Column()
    admin!: boolean;
  
    @Column()
    dataNascimento!: Date;

    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;

    @ManyToOne(() => Profile)
    @JoinColumn()
    profile!: Profile;

      constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
  }
export {User}