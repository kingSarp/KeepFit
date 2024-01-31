import { Component } from '@angular/core';
import { Services } from '../services.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent {
  //using Services model
  //array holding services object been stored services
  services: Services[] = [
    new Services(
      'QUALITY SERVICE',
      'At our fitness',
      'https://img.freepik.com/free-photo/dartboard-with-arrow-red-background-symbol-setup-business-objective-achievement-target-concept-by-3d-render_616485-93.jpg?w=740&t=st=1706728738~exp=1706729338~hmac=20ce5571621b5a1ab1b0b5fbff1bc4c887a7cb4780f1e8479a28fff26141a253'
    ),
    new Services(
      'SPACIOUS GYM',
      'At our fitness',
      'https://img.freepik.com/free-vector/science-atom-chain-white-blue-red-colors-with-shadow-3d_1284-49827.jpg?w=740&t=st=1706733169~exp=1706733769~hmac=5a6da4600d738a56159a7a1583bc5d815fd2d60d86f56efa53d2219f2c31d199'
    ),
    new Services(
      'UNIQUE PROGRAMS',
      'At our fitness',
      'https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg?w=740&t=st=1706733249~exp=1706733849~hmac=d332f2db1018208a6d3249d4a543c9b0419acdd037949aeef01062f6bfc6a822'
    ),
    new Services(
      'GROUP CLASSES',
      'At our fitness',
      'https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg?w=740&t=st=1706733480~exp=1706734080~hmac=1e706b53d6119841676f179524c26b71d097c49fda13a28415c9bd518adc46bb'
    ),
  ];
}
