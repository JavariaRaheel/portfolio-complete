import Link from "next/link";
export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                
                <li><Link href="/">Home</Link></li>
                

                <li><Link href="/about-us">About Us</Link></li>

                <li><Link href="/contact-us">Contact Us</Link></li>

                <li><Link href="/jobs">Skills</Link></li>                
            </ul>
    </div>
        )
}