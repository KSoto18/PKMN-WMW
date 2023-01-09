// Styling
import './styles.css';


// Icons
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
    return (

        <div className='contactBox'>

            <h1 className= 'title'>CONTACT ME</h1>
            <p><a href='https://github.com/KSoto18'><GitHubIcon /> GITHUB</a></p>
            <p><a href='mailto:dev.ksoto@gmail.com'><EmailIcon />  EMAIL</a></p>
            
        </div>

    )
}