export default function Login1({setLoginState}){
    return(
        <div className="form-div">
            <p className="form-p">STEP <span className="bold">1</span> OF <span className="bold">3</span></p>
            <h3 className="ltitle">Welcome back! <br />Joining Netflex is easy.</h3>
            <p className="from-p">Enter your Email and Password</p>
            <form action="">
                <div className="input-div">
                    <label htmlFor="em">Email Address</label>
                    <input type="email" name="email" id="em" placeholder="abc@gmail.com"/>
                </div>
                <div className="input-div">
                    <label htmlFor="pa">Password</label>
                    <input type="password" name="password" id="pa" />
                </div>
                <a href="/login" className="a">Forgot your password?</a>
                <button className="sign-in next" onClick={()=>setLoginState(2)}>Next</button>
            </form>
        </div>
    )
}