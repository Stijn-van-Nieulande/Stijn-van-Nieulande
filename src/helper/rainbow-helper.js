// adapted from https://jsfiddle.net/shanfan/ojgp5718/

class Color {
  constructor(hexVal) {
    this.hex = hexVal
    this._init()
  }

  _init() {
    const hex = this.hex.substring(1)
    /* Get the RGB values to calculate the Hue. */
    const r = parseInt(hex.substring(0, 2), 16) / 255
    const g = parseInt(hex.substring(2, 4), 16) / 255
    const b = parseInt(hex.substring(4, 6), 16) / 255

    /* Getting the Max and Min values for Chroma. */
    const max = Math.max.apply(Math, [r, g, b])
    const min = Math.min.apply(Math, [r, g, b])

    /* Variables for HSV value of hex color. */
    const chr = max - min
    let hue = 0
    const val = max
    let sat = 0

    if (val > 0) {
      /* Calculate Saturation only if Value isn't 0. */
      sat = chr / val
      if (sat > 0) {
        if (r === max) {
          hue = 60 * (((g - min) - (b - min)) / chr)
          if (hue < 0) {
            hue += 360
          }
        } else if (g === max) {
          hue = 120 + 60 * (((b - min) - (r - min)) / chr)
        } else if (b === max) {
          hue = 240 + 60 * (((r - min) - (g - min)) / chr)
        }
      }
    }

    this.chroma = chr
    this.hue = hue
    this.sat = sat
    this.val = val
    this.luma = 0.3 * r + 0.59 * g + 0.11 * b
    this.red = parseInt(hex.substring(0, 2), 16)
    this.green = parseInt(hex.substring(2, 4), 16)
    this.blue = parseInt(hex.substring(4, 6), 16)
  }
}

const sortObjectColorsByHue = (objects) => {
  return objects.sort((a, b) => {
    return a.colorObj.hue - b.colorObj.hue
  })
}

export const sortObjectsByColor = (objects) => {
  for (let object of objects) {
    object.colorObj = new Color(object.color)
  }
  return sortObjectColorsByHue(objects)
}
