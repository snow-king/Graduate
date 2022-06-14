import type { Graduate } from "@/dto/graduate.dto";
import { getAllCities } from "./address";
import { getAllCompany } from "./company";

export const getGraduates = async ():Promise<Array<Graduate>> => {
  return [
    {
      name: "Роман",
      lastName: "Гайбадулов",
      patronymic: "Константинович",
      company: "НЕКИНЕМ",
      position: "frontend",
      city: "Иркутск",
      army: 'Не служил',
      specialty: "ПИ",
      year: "18",
      spec_work: true,
      orphan: false,
      invalid: false,
    },
    {
        name: "Валерия",
        lastName: "Мякишева",
        patronymic: "Васильевна",
        company: "Иргупс",
        position: "управленец",
        city: "Иркутск",
        army: 'Не служил',
        specialty: "ИC",
        year: "18",
        spec_work: false,
        orphan: false,
        invalid: false,
      },
      {
        name: "Илья",
        lastName: "Константинов",
        patronymic: "Алексеев",
        company: "ИВЦ",
        position: "backend",
        city: "Иркутск",
        specialty: "БИ",
        year: "18",
        army: 'Не служил',
        spec_work: true,
        orphan: false,
        invalid: false,
      }
  ];
};

export const getGraduatesFields = async ():Promise<Array<{name: string, value: string|Array<string>|boolean, type: 'list'|'string'|'toggle', currentElement: string}>> => {
  return [
    {
      name: "Имя",
      value: '',
      type: 'string',
      currentElement:''
    },
    {
      name: "Фамилия",
      value: '',
      type: 'string',
      currentElement:''
    },
    {
      name: "Отчество",
      value: '',
      type: 'string',
      currentElement:''
    },
    {
      name: "Компания",
      value: await getAllCompany(),
      type: 'list',
      currentElement:''
    },
    {
      name: "Позиция",
      value: '',
      type: 'string',
      currentElement:''
    },
    {
      name: "Город",
      value: await getAllCities(),
      type: 'list',
      currentElement:''
    },
    {
      name: "Армия",
      value: ['Не служил', 'В армии', 'Отслужил'],
      type: 'toggle',
      currentElement:'Не служил'
    },
    {
      name: 'Работает по специальности',
      value: ['Да', 'Нет','Безработный'],
      type: 'toggle',
      currentElement:'Безработный'
    },
    {
      name: "Сирота",
      value: ['Да', 'Нет'],
      type: 'toggle',
      currentElement:'Нет'
    },
    {
      name: "Инвалид",
      value: ['Да', 'Нет'],
      type: 'toggle',
      currentElement:'Нет'
    },
  ]
};