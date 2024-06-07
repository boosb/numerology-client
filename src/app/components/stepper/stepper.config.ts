import { IStepperConfig } from "../../interfaces/stepper-config.interface";
import { StepperViewEightComponent } from "./stepper-views/stepper-view-eight/stepper-view-eight.component";
import { StepperViewElevenComponent } from "./stepper-views/stepper-view-eleven/stepper-view-eleven.component";
import { StepperViewFifteenComponent } from "./stepper-views/stepper-view-fifteen/stepper-view-fifteen.component";
import { StepperViewFiveComponent } from "./stepper-views/stepper-view-five/stepper-view-five.component";
import { StepperViewFourComponent } from "./stepper-views/stepper-view-four/stepper-view-four.component";
import { StepperViewFourteenComponent } from "./stepper-views/stepper-view-fourteen/stepper-view-fourteen.component";
import { StepperViewNineComponent } from "./stepper-views/stepper-view-nine/stepper-view-nine.component";
import { StepperViewOneComponent } from "./stepper-views/stepper-view-one/stepper-view-one.component";
import { StepperViewSevenComponent } from "./stepper-views/stepper-view-seven/stepper-view-seven.component";
import { StepperViewSixComponent } from "./stepper-views/stepper-view-six/stepper-view-six.component";
import { StepperViewSixteenComponent } from "./stepper-views/stepper-view-sixteen/stepper-view-sixteen.component";
import { StepperViewTenComponent } from "./stepper-views/stepper-view-ten/stepper-view-ten.component";
import { StepperViewThirteenComponent } from "./stepper-views/stepper-view-thirteen/stepper-view-thirteen.component";
import { StepperViewThreeComponent } from "./stepper-views/stepper-view-three/stepper-view-three.component";
import { StepperViewTwelveComponent } from "./stepper-views/stepper-view-twelve/stepper-view-twelve.component";
import { StepperViewTwoComponent } from "./stepper-views/stepper-view-two/stepper-view-two.component";

// todo ВОПРОСЫ
// 1) Почему в одном степе мы нажимаем "продолжить", а в другом ток делаем выбор и нас должно автоматом перебросить на след. степ и есть ток кнопка "пропустить"
// разная логика в рамках одного приложения и одного элемента

export const StepperConfig: IStepperConfig = {
    1: {
        id: 1,
        title: 'Ваш пол',
        component: StepperViewOneComponent,
        btnNext: true,
        btnSkip: false
    },
    2: {
        id: 2,
        title: 'Дата вашего рождения?',
        component: StepperViewTwoComponent,
        btnNext: true,
        btnSkip: false
    },
    3: {
        id: 3,
        title: 'В какое время вы родились?',
        component: StepperViewThreeComponent,
        btnNext: true,
        btnSkip: true
    },
    4: {
        id: 4,
        title: 'Ваше место рождения?',
        component: StepperViewFourComponent,
        btnNext: true,
        btnSkip: false
    },
    5: {
        id: 5,
        title: 'Ваше семейное положение?',
        component: StepperViewFiveComponent,
        btnNext: true,
        btnSkip: true
    },
    6: {
        id: 6,
        title: 'Составляли ли вы карту рождения раньше?',
        component: StepperViewSixComponent,
        btnNext: true,
        btnSkip: false
    },
    7: {
        id: 7,
        title: 'Какие темы были важнейшими в последние дни?',
        component: StepperViewSevenComponent,
        btnNext: true,
        btnSkip: true
    },
    8: {
        id: 8,
        title: 'К какому элементу вы чувствуете себя ближе?',
        component: StepperViewEightComponent,
        btnNext: true,
        btnSkip: true
    },
    9: {
        id: 9,
        title: 'Какие черты отражают ваш характер?',
        subtitle: 'Отметьте варианты, которые вам больше всего подходят. Эти данные будут соответствовать результатам вашей натальной карты.',
        component: StepperViewNineComponent,
        btnNext: true,
        btnSkip: true
    },
    10: {
        id: 10,
        title: 'С какими знаками зодиака вы лучше всего ладите? Выберите максимум три.',
        component: StepperViewTenComponent,
        btnNext: true,
        btnSkip: true
    },
    11: {
        id: 11,
        title: 'Как вы думаете, как часто ваше окружение неправильно понимает вас?',
        component: StepperViewElevenComponent,
        btnNext: true,
        btnSkip: true
    },
    12: {
        id: 12,
        title: 'Какой язык любви вы больше всего ищете в своем партнере?',
        component: StepperViewTwelveComponent,
        btnNext: true,
        btnSkip: true
    },
    13: {
        id: 13,
        title: 'К чему в жизни нужно стремиться больше всего? По какому предмету у вас возникают трудности с изучением?',
        component: StepperViewThirteenComponent,
        btnNext: true,
        btnSkip: true
    },
    14: {
        id: 14,
        title: 'Какое ваше любимое занятие?',
        component: StepperViewFourteenComponent,
        btnNext: true,
        btnSkip: true
    },
    15: {
        id: 15,
        title: 'Где бы вы хотели жить, если бы у вас была возможность?',
        component: StepperViewFifteenComponent,
        btnNext: true,
        btnSkip: true
    },
    16: {
        id: 16,
        title: 'Ваше имя?',
        component: StepperViewSixteenComponent,
        btnNext: true,
        btnSkip: true
    },
    // todo и тут еще надо впилить хитровыебанный лоудер
};