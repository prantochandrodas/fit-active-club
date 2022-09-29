import React from 'react';

const Quecation = () => {
    return (
        <div>   
            <div>
                <h3>1.How Does React Work ?</h3>
                <p>Ans:- ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

            </div>
            <div>
                <h3>2. Difference Between props and state.</h3>
                <p>
                    Ans:- <br /><br /> Props: <br />
                    a.The Data is passed from one component to another. <br />
                    b.It is Immutable 'cannot be modified'. <br />
                    c.Props can be used with state and functional components. <br /><br />
                    State: <br />
                    a.The Data is passed within the component only. <br />
                    b.It is Mutable 'can be modified'. <br />
                    c.State can be used only with the state components/class component 'Before 16.0'.

                         </p>
            </div>
            <div>
                <h3>3.Benefits of useEffect in react.</h3>
                <p>Ans:-Using useEffect is probably the best part of React Hooks. It helps reduce the clutter of the component lifecycle methods and, most importantly, it helps separate different logic that can appear in the lifecycle methods.</p>
            </div>
        </div>
    );
};

export default Quecation;   