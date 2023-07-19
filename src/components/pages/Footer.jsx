import { SocialIcon } from 'react-social-icons'
const Footer = () => {

    const socialMediaHandlesLinks = {
        gitHub: 'https://github.com/',
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/'
    }

    return (
        <div>
            <div className="social-menu">
                <ul className="social-handle-list">
                    <li className="social-handle-item">
                        <SocialIcon url={socialMediaHandlesLinks.gitHub}/>
                    </li>

                    <li className="social-handle-item">
                        <SocialIcon url={socialMediaHandlesLinks.linkedin}/>
                    </li>

                    <li className="social-handle-item">
                        <SocialIcon url={socialMediaHandlesLinks.instagram}/>
                    </li>

                    <li className="social-handle-item">
                        <SocialIcon url={socialMediaHandlesLinks.twitter}/>
                    </li>
                </ul>
            </div>
            <p>&copy; 2023 Cosmetics Store. All rights reserved</p>
        </div>
    );
}

export default Footer;