import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const assets = [
  {
    encodedSource: 'scripts/assets/srujan-portrait.webp.base64',
    output: 'src/assets/portrait/srujan-portrait.webp',
  },
  {
    encodedSource: 'scripts/assets/hero-introduction.webp.base64',
    output: 'src/assets/thumbnails/hero-introduction.webp',
  },
]

for (const asset of assets) {
  const sourcePath = resolve(repositoryRoot, asset.encodedSource)
  const outputPath = resolve(repositoryRoot, asset.output)
  const encodedAsset = await readFile(sourcePath, 'utf8')

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, Buffer.from(encodedAsset.replaceAll(/\s/g, ''), 'base64'))
  console.log(`Generated ${asset.output}`)
}
