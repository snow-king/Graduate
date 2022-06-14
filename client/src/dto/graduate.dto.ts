export interface Graduate {
  id?: string;
  name: String;
  lastName:  String;
  patronymic:  String;
  company:  String;
  position:  String;
  city:  String;
  army: 'Не служил'| 'В армии'| 'Отслужил'| String;
  specialty?:  String;
  year?: String;
  spec_work: boolean;
  orphan: boolean;
  invalid: boolean;
}