import React from 'react'
const Teaching = () => {
    const teaching_data = {
        2022: [
            "Internet of Things, (MCA, IMTech, MTech), winter semester, 2022.",
            "Research Methodology for Computer Science, (IMTech), monsoon semester, 2022.",
            "Internet Technologies Lab, MCA, monsoon semester, 2022."
        ],
        2023: [
            "Deep Learning, (IMTech, MTech, PhD), monsoon semester, 2023.",
            "Operating Systems, (IMTech), winter semester, 2023."
        ]
    }

    return <>
        <h2>Teaching Assistant:</h2>
        2022
        <ul>
            {teaching_data[2022].map(text =>
                <li>
                    {text}
                </li>
            )}
        </ul>
        2023
        <ul>
            {teaching_data[2023].map(text =>
                <li>
                    {text}
                </li>
            )}
        </ul>
    </>
};

export default Teaching;