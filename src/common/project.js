import { SiAxios, SiExpress, SiJsonwebtokens, SiMysql, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";

const projects = [
  {
    link: "",
    image: 'bbyshin.webp',
    status: 'Finished',
    date: 'Jul 2024',
    title: 'BbyShin Towing',
    description: "I created a modern, responsive website for a towing service using the React.js framework. The site features a user-friendly interface, quick load times, and seamless navigation, ensuring customers can easily request towing services and access important information on any device.",
    program: [
      { icon: SiReact, colorClass: 'text-blue-500' },          // React: Blue
      { icon: SiTailwindcss, colorClass: 'text-teal-400' },    // TailwindCSS: Teal
      { icon: SiExpress, colorClass: 'text-black' },           // Express: Black
      { icon: SiVercel, colorClass: 'text-black' },            // Vercel: Black
      { icon: SiMysql, colorClass: 'text-orange-500' },        // MySQL: Orange
      { icon: SiAxios, colorClass: 'text-black' },          // Axios: Blue
      { icon: SiJsonwebtokens, colorClass: 'text-black' }  // JWT: Green
    ]
  }
];

export default projects;
