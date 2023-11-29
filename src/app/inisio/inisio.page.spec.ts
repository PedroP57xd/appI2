import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InisioPage } from './inisio.page';

describe('InisioPage', () => {
  let component: InisioPage;
  let fixture: ComponentFixture<InisioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InisioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
