import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit{

  public userId: string | undefined;

  public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]')} };

  public loading = false;

  private toggleLoader(): void{
    this.loading = !this.loading;
  }

  public form = new FormGroup({
    id: new FormControl<string>(Math.random().toString(), [Validators.required]),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    cpf: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(11)
    ]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(11)
    ]),
  });

  constructor(
    private readonly service: UserService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.initialize();
  }

  private initialize(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id && id !== 'new'){
      this.userId = id;
      const user = this.service.findUSer(id);
      if(user){
        this.form.patchValue(user);
      }
    }
  }

  public save(): void {
    if (this.form.valid) {
      this.toggleLoader();
      setTimeout(() => {
        const user = this.form.getRawValue() as User;
        this.service.saveUser(user);
        const message = this.userId ? 'Usuário salvo com sucesso!' : 'Usuário registrado com sucesso!';
        this.snackbar.open(message, 'OK', {duration: 600});
        this.toggleLoader();
        this.router.navigate([''], {replaceUrl: true}).then();
      }, 400);
    }
  }


}
