export function parentClick(event) {
  event.target.parentElement.click();
}

export function hrefClick(event) {
  window.open(event.target.getAttribute('href'));
}
