export const language = 'en-US';

export enum GrammaticalNumber {
  Singular = 'one',
  Plural = 'other'
}

export const pluralize = (count: number, singular: string, plural: string) => {
  const rules = new Intl.PluralRules(language);
  const grammaticalNumber = rules.select(count);

  switch (grammaticalNumber) {
    case GrammaticalNumber.Singular:
      return `${count} ${singular}`;
    case GrammaticalNumber.Plural:
      return `${count} ${plural}`;
  }
};

export const config: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric'
};

export const formatDate = (date: Date) => new Intl.DateTimeFormat(language, config).format(date);

export const getRandomInteger = (num: number) => Math.floor(Math.random() * num);
