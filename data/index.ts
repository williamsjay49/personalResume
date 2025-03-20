export const navItems = [
  { name: "프로젝트", link: "#projects" },
  { name: "교육", link: "#education" },
  { name: "이력서", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Minimal Movie Search Website",
    des: "React와 바닐라라 CSS로 구축된 간단한 영화 검색 앱으로, [The Movie Database (TMDb)]를 사용합니다.",
    img: "/rp1.svg",
    iconLists: ["/re.svg", "tmdb.svg", "css.svg"],
    link: "https://github.com/williamsjay49/movieAppV2",
  },
  {
    id: 2,
    title: "Used Car Pricing REST API",
    des: "자동차 가격 예측을 제공하고, 사용자가 판매 가격을 보고하며, 관리자가 해당 보고서를 검토하는 REST API를 만들었습니다.",
    img: "/rp2.svg",
    iconLists: ["/ntJs.svg", "/ts.svg", "/pg.svg"],
    link: "https://github.com/williamsjay49/usedCarPricingApi",
  },
  {
    id: 3,
    title: "TODO REST API /w Spring Boot",
    des: "Spring Boot와 Spring Security를 사용하여 백엔드로 구축된 REST API",
    img: "/rp3.svg",
    iconLists: ["/java.svg", "/re.svg", "/css.svg"],
    link: "https://github.com/williamsjay49/todo-app-with-spring-boot",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "The Hard Parts of Asynchronous JavaScript",
    desc: "ES6+의 이터레이터, 제너레이터, 프로미스, async/await와 같은 기능들이 비동기 코드를 처리하는 방식을 간소화하는 방법을 학습하고 익혔습니다다",
    className: "md:col-span-2",
    thumbnail: "/FM.png",
    tag: "Frontend Masters",
  },
  {
    id: 2,
    title: "Become Spring Boot Developer",
    desc: "3주 과정에서 Spring Boot의 기초를 배우고, 프로젝트를 구축하여 Spring Security로 보안을 설정하는 방법을 익혔습니다.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/udemy.svg",
    tag: "Udemy",
  },
  {
    id: 3,
    title: "Build REST API with NestJs",
    desc: "NestJS의 기본을 배우고, 사용자가 자동차 가치를 추정할 수 있는 중고차 가격 API를 구축했으며, 일부 관리 기능도 구현했습니다.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/udemy.svg",
    tag: "Udemy",
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    desc: "데이터 사이엔스 응용을 중심으로 Data Structure와 알고리즘의 기본을 배웠습니다.",
    className: "md:col-span-2",
    thumbnail: "/cousera.png",
    tag: "Cousera",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
