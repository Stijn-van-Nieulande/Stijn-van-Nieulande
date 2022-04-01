/**
 * Create badge markdown.
 *
 * @param {string} text The text to show on the badge.
 * @param {string|null} logo The logo slug from https://github.com/simple-icons/simple-icons/blob/develop/slugs.md.
 * @param {string} color The badge color (can be a hex color or color name).
 * @param {string|null} url The badge url when necessary.
 * @param {boolean} asHtml If the output needs to be html or markdown.
 * @return {string} The badge markdown.
 */
export const badge = (text, logo, color, url = null, asHtml = false) => {
  if (url) {
    return link(badge(text, logo, color, null, asHtml), url, asHtml)
  }
  const badgeText = text.replaceAll('-', '--').replaceAll(' ', '%20')
  const badgeColor = color.replaceAll('#', '')
  return image(text, `https://img.shields.io/badge/${badgeText}-${badgeColor}?style=flat-square${logo ? '&logo=' + logo : ''}&logoColor=white`, asHtml)
}

/**
 * Create visitors badge.
 *
 * @param {string} pageId The page id to get the amount of.
 * @param {boolean} asHtml If the output needs to be html or markdown.
 * @param {string} leftColor The (left) color of the badge.
 * @param {string} rightColor The (right) color of the badge.
 * @return {string} The visitors badge.
 */
export const visitorBadge = (pageId, asHtml = false, leftColor = 'gray', rightColor = 'darkgray') => {
  return image('visitors', `https://visitor-badge.glitch.me/badge?page_id=${pageId}&left_color=${leftColor}&right_color=${rightColor}`, asHtml)
}

/**
 * Create hyperlink.
 *
 * @param {string} text The text to show in the hyperlink.
 * @param {string|null} url The hyperlink url.
 * @param {boolean} asHtml If the output needs to be html or markdown.
 * @return The rendered hyperlink.
 */
export const link = (text, url, asHtml = false) => {
  if (asHtml) return `<a href="${url}">${text}</a>`
  return `[${text}](${url})`
}

/**
 * Create hyperlink.
 *
 * @param {string} text The text to show in the hyperlink.
 * @param {string|null} url The hyperlink url.
 * @param {boolean} asHtml If the output needs to be html or markdown.
 * @return The rendered hyperlink.
 */
export const image = (text, url, asHtml = false) => {
  if (asHtml) return `<img src="${url}" alt="${text}"/>`
  return `![${text}](${url})`
}
