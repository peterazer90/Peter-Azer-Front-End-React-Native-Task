export interface STATION_INTERFACE {
  id: number;
  name: string;
  image: string;
  number: number;
}

export interface STATE_RADIO_INTERFACE {
  stations: STATION_INTERFACE[];
  activeStation: STATION_INTERFACE | null;
}

export interface ACTION_RADIO_INTERFACE {
  type: string;
  payload: STATION_INTERFACE[] | STATION_INTERFACE;
}
