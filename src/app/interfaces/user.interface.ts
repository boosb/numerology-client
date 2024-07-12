export interface IUser {

    // main data
    id: number // todo ВОПРОС! Вообще ИД не может быть пустым у юзера, но будет пустым только при создании юзера
    // на данный момент создам другой интерфейс для создания и авторизации пользователя IAuthUser. Норм ли такой подход? 

    email: string
    password: string
    token?: string // access token
    balance: number

    name?: string
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