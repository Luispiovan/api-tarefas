import { Component } from "@angular/core";
import { TarefasService } from "./services/tarefas.service";

@Component({
  selector: "page-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomePage {
  public tarefas: Array<{ titulo: string; status: number }> = [];
  public textoListaDeTarefas: string;
  public textoSemTarefas: string;
  public textoStatus: Map<number, string>;
  public novaTarefa = '';

constructor(
  private _tarefas: TarefasService
  ) {
    this.textoListaDeTarefas = _tarefas.TEXTO_LISTA_TAREFAS;
    this.textoSemTarefas = _tarefas.TEXTO_SEM_TAREFAS;
    this.textoStatus = _tarefas.TEXTO_STATUS;
    this.tarefas = _tarefas.getTarefas();
  }

  adicionarNovaTarefa() {
    this._tarefas.adicionarNovaTarefa(this.novaTarefa);
    this.novaTarefa = '';
  }

  deletarTarefa(index: number){
    this._tarefas.deletarTarefa(index)
  }

  alterarStatusDaTarefa(index: number) {
    this._tarefas.alterarStatusDaTarefa(index)
  }
}
