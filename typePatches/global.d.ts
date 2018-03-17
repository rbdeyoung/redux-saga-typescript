declare interface RootState {
    mainComponent: { item: string },
    homePage: { counter: { value: number} }
}

declare interface Window {
    __PRELOADED_STATE__: RootState
}