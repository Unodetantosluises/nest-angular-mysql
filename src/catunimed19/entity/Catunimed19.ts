import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("catunimed19", { schema: "mgi-pruebas" })
export class Catunimed19 {
  @Column("varchar", { name: "del", length: 2 })
  del: string;

  @Column("varchar", { name: "delegacion", nullable: true, length: 50 })
  delegacion: string | null;

  @Column("varchar", { name: "ui", nullable: true, length: 50 })
  ui: string | null;

  @PrimaryColumn("varchar", { name: "clp", length: 15 })
  clp: string;

  @Column("varchar", { name: "tipo", nullable: true, length: 10 })
  tipo: string | null;

  @Column("varchar", { name: "numero", nullable: true, length: 10 })
  numero: string | null;

  @Column("int", { name: "nivel", nullable: true })
  nivel: number | null;

  @Column("varchar", { name: "localidad", nullable: true, length: 255 })
  localidad: string | null;

  @Column("varchar", { name: "municipio", nullable: true, length: 100 })
  municipio: string | null;

  @Column("varchar", { name: "estado", nullable: true, length: 50 })
  estado: string | null;

  @Column("varchar", { name: "domicilio", nullable: true, length: 336 })
  domicilio: string | null;

  @Column("varchar", { name: "director", nullable: true, length: 255 })
  director: string | null;

  @Column("varchar", { name: "tel_directo", nullable: true, length: 20 })
  telDirecto: string | null;

  @Column("varchar", { name: "tel_conmutador", nullable: true, length: 20 })
  telConmutador: string | null;

  @Column("varchar", { name: "tel_fax", nullable: true, length: 20 })
  telFax: string | null;

  @Column("varchar", { name: "ext", nullable: true, length: 20 })
  ext: string | null;

  @Column("varchar", { name: "delegado", nullable: true, length: 70 })
  delegado: string | null;

  @Column("varchar", { name: "correoDelegado", nullable: true, length: 50 })
  correoDelegado: string | null;

  @Column("varchar", { name: "jpm", nullable: true, length: 50 })
  jpm: string | null;

  @Column("varchar", { name: "correoJPM", nullable: true, length: 50 })
  correoJpm: string | null;

  @Column("varchar", { name: "latitud", nullable: true, length: 30 })
  latitud: string | null;

  @Column("varchar", { name: "longitud", nullable: true, length: 30 })
  longitud: string | null;

  @Column("int", { name: "consultorios", nullable: true })
  consultorios: number | null;
}
