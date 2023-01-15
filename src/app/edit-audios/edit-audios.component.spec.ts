import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAudiosComponent } from './edit-audios.component';

describe('EditAudiosComponent', () => {
  let component: EditAudiosComponent;
  let fixture: ComponentFixture<EditAudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
