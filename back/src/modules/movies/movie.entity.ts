import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MovieDto } from './movie-dto';

@Entity({ name: 'movies' })
export class Movie {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;
    @CreateDateColumn({ name: 'creationDate', nullable: false, type: 'datetime' })
    creationDate?: Date;
    @UpdateDateColumn({ name: 'modifDate', nullable: false, type: 'datetime' })
    modifDate?: Date;
    @Column('varchar', { name: 'name', length: 128, nullable: true })
    name?: string;
    @Column('text', { name: 'description', nullable: true })
    description?: string;
    @Column({ name: 'releaseDate', nullable: true, type: 'datetime' })
    releaseDate?: Date;
    @Column('int', { name: 'note', nullable: true })
    note?: number;

    public toDto(): MovieDto {
        return {
            id: this.id,
            creationDate: this.creationDate,
            modifDate: this.modifDate,
            name: this.name,
            description: this.description,
            releaseDate: this.releaseDate,
            note: this.note,
        }
    }

    public fromDto(dto: MovieDto) {
        this.id = dto.id;
        this.name = dto.name;
        this.description = dto.description;
        this.releaseDate = dto.releaseDate;
        this.note = dto.note;

        if (!this.id)
            this.id = undefined;
    }
}