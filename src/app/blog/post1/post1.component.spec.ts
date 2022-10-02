import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post1Component } from './post1.component';

describe('Post1Component', () => {
  let component: Post1Component;
  let fixture: ComponentFixture<Post1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
