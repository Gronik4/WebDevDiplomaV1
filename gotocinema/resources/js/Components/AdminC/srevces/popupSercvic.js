
export default function popupSercvic(flag) {
  let Datas = {};
  let data = [];

  switch(flag) {
    case 1:
      Datas.popupName = 'Добавление зала';
      Datas.formAction = 'add_hall';
      Datas.formMethod = 'post';
      Datas.nameButton = 'Добавить зал';
      data.push({name: 'name', nameInput: 'Название зала', placeholder: 'Например: Зал 1'});
      Datas.data = data;
      break;
    case 2:
      Datas.popupName = 'Добавление фильма';
      Datas.formAction = 'add_movie';
      Datas.formMethod = 'post';
      Datas.nameButton = 'Добавить фильм';
      data.push({name: 'name', nameInput: 'Название фильма', placeholder: 'Например, &laquo;Гражданин Кейн&raquo;'});
      data.push({name: 'desc', nameInput: 'Описание фильма', placeholder: 'Краткое описание сюжета'});
      data.push({name: 'genre', nameInput: 'Жанр фильма', placeholder: 'Например, боевик'});
      data.push({name: 'creators', nameInput: 'Страна создатель', placeholder: 'Например,Россия'});
      data.push({name: 'realise', nameInput: 'Год выпуска в прокат', placeholder: 'Например, 2022'});
      data.push({name: 'duration', nameInput: 'Продолжительность', placeholder: 'Например, 120 мин'});
      data.push({name: 'posterMain', nameInput: 'Картинка на главную. Размер:246Х348px', placeholder: ''});
      data.push({name: 'posterAd', nameInput: 'Картинка в админпанель. Размер: 78Х104px', placeholder: ''});
      Datas.data = data;
      break;
    case 'hd':
      Datas.popupName = 'Удаление зала';
      Datas.formAction = 'delete_hall';
      Datas.formMethod = 'post';
      Datas.nameButton = 'Удалить';
      data = 0;
      Datas.data = data;
      break;
    default: null;
  }
  return Datas;
}
