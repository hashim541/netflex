import Tick from './TickSVG'
import plan from '../dataPlan'
import {Link} from 'react-router-dom'
export default function Login3(){
    const planData=['Watch all you want. ad-free.','Recomendations just for you','Change or cancel your plan at anytime.']

    return(
        <div className="step3-div">
            <div className="form-div3">
                <div className="l2top">
                    <p className="formp">STEP <span className="bold">3</span> OF <span className="bold">3</span></p>
                    <h3 className="ltitle">Choose the plan that's right for you</h3>
                </div>
                <div className="cont">
                    {planData.map(d =>(
                        <Plans key={d} txt={d}/>
                    ))}
                </div>
            </div>
            <div className="plan-cards-div">
                {plan.map( eachPlan => (
                    <Cards key={eachPlan.id} eachData={eachPlan}/>
                ))}
            </div>
            <div className="descr">
                <p className='plan-term'>HD (720p), Full HD(1080p), Ultra HD(4K) and HDR availiability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="">Terms of use</a> for more details.</p>
                <p className='plan-term'>Only people who live with you may use your account. Watch on 4 different devices at the same time with premium, 2 with standard, 1 with basic and mobile.</p>
            </div>
            <Link to='/home' className='ch2'> <button className='sign-in ch'>Choose</button></Link>
            
        </div>
    )
}
function Plans({txt}){
    return(
        <div className="plan">
            <Tick />
            <p className="pl">{txt}</p>
        </div>
    )
}
function Cards({eachData}){
    return(
        <div className="card">
            <div className="plan-flex">
               <input type="radio" name="plan"  className='radio'/> 
               <div className="plan-top">
                    <h4 className='plan-title'>{eachData.title}</h4>
                    <p className='plan-price'><span className='price-span'>&#8377;{eachData.price} /mon</span>  &#8377;0</p>
               </div>
            </div>
            <ul>
                {eachData.planOffer.map(offer =>(
                    
                    <EachOffer key={offer} offer={offer}/>
                ))}
            </ul>
        </div>
    )
}
function EachOffer({offer}){
    return <li className='plan-offer'>{offer}</li>
}