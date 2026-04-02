export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head = html.head.map((chunk) =>
      chunk.replace(
        /<link rel="stylesheet" href="(\/_nuxt\/[^"]+\.css)">/g,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">',
      ),
    )
  })
})
