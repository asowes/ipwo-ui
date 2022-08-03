import { isEmptyObject } from '@asow-core/ipow-ui.utils';

export const enumList = {
  TX1: {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '28px',
  },
  TX2: {
    fontFamily: 'inherit',
    fontWeight: 800,
    fontSize: '18px',
    lineHeight: '22px',
  },
  TX3: {
    fontFamily: 'inherit',
    fontWeight: 800,
    fontSize: '14px',
    lineHeight: '18px',
  },
  TX4: {
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
  },
  TX5: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '16px',
    lineHeight: '24px',
  },
  TX6: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '14px',
    lineHeight: '20px',
  },
  TX7: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '16px',
  },
  TX8: {
    fontFamily: 'inherit',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32px',
  },
  TX9: {
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
  },
  TX10: {
    fontFamily: 'inherit',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '22px',
  },
  'A-1': {
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
  },
  'A-2': {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
  },
  'B-1': {
    fontFamily: 'inherit',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
  },
  'B-2': {
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
  },
  'B-3': {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
  },
  'C-1': {
    fontFamily: 'inherit',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  },
  'C-2': {
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
  },
  'C-3': {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
  },
  // pc端
  T1: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '80px',
    lineHeight: '94px',
  },
  T2: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '48px',
    lineHeight: '56px',
  },
  T3: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '36px',
    lineHeight: '42px',
  },
  T4: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '32px',
  },
  T5: {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '20px',
    lineHeight: '28px',
  },
  T6: {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '36px',
  },
  // mobile
  'T2-M': {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '40px',
    lineHeight: '44px',
  },
  'T3-M': {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '28px',
    lineHeight: '32px',
  },
  'T4-M': {
    fontFamily: 'CircularStd, Arial',
    fontWeight: 900,
    fontSize: '22px',
    lineHeight: '28px',
  },
  'TX1-M': {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '26px',
  },
};

export const getEnumProperty = (tagName, style) => {
  if (isEmptyObject(tagName)) {
    return {};
  }

  const baseObj = enumList[tagName['base']] || {};
  const mdObj = enumList[tagName['md']] || {};
  const lgObj = enumList[tagName['lg']] || {};
  const xlObj = enumList[tagName['xl']] || {};

  return {
    base: baseObj[style] || '',
    md: mdObj[style] || '',
    lg: lgObj[style] || '',
    xl: xlObj[style] || '',
  };
};
