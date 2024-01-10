import { theme } from '@componentsV3/layouts/BaseLayout';

export const appearance = {
  theme: 'flat',
  variables: {
    fontLineHeight: '1.4',
    borderRadius: '0.5rem',
    colorBackground: theme.veryLightGrey,
    colorText: theme.black,
    colorPrimary: theme.green,
    colorPrimaryText: theme.green,
    colorIconTabSelected: theme.white,
  },
  rules: {
    '.Tab': {
      color: 'var(--colorText)',
      border: `1px solid ${theme.backgroundGrey}`,
      backgroundColor: theme.veryLightGrey,
    },
    '.Tab--selected:focus': {
      boxShadow: 'none',
    },
    '.Tab:hover': {
      borderColor: 'var(--colorText)',
    },
    '.Tab--selected': {
      backgroundColor: theme.black,
    },

    '.TabIcon--selected': {
      backgroundColor: theme.white,
    },
    '.TabLabel--selected': {
      color: theme.white,
    },
    '.Label': {
      fontSize: '12px',
    },
    '.Input': {
      backgroundColor: theme.veryLightGrey,
      border: `1px solid ${theme.backgroundGrey}`,
      fontSize: '0.8rem',
    },
    '.Input:focus': {
      backgroundColor: theme.veryLightGrey,
      border: `1px solid ${theme.black}`,
      boxShadow: 'none',
    },
    '.Input--empty::placeholder': {
      color: theme.textGrey,
    },
  },
};
