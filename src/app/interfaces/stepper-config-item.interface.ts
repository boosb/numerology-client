export interface IStepperConfigItem {
    id: number;
    title: string;
    subtitle?: string;
    component: any;
    btnNext: boolean;
    btnSkip: boolean;
    width?: string // Ширина шага, дефолтная 675px
}