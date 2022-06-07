export interface Filter {
    id: string;
    name: string;
    type: "toggle"|"list";
    check?: boolean;
    list?: Array<String>;
    currentElement?:string;
  }