import { ValidationErrors, AbstractControl, ControlContainer } from '@angular/forms';
export class UsernameValidators {
    public static cannotContainSpace(control: AbstractControl) : ValidationErrors|null{
        if((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true}
        return null;
    }   

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'AdarshPawar')
                    resolve({shouldBeUnique:true});
                else
                    resolve(null);
            }, 2000);
        }); 
    }
}