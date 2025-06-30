import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const useProtfolioUtils = () => {
  const challenges = [
    {
      id: 1,
      name: "rating-app",
      codeLink: "https://codesandbox.io/p/sandbox/rating-app-7fv6tk",
      liveLink: "https://codesandbox.io/p/sandbox/rating-app-7fv6tk",
    },
    {
      id: 2,
      name: "tic-tac-toe",
      codeLink: "https://codesandbox.io/p/sandbox/tic-tac-toe-52357x",
      liveLink: "https://codesandbox.io/p/sandbox/tic-tac-toe-52357x",
    },
    {
      id: 3,
      name: "drag-and-drop",
      codeLink: "https://codesandbox.io/p/sandbox/drag-and-drop-dyhrzl",
      liveLink: "https://codesandbox.io/p/sandbox/drag-and-drop-dyhrzl",
    },
    {
      id: 4,
      name: "progress-bar",
      codeLink: "https://codesandbox.io/p/sandbox/progress-bar-8ftjpw",
      liveLink: "https://codesandbox.io/p/sandbox/progress-bar-8ftjpw",
    },
    {
      id: 5,
      name: "validate-otp",
      codeLink: "https://codesandbox.io/p/sandbox/validate-otp-jtmwtp",
      liveLink: "https://codesandbox.io/p/sandbox/validate-otp-jtmwtp",
    },
    {
      id: 6,
      name: "emi-calculator",
      codeLink: "https://codesandbox.io/p/sandbox/emi-calculator-qx9qxv",
      liveLink: "https://codesandbox.io/p/sandbox/emi-calculator-qx9qxv",
    },
  ];

  const contactItems = [
    {
      icon: Mail, // just pass the component, not JSX
      label: "Email",
      value: "jaykumarsankpal92@gmail.com",
      link: "mailto:jaykumarsankpal92@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jaykumar-sankpal",
      link: "https://www.linkedin.com/in/jaykumar-sankpal-3664371a8/",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9137802565",
      link: "tel:+919137802565",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jaykumar-dev",
      link: "https://github.com/jaykumar23",
    },
  ];
  return {
    challenges,
    contactItems,
  };
};
