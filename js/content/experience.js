// ============================================================
//  EXPERIENCE  ·  work timeline + education cards
// ============================================================

CONTENT.experience = {
  heading: "Experience &amp; education.",
  jobs: [
    {
      date:    "Oct 2026 – Present",
      title:   "Master Thesis: Confidential Actions",
      org:     "TU Dresden · Chair of Systems Engineering (Prof. Fetzer)",
      bullets: [
        "Building a CI system that runs existing GitHub Actions workflows in locked-down Kubernetes pods, with mutable inputs pinned by a reviewed lock file and artifacts signed by an attestor that workflow code can never reach.",
        "A second, independent runner rebuilds each commit and co-signs only on byte-identical output; evaluating compatibility, reproducibility, and CVM performance on real projects, targeting a SCONE Process Trust Domain.",
      ],
      chips: ["Go", "Kubernetes", "GitHub Actions", "SCONE", "Supply-chain security", "Signatures", "kind"],
    },
    {
      date:    "Oct 2024 – Present",
      title:   "Working Student, Software Engineering",
      org:     "volytica Diagnostics · Dresden",
      bullets: [
        "API development across multiple microservices in Java, Kotlin, and Python for battery diagnostics.",
        "Time-series data handling at scale on InfluxDB, alongside PostgreSQL-backed services.",
        "Event-driven systems built on AWS SNS and SQS.",
        "CI pipelines for safe, repeatable releases across services.",
        "ML development: feature engineering and analysis on battery telemetry.",
        "Performance optimization across diagnostics workloads.",
      ],
      chips: ["Java", "Kotlin", "Python", "InfluxDB", "PostgreSQL", "SNS/SQS", "CI", "ML", "Performance", "Microservices"],
    },
    {
      date:    "2026",
      title:   "Student Developer, SCONE Operator",
      org:     "TU Dresden · Chair of Systems Engineering (Prof. Fetzer)",
      bullets: [
        "Built a Go-based meta-operator that installs and manages the SCONE confidential-computing platform, orchestrating its components rather than the SGX enclaves directly.",
        "Replaced a bash-based installer with a Helm-driven pipeline: chart resolution, saga-pattern rollbacks, and registry-secret management.",
        "Developed and tested locally across microk8s, minikube, and kind clusters; presented the installer in a final defence at the chair.",
      ],
      chips: ["Go", "Kubernetes", "Helm", "microk8s", "kind"],
    },
    {
      date:    "Jul 2023 – Sep 2024",
      title:   "Software Engineer",
      org:     "BlueoceanDigital India Pvt. Ltd.",
      bullets: [
        "Developed and managed distributed Go microservices, backed by MongoDB, around a core charging-and-rating engine serving telco, EV, and IoT customers.",
        "Integrated Stripe and Razorpay payment APIs and stood up a dedicated payment service linked to the charging engine.",
        "Built AWS S3 document-management APIs with a 90% performance improvement; optimized PDF invoice generation to ~30 ms.",
        "Created a secrets-manager application for encrypting sensitive configuration across services.",
        "Managed GitOps deployments with ArgoCD.",
        "Drove binary and Docker image-size optimization across the platform.",
      ],
      chips: ["Go", "Kubernetes", "Microservices", "MongoDB", "ArgoCD", "Stripe", "Razorpay", "AWS S3", "Meta"],
    },
    {
      date:    "Dec 2022 – Jun 2023",
      title:   "Software Engineer Intern",
      org:     "BlueoceanDigital India Pvt. Ltd.",
      bullets: [
        "Developed OCPP-standard REST APIs compatible with multiple EV chargers, validated with BDD test suites.",
        "Built a Dockerized Meta (WhatsApp) integration server hosted on Kubernetes, connecting the charging engine to customers.",
        "Improved IUT session management and rate consumption in the core engine; designed charging-station UIs in Figma.",
      ],
      chips: ["Go", "OCPP", "BDD", "Meta WhatsApp", "Kubernetes"],
    },
  ],
  education: [
    {
      degree: "MSc Nanoelectronic Systems",
      org:    "TU Dresden · 2024 – Present",
      desc:   "Graduate coursework spanning confidential computing, distributed systems, neural networks &amp; memristive hardware accelerators, RF integrated circuits, hardware/software codesign, and semiconductor technology, with hands-on projects every semester. Currently writing my master thesis on reproducible, verifiable CI in confidential execution environments.",
      badge:  "Thesis in progress",
    },
    {
      degree: "B.E. Electrical &amp; Electronics Engineering",
      org:    "Sri Ramakrishna Engineering College · 2019 – 2023",
      desc:   "Eight-semester program with labs, projects, and leadership roles. Strong foundation in power systems, mathematics, and computer science.",
      badge:  "CGPA 8.81 / 10",
    },
    {
      degree: "HSC: Computer Science &amp; Mathematics",
      org:    "Mercy Matriculation HSS · 2018 – 2019",
      desc:   "Programming fundamentals, data structures, and operating systems alongside physics, chemistry, and advanced mathematics.",
      badge:  null,
    },
  ],
};
