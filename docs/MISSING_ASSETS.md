# Missing and placeholder assets

Some binary files in the Lovable project could not be exported with the source code.

## Temporary placeholders (replace with the real files)

These three are imported by the code, so the build needs them. Simple placeholder images were added so the site builds. Replace each one with the real file, keeping the same path and name:

- `src/assets/favicon.png`
- `src/assets/podcast-hero.jpg`
- `src/assets/podcast-mic-book.jpg`

## Not exported (not used by the current code)

These exist in the Lovable project but nothing in the current source imports them. The site builds without them. Add them if you want a complete backup:

- `src/assets/a-flash-in-time-cover.jpg`
- `src/assets/about-growth.jpg`
- `src/assets/casestudy-growth.jpg`
- `src/assets/hero-growth.jpg`
- `src/assets/logo.png`
- `src/assets/portfolio-growth.jpg`
- `src/assets/testimonials-growth.jpg`

## PDFs not exported

These are served from `public/`, so a missing file shows a 404 for that download or viewer link on the live site. Add them at the same paths:

- `public/features/A_Flash_In_Time_Article.pdf`
- `public/features/Religion_and_Science_Jargal_Dorj_Feature.pdf`
- `public/proof-of-work/A_Flash_In_Time_Amazon_Optimization_Package.pdf`
- `public/proof-of-work/Peace_in_the_Midst_of_the_Storm.pdf`
- `public/proof-of-work/peace-in-the-midst-roadmap.pdf`
- `public/proof-of-work/the-leaky-raft-roadmap.pdf`
