import React from 'react';

const DisplayBar = () => {

    return (
        <div className="ui stackable centered grid displayBarContainer">
            <div className="three column centerd row">
                <div className="column item">
                    <h1><i class="wheelchair icon large" /></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Iste perspiciatis laboriosam fugit fugiat rem inventore 
                        ea voluptatibus cum, quae deleniti!</p>
                </div>
                <div className="column item">
                    <h1><i class="hand peace icon large" /></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem laudantium repellendus, 
                        ipsam veritatis animi iusto, laboriosam numquam distinctio culpa 
                        ex alias unde recusandae. Nisi.</p>
                </div>
                <div className="column item">
                    <h1><i class="shield alternate icon large" /></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque ut delectus saepe cupiditate odit quae iure aliquam
                        deleniti reiciendis at.</p>
                </div>
            </div>
        </div>
    );
}

export default DisplayBar;