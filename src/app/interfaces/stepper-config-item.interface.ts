export interface IStepperConfigItem {
    id: number;
    title: string;
    subtitle?: string;
    component: any;
    btnNext: boolean;
    btnSkip: boolean;
}