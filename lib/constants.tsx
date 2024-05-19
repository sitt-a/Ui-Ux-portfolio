
export const links = [
    {
        name: "About",
        href: "/about",
        isA: false
    },

    {
        name: "Resume",
        href: "/resume",
        isA: true
    },


] as const;
export const projectsData = [
    {
        title: "Flower-delivery",
        description:
            "mobi",
        tags: ["React", "Express.js", "MongoDB", "Tailwind", "RTK query"],
        imageUrl: '/images/f2.png',
        href: '/flower-delivery'
    },
    {
        title: "Foodie",
        description:
            "This is the first project i made after I learn tailwind css. ",
        tags: ["React", "Tailwind", "Context api"],
        imageUrl: '/images/e11.png',

        href: '/food-delivery'
    },
    {
        title: "Konjit",
        description:
            "Vent is website where users can talk about what they feel. It has many features including saving vent, liking, supporting, filtering user.",
        tags: ["React", "Redux toolkit", "Express.js", "Material UI", "MongoDB"],
        imageUrl: '/images/k5.png',

        href: '/konjit'
    },
    {
        title: "Temar-lije",
        description:
            "This was school project. it is made for tourists where they can find place to visit",
        tags: ["React", "Express.js", "MongoDB", "Bootstarp",],
        imageUrl: '/images/t8.png',
        href: '/temar-lije'
    },
    {
        title: "Feta",
        description:
            "This was school project. it is made for tourists where they can find place to visit",
        tags: ["React", "Express.js", "MongoDB", "Bootstarp",],
        imageUrl: '/images/m1.png',
        href: '/feta'
    },

    

] as const;

export const MobileAppsData =[
    {
        title: "Teraki",
        
        imageUrl: '/images/p13.png',
        href: 'https://github.com/eden-gelan/Teraki'
    },

    {
        title: "Felagi",
        
        imageUrl: '/images/p30.png',
        href: 'https://github.com/eden-gelan/Felagi'


    },

    {
        title: "Farmer app",
        
        imageUrl: '/images/p31.png',
        href: 'https://github.com/eden-gelan/Mobile-Dev'

    }
] as const;
