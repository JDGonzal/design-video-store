export interface StatableInterface{
  estadoId:    number;
  estadoName:  string;
  estadosList: StateListableInterface[];
}

export interface StateListableInterface{
    estadoId:    number;
    estadoName:  string;
}
