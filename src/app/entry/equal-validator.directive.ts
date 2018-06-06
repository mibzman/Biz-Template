import { Directive, forwardRef, Attribute } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
@Directive({
    selector:
        "[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EqualValidator),
            multi: true
        }
    ]
})
export class EqualValidator implements Validator {
    constructor(@Attribute("validateEqual") public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // console.log("validator validating");
        // self value (e.g. retype password)
        let v = c.value;


        // control value (e.g. password)
        let e = c.root.get(this.validateEqual);
        console.log("me:", v)
        console.log("other", e.value)

        // value not equal
        if (e && v !== e.value) {
            console.log("not equal");
            return {
                validateEqual: false
            };
        }
        return null;
    }
}
