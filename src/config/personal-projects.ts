interface PersonalProject {
  project: string;
  summary: string;
  description: string[];
  site: string;
  repo: string;
}

export const personalProjects: PersonalProject[] = [
  {
    project: "Decentralized Exchange (DEX) Platform",
    summary: "Full-stack DeFi trading platform with AMM smart contracts on zkSync testnet.",
    description: [
      "Built full-stack DeFi trading platform with {Next.js} frontend and AMM smart contracts on {zkSync} testnet",
      "Implemented token swaps and liquidity pools with automated testing using 25 trading bot personas",
      "Optimized transaction costs to < $0.01 using Layer 2 scaling with sub-5s transaction speed",
      "Deployed live contract at {0xA5F6bde4C85379fd7339805071901F367F58a1F2} on zkSync Sepolia",
    ],
    site: "https://sepolia.explorer.zksync.io/address/0xA5F6bde4C85379fd7339805071901F367F58a1F2",
    repo: "https://github.com/amanuel1271/dex",
  },
  {
    project: "Personal Portfolio Website",
    summary: "Responsive portfolio showcasing professional projects and skills.",
    description: [
      "Created a clean and modern portfolio site using {Next.js}, {shadcn/ui}, and {Tailwind CSS} to showcase professional projects and skill sets",
      "Implemented multi-language support with English and Korean translations for international accessibility",
      "Built responsive design with dark/light theme support and smooth animations",
      "Deployed with optimized performance and SEO for professional presentation",
    ],
    site: "http://localhost:3001",
    repo: "https://github.com/amanuel1271/portfolio",
  },
];
