import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./quotes.css";

export const Quotes = () => {

    const [advice, getOneAdvice] = useState('');

    const url = "https://api.adviceslip.com/advice";

    const getAdvice = () => {
        Axios.get(url)
        .then((res) => {
            const advice = res.data.slip.advice;
            console.log(advice);
            getOneAdvice(advice);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAdvice();
    }, []);

    const { isLoading, refetch } = useQuery(["advice"], () => {
        return Axios.get(url).then((res) => {
            getOneAdvice(res.data.slip.advice);
        });
    });
    
    
    if (isLoading) {
        return (
            <div className="outer">
                <div className="advice">
                    <p>Loading...</p>
                </div>
                <button onClick={refetch}>Next Quote</button>
            </div>
        );
    }

    return (
        <div className="outer">
            <div className="advice">
                <p>&quot; { advice } &quot;</p>
            </div>
        
            <button onClick={refetch}>Next Quote</button>
        </div>
    );
}