import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Renders Successfully', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Title is Tour of Heroes > class property`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // expect(app.title).toEqual('NOT - Tour of Heroes!'); // Fail
    expect(app.title).toEqual('Tour of Heroes!'); // Pass
    
  });

  it(`Title is Tour of Heroes > rendered text`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges()
    
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.title').textContent).toBe('Tour of Heroes!')
  });
});