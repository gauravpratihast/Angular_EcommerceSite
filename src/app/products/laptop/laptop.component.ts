import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductsdataService } from 'src/app/services/productsdata.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private productsData: ProductsdataService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailArray = this.productsData.fetchById_InLaptopArray(param.get('id'));
      // console.log(this.detailArray);
    })
  }
  detailArray: any[] = [];

  counts = 0;
  booked(productName: any) {
    if (this.counts === 0) {
      this.snackBar.open(productName + ' is Booked', 'Dismiss', { duration: 2000 })
      this.counts += 1;
    }
    else {
      this.snackBar.open('Booked Already', 'Dismiss', { duration: 2000 });
    }
  }

}
