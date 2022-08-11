import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { SearchScreen } from '../components/search/SearchScreen';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Routes> 
                    <Route exact path="/login" element={ <LoginScreen/> } />

                    <Route path="/" element={ user.logged ? (<DashboardRoutes />):( <Navigate to="/login"/>)}>
                        
                        <Route exact path="/marvel" element={ <MarvelScreen/> } />
                        <Route exact path="/hero/:heroeId" element={ <HeroScreen/> } />
                        <Route exact path="/dc" element={ <DcScreen/> } />
                        <Route exact path="/search" element={ <SearchScreen/> } />

                        <Route path="*" element={ <MarvelScreen/> }/> 
                    </Route> 
                </Routes>
            </div>
        </Router>
    )
}
