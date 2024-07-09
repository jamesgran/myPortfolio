import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegasusComponent } from './pegasus.component';

describe('PegasusComponent', () => {
  let component: PegasusComponent;
  let fixture: ComponentFixture<PegasusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegasusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PegasusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
