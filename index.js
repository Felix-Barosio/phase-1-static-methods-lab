class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z-' ]+/g, '')
  }
  static titleize(string) {
    let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const wordArr = string.split(" ")
    return wordArr.map((word, i) => {
      return exclude.includes(word) && i != 0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');
  }
}