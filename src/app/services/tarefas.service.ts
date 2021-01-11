import { Injectable } from "@angular/core";
import { ActionSheetController } from "ionic-angular";

@Injectable({
  providedIn: 'root'
})

export class TarefasService {
  private tarefas: { titulo: string; status: number }[] = [
    { titulo: "Escrever aula", status: 0 },
    { titulo: "Gravar aula", status: 0 }
  ];

  public readonly TEXTO_SEM_TAREFAS = 'Não há tarefas cadastradas!';
  public readonly TEXTO_LISTA_TAREFAS = 'Lista de tarefas';

  public readonly TEXTO_STATUS: Map<number, string> = new Map([
    [0, 'Cadastrado'],
    [1, 'Em Andamento'],
    [2, 'Finalizado'],
  ]);


  constructor(
    private actionSheetCtrl: ActionSheetController,
  ) {}

  public adicionarNovaTarefa(titulo: string) {
    this.tarefas.push({status: 0, titulo});
  }

  public deletarTarefa(index: number){
    this.tarefas.splice(index, 1);
  }

  public async alterarStatusDaTarefa(index: number) {
    try {
      const actionSheet: any = await this.actionSheetCtrl.create({
        header: 'Alterar status',
        backdropDismiss: false,
        buttons: [
          {
            texto: 'Cadastrado',
            handler: () => {
              this.tarefas[index].status = 0;
            }
          },
          {
            texto: 'Em Andamento',
            handler: () => {
              this.tarefas[index].status = 1;
            }
          },
          {
            texto: 'Finalizado',
            handler: () => {
              this.tarefas[index].status = 2;
            }
          },
          {
            texto: 'Cancelar',
            role: 'cancelar'
          }
        ]
      });
      await actionSheet.present();
    } catch (error) {
      console.log(error);
    }
  }

  getTarefas = () => this.tarefas;
}