// ============================================================
//  UNIVERSITY  ·  semester project carousel
// ============================================================

CONTENT.university = {
  heading: "Five semesters at TU Dresden.",
  sub:     "Hands-on projects every semester, from LEGO robots to loss landscapes to confidential computing.",
  projects: [
    {
      sem:    "Semester 01",
      image:  "images/uni-robolab.svg",
      title:  "Robolab: LEGO Exploration Bot",
      desc:   "Built a LEGO Mindstorms robot in a team that autonomously explores a planet grid, scanning barcodes on the floor. They're decoded with a Hamming error-correcting code and processed through a stack-machine implementation to identify nodes and plan its route.",
      chips:  ["Robotics", "Hamming code", "Stack machine", "Python"],
      link:   null,
    },
    {
      sem:    "Semester 02",
      image:  "images/uni-gemm.svg",
      title:  "GeMM Accelerator: HW/SW Codesign",
      desc:   "Hardware/software codesign project optimizing general matrix multiplication (GeMM) on a RISC-V core. Restructuring the computation and adding custom instructions cut the instruction count for the course's GeMM workload from <strong>~70 million to under 1 million</strong>, roughly 70×.",
      chips:  ["HW/SW codesign", "RISC-V", "GeMM", "Optimization"],
      link:   null,
    },
    {
      sem:    "Semester 02",
      image:  "images/uni-wsn.svg",
      title:  "WSN ML Pipeline",
      desc:   "End-to-end ML pipeline for wireless sensor networks: cleans, normalizes, and segments raw IoT signal data collected across five environments, then trains 1D-CNN and ResNet1D models for environment and node classification, with checkpointing, resumable runs, and confusion-matrix reports.",
      chips:  ["Python", "PyTorch", "IoT"],
      link:   { label: "View on GitHub", href: "https://github.com/AshvinViknes/wsn-ml-pipeline-model" },
    },
    {
      sem:    "Semester 03",
      image:  "images/uni-loss.svg",
      title:  "DL Generalization via Loss Landscapes",
      desc:   "Research project (NNMHA): trained MNIST models under increasing label corruption, extracted 1D loss-landscape slices, and fit parabolic basins. The result: noisier labels produce sharper minima and worse generalization.",
      chips:  ["Deep learning", "PyTorch", "Research"],
      link:   { label: "View on GitHub", href: "https://github.com/AshvinViknes/dl-generalization-loss-landscape" },
    },
    {
      sem:    "Semester 04",
      image:  "images/uni-scone.svg",
      title:  "SCONE Operator: Go-based Installer",
      desc:   "A Go-based meta-operator that installs and manages the SCONE confidential-computing platform. It's Helm-driven, with saga-pattern rollbacks and registry-secret handling. Delivered and defended at the Chair of Systems Engineering.",
      chips:  ["Go", "Kubernetes", "Helm"],
      link:   { label: "See the full project", href: "#projects" },
    },
    {
      sem:    "Semester 05 · Now",
      image:  "images/uni-thesis.svg",
      title:  "Master Thesis: Confidential Actions",
      desc:   "Reproducible and verifiable CI for GitHub Actions in confidential execution environments: builds run in locked-down pods, an isolated attestor signs the result, and an independent verifier co-signs only on byte-identical rebuilds. Featured in full below.",
      chips:  ["Go", "Kubernetes", "SCONE", "Supply chain"],
      link:   { label: "Read about my thesis", href: "#thesis" },
    },
  ],
};
