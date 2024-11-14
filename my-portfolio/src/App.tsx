import './App.css';
import About from './components/about/About';
import Header from "./components/header/Header";
import Projects from './components/projects/Projects';
import Skills from "./components/skills/skills.tsx";
import Experience from "./components/experience/experience.tsx";
import Education from "./components/education/education.tsx";
import Contact from "./components/contact/contact.tsx"; // Import component Projects

/**
 * Renders the main application component.
 *
 * @returns A JSX element containing the main layout of the application.
 */
function App() {
    return (
        <div className="h-screen bg-gradient-to-r from-purple-600 to-blue-600">
            <Header/>
            <About/>
            <Projects/> {/* Thêm component Projects */}
            <Skills/> {/* Thêm component Skills */}
            <Experience/> {/* Thêm component Experience */}
            <Education/> {/* Thêm component Education */}
            <Contact/> {/* Thêm component Contact */}
        </div>
    );
}

export default App;