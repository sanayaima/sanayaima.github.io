import React from 'react'
function Research() {

    const publications = [
        {
            title: "Causality assessment for IIoT sensing system and Digital Twin",
            authors: "Singh, R.K.S., Suryadevara, N.K.",
            journal: "Fifteenth International Conference on Sensing Technology (ICST)",
            year: "2023",
            link: ""
        },
        {
            title: "Diversity of SARS-CoV-2 isolates driven by pressure and health index",
            authors: "RKS Singh, MZ Malik, RKB Singh",
            journal: "Epidemiology & Infection",
            year: "2021",
            link: ""
        },
        {
            title: "Complexity in SARS-CoV-2 genome data: Price theory of mutant isolates",
            authors: "S Mandal, RKS Singh, SK Sharma, MZ Malik, RKB Singh",
            journal: "BioRxiv",
            year: "2020",
            link: ""
        }
    ]
    return <>
        <h2>Research Interest</h2>
        <li>Machine Learning</li><li>Data Science</li><li>Internet of Things</li><li>Artificial Intelligence</li><li>System Design</li><li>Software Engineering</li>
        <h2>List of Publications</h2>
        
        {publications.map(pub => <div><h4>{pub.title}</h4> <em>{pub.authors}</em><br/>{pub.journal}<br/>{pub.year}</div>)}
        
        
    </>
};

export default Research;