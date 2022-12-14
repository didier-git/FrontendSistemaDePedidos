import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoItemComponent } from './pedido-item.component';

describe('PedidoItemComponent', () => {
  let component: PedidoItemComponent;
  let fixture: ComponentFixture<PedidoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
