import React from 'react';


const Home = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <div class="btn-group-vertical mt-4">
                        <button className='my-2 btn btn-outline-secondary'>General Note</button>
                        <button className='my-2 btn btn-outline-secondary'>Health and Treatment</button>
                        <button className='my-2 btn btn-outline-secondary'> Learning</button>
                        <button className='my-2 btn btn-outline-secondary'>Real Life Experience</button>
                    </div>
                </div>

                <div class="col-lg-8 col-sm-12">
                    Column
                </div>

            </div>
        </div>

    );
};

export default Home;