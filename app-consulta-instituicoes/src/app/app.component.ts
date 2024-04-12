import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { revgas } from './model/revgas';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app-consulta-instituicoes';
  searchCodigo ='';
  constructor( /*private http: AuthService*/) {}
  dataSource = new MatTableDataSource<revgas>();

  displayedColumns: string[] = ['id', 'nome_instituicao', 'codigo_compensacao'];
  instituicoes: revgas={
    id: 0,
    codigo_compensacao: '',
    nome_instituicao: ''
  };

  index() {
   /*
    this.http.index().subscribe(
      (data: revgas[]) => {
        this.instituicoes = data;
        this.dataSource.data = this.instituicoes; // Adiciona os dados ao MatTableDataSource
      },
      error => {
      console.log("Ocorreu um erro")
      }
    );
   */
  }
  searchByNumber(codigo_compensacao: string) {
    if (codigo_compensacao.trim() === "") {
      this.index();
    } else {
     /*
      this.http.searchByName(codigo_compensacao).subscribe(
        (data: revgas[]) => {
          this.dataSource.data = data;
          if (data.length === 0) {
            console.log('Nenhuma consulta encontrada para o paciente especificado.');
            this.index()
          }
        },
        error => {
          console.log('Nenhuma consulta encontrada para o paciente especificado.');
          this.index()
        }
      );
     */
    }
  }
}
