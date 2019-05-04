import { darken, desaturate, lighten, readableColor, transparentize } from 'polished';

const allFonts: Fonts = {
  monospace: 'Courier, monospace',
  display: 'Sofia Pro, Montserrat, sans-serif',
  text: 'Roboto, sans-serif'
};

const allColors: Colors = {
  leaflink: {
    brand: {
      primary: {
        grandDaddyPurp: '#1B1443',
        blueDream: '#0072F0',
        sourDiesel: '#01BBB4',
        panamaRed: '#ED5565'
      },
      secondary: {
        lemonHaze: '#FCE143',
        bubbaKush: '#0022AC',
        jillyBean: '#1CE0AD',
        tangerineDream: '#F8AC59'
      },
      greyScale: {
        godfatherOg: '#262626',
        darkGrey: '#676A6C',
        lightGrey: '#C5C9D4',
        backgroundGrey: '#EEF2F4'
      }
    },
    elements: {
      blue: {
        main: '',
        dark: '#263256',
        light: '',
        contrastText: ''
      }
    }
  },
  redoc: {
    grey: {
      main: '#999999',
      light: '#f4f4f4',
      dark: '#676A6C',
      contrastText: ''
    },
    green: {
      main: '#00aa13',
      light: '#d6eadd',
      dark: '',
      contrastText: ''
    },
    yellow: {
      main: '#d4ad03',
      light: '#d3ca12',
      dark: '',
      contrastText: ''
    },
    red: {
      main: '#e53935',
      light: '#eedfe0',
      dark: '',
      contrastText: ''
    },
    orange: {
      main: '#ffa500',
      light: '',
      dark: '',
      contrastText: ''
    },
    blue: {
      main: '',
      light: '#87ceeb',
      dark: '',
      contrastText: ''
    },
    purple: {
      main: '#9b708b',
      light: '#c167e4',
      dark: '',
      contrastText: ''
    }
  },

  white: '#ffffff',
  black: '',
  transparent: 'rgba(0,0,0, 0.1)'
};

const defaultTheme: ThemeInterface = {
  spacing: {
    unit: 5,
    sectionHorizontal: ({ spacing }) => spacing.unit * 8,
    sectionVertical: ({ spacing }) => spacing.unit * 8,
  },
  breakpoints: {
    small: '50rem',
    medium: '85rem',
    large: '105rem',
  },
  colors: {
    tonalOffset: 0.3,
    primary: {
      main: allColors.redoc.grey.dark,
      light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    success: {
      main: allColors.redoc.green.main,
      light: ({ colors }) => lighten(colors.tonalOffset, colors.success.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
      contrastText: ({ colors }) => readableColor(colors.success.main),
    },
    warning: {
      main: allColors.redoc.yellow.main,
      light: ({ colors }) => lighten(colors.tonalOffset, colors.warning.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
      contrastText: allColors.white,
    },
    error: {
      main: allColors.redoc.red.main,
      light: ({ colors }) => lighten(colors.tonalOffset, colors.error.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
      contrastText: ({ colors }) => readableColor(colors.error.main),
    },
    text: {
      primary: allColors.redoc.grey.dark,
      secondary: ({ colors }) => lighten(colors.tonalOffset, colors.text.primary),
      link: allColors.leaflink.brand.primary.blueDream,
      active: allColors.leaflink.brand.primary.sourDiesel
    },
    border: {
      dark: allColors.transparent,
      light: allColors.white,
    },
    responses: {
      success: {
        color: ({ colors }) => colors.success.main,
        backgroundColor: allColors.redoc.green.light,
      },
      error: {
        color: ({ colors }) => colors.error.main,
        backgroundColor: allColors.redoc.red.light,
      },
      redirect: {
        color: allColors.redoc.orange.main,
        backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
      },
      info: {
        color: allColors.redoc.blue.light,
        backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
      },
    },
    http: {
      get: allColors.leaflink.brand.primary.sourDiesel,
      post: allColors.leaflink.brand.primary.blueDream,
      put: allColors.redoc.purple.main,
      options: allColors.redoc.yellow.light,
      patch: allColors.leaflink.brand.secondary.tangerineDream,
      delete: allColors.leaflink.brand.primary.panamaRed,
      basic: allColors.redoc.grey.main,
      link: allColors.leaflink.brand.primary.sourDiesel,
      head: allColors.redoc.purple.light,
    },
  },
  schema: {
    linesColor: theme =>
      lighten(
        theme.colors.tonalOffset,
        desaturate(theme.colors.tonalOffset, theme.colors.primary.main),
      ),
    defaultDetailsWidth: '75%',
    typeNameColor: theme => theme.colors.text.secondary,
    typeTitleColor: theme => theme.schema.typeNameColor,
    requireLabelColor: theme => theme.colors.error.main,
    labelsTextSize: '0.9em',
    nestingSpacing: '1em',
    nestedBackground: allColors.leaflink.brand.primary.grandDaddyPurp,
    arrow: {
      size: '1.1em',
      color: theme => theme.colors.text.secondary,
    },
  },
  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: allFonts.text,
    smoothing: 'antialiased',
    optimizeSpeed: true,
    headings: {
      fontFamily: allFonts.display,
      fontWeight: '400',
      lineHeight: '1.6em',
    },
    code: {
      fontSize: '13px',
      fontFamily: allFonts.monospace,
      lineHeight: ({ typography }) => typography.lineHeight,
      fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: allColors.redoc.red.main,
      backgroundColor: allColors.redoc.grey.light,
      wrap: false,
      borderColor: allColors.transparent
    },
    links: {
      color: ({ colors }) => colors.text.link,
      decoration: 'underline',
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  menu: {
    width: '260px',
    backgroundColor: allColors.leaflink.brand.primary.grandDaddyPurp,
    activeBackgroundColor: allColors.leaflink.elements.blue.dark,
    textColor: allColors.leaflink.brand.greyScale.lightGrey,
    groupItems: {
      textTransform: 'uppercase',
    },
    level1Items: {
      textTransform: 'none',
    },
    arrow: {
      size: '1.5em',
      color: theme => theme.menu.textColor,
    },
    floatingButton: {
        backgroundColor: allColors.leaflink.brand.primary.blueDream,
        color: allColors.leaflink.brand.greyScale.backgroundGrey
    }
  },
  logo: {
    maxHeight: ({ menu }) => menu.width,
    maxWidth: ({ menu }) => menu.width,
    gutter: '15px',
  },
  middlePanel: {
    backgroundColor: allColors.leaflink.brand.greyScale.backgroundGrey
  },
  rightPanel: {
    backgroundColor: allColors.leaflink.brand.primary.grandDaddyPurp,
    width: '40%',
    textColor: allColors.white,
  },
  tab: {
    activeColor: allColors.leaflink.brand.primary.blueDream,
    color: allColors.leaflink.brand.greyScale.lightGrey
  },
  codeSample: {
    backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  },
};

export default defaultTheme;

export function resolveTheme(theme: ThemeInterface): ResolvedThemeInterface {
  const resolvedValues = {};
  let counter = 0;
  const setProxy = (obj, path: string) => {
    Object.keys(obj).forEach(k => {
      const currentPath = (path ? path + '.' : '') + k;
      const val = obj[k];
      if (typeof val === 'function') {
        Object.defineProperty(obj, k, {
          get() {
            if (!resolvedValues[currentPath]) {
              counter++;
              if (counter > 1000) {
                throw new Error(
                  `Theme probably contains circular dependency at ${currentPath}: ${val.toString()}`,
                );
              }

              resolvedValues[currentPath] = val(theme);
            }
            return resolvedValues[currentPath];
          },
          enumerable: true,
        });
      } else if (typeof val === 'object') {
        setProxy(val, currentPath);
      }
    });
  };

  setProxy(theme, '');
  return JSON.parse(JSON.stringify(theme));
}

export interface Fonts {
  monospace: string;
  text: string;
  display: string;
};

export interface Colors {
  leaflink: {
    brand: {
      primary: {
        grandDaddyPurp: string;
        blueDream: string;
        sourDiesel: string;
        panamaRed: string;
      };
      secondary: {
        lemonHaze: string;
        bubbaKush: string;
        jillyBean: string;
        tangerineDream: string;
      };
      greyScale: {
        godfatherOg: string;
        darkGrey: string;
        lightGrey: string;
        backgroundGrey: string;
      };
    };
    elements: {
      blue: ColorSetting;
    };
  };
  redoc: {
    grey: ColorSetting;
    green: ColorSetting;
    yellow: ColorSetting;
    red: ColorSetting;
    orange: ColorSetting;
    blue: ColorSetting;
    purple: ColorSetting;
  };
  white: string;
  black: string;
  transparent: string;
};

export interface ColorSetting {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface HTTPResponseColos {
  color: string;
  backgroundColor: string;
}

export interface FontSettings {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  lineHeight: string;
  color: string;
}

export interface ResolvedThemeInterface {
  spacing: {
    unit: number;
    sectionHorizontal: number;
    sectionVertical: number;
  };
  breakpoints: {
    small: string;
    medium: string;
    large: string;
  };
  colors: {
    tonalOffset: number;
    primary: ColorSetting;
    success: ColorSetting;
    warning: ColorSetting;
    error: ColorSetting;
    border: {
      light: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
      link: string;
      active: string;
    };
    responses: {
      success: HTTPResponseColos;
      error: HTTPResponseColos;
      redirect: HTTPResponseColos;
      info: HTTPResponseColos;
    };
    http: {
      get: string;
      post: string;
      put: string;
      options: string;
      patch: string;
      delete: string;
      basic: string;
      link: string;
      head: string;
    };
  };
  schema: {
    linesColor: string;
    defaultDetailsWidth: string;
    typeNameColor: string;
    typeTitleColor: string;
    requireLabelColor: string;
    labelsTextSize: string;
    nestingSpacing: string;
    nestedBackground: string;
    arrow: {
      size: string;
      color: string;
    };
  };
  typography: {
    fontSize: string;
    lineHeight: string;
    fontWeightLight: string;
    fontWeightRegular: string;
    fontWeightBold: string;
    fontFamily: string;

    smoothing: string;
    optimizeSpeed: boolean;

    code: FontSettings & {
      backgroundColor: string;
      wrap: boolean;
      borderColor: string;
    };
    headings: {
      fontFamily: string;
      fontWeight: string;
      lineHeight: string;
    };

    links: {
      color: string;
      visited: string;
      hover: string;
      decoration: string;
    };
  };
  menu: {
    width: string;
    backgroundColor: string;
    activeBackgroundColor: string;
    textColor: string;
    groupItems: {
      textTransform: string;
    };
    level1Items: {
      textTransform: string;
    };
    arrow: {
      size: string;
      color: string;
    };
    floatingButton: {
        backgroundColor: string;
        color: string;
    };
  };
  logo: {
    maxHeight: string;
    maxWidth: string;
    gutter: string;
  };
  middlePanel: {
    backgroundColor: string;
  };
  rightPanel: {
    backgroundColor: string;
    textColor: string;
    width: string;
  };
  tab: {
    activeColor: string;
    color: string;
  };
  codeSample: {
    backgroundColor: string;
  };

  extensionsHook?: (name: string, props: any) => string;
}

export type primitive = string | number | boolean | undefined | null;
export type AdvancedThemeDeep<T> = T extends primitive
  ? T | ((theme: ResolvedThemeInterface) => T)
  : AdvancedThemeObject<T>;
export type AdvancedThemeObject<T> = { [P in keyof T]?: AdvancedThemeDeep<T[P]> };
export type ThemeInterface = AdvancedThemeObject<ResolvedThemeInterface>;
