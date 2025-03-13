import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("pmi2019", { schema: "mgi-pruebas" })
export class Pmi2019 {
  @PrimaryColumn("int", { name: "no" })
  no: number | null;

  @Column("int", { name: "partida", nullable: true })
  partida: number | null;

  @Column("int", { name: "nz", nullable: true })
  nz: number | null;

  @Column("varchar", { name: "zona", nullable: true, length: 100 })
  zona: string | null;

  @Column("int", { name: "pq", nullable: true })
  pq: number | null;

  @Column("varchar", { name: "del", nullable: true, length: 10 })
  del: string | null;

  @Column("varchar", { name: "delegoumae", nullable: true, length: 255 })
  delegoumae: string | null;

  @Column("varchar", { name: "clp", nullable: true, length: 12 })
  clp: string | null;

  @Column("varchar", { name: "tipo", nullable: true, length: 100 })
  tipo: string | null;

  @Column("varchar", { name: "numero", nullable: true, length: 100 })
  numero: string | null;

  @Column("varchar", { name: "localidad", nullable: true, length: 100 })
  localidad: string | null;

  @Column("varchar", { name: "clvsi", nullable: true, length: 100 })
  clvsi: string | null;

  @Column("longtext", { name: "nom_proc", nullable: true })
  nomProc: string | null;

  @Column("double", {
    name: "preciosiva",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  preciosiva: number | null;

  @Column("int", { name: "min20", nullable: true })
  min20: number | null;

  @Column("int", { name: "max20", nullable: true })
  max20: number | null;

  @Column("double", {
    name: "imax20siva",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax20siva: number | null;

  @Column("double", {
    name: "imax20civa",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax20civa: number | null;

  @Column("int", { name: "min21", nullable: true })
  min21: number | null;

  @Column("int", { name: "max21", nullable: true })
  max21: number | null;

  @Column("double", {
    name: "imax21siva",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax21siva: number | null;

  @Column("double", {
    name: "imax21civa",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax21civa: number | null;

  @Column("int", { name: "min22", nullable: true })
  min22: number | null;

  @Column("int", { name: "max22", nullable: true })
  max22: number | null;

  @Column("double", {
    name: "imax22siva",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax22siva: number | null;

  @Column("double", {
    name: "imax22civa",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax22civa: number | null;

  @Column("int", { name: "min36", nullable: true })
  min36: number | null;

  @Column("int", { name: "max36", nullable: true })
  max36: number | null;

  @Column("double", {
    name: "imax36siva",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax36siva: number | null;

  @Column("double", {
    name: "imax36civa",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  imax36civa: number | null;

  @Column("int", { name: "bcc", nullable: true })
  bcc: number | null;
}
