export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const value = localStorage[key];
  if (value) {
    return JSON.parse(value);
  }
};
