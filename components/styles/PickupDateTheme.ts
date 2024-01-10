import { theme } from '@componentsV3/layouts/BaseLayout';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme } from '@mui/material/styles';

export const pickupDateTheme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: theme.yellow,
          },
          color: theme.green,
          fontSize: 16,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme.backgroundGrey,
        },
        root: {
          backgroundColor: theme.veryLightGrey,

          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.black,
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            // borderColor: theme.darkGreen,
            borderColor: theme.black,
            borderWidth: '1px',
          },
          fontSize: 18,
        },
      },
    },

    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontSize: 16,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },

    MuiPickersDay: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: theme.green,
            color: theme.white,
          },
          fontSize: 16,
          '&.Mui-selected': {
            // fontWeight: 'bold',
            backgroundColor: theme.green,
            ':focus': {
              willChange: 'background-color',
              backgroundColor: theme.green,
            },
          },
        },
      },
    },
  },
});
