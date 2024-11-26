import React, { useState } from 'react'

function DisplayItems() {

    // State to track the input field value
    const [inputValue, setInputValue] = useState("");

    // State to track the list of items
    const [items, setItems] = useState([]);

 

    return (
        <>

            <div>

                <input
                    type="text"
                    placeholder="Type an item"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => {
                    if (inputValue.trim() !== "") {
                        setItems([...items, inputValue])
                        setInputValue('')
                    }
                }}>ADD</button>

                <div>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}


                                <button
                                    onClick={() => {
                                        const updatedItems = items.filter((_, i) => i !== index);
                                        setItems(updatedItems);
                                    }}
                                >
                                    Remove
                                </button>

                            </li>
                        ))}
                    </ul>
                </div>


            </div>

        </>
    )
}

export default DisplayItems