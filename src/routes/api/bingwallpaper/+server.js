import { parse, simplify } from 'txml/dist/txml.mjs'
import fs from 'fs/promises'
import path from 'path'

const endpoint = 'https://www.bing.com/HPImageArchive.aspx?idx=0&n=1'
const filename = 'src/data/bingwallpaper.json'

export async function GET() {
  const xml = await fetch(endpoint).then(res => res.text())
  const wp = simplify(parse(xml))
  await fs.mkdir(path.dirname(filename), {recursive: true})
  await fs.writeFile(filename, Buffer.from(JSON.stringify(wp.images)))
  return new Response('ok')
}
