// https://medium.com/@shrimpy/how-to-strongly-type-your-localization-resource-in-typescript-97a464291289

declare interface RootState {
    homePage: { counter: { value: number} }
}

declare interface Window {
    __PRELOADED_STATE__: RootState
}