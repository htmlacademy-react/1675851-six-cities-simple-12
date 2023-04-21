export const LANGUAGE = 'en-US';
export const GRAMMATICAL_SINGULAR_NUMBER = 'one';

export const pluralize = (count: number, singular: string, plural: string) => {
  const rules = new Intl.PluralRules(LANGUAGE);
  const number = rules.select(count);

  switch (number) {
    case GRAMMATICAL_SINGULAR_NUMBER: return `${count} ${singular}`;
    default: return `${count} ${plural}`;
  }
};

export const dateConfig: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric'
};

export const formatDate = (date: Date) => new Intl.DateTimeFormat(LANGUAGE, dateConfig).format(date);

export const getRandomInteger = (num: number) => Math.floor(Math.random() * num);
