// ============================================================
//  SKILLS  ·  tabbed skill cards (Languages / Infra / Data / Domains)
// ============================================================

CONTENT.skills = {
  heading: "One stack, end to end.",
  sub:     "From the language runtime to the cluster it runs on and the data it produces.",
  // Real logos (assets/icons/<id>.svg) shown in the strip under the stats.
  stack: ["go", "python", "java", "kotlin", "kubernetes", "helm", "docker", "terraform-icon", "aws", "github-actions", "prometheus", "grafana", "kafka", "postgres", "mongodb-icon", "influxdb", "redis", "pytorch"],
  tabs: [
    {
      id: "p-langs", label: "Languages",
      cards: [
        {
          tag: "Primary", title: "Go", logos: ["go"],
          desc:  "Concurrent services built on goroutines and channels. I use it for gRPC and REST APIs, saga-pattern orchestration with rollbacks, CLI tooling, and Kubernetes operators.",
          chips: ["gRPC", "Goroutines", "Channels", "REST", "Operators", "Microservices"],
        },
        {
          tag: "ML & services", title: "Python", logos: ["python", "pytorch"],
          desc:  "Machine learning and feature engineering on time-series data, REST services, and end-to-end training pipelines with PyTorch, pandas, and scikit-learn.",
          chips: ["PyTorch", "Feature engineering", "REST", "pandas"],
        },
        {
          tag: "Backend", title: "Java", logos: ["java"],
          desc:  "API development for production diagnostics services: building, extending, and performance-tuning REST endpoints.",
          chips: ["API development", "REST", "Performance"],
        },
        {
          tag: "Backend", title: "Kotlin", logos: ["kotlin"],
          desc:  "API development on the JVM with concise, modern service code. I use it daily alongside Java at volytica.",
          chips: ["API development", "Services", "JVM"],
        },
      ],
    },
    {
      id: "p-infra", label: "Infra",
      cards: [
        {
          tag: "Orchestration", title: "Kubernetes & Helm", logos: ["kubernetes", "helm"],
          desc:  "Custom operators, deployments, secrets management, NetworkPolicies, and Helm-driven release pipelines, developed and tested locally on microk8s, minikube, and kind.",
          chips: ["Operators", "Helm charts", "Secrets", "NetworkPolicies", "kind"],
        },
        {
          tag: "Infrastructure as code", title: "Terraform", logos: ["terraform-icon"],
          desc:  "Declarative provisioning of cloud infrastructure, keeping environments reproducible and reviewable.",
          chips: ["IaC", "Provisioning"],
        },
        {
          tag: "Containers", title: "Docker", logos: ["docker", "nginx"],
          desc:  "Multi-stage builds, registry and credential management, Compose deployments behind nginx, and aggressive binary and image-size optimization.",
          chips: ["Multi-stage builds", "Compose", "nginx", "Optimization"],
        },
        {
          tag: "Events & delivery", title: "AWS & CI pipelines", logos: ["aws", "github-actions", "argo-icon"],
          desc:  "Event-driven architectures on SNS and SQS, S3 document APIs, CI pipelines, GitHub Actions, and GitOps deployments with ArgoCD.",
          chips: ["SNS", "SQS", "S3", "CI/CD", "GitHub Actions", "ArgoCD"],
        },
        {
          tag: "Observability", title: "Prometheus & Grafana", logos: ["prometheus", "grafana"],
          desc:  "Metrics collection and alerting with Prometheus, and Grafana dashboards to watch services and catch regressions early.",
          chips: ["Metrics", "Alerting", "Dashboards"],
        },
        {
          tag: "Event streaming", title: "Kafka", logos: ["kafka"],
          desc:  "Event streaming between services: producers, consumers, and topics that keep systems decoupled and replayable.",
          chips: ["Topics", "Consumers", "Events"],
        },
      ],
    },
    {
      id: "p-data", label: "Data",
      cards: [
        {
          tag: "Time series", title: "InfluxDB", logos: ["influxdb"],
          desc:  "High-volume time-series handling for battery telemetry: ingestion, querying, and downsampling for diagnostics workloads.",
          chips: ["Telemetry", "Downsampling"],
        },
        {
          tag: "Document store", title: "MongoDB", logos: ["mongodb-icon"],
          desc:  "Schema design, indexing strategies, and performance optimization. Certified, and battle-tested in production charging systems.",
          chips: ["Indexing", "ACID"],
        },
        {
          tag: "Relational", title: "PostgreSQL", logos: ["postgres", "redis"],
          desc:  "Relational modeling and queries backing diagnostic services and reporting, plus a durable Postgres-backed job queue using SKIP LOCKED claims and commit notifications.",
          chips: ["SQL", "Modeling", "Job queues"],
        },
        {
          tag: "Craft", title: "Performance optimization", glyph: "gauge",
          desc:  "It keeps coming up in my work: 90% faster S3 document APIs, ~30 ms PDF invoice generation, slimmer binaries, and tuned diagnostics queries.",
          chips: ["Profiling", "Latency", "Footprint"],
        },
        {
          tag: "Data collection", title: "Web scraping", glyph: "scan-search",
          desc:  "Scrapers that collect data from websites and turn messy pages into clean, structured records ready for analysis.",
          chips: ["Scrapers", "Parsing", "Structured data"],
        },
      ],
    },
    {
      id: "p-domains", label: "Domains",
      cards: [
        {
          tag: "Industry", title: "Telco & EV charging", glyph: "plug-zap",
          desc:  "Charging and rating engines for telecommunications and OCPP-standard EV platforms: session management, rate consumption, and multi-charger compatibility.",
          chips: ["OCPP", "Rating", "Sessions"],
        },
        {
          tag: "Industry", title: "Battery diagnostics", glyph: "battery-charging",
          desc:  "Time-series analysis and ML on battery data at volytica, turning fleet telemetry into health insights.",
          chips: ["Time series", "ML", "Fleets"],
        },
        {
          tag: "Research", title: "Confidential computing", glyph: "lock-keyhole",
          desc:  "From a Go meta-operator that installs the SCONE platform to my master thesis: reproducible CI for GitHub Actions, where builds are locked, attested, signed, and independently verified.",
          chips: ["SCONE", "Attestation", "Reproducible builds", "Supply chain"],
        },
        {
          tag: "Security", title: "Security engineering", glyph: "shield-check",
          desc:  "Authorized-target security assessment tooling (SentinelForge), permission-based RBAC engines, secrets management, malware-scanned upload pipelines, and signed-evidence audit trails.",
          chips: ["RBAC", "Audit trails", "Evidence", "MCP"],
        },
      ],
    },
  ],
};
