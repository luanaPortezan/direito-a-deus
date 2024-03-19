import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component MenuBar', () => {
    const fixture = TestBed.createComponent(MenuBarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
