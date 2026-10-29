import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta-detalhe',
  styleUrl: './cesta-detalhe.css',
  templateUrl: './cesta-detalhe.html',
})
export class CestaDetalhe {
  mensagem: string = ""; 
  cesta: Cesta = new Cesta(null); 
  

  ngOnInit(){
    let json = localStorage.getItem("cesta");
    if(json!=null){
      this.cesta = JSON.parse(json);
      this.mensagem = "";
    } else {
      this.mensagem = "Sua cesta esta vazia!";
    }
  }


  limpar(){
    localStorage.removeItem("cesta");
    location.href="./promo";
  }

  remover(index: number) {
  let json = localStorage.getItem("cesta");
  
  if (json != null) {
    let dadosCesta = JSON.parse(json);

    dadosCesta.itens.splice(index, 1); 
    
    localStorage.setItem("cesta", JSON.stringify(dadosCesta));
  }

  location.reload();
}






}
