
export  interface HomeState {
    homeTitle?: string
    loading: Boolean
    error: null

}

export  interface TodoState {
    todos: Array <todo>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    totalPageCount: number,
    loading: Boolean,
    error: null
}

interface todo {
    userId: number,
    id: number,
    title: string
    completed: Boolean

}