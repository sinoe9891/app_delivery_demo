import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Customer2Page } from './customer2.page';

describe('Customer2Page', () => {
  let component: Customer2Page;
  let fixture: ComponentFixture<Customer2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customer2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Customer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
