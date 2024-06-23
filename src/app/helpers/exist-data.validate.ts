import { AbstractControl } from '@angular/forms';

export function ValidateExistDate(control: AbstractControl) {
    
    // todo здесь надо описать валидатор проверяющий на наличие данных. Чтобы не обязательные поля можно было скипнуть, но нельзя было "продолжить без данных"

    if (1===1) {
        return { invalidUrl: true };
    }

    return null;
}