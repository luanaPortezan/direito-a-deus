import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitleComponent } from './menu-title.component';

describe('MenuTitleComponent', () => {
  let component: MenuTitleComponent;
  let fixture: ComponentFixture<MenuTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component MenuTitle', () => {
    const fixture = TestBed.createComponent(MenuTitleComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have the "Direito a Deus" with tag <h1>', () => {
    const fixture = TestBed.createComponent(MenuTitleComponent);
    const component = fixture.debugElement.nativeElement;
    expect(component.querySelector('h1').textContent).toContain('Direito a Deus');
  });
});
