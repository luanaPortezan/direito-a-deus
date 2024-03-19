import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { CardBookComponent } from '../../components/card-book/card-book.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        MenuTitleComponent,
        CardBookComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the component MenuTitle', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.children
      .find((child) => child.name === 'app-menu-title');
    expect(component).toBeTruthy();
  });

  it('should render the component CardBook', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.children
      .find((child) => child.name === 'app-card-book');
    expect(component).toBeTruthy();
  });

  it('should render the component CardAboutMe', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.children
      .find((child) => child.name === 'app-card-about-me');
    expect(component).toBeTruthy();
  });

  it('should render the component MenuFooter', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.children
      .find((child) => child.name === 'app-menu-footer');
    expect(component).toBeTruthy();
  });

  it('should render the component MenuFooter', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.children
      .find((child) => child.name === 'app-menu-title');
    expect(component).toBeTruthy();
  });
});
