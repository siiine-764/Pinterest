import React from 'react';
import Pin from '../../components/Pin'
import Navigation from '../../components/Navigation'

function Home(props) {
    const { data } = props;

    // if (data) {
    //     console.log(data); // Log the 'data' value to the console
    //   }
    return (
        <div>
            <Navigation />
            <Pin data={data} />
        </div>
    );
}

export default Home;