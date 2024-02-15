import React from 'react';
import Pin from '../../components/Pin'
import Navigation from '../../components/Navigation'

function Home(props) {
    const { data } = props;

    return (
        <div>
            <Navigation />
            <Pin data={data} />
        </div>
    );
}

export default Home;