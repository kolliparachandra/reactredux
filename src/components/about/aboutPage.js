import React from 'react';
import {Link} from 'react-router-dom';
export default class AboutPage extends React.Component{
 render(){
        return(
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following Technologies
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Babel</li>
                    <li>Babelify</li>
                    <li>Bootstrap</li>
                    </p>
                </div>
        )
    }
}
