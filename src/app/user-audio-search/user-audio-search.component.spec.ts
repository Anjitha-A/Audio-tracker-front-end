import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAudioSearchComponent } from './user-audio-search.component';

describe('UserAudioSearchComponent', () => {
  let component: UserAudioSearchComponent;
  let fixture: ComponentFixture<UserAudioSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAudioSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAudioSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
