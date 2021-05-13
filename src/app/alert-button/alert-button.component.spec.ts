import { ComponentFixture, TestBed, waitForAsync, fakeAsync, inject, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AlertButtonComponent } from './alert-button.component';

describe ('AlertButtonComponent', () => {

  // ARRANGE

  // IntelliSense
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>; // fixture = Test environment for this component. Provides access to component itself and its debug element (rendered HTML?).
  let de: DebugElement;

  beforeEach( waitForAsync(() => {

    // Before each spec we need to set up a TestBed which is an ng module specific for this testing environment.
    TestBed.configureTestingModule({
      declarations: [AlertButtonComponent]
    })
    .compileComponents(); // compiles component's HTML template and CSS after the TestBed.
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);  // creates AlertButtonComponent instance.
    component = fixture.componentInstance;  // represents the component instance itself.
    de = fixture.debugElement; // represents component's rendered HTML.

    fixture.detectChanges();  // run change detection.
  })

  // INITIAL ASSERTIONS

  it ('component should create', () => {
    expect(component).toBeTruthy();
  })

  it ('should have a message with a substring of "warn"', () => {
    expect(component.content).toContain('warn');  // looks at the AlertButtonComponent, content variable, which contains the string "You have been WARNed".
    expect(component.content).toBe('You have been warned'); // checks for an exact match
  })
  
  it ('component severity should be greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);  // severity is set to 423 so this test will pass.
  })

  it ('should have an H1 tag of "Alert Button"', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button'); // query elements in the DOM (de) for an h1 element with a text of 'Alert Button'.
  })


  // ACT
  it ('should toggle the hideContent boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  })

  it ("should toggle the hideContent boolean asynchronously", fakeAsync( () => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync(); // in 500 ms, run toggle() as the toggleAsync dictates.
    tick(500); // wait for 500ms
    expect(component.hideContent).toBeFalsy();
  }))








})
