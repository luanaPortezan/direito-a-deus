import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CardBookComponent } from '../../components/card-book/card-book.component';
import { CardAboutMeComponent } from '../../components/card-about-me/card-about-me.component';
import { MenuFooterComponent } from '../../components/menu-footer/menu-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuTitleComponent,
    MenuBarComponent,
    CardBookComponent,
    CardAboutMeComponent,
    MenuFooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
