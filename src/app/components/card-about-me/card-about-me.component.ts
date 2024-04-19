import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-about-me',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './card-about-me.component.html',
  styleUrl: './card-about-me.component.css'
})
export class CardAboutMeComponent {
  @Input() title: string = "minha história";
  @Input() paragraph1: string = "Sou a Keila Guedes, servidora pública federal do judiciário e bacharelada em Direito. Apesar de ser natural de Fortaleza, considero-me uma mistura de cearense com natalense, pois foi na cidade de Natal (RN) onde vivi desde os primeiros meses de vida até os quatorze anos de idade. Desde 1995 resido na cidade de Brasília.";
  @Input() paragraph2: string = "Aos 30 anos, contei acerca da minha orientação sexual para os meus pais. Em 2017, iniciei o ativismo pelos direitos das pessoas LGBTQIAP+, criando uma página @direitolgbtqi no instagram. em 2021, criei a página @direitoadeus, também no instagram. Atualmente é coordenadora da Regional Centro-Oeste da Associação Brasileira de Famílias Homotransafetivas (ABRAFH) e filiada a Aliança Nacional LGBTI.";

  @Input() imageSource: string = "../../../assets/keila-guedes.png"
  @Input() imageAltText: string = "foto da autora, Keila Guedes"
}
