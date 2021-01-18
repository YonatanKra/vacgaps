import { CITIES } from './cities'
export const DISTRICTS = [...new Set(
    Object.entries(CITIES)
    .filter(city => city[1].district != '')
    .map(city => city[1].district))];