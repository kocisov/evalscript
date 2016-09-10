const beautify = require('js-beautify').js_beautify

export const transpile = source => {
  let parser = require('./parser').parser
      parser.yy = require('./scope')

  return beautify(
    parser.parse(source),
    {
      indent_size: 2
    }
  )
}
