export interface CitiesListableInterface{
  cityId:     number;
  cityName:   string;
  estadoId:   number;
  citiesList: CityListableInterface[]; 
}

export interface CityListableInterface{
  cityId:     number;
  cityName:   string;
  estadoId:   number;
}
