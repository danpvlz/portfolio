export const showDefaultLang = false;

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'work':'work',

        'h1.first':'Full-Stack',
        'h1.second':'Developer',
        'description':'Dedicated to creating digital solutions, bringing ideas to life and crafting extraordinary digital realities on the ever-evolving web.',

        'contact.button': 'Contact me ✷ Work with me ✷ Say hi ✷',

        'inspiring.phrase.1':'If you can',
        'inspiring.phrase.2':'dream',
        'inspiring.phrase.3':'it, I can',
        'inspiring.phrase.4':'build',
        'inspiring.phrase.5':'it',

        'title.work': 'Work & Projects',
        'title.about': 'About',

        'about.content.1': "At the age of 17, one doesn't typically make the best life decisions, but I'm grateful to my 17-year-old self for choosing systems engineering. This path introduced me to excellent professors, friends, and, above all, my passion: software development. From my initial lines of code in Java to working with the latest JavaScript frameworks, it's a journey I thoroughly enjoy, and I couldn't imagine doing anything else.",

        'about.content.2': "In my professional life, I've also been fortunate to work on projects that I believe in and where I feel I play a significant role. I've had the opportunity to be a part of teams from which I've learned a great deal and grown professionally.",

        'about.content.3': "My stack includes, but is not limited to:",

        'about.list.frontend': "Frontend",
        'about.list.backend': "Backend",
        'about.list.languagues': "Languagues",
        'about.list.testing': "Testing",

        'about.content.4.1': "I live in ",
        'about.content.4.2': ", so naturally, one of my hobbies is discovering new restaurants and trying to travel as much as I can.",


        'contact.title.1':"Let's ",
        'contact.title.2':"Create ",
        'contact.title.3':"Together",

        'preview.text':'Live View',

        'footer.message': 'Made with love and tons of procrastination.',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.work': 'Proyectos',
        'nav.about': 'Sobre Mí',
        'nav.contact': 'Contacto',
        'work':'proyecto',

        'h1.first':'Desarrolladora',
        'h1.second':'Full-Stack',
        'description':'Dedicada a crear soluciones digitales, dando vida a ideas y elaborando realidades digitales extraordinarias en la web en constante evolución.',

        'contact.button': 'Contáctame ✷ Trabajemos ✷ Saluda ✷',

        'inspiring.phrase.1':'Si puedes',
        'inspiring.phrase.2':'soñarlo,',
        'inspiring.phrase.3':'yo puedo',
        'inspiring.phrase.4':'construirlo',
        'inspiring.phrase.5':' ',

        'title.work': 'Proyectos',
        'title.about': 'Sobre Mí',

        'about.content.1': "A la edad de 17 años, uno generalmente no toma las mejores decisiones de vida, pero estoy agradecido con mi yo de 17 años por elegir la ingeniería de sistemas. Este camino me presentó a excelentes profesores, amigos y, sobre todo, mi pasión: el desarrollo de software. Desde mis primeras líneas de código en Java hasta trabajar con los últimos frameworks de JavaScript, es un viaje que disfruto completamente y no podría imaginar haciendo otra cosa.",

        'about.content.2': "En mi vida profesional, también he tenido la suerte de trabajar en proyectos en los que creo y donde siento que desempeño un papel significativo. He tenido la oportunidad de ser parte de equipos de los cuales he aprendido mucho y he crecido profesionalmente.",

        'about.content.3': "Mi conjunto de herramientas incluye, pero no se limita a:",

        'about.list.frontend': "Frontend",
        'about.list.backend': "Backend",
        'about.list.languagues': "Lenguajes",
        'about.list.testing': "Pruebas",

        'about.content.4.1': "Vivo en ",
        'about.content.4.2': ", así que naturalmente, uno de mis pasatiempos es descubrir nuevos restaurantes y tratar de viajar tanto como pueda.",


        'contact.title.1':"Creemos  ",
        'contact.title.2':"juntos",
        'contact.title.3':" ",

        'preview.text':'Vista previa',

        'footer.message': 'Hecho con amor y toneladas de procrastinación.',
    },
} as const;

interface RouteMappings {
    [key: string]: string;
}

interface Routes {
    [key: string]: RouteMappings;
}

export const routes: Routes  = {
    en: {
        'home': '/',
        'nav.home': '/#home',
        'nav.work': '/#work',
        'nav.about': '/#about',
        'nav.contact': '/#contact',
        'work':'/work',
    },
    es: {
        'home': '/',
        'nav.home': '/#inicio',
        'nav.work': '/#proyectos',
        'nav.about': '/#sobre-mi',
        'nav.contact': '/#contacto',
        'work':'/proyecto',
    },
};