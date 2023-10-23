export default function Footer(){
    return(
        <footer className="lfooter">
                <div className="all3">
                    <p className='opac2'>Questions ? call 111-111-111-1111</p>
                    <div className="foot">
                        <ul>
                            <li className="opac2">FAQ</li>
                            <li className="opac2">Privacy</li>
                        </ul>

                        <ul>
                            <li className="opac2">Help Center</li>
                            <li className="opac2">Cookie Preferences</li>
                        </ul>

                        <ul>
                            <li className="opac2">Netflex Shop</li>
                            <li className="opac2">Corporate Information</li>
                        </ul>

                        <ul>
                            <li className="opac2">Term of use</li>
                        </ul>

                    </div>
                    <div className="lang lang2" style={{
                        border:'2px solid #a0a2a6'
                    }}>
                            <p style={{color:'#a0a2a6'}}>🌍&nbsp;&nbsp;English&nbsp;&nbsp;<span>&#9660;</span></p>
                        </div>
                    <p className='opac2'>Netflex India</p>
                </div>
            </footer>
    )
}