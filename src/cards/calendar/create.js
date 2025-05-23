import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement } from "../../tools/utils.js";
import styles from "./styles.css";

export function createStructure(context) {
  const cardType = 'calendar';

  const elements = createBaseStructure(context, {
      type: cardType,
      styles: styles,
      withBaseElements: false,
      withSubButtons: true,
      iconActions: false,
      buttonActions: false
  });

  elements.calendarCardContent = createElement('div', 'bubble-calendar-content');

  elements.mainContainer.style.setProperty('--bubble-calendar-height', `${(context.config.rows ?? 1) * 56}px`);
  elements.mainContainer.prepend(elements.calendarCardContent);

  context.cardType = cardType;
}