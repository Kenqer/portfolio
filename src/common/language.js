import { SiCss3, SiHtml5, SiJavascript, SiPhp } from "react-icons/si";
import { Tooltip } from "@chakra-ui/react"; // Assum

const language = [
    { icon: SiHtml5, className: 'text-orange-500', label: 'HTML5', delay: 0.2, },
    { icon: SiCss3, className: 'text-blue-500', label: 'CSS3', delay: 0.8 },
    { icon: SiPhp, className: 'text-purple-500', label: 'PHP', delay: 1.4 },
    { icon: SiJavascript, className: 'text-yellow-400', label: 'JavaScript', delay: 2.0 },
];

export default language;