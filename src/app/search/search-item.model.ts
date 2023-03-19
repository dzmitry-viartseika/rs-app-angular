interface IPostStatistics {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
}

interface IThumbnails {
    url: string,
    width: number,
    height: number,
}

export default interface IPost {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: IThumbnails,
            medium: IThumbnails,
            high: IThumbnails,
            standard: IThumbnails,
            maxres: IThumbnails
        },
        channelTitle: string,
        tags: string[],
        categoryId: string,
        liveBroadcastContent: string,
        localized: {
            title: string,
            description: string,
        },
        defaultAudioLanguage: string
    },
    statistics: IPostStatistics,
}
