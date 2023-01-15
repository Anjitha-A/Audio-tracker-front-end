import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAudioDetailsComponent } from './user-audio-details.component';

describe('UserAudioDetailsComponent', () => {
  let component: UserAudioDetailsComponent;
  let fixture: ComponentFixture<UserAudioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAudioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAudioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
