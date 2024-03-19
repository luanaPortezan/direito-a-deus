import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterComponent } from './menu-footer.component';

describe('MenuFooterComponent', () => {
  let component: MenuFooterComponent;
  let fixture: ComponentFixture<MenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component MenuFooter', () => {
    const fixture = TestBed.createComponent(MenuFooterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});