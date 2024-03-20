import React, { useEffect, useState } from 'react'
import './style.css';
import Searchresult from './Searchresult';
import axios from 'axios';

const BASE_ZONE = "http://localhost:8000/food";

const Appzone = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filterdata, setFilterData] = useState(null);
    const [selectedbtn, setSelectedbtn] = useState("all");


    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const response = await axios.get(`${BASE_ZONE}`);
                console.log(response);
                setData(response.data);
                setFilterData(response.data);
            } catch (error) {
                setError("Unable to fatch data");
            }
        };
        fetchRecord();
    }, []);

    const searchFood = (e) => {
        const searchvalue = e.target.value.toLowerCase();
        console.log(searchvalue);
        if (searchvalue === "") {
            setFilterData(data);
        } else {
            const filter = data.filter((val) =>
                val.name.toLowerCase().includes(searchvalue)
            );
            setFilterData(filter);
        }
    }

    const filterfood = (type) => {
        if (type === "all") {
            setFilterData(data);
            setSelectedbtn("all");
            return;
        }
    
        const filter = data.filter((val) =>
            val.type.toLowerCase().includes(type)
        );
        setFilterData(filter);
        setSelectedbtn(type);
    }
    

    return (
        <div className='food'>
            <div className='container'>
                <div className='topcontainer '>
                    <div className='d-flex justify-content-between  align-items-center'>
                        <div className='logo'>
                            <img src='/logo.png' alt='logo'></img>
                        </div>
                        <div className='search'>
                            <input type='text' placeholder='search food...' onChange={searchFood} />
                        </div>
                    </div>
                </div>
                <div className='filtercontainer d-flex justify-content-center'>
                    <button onClick={ ()=> filterfood("all")}>All</button>
                    <button onClick={()=> filterfood("breakfast")}>Breakfast</button>
                    <button onClick={()=> filterfood("lunch")}>Lunch</button>
                    <button onClick={()=> filterfood("dinner")}>Dinner</button>
                </div>
            </div>
            <Searchresult data={filterdata} />
        </div>
    )
}

export default Appzone;

