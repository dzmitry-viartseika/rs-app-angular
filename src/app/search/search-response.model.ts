import IPost from "./search-item.model";

interface IPageInfo {
    totalResults: number,
    resultsPerPage: number,
}
export default interface ISearchResponse {
    kind: string,
    etag: string,
    pageInfo: IPageInfo,
    items: IPost[],
}
