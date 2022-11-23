import { COLORS } from "./colors";

export const palette = {
  primary: {
    main: COLORS.ALPHA_BLUE_500,
    light: COLORS.ALPHA_BLUE_100,
    dark: COLORS.ALPHA_BLUE_800,
    contrastText: COLORS.ALPHA_BLUE_50,
  },
  secondary: {
    main: COLORS.BETA_PURPLE_500,
    light: COLORS.BETA_PURPLE_100,
    dark: COLORS.BETA_PURPLE_800,
    contrastText: COLORS.BETA_PURPLE_50,
  },
  background: {
    paper: COLORS.WHITE,
    default: COLORS.WHITE,
  },
  text: {
    primary: COLORS.TEXT_HIGH,
    secondary: COLORS.TEXT_MEDIUM,
    disabled: COLORS.TEXT_LOW,
  },
  grey: {
    "50": COLORS.GREY_50,
    "100": COLORS.GREY_100,
    "200": COLORS.GREY_200,
    "300": COLORS.GREY_300,
    "500": COLORS.GREY_500,
    "700": COLORS.GREY_700,
  },
  error: {
    main: COLORS.ERROR,
  },
  success: {
    main: COLORS.SUCCESS,
  },
  warning: {
    main: COLORS.WARNING,
  },
  Label_Black: {
    "30%": COLORS.LABEL_BLACK_30,
  },
  gamma_grey: {
    "50": COLORS.GAMMA_GREY_50,
  },
};