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
  import { User } from "./User";

  @Entity("achievements")
  class Achievements{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    conquista!: string;

    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @ManyToOne(() => User)
    @JoinColumn()
    user!: User;
    
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }

  export { Achievements }