
export default function popupService(flag) {
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

      datasInput.push({name: 'name', type: 'text', nameInput: 'Название фильма', placeholder: 'Например, Гражданин Кейн'});
      datasInput.push({name: 'desc', type: 'text', nameInput: 'Описание фильма', placeholder: 'Краткое описание сюжета'});
      datasInput.push({name: 'genre', type: 'text', nameInput: 'Жанр фильма', placeholder: 'Например, боевик'});
      datasInput.push({name: 'creators', type: 'text', nameInput: 'Страна создатель', placeholder: 'Например,Россия'});
      datasInput.push({name: 'realise', type: 'text', nameInput: 'Год выпуска в прокат', placeholder: 'Например, 2022'});
      datasInput.push({name: 'duration', type: 'text', nameInput: 'Продолжительность', placeholder: 'Например, 120'});
      datasInput.push({name: 'image', type: 'file', id: 'image', nameInput: 'Выбрать картинку для постеров'});

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
