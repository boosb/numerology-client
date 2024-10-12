export interface IUser {
    id: number

    email: string
    password: string
    token: string // access token
    isConfirmed: boolean
    balance: number

    // important fields
    name?: string
    gender?: string
    dateBirth?: Date
    goodZodiacSigns?: string
    favoriteActivity?: string
    familyStatus?: string

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