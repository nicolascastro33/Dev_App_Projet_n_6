import { InterfaceMedias } from './interface';

const optionMenu = document.querySelector('.select-menu'),
  selectBtn = optionMenu?.querySelector('.select-btn'),
  allOption = optionMenu?.querySelector('.options'),
  options = optionMenu?.querySelectorAll('.option button'),
  btn_text = optionMenu?.querySelector('.btn-text');

export function setTogglesortByButton() {
  selectBtn?.addEventListener('click', () => {
    optionMenu?.classList.toggle('active');
    if (optionMenu?.getAttribute("class")?.includes("active")) {
      options?.forEach((option) => {
        option.setAttribute('tabindex', '0');
        allOption?.setAttribute('aria-hidden', 'false');
        selectBtn.setAttribute("aria-label", "bouton pour fermer les options")
        selectBtn?.setAttribute('aria-expanded', 'true');
      });
    } else {
      options?.forEach((option) => {
        option.setAttribute('tabindex', '-1');
        allOption?.setAttribute('aria-hidden', 'true');
        selectBtn.setAttribute("aria-label", "bouton pour ouvrir les options")
        selectBtn?.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

export function displayDataSortBy(
  data: Array<InterfaceMedias>,
  displayData,
  mediasTemplate,
  eraseDisplayMedia,
  lightbox,
  changeLikes) {
  options!.forEach((option) => {
    option.addEventListener('click', () => {
      setTextSelect(option);
      const newData = getDataSortBy(data);
      eraseDisplayMedia();
      displayData(newData, mediasTemplate);
      lightbox();
      changeLikes();
    });
  });
}

function getDataSortBy(data) {
  let newData;
  if (btn_text?.innerHTML === 'Popularité') {
    newData = byPopularity(data);
  } else if (btn_text?.innerHTML === 'Date') {
    newData = byDate(data);
  } else if (btn_text?.innerHTML === 'Titre') {
    newData = byTitle(data);
  }
  return newData;
}

function byDate(data: Array<InterfaceMedias>): Array<InterfaceMedias> {
  function dateComparison(a:InterfaceMedias, b: InterfaceMedias) {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return Number(date1) - Number(date2);
  }

  const newData = data.sort(dateComparison);
  return newData;
}

function byPopularity(data: Array<InterfaceMedias>): Array<InterfaceMedias> {
  const newData = data.sort(function (a, b) {
    return a.likes - b.likes;
  });
  return newData;
}

function byTitle(data: Array<InterfaceMedias>): Array<InterfaceMedias> {
  const newData = data.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  return newData;
}

function setTextSelect(option) {
  const selectedOption = option.querySelector('.option-text')?.innerHTML;
  const actualOption = btn_text?.innerHTML;

  btn_text!.innerHTML = selectedOption;
  option.querySelector('.option-text').innerHTML = actualOption;

  optionMenu?.classList.remove('active');
  allOption?.setAttribute('aria-hidden', 'true');
  selectBtn?.setAttribute('aria-expended', 'false');
  options?.forEach((option) => {
    option.setAttribute('tabindex', '-1');
  });
}
