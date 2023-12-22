import { InterfaceMedias } from '../utils/interface';

export function displayDataSortBy(
  data: Array<InterfaceMedias>,
  displayData: Function,
  mediasTemplate: Function,
  eraseDisplayMedia: Function,
  lightbox:Function
) {
  const select = document.querySelector('select');
  const [...originData] = data 
  let newData;
  select?.addEventListener('change', () => {
    if (select.value === 'Popularité') {
      newData = byPopularity(data);
    } else if (select.value === 'Date') {
      newData = byDate(data);
      console.log(newData)
    } else if (select.value === 'Titre') {
      newData = byTitle(data);
    } else if (select.value === null || select.value === undefined || select.value === "") {
      newData = originData
    }
    eraseDisplayMedia();
    displayData(newData, mediasTemplate);
    lightbox()
  });
}

export function byDate(data: Array<InterfaceMedias>): Array<InterfaceMedias> {
    function dateComparison(a:any, b:any) {
        const date1 = new Date(a.date)
        const date2 = new Date(b.date)
        return Number(date1) - Number(date2);
    }

  const newData = data.sort(dateComparison);
  return newData;
}

export function byPopularity(
  data: Array<InterfaceMedias>
): Array<InterfaceMedias> {
  let newData = data.sort(function (a, b) {
    return a.likes - b.likes;
  });
  return newData;
}

export function byTitle(data: Array<InterfaceMedias>): Array<InterfaceMedias> {
  let newData = data.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  return newData;
}
