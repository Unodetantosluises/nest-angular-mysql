import { Column, Entity } from "typeorm";

@Entity("cat_pmibcc", { schema: "mgi-pruebas" })
export class CatPmibcc {
  @Column("int", { name: "pq", nullable: true })
  pq: number | null;

  @Column("varchar", { name: "clvsi", nullable: true, length: 100 })
  clvsi: string | null;

  @Column("longtext", { name: "nom_proc", nullable: true })
  nomProc: string | null;
}
