import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIpiccolasComponent } from './apipiccolas.component';

describe('APIpiccolasComponent', () => {
  let component: APIpiccolasComponent;
  let fixture: ComponentFixture<APIpiccolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIpiccolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APIpiccolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
