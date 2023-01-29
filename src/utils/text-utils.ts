export const capitalizeFirstLetter = (text: string) => {
  if (!text) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const capitalizeAllFirstLettersOfWords = (text: string) => {
  if (!text) {
    return text;
  }
  return text.split(' ').map(capitalizeFirstLetter).join(' ');
};
