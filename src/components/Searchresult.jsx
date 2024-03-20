import React from 'react'
import "./style.css";
const Searchresult = ({ data }) => {
    return (
        <div>
            <div className='foodcardcontainer'>
                <div className='foodcard d-flex justify-content-center'>
                    {data?.map((val) => (
                        <div className='col-4 ps-5 pt-5 pe-5 '>
                            <div className=" card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4 pt-3 pb-1">
                                        <img src={val.image} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title">{val.name}</h3>
                                            <p className="card-text">{val.text}</p>
                                            <button>${val.price.toFixed(2)}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Searchresult
