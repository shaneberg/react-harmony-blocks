class Utils {

  static lerp(from, to, t) {
    const lerp = t * (to - from) + from;
    return lerp;
  }
}

export default Utils;
