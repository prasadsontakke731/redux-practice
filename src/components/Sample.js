import React, { useEffect, useState } from 'react'

const Sample = () => {
    const [data, setData] = useState([])


    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(result => setData(result))
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(data.title);
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <ul key={item.id}>
                            <li>{item.title}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Sample