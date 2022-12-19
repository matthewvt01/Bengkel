import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

export class Service {
  'Shockbreaker' : string;
  'Velg' : string;
  'Power_Steering' : string;
  'Balancing' : string;
  'Ganti_Oli' : string;
  'Ganti_Ban' : string;
  'Kaca_Film' : string;
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  
constructor(private serviceDataService: ServiceDataService) { }

public service: Service[] = [];
private getListService(): void {
  this.serviceDataService
  .getListService()
  .then(foundListService => {
    this.service = foundListService
  });
}
  // constructor() { }
  // pengabdian: Pengabdian[] = [{
  //   _id : '0001',
  //   judul: 'stack is life',
  //   tempat : 'Hiroshima',
  //   deskripsi: 'Ini Deskripsi',
  //   tgl_pengabdian: '2002-11-01',
  //   dosen: 'Nur Rachmat',
  //   mahasiswa: ['nobutani', 'Taniguchi'],
  // }]
  ngOnInit(): void {
    this.getListService();
}
}