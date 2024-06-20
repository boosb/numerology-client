export interface IStepperConfigItem {
    id: number;
    title: string;
    subtitle?: string;
    component: any;
    btnNext: boolean;
    btnSkip: boolean;
    btnDailyForecast?: boolean;
    width?: string; // Ширина шага, дефолтная 675px
    fieldForUpdate: string; // поле юзера в БД для обновление (не может быть пустым, так как каждый step нужен для заполнения какого-то поля в БД)
    important: boolean;
}