import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { useState } from 'react'
import { Deflected } from "../components"

type tech = {
    name: string
    imgUrl: string
    article: string
    website: string
    span: number
    position: number
}
const techs: tech[] = [
    {
        name: 'Postgres',
        span: 3,
        imgUrl: 'https://th.bing.com/th/id/R.5da3c3ece883002c8994fa90aecbc0df?rik=XEyPwDN7JR%2fMBQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_242432.png&ehk=Q4RXkIW3pQs5KXsFK8EIMVPRZ%2by%2fOVZgI8ec8pjGhJ8%3d&risl=&pid=ImgRaw&r=0',
        article: 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
        website: 'https://www.postgresql.org/',
    },
    {
        name: 'Express',
        span: 3,
        imgUrl: 'https://redot.global/assets/images/pages/technologies/express_js_logo.png',
        article: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
        website: 'https://expressjs.com/',
    },
    {
        name: 'React',
        span: 3,
        imgUrl: 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png',
        article: 'A half-baked """functional""" UI library created by Mark Zuckerberg, used by millions of developers all over the world because of it\'s cool name and logo. React is simple, it\'s just javascript (oh no). That means it gives you hundreds of ways of solving the same problem, functional and class components, hooks, forward refs, higherOrderComponents, mixins, renderprops and suspense. It\'s credited as the first declarative UI library, if that means anything. You can write pure functions, until you actually want to get a job, and you literally end up with ()=>void everywhere. The beauty of this approach is that it makes the things that javascript does great (not so many) useless and simple things harder (no joke). For instance, the "useEffect" hook was originally called "useFootGun" because to this day, it\'s default behaviour is an infinite loop. To wrap things up, you write things in JSX, an Xml like syntax that introduces callback hell, it\'s own synthetic event handling (whyyyy), and the benefit of completely erradicating markup debugging, since it\'s now impossible. 9/10 my favourit I luv it<3.',
        website: 'https://reactjs.org/',
    },
    {
        name: 'Node',
        span: 3,
        imgUrl: 'https://th.bing.com/th/id/R.c502658a509d27b53679b3ef73c0d82f?rik=dFP%2b9LyCq64MMg&pid=ImgRaw&r=0',
        article: 'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
        website: 'https://nodejs.org/en/',
    },
    {
        name: 'JavaScript',
        span: 3,
        imgUrl: 'https://pluspng.com/img-png/logo-javascript-png-file-unofficial-javascript-logo-svg-1024.png',
        article: 'An embarrasing toy language used exclusively to build things it\'s not supposed to. Designed by NetScape in the 90s, and during a focus group session with some homeless developers, they decided that type cohesion was a feature rather than a bug. It\'s a loooooosly typed language, and by that I mean completely detached from reality. It was intended for only one use case, to annoy people with popups. Nowadays is used to build memory hogging desktop apps with electron, janky mobile apps with react native and unreliable apis with nodejs and express. Thousands of things were tried, but there is no cure. What can you expect of a communnity where the NPM package "isOddOrEven" has +400k downloads a week?. All in all, would try again 7/10.',
        website: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    },
    {
        name: 'TailWind',
        span: 3,
        imgUrl: 'https://codekitapp.com/images/help/free-tailwind-icon@2x.png',
        article: 'Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
        website: 'https://tailwindcss.com/',
    },
    {
        name: 'TypeScript',
        span: 2,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674335489/portfolio/output-onlinepngtools_v7qof5.png',
        article: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It took developers 25 years to make javascript a decent language. Ok now, what is TypeScript? TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.',
        website: 'https://www.typescriptlang.org/',
    },
    {
        name: 'Git',
        span: 2,
        imgUrl: 'https://www.pinclipart.com/picdir/big/147-1475273_hot-to-reset-reinitialise-a-git-repository-git.png',
        article: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
        website: 'https://git-scm.com/',
    },
    {
        name: 'GitHub',
        span: 2,
        imgUrl: 'https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png',
        article: 'Github is a development platorm almost exclusively for developers. From open-source to business, you can host and review code, manage projects and build software among 28 million developers. It\'s literally GitHub.',
        website: 'https://github.com/juanrolon54',
    },
    {
        name: 'HTML5',
        span: 2,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674333445/portfolio/logo-html-5-2048_ko7lax.png',
        article: '<!DOCTYPE html> <html><head><title>Page Title</title></head> <body><h1>HTML</h1><p>HTML is a markup language.</p></body></html>',
        website: 'http://info.cern.ch/hypertext/WWW/TheProject.html',
    },
    {
        name: 'CSS',
        span: 2,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674333470/portfolio/CSS-Logo_zfktaa.png',
        article: "INSERT INTENDED PUN Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui amet velit eius molestias eaque beatae, sequi nobis at nulla ad. Non aliquam accusantium facere temporibus dolorem cumque, architecto vitae quia?",
        website: 'https://es.wikipedia.org/wiki/CSS',
    },
    {
        name: 'Firebase',
        span: 2,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674332404/portfolio/Dise%C3%B1o_sin_t%C3%ADtulo_4_t2ashz.png',
        article: 'Firebase is a product of Google which helps developers to build, manage, and grow their apps easily. It helps developers to build their apps faster and in a more secure way. No programming is required on the firebase side which makes it easy to use its features more efficiently. It provides services to android, ios, web, and unity. It provides cloud storage. It uses NoSQL for the database for the storage of data.',
        website: 'https://firebase.google.com/',
    },
    {
        name: 'Sequelize',
        span: 2,
        imgUrl: 'https://cdn.freebiesupply.com/logos/large/2x/sequelize-logo-png-transparent.png',
        article: 'Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.',
        website: 'https://sequelize.org/',
    },
    {
        name: 'OpenAI',
        span: 2,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674332559/portfolio/Dise%C3%B1o_sin_t%C3%ADtulo_5_slelis.png',
        article: 'The OpenAI API is a set of tools and services that allows developers to access the powerful machine learning capabilities of OpenAI\'s GPT-3 model. The API provides a simple interface for integrating natural language processing and machine learning into a wide variety of applications, such as chatbots, language translation, and content creation. It can also be used to generate human-like text, complete tasks like summarization, and answer questions. Additionally, the API allows for customization of the model\'s capabilities through the use of "prompts" which can be used to guide the model\'s output. Overall, the OpenAI API provides a powerful and flexible way for developers to add advanced language understanding and generation capabilities to their applications. If you think that sounds too good to be true, what you just read was written by chatGPT (chat bot), and the only user input was the prompt: "write a small paragraph about the openai api", took it 5 seconds or so.',
        website: 'https://openai.com/api/',
    },
    {
        name: 'Redux',
        span: 2,
        imgUrl: 'https://th.bing.com/th/id/R.c8f44df3b0bdbe3addb48058ed44c088?rik=sxVy7V4G3z8F3g&pid=ImgRaw&r=0',
        article: 'Redux allows you to add 70kb of boilerplate code so do you don\'t have to communicate with your coworkers, which sounds awesome until you want to blame them for something you did (allegedly). Ok I don\'t really hate Redux, it does help a lot when complexity grows, but nowadays using it feels way more difficult than it needs to be. Again, I never said there\'s a decent alternative, like JavaScript, there is no cure. solid 7/10.',
        website: 'https://redux.js.org/',
    },
    {
        name: 'Three',
        span: 1,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674333231/portfolio/preview_jpbvzy.png',
        article: 'Just enter the website. I guarantee that you won\'t regret it.',
        website: 'https://threejs.org/',
    },
    {
        name: 'React Three Fiber',
        span: 1,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674335157/portfolio/react-three-fiber_2x_obziwk.png',
        article: 'At this point it wouldn\'t surprise you if I say this is my favourite library right?',
        website: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
    },
    {
        name: 'Vercel',
        span: 1,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674333157/portfolio/R_vg8ua9.png',
        article: 'Vercel is a platform for frontend developers, providing the speed and reliability developres need to create at the moment of inspiration (this is important, since developers really don\'t have those moments quite often). Vercel enables teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.',
        website: 'https://vercel.com/',
    },
    {
        name: 'Netlify',
        span: 1,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674333113/portfolio/OIP_l27onw.png',
        article: 'Bring it all together! The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web. Netflix is for you!',
        website: 'https://www.netlify.com/',
    },
    {
        name: 'BootStrap',
        span: 1,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674333053/portfolio/sadasd_1_jbahwp.png',
        article: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. This overused awfully-opinionated component library will help you make the same ugly website as many times as your provider allows you to use it\'s 100kb cdn.',
        website: 'https://getbootstrap.com/',
    },
    {
        name: 'Framer-Motion',
        span: 1,
        imgUrl: 'https://res.cloudinary.com/dse7tzeho/image/upload/v1674337078/portfolio/OIP_1_jiexqy.png',
        article: 'Framer Motion is a production-ready motion library for React from Framer. It\'s simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.',
        website: 'https://www.framer.com/motion/introduction/',
    }
].map((item, i) => ({ position: i, ...item })).sort(() => Math.random() - 0.5)

export default () => {
    const [tech, setTech] = useState<null | tech>(null)
    const isSelected = tech !== null

    return (
        <Deflected.left className={`gap-8 dark:text-white grid grid-cols-1 md:grid-cols-2 md:grid-flow-row`}>
            <p className="text-4xl md:col-span-2">I present to you my <span className="font-mono font-semibold">technology</span> stack:</p>
            <AnimatePresence >
                <LayoutGroup >
                    {isSelected && <motion.div layout key={tech.name} layoutId={tech.name} className="aspect-square lg:aspect-video overflow-hidden backdrop-blur-xl inset-32 border-black border dark:border-white flex flex-col gap-4">
                        <div className="grid grid-cols-3">
                            <motion.span layoutId={tech.name + 'name'} className="col-span-2 text-6xl font-serif font-semibold p-2 z-10 select-none h-full flex flex-col pt-8">{tech.name}<a href={tech.website} target='_blank' className="text-xs tracking-tighter underline" onClick={(e) => { e.stopPropagation() }}>go to website</a></motion.span>
                            <motion.img layoutId={tech.name + 'img'} loading="lazy" src={tech.imgUrl} className="object-contain aspect-square col-start-3 png-black dark:png-white p-4" />
                        </div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl p-4 col-span-3 leading-loose  overflow-y-auto">{tech.article}</motion.p>
                    </motion.div>}
                    <motion.div className={`relative col-start-${isSelected ? '2' : '1'} col-span-${isSelected ? '1' : '2'}`} >
                        <div className={`grid grid-flow-row grid-cols-12 gap-4`}>
                            {techs.sort((a, b) => isSelected ? (a.position - b.position) : 0).map((t) => {
                                return <motion.div whileHover={{ x: -4, y: -4 }} animate={{ skewY: t.name === tech?.name ? -8 : 0 }} layoutId={t.name} onMouseDown={() => { setTech(t) }} key={t.name} className={`hover:cursor-pointer aspect-square backdrop-blur-sm border-black border dark:border-white overflow-hidden col-span-${t.span} row-span-${t.span}`}>
                                    {t.span > 1 && <motion.span layoutId={t.name + 'name'} className="absolute p-2 w-fit z-10 select-none">{t.name}</motion.span>}
                                    <motion.img layoutId={t.name + 'img'} loading="lazy" src={t.imgUrl} className={`object-contain h-full w-full aspect-square png-black dark:png-white absolute -z-10 inset-0  select-none ${t.span > 1 ? 'p-4' : ''}`} />
                                </motion.div>
                            })}
                        </div>
                    </motion.div >
                </LayoutGroup>
            </AnimatePresence>
        </Deflected.left>
    )
}
