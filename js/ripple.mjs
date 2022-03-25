/**
 *  如何实现一个水波纹点击效果
 *  @author xkl
 */

export function setRipple(element, event) {
  let el_bg_rgbcolor = getBgRbgColor(element);
  let maxLength = getElementMaxLength(element);
  let x = event.clientX - element.getBoundingClientRect().x - 10;
  const y = event.clientY - element.getBoundingClientRect().y - 10;
  let span = createCircleSpan(el_bg_rgbcolor, maxLength, x, y);
  element.append(span);
}

function getElementMaxLength(element) {
  let elementHeight = element.offsetHeight;
  let elementWidth = element.offsetWidth;
  return (
    Math.sqrt(elementHeight * elementHeight + elementWidth * elementWidth) * 2
  );
}

function createCircleSpan(el_bg_rgbcolor, width, x = 0, y = 0) {
  let bg_reg = /\d+/g;
  let [a, b, c] = el_bg_rgbcolor.match(bg_reg);
  let span_bg_color = `rgba(${0},${0},${0},${0.4})`;
  let span = document.createElement("span");
  span.style.background = span_bg_color;
  span.style.display = "block";
  span.style.position = "absolute";
  span.style.width = width / 15 + "10px";
  span.style.height = width / 15 + "10px";
  span.style.borderRadius = "50%";
  span.style.left = x + "px";
  span.style.top = y + "px";
  span.classList.add("ripple__round");

  span.addEventListener(
    "animationend",
    function (e) {
      span.remove();
    },
    false
  );

  return span;
}

/**
 * 获取一个元素的背景图片
 * @param { Element }} element
 * @description Google: getComputedStyle; IE:currentStyle
 */
function getBgRbgColor(element) {
  let cls = window.getComputedStyle
    ? window.getComputedStyle(element)
    : element.currentStyle;
  return cls.backgroundColor;
}
