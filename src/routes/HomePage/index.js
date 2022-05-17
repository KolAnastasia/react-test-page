import cn from 'classnames';
import Header from '../../components/Header';
import { Route, RouteMatch, Link, Switch, Router, Routes } from 'react-router-dom';
const Homepage = () => {
    return (
        <>
            <Header
                title = "Домашняя страница">
            </Header>
          <div className='content'> 
            <div className='btn-wrapper'> 
                <Link to="/TimePage">Посмотреть время</Link>
                <Link to="/WeatherPage">Посмотреть погоду</Link>
            </div>
          </div>
        </>
    )
}

export default Homepage;

