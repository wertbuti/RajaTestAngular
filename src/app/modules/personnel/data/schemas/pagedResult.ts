export class PagedResult<T>
{
    CurrentPage!: number;
    PageCount!: number;
    PageSize!: number;
    RowCount!: number;
    LinkTemplate!: number;
    Results!: T[];
}