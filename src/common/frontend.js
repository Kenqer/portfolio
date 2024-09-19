import { SiBootstrap, SiChakraui, SiFramer, SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import { Tooltip } from "@chakra-ui/react"; // Assum

const frontend = [
    { icon: SiReact, className: 'text-sky-500', label: 'React JS', delay: 0.2, },
    { icon: SiTailwindcss, className: 'text-sky-400', label: 'TailwindCSS', delay: 0.8, },
    { icon: SiFramer, className: 'text-black', label: 'Framer Motion', delay: 1.4, },
    { icon: SiChakraui, className: 'text-green-300', label: 'Chakra UI', delay: 2.0, },
    { icon: SiVite, className: 'text-purple-400', label: 'Vite', delay: 2.6, },
    { icon: SiBootstrap, className: 'text-purple-600', label: 'Bootstrap', delay: 3.2, },
];

export default frontend;