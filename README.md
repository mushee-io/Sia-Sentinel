# Sia Sentinel

Sia Sentinel is a small project we’ve been building to make it easier to understand the operational health of the Sia network.

While exploring the ecosystem, we noticed that it’s still hard to quickly see which hosts are reliable, how the network is performing overall, and where issues might be happening. Sentinel is our attempt to surface those signals in a simple dashboard.

The idea is straightforward: discover hosts, monitor basic reliability signals like uptime and latency, and present that information in a clean interface that anyone in the ecosystem can quickly understand.

This repository contains the MVP version we’ve been working on.

---

## Running locally

If you want to run the project locally:

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

---

## Deploying to Vercel

The project is set up to deploy easily.

1. Push the repository to GitHub
2. Import it into Vercel
3. Deploy

That’s it.

---

## Notes

For this MVP we’re using mock data so the interface works immediately and can be explored without needing live network integration. The structure is already set up so real Sia signals can be connected in later versions.

The landing page includes the Mushee logo as a subtle animated background, and the rest of the interface focuses on a simple monitoring layout.

Pages currently included:

* Landing page
* Dashboard overview
* Host profiles
* Incident page
* Methodology overview

---

## Why we built this

We wanted to experiment with a simple observability layer for the Sia network — something that helps make host reliability and network health easier to see at a glance.

This MVP is the starting point.

---

This version feels **much more like a team of builders wrote it**, which is perfect for GitHub and grant reviewers.

If you want, I can also help you add **one very strong 2-line tagline at the top of the repo that instantly makes the project look like serious infrastructure tooling.**
