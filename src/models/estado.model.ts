export interface StatesListableInterface{
  estadoId:    number;
  estadoName:  string;
  estadosList: StateListableInterface[];
}

export interface StateListableInterface{
    estadoId:    number;
    estadoName:  string;
}
