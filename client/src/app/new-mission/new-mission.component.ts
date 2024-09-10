// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-new-mission',
//   templateUrl: './new-mission.component.html',
//   styleUrls: ['./new-mission.component.css']
// })
// export class NewMissionComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   displayStyle = "none";

//   openPopup() {

//     this.displayStyle = "block";
//   }
//   closePopup() {
//     this.displayStyle = "none";
//   }
// }



// changes------------c

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.css']
})
export class NewMissionComponent implements OnInit {

  displayStyle = 'none'; // Modal display style

  // Sample data for countries, cities, and mission skills
  countries = ['USA', 'India', 'Canada'];
  cities = {
    USA: ['NYC', 'Los Angeles', 'Chicago'],
    India: ['Surat', 'Mumbai', 'Bangalore'],
    Canada: ['Toronto', 'Vancouver', 'Montreal']
  };
  missionSkills = ['Leadership', 'Communication', 'Technical'];

  selectedCountry = ''; // To store the selected country
  selectedCity = ''; // To store the selected city
  cityOptions: string[] = []; // Cities available for the selected country

  constructor() { }

  ngOnInit(): void { 
    // Initialize with empty or default values if needed
  }

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  // Method to update the city options based on the selected country
  onCountryChange() {
    // Update city options based on the selected country or reset to empty array
    this.cityOptions = this.cities[this.selectedCountry] || [];
    // Reset selected city whenever the country changes
    this.selectedCity = '';
  }
}
