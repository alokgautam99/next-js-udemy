import * as Fonts from './constants/fonts';
import * as Spacings from './constants/spacings';

export const PRIMARY_BORDER_WIDTH = '1px';
export const SOLID_BORDER_STYLE = 'solid';
export const DASHED_BORDER_STYLE = 'dashed';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const mobile = {
  maxWidth: '540px'
};

const breakpoints = {
  mobile: '47.95em',
  tablet: '70.95em'
};

export const mediaQuery = {
  aboveMobile: `@media only screen and (min-width: ${breakpoints.mobile})`,
  uptoMobile: `@media only screen and (max-width: ${breakpoints.mobile})`,
  onlyTablet: `@media only screen and (min-width: ${
    parseFloat(breakpoints.mobile, 10) + 0.05
  }em) and (max-width: ${breakpoints.tablet})`,
  uptoTablet: `@media only screen and (max-width: ${breakpoints.tablet})`,
  uptoIconDesktop: '@media only screen and (max-width: 1400px)',
  uptoIconTablet: '@media only screen and (max-width: 1080px)',
  aboveTablet: `@media only screen and (min-width: ${breakpoints.tablet})`
};

export { Fonts, Spacings, mobile, breakpoints };
