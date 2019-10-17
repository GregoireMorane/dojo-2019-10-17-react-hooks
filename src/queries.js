export const fetchArticles = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/arnaudrenaud/ab7cfba1df8a789b7039c47c9a4d0aab/raw/b2151e9981e15feca9fa215aeb7c045cf876e3da/articles.json'
  );
  const { articles } = await response.json();
  return articles;
};

export const fetchTemperature = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/arnaudrenaud/ab7cfba1df8a789b7039c47c9a4d0aab/raw/0ce49c66fbc3ce343a31b6b795f10706caba73f6/temperature.json'
  );
  const { temperature } = await response.json();
  return temperature;
};
