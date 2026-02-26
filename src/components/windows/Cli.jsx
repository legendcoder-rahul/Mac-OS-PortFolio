import React from 'react'
import Terminal from 'react-console-emulator'
import "./cli.scss"
import MacWindows from './MacWindows'

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Senior Developer @ Tech Corp (2022 - Present)
  - Led development of 5+ React applications
  - Mentored junior developers

Full Stack Developer @ Web Solutions (2020 - 2022)
  - Built scalable APIs with Node.js
  - Designed responsive UIs with React`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: rahul251035@gmail.com
Phone: +91 9354814477
Location: New Delhi ,India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: @rahul
LinkedIn: /in/rahulkumar
Portfolio: rahul.dev`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindows windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'rahul:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindows>
    )
}

export default Cli