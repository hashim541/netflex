import './styleWelcome.css'
import HeroSection from './components/HeroSection';
import data from './dataWelcome'
import EachSection from './components/EachSections';
import questionsData from './questionData'
import EachQuestion from './components/EachQuestion';
import Footer from './components/Footer';
import {Link} from 'react-router-dom'

export default function Welcome(){

    

    return(
        <main>
            <HeroSection  />
            {data.map( da =>(
                <EachSection key={da.id} da={da}/>
            ))}
            <section className='question'>
                <h2 className='title'>Frequently Asked Questions</h2>
                <div className='q-a'>
                {questionsData.map(d => (
                    <EachQuestion key={d.id} d={d}/>
                ))}
                </div>
                <p className='pp'>ready to watch? Enter your email to craete or restart your membership.</p>
                <div className="email">
                    <div className="inputs">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <Link to='/login'><button className='sign-in gs'>Get started &#8594; </button></Link>
                
                </div>
            </section>
            <Footer />
        </main>
    );
}