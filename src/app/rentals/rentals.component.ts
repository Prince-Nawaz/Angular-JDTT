import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  localRentalData: any[];
  outstationRentalData: any[];

  constructor() { }

  ngOnInit() {
    this.localRentalData = [
      { vehicle: 'Indica', amount: 1800, ratePerHour: 120, ratePerKm: 9, nightDriverAllowance: 300 },
      { vehicle: 'Vista', amount: 1800, ratePerHour: 120, ratePerKm: 9, nightDriverAllowance: 300 },
      { vehicle: 'Indigo', amount: 2000, ratePerHour: 150, ratePerKm: 9.5, nightDriverAllowance: 300 },
      { vehicle: 'Dzire', amount: 2000, ratePerHour: 150, ratePerKm: 9.5, nightDriverAllowance: 300 },
      { vehicle: 'Etios', amount: 2000, ratePerHour: 150, ratePerKm: 9.5, nightDriverAllowance: 300 },
      { vehicle: 'Accent', amount: 2000, ratePerHour: 150, ratePerKm: 9.5, nightDriverAllowance: 300 },
      { vehicle: 'Innova', amount: 2700, ratePerHour: 250, ratePerKm: 13, nightDriverAllowance: 300 }
    ];
    this.outstationRentalData = [
      { vehicle: 'Indica', ratePerKm: 9.5, minKmsPerDay:  300, nightDriverAllowance: 300 },
      { vehicle: 'Vista', ratePerKm: 9.5, minKmsPerDay:  300, nightDriverAllowance: 300 },
      { vehicle: 'Indigo', ratePerKm: 10, minKmsPerDay: 300, nightDriverAllowance: 300 },
      { vehicle: 'Dzire', ratePerKm: 10, minKmsPerDay: 300, nightDriverAllowance: 300 },
      { vehicle: 'Etios', ratePerKm: 10, minKmsPerDay: 300, nightDriverAllowance: 300 },
      { vehicle: 'Accent', ratePerKm: 10, minKmsPerDay: 300, nightDriverAllowance: 300 },
      { vehicle: 'Innova', ratePerKm: 14, minKmsPerDay: 300, nightDriverAllowance: 300 }
    ];
  }

}
