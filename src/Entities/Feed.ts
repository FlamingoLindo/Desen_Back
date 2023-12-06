import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";

  @Entity("feed")
  class Feed {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    artigoDeProdutividade!: string;
    
    @Column()
    artigoDeBemEstar!: string;

    @Column()
    conquistaAmigos!: string;

    @Column()
    conquistaUsuario!: string;

    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

      constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
  }

  export { Feed }