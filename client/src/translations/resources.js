/* eslint-disable camelcase */
import common_ru from './ru/common.json';
import common_en from './en/common.json';

const resources = {
  en: {
    common: common_en,
  },
  ru: {
    common: common_ru,
  },
};

export const languages = Object.keys(resources);

export default resources;
