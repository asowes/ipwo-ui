import { getMaxIndex } from './getMaxIndex';
import { useIsomorphicLayoutEffect } from './hooks';
interface RenderPositionProps {
  selfRef: any;
  parentRef: any;
  isFocus?: boolean;
  setStyles: Function;
  options: Array<string>;
}

export const updatePosition = (props: RenderPositionProps) => {
  const { selfRef, parentRef, isFocus = true, setStyles, options } = props;

  if (!selfRef.current || !parentRef.current) return;
  let rect: any = parentRef.current?.getBoundingClientRect(); //目标元素的尺寸方位
  let height = selfRef.current?.getBoundingClientRect().height || 0;
  let width = Math.max(selfRef.current?.getBoundingClientRect().width || 0, rect.width);
  let documentH = document.documentElement.clientHeight;
  let documentW = document.documentElement.clientWidth;
  let top: number, left: number;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  // 定位垂直方向
  if (height > documentH - rect.height - rect.y - 10) {
    top = rect.y - height + scrollTop - 5;
  } else {
    top = rect.y + rect.height + scrollTop + 5;
  }
  // 定位水平方向
  if (width > documentW - rect.width - rect.x - 10) {
    left = rect.x + rect.width - width + scrollLeft;
  } else {
    left = rect.x + scrollLeft;
  }

  const resStyles = {};

  options.forEach((item) => {
    if (item === 'left') {
      resStyles['left'] = left;
    }
    if (item === 'top') {
      resStyles['top'] = top;
    }
    if (item === 'opacity') {
      resStyles['opacity'] = isFocus ? 1 : 0;
    }
    if (item === 'width') {
      resStyles['width'] = rect.width;
    }
  });

  setStyles(resStyles);

  // 设置弹窗位于最高层级
  selfRef.current.style.zIndex = getMaxIndex();
};

export const RenderPosition = (props: RenderPositionProps) => {
  const { selfRef, parentRef, isFocus = true } = props;

  useIsomorphicLayoutEffect(() => {
    updatePosition(props);
    if (isFocus && selfRef.current) {
      // 设置弹窗位于最高层级
      selfRef.current.style.zIndex = getMaxIndex();
    }
  }, [selfRef.current, parentRef.current, isFocus]);

  useIsomorphicLayoutEffect(() => {
    if (!window) return;
    window.addEventListener('resize', () => {
      updatePosition(props);
    });

    return () => {
      window.removeEventListener('resize', () => {
        updatePosition(props);
      });
    };
  }, []);
};
