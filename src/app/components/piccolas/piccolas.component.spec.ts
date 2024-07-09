import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiccolasComponent } from './piccolas.component';

describe('PiccolasComponent', () => {
  let component: PiccolasComponent;
  let fixture: ComponentFixture<PiccolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiccolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiccolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
