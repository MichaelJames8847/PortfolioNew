export const userData = {
    name: "Michael James",
    profilePic: "https://avatars.githubusercontent.com/u/133455651?v=4",
    bio: `Former Executive Chef turned Full Stack Web Developer. My journey in the culinary world
    spanned 15 years, starting as a humble dishwasher and culminating in a leadership role at 
    BJ's Restaurant and Brewhouse, of where I housed 8 years of my professional work life.
    This path taught me the essence of hard work, teamwork, and the art of managing high-pressure situations.
    
    In May 2023, I embarkned on a new adventure, driven by my passion for technology and problem-solving.
    I joined the Full Time, Full Stack Web Development Cohort-65 at Nashville Software School(NSS), where I
    honed my skills in Javascript(JS), React.js, C#, ASP.NET, and so many more. This intensive program not only
    equipped me with technical skills, but also deepened my ability to think logically and creatively.
    
    Beyond coding and cooking, I'm an avid gamer and a musician at heart. You'll often find me lost in the
    world of games or expressing myself through the strings of a guitar, the beats of drums, or belting away
    in the microphone. This blend of creativity and technical acumen is what I bring to the world of
    web development.
    
    As I transition into this exciting industry, I'm eagerly seeking opportunities to contribute, grow,
    and collaborate. I am passionate about creating impactful, user-friendly applications and am constantly
    exploring new technologies and apporaches to enhance my skills.
    
    Thank you for visiting my portfolio. Dive in to see the projects that showcase my journey from kitchens to code,
    and feel free to reach out if you think my skills and passions align with your needs.`,
    email: "jmj6ggggg@gmail.com",
    phoneNumber: "615-971-9745",
    linkedIn: "https://www.linkedin.com/in/michaeljames8847/",
    githHub: "https://github.com/MichaelJames8847"
}

export const blogs = [
    {
        id: 1,
        title: "Embracing the Journey: A Blend of Coding and Creativity",
        content: `Welcome to my first blog post!
    Today, I embark on a new journey - one that intertwines my passion for coding with my love for creativity. 
    As a software engineer, I've always been fascinated by the way programming languages can create something out of nothing, 
    turning lines of code into functional and impactful applications. 
    But there's more to me than just my profession.

    Music: My Melodic Escape
    Music has always been my sanctuary. 
    Whether I'm strumming the guitar or getting lost in the rhythmic beats of drums, 
    it's where I find peace. It's not just a hobby; it's a part of who I am. 
    It influences how I think and solve problems. 
    The creativity and discipline I learn from music often spill over into my coding, 
    bringing a sense of rhythm and flow to my work.

    Gaming: The Virtual Odyssey
    I'm an avid gamer, and gaming is where I turn to when I need a break from the world. It's fascinating to see 
    how intricate designs and complex storylines come together to create immersive experiences. 
    As a developer, I draw inspiration from these virtual worlds, reminding myself of the importance of user experience and engagement.

    Fitness: Balancing the Mind and Body
    Maintaining a balance between the mind and body is crucial. 
    For me, fitness is not just about physical health but mental well-being. Hitting the gym or going for a run 
    clears my mind and prepares me for the challenges ahead. 
    It's during these moments of clarity that some of my best ideas come to life.

    The Journey Ahead
    As I continue on this path, I aim to bring together these diverse elements - 
    the logic of code, the creativity of music, the engagement of gaming, and the discipline of fitness - 
    to create something unique. In this blog, I'll share my experiences, challenges, and learnings in software development and beyond.

    From exploring new programming languages and technologies to delving into web development, UI/UX design, and project management, 
    I'll document it all here. I hope to connect with like-minded individuals, learn from this community, and grow as both a developer and a person.

    So, stay tuned, and let's embark on this journey together!`,
        postDate: new Date("2023-11-08"),
        image: "https://res.cloudinary.com/practicaldev/image/fetch/s--VjOTp9uS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/2o2t0fyzszqheinl9x7a.png",
        categories: [6],
        interests: [1, 2, 4]
    }
]

export const categories = [
    {id: 1, categoryName: "Programming Languages"},
    {id: 2, categoryName: "Web Development"},
    {id: 3, categoryName: "Database Design"},
    {id: 4, categoryName: "Project Management"},
    {id: 5, categoryName: "UI/UX Design"},
    {id: 6, categoryName: "Personal Reflections"}
]

export const interests = [
    {id: 1, name: "Music"},
    {id: 2, name: "Video Games"},
    {id: 3, name: "Gym"}
]

export const projects = [
    {
        id: 1,
        title: "Omni-Arena",
        description: `Omni-Arena is your one stop shop for 
        the greatest fictional battles of all time! Pit some of your
        favorite characters from multiple universes against each other 
        and determine who's finally the strongest amongst them all!`,
        startDate: new Date("2023-07-03"),
        completionDate: new Date("2023-07-12"),
        link: "https://github.com/MichaelJames8847/Omni-Arena-Capstone.git",
        image: "https://i.kym-cdn.com/photos/images/newsfeed/000/993/683/3bc.jpg",
        demo: null,
        skills: [1, 2, 3, 4, 5],
        technologies: [3, 4, 5, 6]
    },
    {
        id: 2,
        title: "DigitalDungeon",
        description: `DigitalDungeon is a platform where gamers can 
        come to find out their gaming adventure! Just register, select your
        prefered genres and preferences, and watch the magic unfurl
        as some of the most popular games in history are recommended for your
        pleasure!`,
        startDate: new Date("2023-10-19"),
        completionDate: new Date("2023-11-1"),
        link: "https://github.com/MichaelJames8847/DigitalDungeon.git",
        image: "https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2021/04/23044226/Gaming-Lounge-1024x554.jpg",
        demo: "https://www.loom.com/embed/8cefd393719347a28ee318e221b7b386?sid=fb253bdd-f47f-4078-8945-9e2ded4870f8",
        skills: [1, 2, 3, 4, 5],
        technologies: [1, 2, 3, 4, 5, 7, 8, 9]
    }
]

export const skills = [
    {id: 1, name: "Test-Driven Development(TDD)"},
    {id: 2, name: "Agile and Scrum Methodologies"},
    {id: 3, name: "Problem-Solving"},
    {id: 4, name: "Critical Thinking"},
    {id: 5, name: "Project Management"},
    {id: 6, name: "Version Control (Git)"}
]

export const technologies = [
    {id: 1, technologyName: "C#"},
    {id: 2, technologyName: "ASP.NET"},
    {id: 3, technologyName: "React.js"},
    {id: 4, technologyName: "Javascript"},
    {id: 5, technologyName: "CSS"},
    {id: 6, technologyName: "HTML"},
    {id: 7, technologyName: "PostgreSQL"},
    {id: 8, technologyName: "EFCore"},
    {id: 9, technologyName: "Reactstrap"}
]
