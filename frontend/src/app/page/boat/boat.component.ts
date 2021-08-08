import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boat } from 'src/app/model/boat';
import { BoatService } from 'src/app/service/boat.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {

  list$: Observable<Boat[]> = this.boatService.getAll();

  constructor(
    private boatService: BoatService
  ) { }

  ngOnInit(): void {
  }

}
