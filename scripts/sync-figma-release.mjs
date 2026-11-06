import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const releaseCommit = '8c2ff94640fb64f3e876f11428d45cceb98ba381'
const releaseRepository = 'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git'
const releaseDirectory = join(tmpdir(), `selke-release-${releaseCommit.slice(0, 8)}`)

rmSync(releaseDirectory, { recursive: true, force: true })
execFileSync('git', ['clone', '--quiet', '--no-checkout', releaseRepository, releaseDirectory], { stdio: 'inherit' })
execFileSync('git', ['-C', releaseDirectory, 'checkout', '--quiet', releaseCommit], { stdio: 'inherit' })

function replaceDirectory(relativePath) {
  rmSync(relativePath, { recursive: true, force: true })
  cpSync(join(releaseDirectory, relativePath), relativePath, { recursive: true })
}

function copyFile(relativePath) {
  mkdirSync(join(relativePath, '..'), { recursive: true })
  cpSync(join(releaseDirectory, relativePath), relativePath)
}

replaceDirectory('public')
replaceDirectory('src/app')
replaceDirectory('src/styles')
copyFile('scripts/generate-seo-pages.mjs')
copyFile('src/main.tsx')
copyFile('src/vite-env.d.ts')
copyFile('src/imports/Screenshot_2026-05-18_213802.png')
copyFile('src/imports/selke-technician.webp')
copyFile('vite.config.ts')
copyFile('tsconfig.json')
copyFile('postcss.config.mjs')
copyFile('vercel.json')

let html = readFileSync('index.html', 'utf8')
if (!html.includes('/hero-backyard.webp')) {
  html = html.replace(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="preload" as="image" href="/hero-backyard.webp" fetchpriority="high" />',
  )
}
html = html.replace(
  'content="index, follow"',
  'content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"',
)
html = html.replace('"reviewCount": "46"', '"reviewCount": "75"')
writeFileSync('index.html', html)

rmSync(releaseDirectory, { recursive: true, force: true })
console.log(`Synchronized verified Selke release ${releaseCommit}`)
