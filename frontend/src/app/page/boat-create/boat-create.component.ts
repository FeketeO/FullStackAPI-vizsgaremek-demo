import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Boat } from 'src/app/model/boat';
import { BoatService } from 'src/app/service/boat.service';

@Component({
  selector: 'app-boat-create',
  templateUrl: './boat-create.component.html',
  styleUrls: ['./boat-create.component.scss']
})
export class BoatCreateComponent implements OnInit {

  boat: Boat = new Boat();

  constructor(
    private boatService: BoatService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm ): void {
    this.boatService.create(ngForm.value).subscribe(
      boat => this.router.navigate(['/', 'boats']),
      err => console.error(err)
    );
  }

}
