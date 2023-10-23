
export default function EachSection({da}){
    return(
        <section className="sub-section">
            <div className={da.id%2===0? "all2 rev":"all2"}>
                <img className="sub-img" src={da.imgs} alt="" />
                <div className="content">
                    <h2 className="title">{da.title}</h2>
                    <p className="desc">{da.desc}</p>
                </div>
            </div>
        </section>
    );
}