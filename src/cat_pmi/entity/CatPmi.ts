import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cat_pmi", { schema: "mgi-pruebas" })
export class CatPmi {
  @Column("int", { name: "pq", nullable: true })
  pq: number | null;

  @PrimaryColumn("varchar", { name: "clvsi", length: 100 })
  clvsi: string | null;

  @Column("longtext", { name: "nom_proc", nullable: true })
  nomProc: string | null;
}
