import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import backimg from '../../../assets/images/asset/background.jpg'


export default function HeroSection(){
    return (
        <section className="hero-section" style={{backgroundImage:`url(${backimg})`}}>
        <div className="layer"></div>
            <div className="all">
                <Navbar/>
                
                <h1>The biggest Indian hits. Ready to watch here from &#8377; 0.</h1>
                <p >Join today. Cancel anytime.</p>
                <p >ready to watch? Enter your email to craete or restart your membership.</p>
                <div className="email">
                    <div className="inputs">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <Link to='/login'><button className='sign-in gs'>Get started &#8594; </button></Link>
                    
                </div>
            </div>
        </section>
    )
}