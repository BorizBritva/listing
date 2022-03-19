export function textReduction(text, maxLen = 0) {
  const resultLenth = maxLen + 1
  return text.length > maxLen ? text.slice(0, resultLenth) : text
}

export function getCurrencyCode(code) {
  switch (code) {
    case "USD":
        return "$";
      break;
    case "EUR":
        return "€";
      break;
    default:
        return code;
      break;
  }
}

export function layerCodeClass(layer = 0) {
  let codeClass = "item-quantity"

  if (layer <= 10) {
    return (codeClass + " level-low")
  } else if (layer <= 20) {
    return (codeClass += " level-medium")
  } else {
    return (codeClass += " level-high")
  }
}
