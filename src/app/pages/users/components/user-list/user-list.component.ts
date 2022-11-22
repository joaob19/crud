import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../../components/confirmation-dialog/confirmation-dialog.component";
import {UserService} from "../../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users: User[] = [];

  @Output() onEdit = new EventEmitter<void>();
  @Output() onRemove = new EventEmitter<void>();

  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly service: UserService,
    private readonly snackbar: MatSnackBar
  ) {
  }

  public displayedColumns: string[] = [
    'name', 'email', 'cpf', 'phone', 'edit', 'remove'
  ];

  public edit(id: string): void {
    this.router.navigate([`registration/${id}`]).then((_) => {
      this.onEdit.emit();
    });
  }

  public remove(id: string): void {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        message: 'Deseja excluir esse usuário?'
      }
    }).afterClosed().subscribe((value: boolean | undefined) => {
      if (value) {
        this.service.remove(id);
        this.snackbar.open(
          'Usuário excluído com sucesso!', 'OK', {duration: 600}
        );
        this.onRemove.emit();
      }
    });
  }

}
