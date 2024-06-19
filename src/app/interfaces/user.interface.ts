export interface IUser {

    // main data
    id?: number // todo пока что так
    email: string
    password: string
    token?: string // access token
    balance?: number // todo нужен ли здесь? (by default for two forecasts)

    name?: string // todo пока что так (important field)
    gender?: string // important field
    dateBirth?: Date // important field
    goodZodiacSigns?: string // important field
    favoriteActivity?: string // important field
    familyStatus?: string // important field

    // second data
    timeBirth?: Date
    placeBirth?: string
    isCompiledBirthChart?: boolean
    importantTopics?: string
    element?: string
    characterTraits?: string
    understandingEnvironment?: string
    loveLanguage?: string
    lifeAspect?: string
    wantsLive?: string // place to live
}