import { SETS_BACKGROUND } from "../constants";

const newBackground = (currentBg, condition) => {
  if (
		currentBg.set === condition.set &&
		currentBg.scene === condition.scene &&
		currentBg.day === condition.day &&
		currentBg.rainy === condition.rainy
	)
		return currentBg
  
  const newBackground = {...currentBg, show: !currentBg.show, ...condition };
  const newSrc = SETS_BACKGROUND.find(item => 
      item.set === condition.set &&
      item.scene === condition.scene &&
      item.day === condition.day &&
      item.rainy === condition.rainy &&
      item?.snow === condition?.snow &&
      item?.pixel === condition?.pixel &&
      item?.fire === condition?.fire
    ).src
  if(currentBg.show) {
    newBackground.srcOut = newSrc
  }
  else {
    newBackground.srcIn = newSrc
  }

  return newBackground
}

export default newBackground