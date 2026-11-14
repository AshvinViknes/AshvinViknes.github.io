// ============================================================
//  PROJECTS  ·  featured project + project grid
//  Grid cards: give either  image/imageAlt  (photo card)  or
//  icon/thumbLabel  (generated gradient thumb, no image file).
// ============================================================

CONTENT.projects = {
  heading: "Selected work.",
  featured: {
    tag:   "Featured · Master Thesis · Go · Kubernetes · Confidential Computing",
    title: "Confidential Actions",
    desc:  "My master thesis at TU Dresden: a CI system that makes GitHub Actions builds reproducible and independently verifiable. Builds run in locked-down Kubernetes pods with their inputs pinned by a reviewed lock file. An isolated attestor signs the result, and its key never reaches workflow code. A second, independent runner rebuilds the same commit, co-signing only if every byte matches. Designed to run inside a SCONE Process Trust Domain.",
    link:  null,
    note:  "Code private during the examination phase. Happy to walk through it.",
    // Pulsing diagram (assets/diagrams, "lanes" layout). Icons are files in assets/icons.
    diagram: {
      layout: "lanes",
      alt: "A commit is built in a locked pod, signed by an isolated attestor, rebuilt by an independent verifier and co-signed when the bytes match.",
      curve: "curve",
      input: { label: "git push", icon: "github-actions", meta: "pinned inputs" },
      core:  { label: "Locked pod", icon: "kubernetes" },
      lanes: [
        { label: "Attestor", icon: "ui:key-round", meta: "signs result" },
        { label: "Verifier", icon: "ui:refresh-cw", meta: "rebuilds commit" },
        { label: "Co-signed", icon: "ui:badge-check", meta: "bytes match", done: true },
      ],
    },
  },
  grid: [
    {
      image:    "images/work-scone.svg",
      imageAlt: "Diagram of the SCONE platform operator installing components via Helm",
      tag:      "Go · Kubernetes · Helm",
      title:    "SCONE Platform Operator",
      desc:     "A meta-operator for deploying the SCONE confidential-computing platform, developed at TU Dresden. It replaces a fragile bash installer with a Go controller. That means Helm-driven chart resolution, a generic multi-step saga runner with per-step rollbacks, registry credential management, and hardened upgrade paths.",
      link:     null,
      note:     "University project · code on request",
    },
    {
      image:    "images/work-sentinelforge.svg",
      imageAlt: "SentinelForge assessment pipeline: plan, observe, evidence, report",
      tag:      "Go · Security · MCP",
      title:    "SentinelForge",
      desc:     "A CLI-first security-assessment prototype in Go. You register authorized targets, it produces deterministic plans you can review, runs bounded observations, and exports evidence-backed JSON and HTML reports with verifiable audit records. It ships with an embedded 36-role review catalog and an MCP server that exposes a native Go source graph.",
      link:     null,
      note:     "Private repo · walkthrough on request",
    },
    {
      image:    "images/work-contract.svg",
      imageAlt: "Contract Automation: organization role hierarchy feeding a signed contract",
      tag:      "Go · Next.js · PostgreSQL",
      title:    "Contract Automation",
      desc:     "A multi-tenant contract-lifecycle platform where each organization shapes its own role hierarchy. The Go API has a permission-based RBAC engine and JWT refresh rotation. A durable Postgres-backed job queue is woken by commit notifications, Redis holds cluster-wide state, and ClamAV scans every upload. The front end is Next.js 15, all behind nginx on Docker Compose.",
      link:     null,
      note:     "Private repo · walkthrough on request",
    },
    {
      image:    "images/work-coxbit.svg",
      imageAlt: "Browser window showing coxbit.org",
      tag:      "Next.js · Docker · nginx",
      title:    "coxbit.org",
      desc:     "A production website I work on and self-host, built with Next.js 15 and React 19. It runs in Docker on a VPS behind an nginx reverse proxy, with automated Let's Encrypt certificates and a Cloudinary image pipeline.",
      link:     { label: "Visit coxbit.org", href: "https://coxbit.org" },
    },
    {
      image:    "images/work-vault.svg",
      imageAlt: "Kubernetes Secret Vault",
      tag:      "Go · Kubernetes · REST",
      title:    "Kubernetes Secret Vault",
      desc:     "A Go tool for securing confidential information in Kubernetes clusters. It makes namespace creation and secret management simple through HTTP REST APIs.",
      link:     { label: "View on GitHub", href: "https://github.com/AshvinViknes/kubernetes-secret-vault" },
    },
    {
      image:    "images/work-iot.svg",
      imageAlt: "IoT energy monitoring system",
      tag:      "IoT · Embedded · Published in IEEE",
      title:    "IoT Real-Time Energy Monitoring",
      desc:     "Smart meters stream consumption data to the cloud for live analysis. CT coils and a NodeMCU detect power theft and alert officials automatically. Published in IEEE Xplore.",
      link:     { label: "Read the paper", href: "https://ieeexplore.ieee.org/abstract/document/10245099" },
    },
    {
      image:    "images/work-fan.svg",
      imageAlt: "Temperature controlled DC fan",
      tag:      "Electronics · Control",
      title:    "Temperature-Controlled DC Fan",
      desc:     "An autonomous fan-speed controller that adapts to changes in ambient temperature. It works as a drop-in upgrade for PCs, ACs, and furnaces.",
      link:     { label: "Project report", href: "https://drive.google.com/file/d/1FAKqABN1JV-ELNUKOm2C5B6hrAqqTdSk/view?usp=drive_link" },
    },
    {
      image:    "images/work-water.svg",
      imageAlt: "Astute water system",
      tag:      "Electronics · Automation",
      title:    "Astute Water System",
      desc:     "A water-level system with precise indication and intelligent flow control. It's an affordable retrofit for rooftop overflow systems.",
      link:     { label: "Project report", href: "https://drive.google.com/file/d/1euS6QQAthBIP8Zlxe-ek4dt1qKIPpX7H/view?usp=drive_link" },
    },
  ],
};
