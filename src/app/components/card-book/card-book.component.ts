import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-book',
  standalone: true,
  imports: [],
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css'
})
export class CardBookComponent {
  @Input() imageBook: string = 'https://editoraappris.com.br/wp-content/webp-express/webp-images/uploads/2023/01/9786525026824-scaled-500x714.jpg.webp';
  @Input() imageAltBook: string = 'Capa do livro "Pessoas LGBTQIAP+ e o Direito a Deus: Minha Experiência e a Teologia Inclusiva", escrito por Keila Guedes Silva Santos';
  @Input() descriptionBook: string = 'Nesta obra, eu o convido a desconstruir toda condenação que você aprendeu sobre pessoas LGBTQIAP+ e a refletir sobre a Teologia Inclusiva.';
  @Input() phrase: string = 'Acredite: pessoas LGBTQIAP+ têm o direito a Deus!';
  @Input() linkUrlBook: string = 'https://editoraappris.com.br/produto/pessoas-lgbtqiap-e-o-direito-a-deus-minha-experiencia-e-a-teologia-inclusiva/'
}
