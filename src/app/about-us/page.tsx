import Header from "@/components/header";

export default function About() {
    return(
        <div>
            <Header/>
            <div className="about-container">
        
        <section className="personal-details">
            <h2 className="section-title">Personal Details</h2>
            <div className="content">
                <p><strong>Name:</strong> Javaria Raheel</p>
                <p><strong>Profession:</strong> MERN Stack Developer</p>
                <p><strong>Location:</strong> Karachi, Pakistan</p>
                <p><strong>Languages:</strong> English, Urdu</p>
            </div>
        </section>

        <section className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="content">
                <p><strong>Job Title:</strong> AI Engineer Student</p>
                <p><strong>Institute:</strong> Governor Institute of AI, Web 3 and Metaverse </p>
                <p><strong>Years of Experience:</strong> 6 months - current</p>
                <ul className="experience-list">
                    <li>Developed and maintained web applications using Next.js, Python and Typescript </li>
                    <li>Worked with AI for efficient creativity management</li>
                    <li>Collaborated with UI/UX designers to create responsive user interfaces.</li>
                </ul>
            </div>
        </section>

        <section className="education">
            <h2 className="section-title">Education</h2>
            <div className="content">
                <p><strong>Degree:</strong> Bachelor In Commerce</p>
                <p><strong>University:</strong> Karachi University</p>
                <p><strong>Year of Graduation:</strong> 1995</p>
            </div>
        </section>
    </div>
        </div>
    );
}