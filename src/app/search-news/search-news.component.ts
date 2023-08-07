import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
import { Pesquisa } from '../models/pesquisa';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  pesquisa!: Pesquisa;
  formData: FormGroup;
  valorPesquisa: string;
  pageSize: number = 10;
  page: number = 1;

  constructor(private newsapiService: NewsapiService) {
    this.formData = new FormGroup({
      valorPesquisa: new FormControl()
    })
    this.valorPesquisa = "all";
  }

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll(){
    this.newsapiService.getAll(this.valorPesquisa, this.pageSize, this.page)
    .subscribe(
      (values: Pesquisa) => {
        this.pesquisa = values;
      },
      error => console.log("Ocorreu um erro."),
    );
  }

  search(valor: any){
    this.valorPesquisa = valor.valorPesquisa;
    this.getAll();
  }

  nextPage(){
    this.page += 1;
    this.getAll();
  }

  backPage(){
    if(this.page != 1){
      this.page -= 1;
      this.getAll();
    }
  }

}
