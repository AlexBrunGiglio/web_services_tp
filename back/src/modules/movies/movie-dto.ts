import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GenericResponse } from '../../base/generic-response';
import { BaseSearchResponse } from '../../base/search-response';

export class MovieDto {
    @ApiPropertyOptional()
    id: string;
    @ApiPropertyOptional({ type: String, format: 'date-time' })
    public creationDate?: Date;
    @ApiPropertyOptional({ type: String, format: 'date-time' })
    public modifDate?: Date;
    @ApiPropertyOptional()
    name?: string;
    @ApiPropertyOptional()
    description?: string;
    @ApiPropertyOptional({ type: String, format: 'date-time' })
    releaseDate?: Date;
    @ApiPropertyOptional()
    note?: number;
}

export class GetMovieResponse extends GenericResponse {
    @ApiProperty({ type: () => MovieDto })
    movie: MovieDto;
}

export class GetMoviesResponse extends BaseSearchResponse {
    @ApiProperty({ type: () => MovieDto, isArray: true })
    movies: MovieDto[] = [];
}