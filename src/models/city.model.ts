export interface CityInterface{
  cityId:     number;
  cityName:   string;
  estadoId:   number;
  citiesList: CitiesListInterface[]; 
}

export interface CitiesListInterface{
  cityId:     number;
  cityName:   string;
  estadoId:   number;
}
