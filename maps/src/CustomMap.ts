import { User } from './User';
import { Company } from './Company';

// Instruction to be Mappable:
// We need to follow the below interface:
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  description: string;
  type: string;
}

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2lkZGhhcnRocmFqYSIsImEiOiJja2IyMGJram8wazZmMzJsb2ZwMDU0MTFzIn0.0ay6VniM8F9ZCu7_x-KsgQ';

export class CustomMap {
  private mapboxMap: mapboxgl.Map;
  constructor(htmlElementID: string) {
    this.mapboxMap = new mapboxgl.Map({
      container: htmlElementID,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });
  }

  addMarker(mappable: Mappable): void {
    console.log('Adding MArker: ');
    console.log(mappable.location.lat);
    console.log(mappable.location.lng);

    var popUp = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: false,
      closeOnMove: false,
      anchor: 'top',
    }).setHTML(mappable.description);

    let fillMarkerColor = 'red';
    if (mappable.type === 'user') {
      fillMarkerColor = 'blue';
    }
    new mapboxgl.Marker({ color: fillMarkerColor })
      .setLngLat([mappable.location.lng, mappable.location.lat])
      .setPopup(popUp)
      .addTo(this.mapboxMap);
  }

  //   addUserMarker(user: User): void {
  //     new mapboxgl.Marker()
  //       .setLngLat([user.location.lng, user.location.lat])
  //       .addTo(this.mapboxMap);
  //   }

  //   addCompanyMarker(company: Company) {
  //     new mapboxgl.Marker()
  //       .setLngLat([company.location.lng, company.location.lat])
  //       .addTo(this.mapboxMap);
  //   }
}
