import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativePackageComponent } from './native-package.component';

describe('NativePackageComponent', () => {
  let component: NativePackageComponent;
  let fixture: ComponentFixture<NativePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativePackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NativePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
