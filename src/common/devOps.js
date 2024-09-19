import { SiAmazonaws, SiGit, SiCpanel, SiVercel, SiGithubpages } from "react-icons/si";

const devOps = [
    { icon: SiAmazonaws, className: 'text-5xl text-red-400', label: 'AWS', delay: 0.2, },
    { icon: SiGit, className: 'text-5xl text-red-600', label: 'Git', delay: 0.8, },
    { icon: SiCpanel, className: 'text-6xl text-blue-600', label: 'cPanel', delay: 1.4, },
    { icon: SiVercel, className: 'text-5xl text-black', label: 'Vercel', delay: 2.0, },
    { icon: SiGithubpages, className: 'text-6xl text-black', label: 'Github Pages', delay: 2.6, },
];

export default devOps;
