import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent  {
producto: Producto;
constructor(
  private productoService: ProductoService,
  private activatedRoute: ActivatedRoute,
  private toastr: ToastrService,
  private router: Router
) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params.id;
  this.productoService.detail(id).subscribe(
    data => {
      this.producto = data;
    },
    err => {
      this.toastr.error(err.error.message, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.volver();
    }
  );
}
volver() {
  this.router.navigate(['/']);
}


}
