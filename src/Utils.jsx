class Utils {
  // Each value are from 0.0 to 1.0
  static getHexForFloats(red, green, blue) {
    let color = "#";
    let redVal = Math.round(red * 255);
    let greenVal = Math.round(green * 255);
    let blueVal = Math.round(blue * 255);

    color += redVal.toString(16).padStart(2, 0);
    color += greenVal.toString(16).padStart(2, 0);
    color += blueVal.toString(16).padStart(2, 0);
    return color;
  }

  static lerp(from, to, t) {
    const lerp = t * (to - from) + from;
    return lerp;
  }
}

export default Utils;
