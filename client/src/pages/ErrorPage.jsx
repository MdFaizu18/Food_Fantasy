import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrapper/ErrorPageWrapper.js'
import img from '../assets/images/Error/error.svg'

function ErrorPage() {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not found" />
                    <h3>Oops! your dish page not found</h3>
                    <p>We can't seem to find the stuffs you are looking for</p>
                    <Link to="/">Back Home</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <div>
                <h3>something went wrong</h3>
            </div>
        </Wrapper>
    );
}
export default ErrorPage;