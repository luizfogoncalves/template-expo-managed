const isStage = false;
const isProduction = true;

const development = {
  user: 'https://user-develop-example.com',
};

const stage = {
  user: 'https://user-stage-example.com',
};

const production = {
  user: 'https://user-production-example.com',
};

export const getBaseUrl = (domain: keyof typeof development): string => {
  if (isStage) return stage[domain];
  if (isProduction) return production[domain];

  return development[domain];
};
