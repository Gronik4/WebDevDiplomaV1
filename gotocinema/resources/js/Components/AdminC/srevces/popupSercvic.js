
export default function popupSercvic(flag) {
  let Datas = {};
  let datasInput = [];

  switch(flag) {
    case 1:
      Datas.popupName = 'Добавление зала';
      Datas.nameButton = 'Добавить зал';
      datasInput.push({name: 'name', nameInput: 'Название зала', placeholder: 'Например: Зал 1'});
      Datas.datasInput = datasInput;
      break;
    case 2:
      Datas.popupName = 'Добавление фильма';
      Datas.nameButton = 'Добавить фильм';
      datasInput.push({name: 'name', nameInput: 'Название фильма', placeholder: 'Например, &laquo;Гражданин Кейн&raquo;'});
      datasInput.push({name: 'desc', nameInput: 'Описание фильма', placeholder: 'Краткое описание сюжета'});
      datasInput.push({name: 'genre', nameInput: 'Жанр фильма', placeholder: 'Например, боевик'});
      datasInput.push({name: 'creators', nameInput: 'Страна создатель', placeholder: 'Например,Россия'});
      datasInput.push({name: 'realise', nameInput: 'Год выпуска в прокат', placeholder: 'Например, 2022'});
      datasInput.push({name: 'duration', nameInput: 'Продолжительность', placeholder: 'Например, 120 мин'});
      datasInput.push({name: 'posterMain', nameInput: 'Картинка на главную. Размер:246Х348px', placeholder: ''});
      datasInput.push({name: 'posterAd', nameInput: 'Картинка в админпанель. Размер: 78Х104px', placeholder: ''});
      Datas.datasInput = datasInput;
      break;
    case 'hd':
      Datas.popupName = 'Удаление зала';
      Datas.nameButton = 'Удалить';
      datasInput = 0;
      Datas.datasInput = datasInput;
      break;
    case 'fd':
      Datas.popupName = 'Удаление фильма';
      Datas.nameButton = 'Удалить';
      datasInput = 0;
      Datas.datasInput = datasInput;
    default: null;
  }
  return Datas;
}
