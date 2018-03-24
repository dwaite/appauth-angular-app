import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { AuthorizationService } from '../authorization.service';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { IntroComponent } from '../intro/intro.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, AuthenticationComponent, IntroComponent ],
      imports: [MatCardModule, MatIconModule],
      providers: [AuthorizationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
