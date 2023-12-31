export function stopScrolling() {
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
  console.log(window.scrollY)
}

export function restartScrolling() {
  const scrollY = document.body.style.top;
  console.log(scrollY)
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
