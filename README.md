# [www.bigbistudio.com](http://www.bigbistudio.com)

The official website for [bigbi studio](https://www.bigbistudio.com) — a digital studio focused on thoughtful digital products, modern web experiences, and open-source tools.

Built with **Next.js, React, TypeScript, and Tailwind CSS**.

## About This Repository

This repository is a **real-world use case of the [bigA.i Workflow Next.js Template](https://github.com/bigbistudio/bigai-workflow-nextjs)**.

The repository is public to demonstrate how the template can be used as a foundation for a real website, then adapted, customized, and extended for a specific brand and project.

Rather than being another standalone template, this repository shows the template in practice:

* Custom design and branding
* Real website content and page structure
* Reusable components and sections
* Design system customization
* Project-specific functionality
* SEO and metadata
* Production-oriented implementation

### From Template to Website

**[bigA.i Workflow Next.js Template](https://github.com/bigbistudio/bigai-workflow-nextjs)**
Foundation, architecture, and reusable patterns.

↓

**[www.bigbistudio.com](http://www.bigbistudio.com)**
A real-world implementation built from that foundation.

The two repositories are intentionally separate. The template provides a reusable starting point, while this repository contains the custom implementation and decisions specific to the bigbi studio website.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel

## Getting Started

### Requirements

* Node.js 20+
* npm

### Installation

```bash
git clone https://github.com/bigbistudio/bigbistudiocom-bigai-nextjs.git
cd bigbistudiocom-bigai-nextjs
npm install
```

Create a `.env.local` file and add the required environment variables.

### Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
├── app/
├── components/
├── data/
├── lib/
├── sections/
└── types/
```

Content is kept separate from UI where possible to make the website easier to maintain and extend.

The project structure follows the foundation of the bigA.i Workflow Next.js Template while allowing the website to introduce its own components, sections, content, and design decisions.

## Based On

This website is built from the open-source **bigA.i Workflow Next.js Template** and adapted for the bigbi studio website.

**Template:**
https://github.com/bigbistudio/bigai-workflow-nextjs

The template is the reusable product. This repository is the **real-world use case** demonstrating how that product can be applied to build an actual website.

## Contributing

This repository primarily contains the implementation of the bigbi studio website.

If you would like to contribute, please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

## License

This project is maintained by bigbi studio.
