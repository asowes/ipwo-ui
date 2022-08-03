export const getMaxIndex = () => {
  // 获取所有元素的最高层级
  if (typeof window === 'undefined') {
    return '1000';
  }
  const bodyElement = [...document.body.querySelectorAll('*')];
  const indexArr: any = [];
  for (let item of bodyElement) {
    indexArr.push(Number(window.getComputedStyle(item).zIndex) || 0);
  }
  const maxIndex = String(Math.max(...indexArr) + 1);
  return maxIndex;
};
