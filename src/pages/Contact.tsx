import React from 'react'
function Contact() {
    return <address className='contact-address'>
        <br/>
            <table className='contact-table'>
                <tbody>
                    <tr>
                        <td>
                            <p className='name'>RK Sanayaima Singh</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='meitei-mayek-name'>ꯁꯅꯥꯌꯥꯢꯃ ꯅꯤꯡꯊꯦꯝꯆꯥ</p>
                        </td>
                    </tr>

                    <tr>
                        <td><p className='designation'>RESEARCH SCHOLAR</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='department'>SCHOOL OF COMPUTER AND INFORMATION SCIENCES</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='university'><a
                                href="https://uohyd.ac.in/" 
                                target="_blank">UNIVERSITY OF HYDERABAD</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='address-line'>Gachibowli, Hyderabad - 500046, Telangana, India</p>
                        </td>
                    </tr>
                </tbody>
            </table>
    </address>
};

export default Contact;