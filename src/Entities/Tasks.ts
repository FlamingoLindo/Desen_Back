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
  @Entity("tasks")
  class Task {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    nomeTarefa!: string;

    @Column()
    descricaoTarefa!: string;

    @Column()
    iconeTarefa!: string;

    @Column()
    corTarefa!: string;

    @Column()
    reptirTarefa!: boolean;

    @Column()
    frequenciaTarefa!: number;

    @Column()
    dataEncerramento!: Date;

    @Column()
    lembrete!: string;
    
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

  export { Task }