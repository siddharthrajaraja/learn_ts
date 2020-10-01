import { User, red } from './User';
import { Company } from './Company';

import {} from 'mapbox-gl';
import { CustomMap } from './CustomMap';
const customMap = new CustomMap('homeMap');
const user = new User();
const company = new Company();
customMap.addMarker(user);
customMap.addMarker(company);
