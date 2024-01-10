export default function cleanSet(set, str) {
  if (!(set instanceof Set) && !(str instanceof String)) {
    throw new Error('unvalid parameter');
  }
  if (str === '') { return ''; }

  let text = '';
  set.forEach((value) => {
    if (value.startsWith(str)) { text += `${value.replace(str, '')}-`; }
  });
  return text.slice(0, -1);
}
