import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Places from './Places/Places';
import styles from '../../css/Router.module.css';
function Router() {
    return (
        <div>
                <BrowserRouter>
                    <div className={styles.header}>
                        <ul className={styles.ul}>
                            <li>
                                <Link to="/"className={`${styles.ul} ${styles.border}`}>Bangalore</Link>
                            </li>
                            <li>
                                <Link to="/Mumbai"className={`${styles.ul} ${styles.border}`}>Mumbai</Link>
                            </li>
                            <li>
                                <Link to="/Delhi"className={`${styles.ul} ${styles.border}`}>Delhi</Link>
                            </li><li>
                                <Link to="/Jaipur"className={`${styles.ul} ${styles.border}`}>Jaipur</Link>
                            </li>
                            <li>
                                <Link to="/Pune"className={`${styles.ul} ${styles.border}`}>Pune</Link>
                            </li>
                            <li>
                                <Link to="/Chandigarh"className={`${styles.ul} ${styles.border}`}>Chandigarh</Link>
                            </li>
                            <li>
                                <Link to="/Chennai"className={`${styles.ul} ${styles.border}`}>Chennai</Link>
                            </li>
                        </ul>
                    <Routes>
                            <Route exact path='/' element={< Places k= "0" value="Bangalore" />}></Route>
                            <Route exact path='/Mumbai' element={< Places k="1" value="Mumbai"/>}></Route>
                            <Route exact path='/Delhi' element={< Places k="2" value="Delhi" />}></Route>
                            <Route exact path='/Jaipur' element={< Places k="3" value="Jaipur"/>}></Route>
                            <Route exact path='/Pune' element={< Places k="4" value="Pune" />}></Route>
                            <Route exact path='/Chandigarh' element={< Places k="5" value="Chandigarh"/>}></Route>
                            <Route exact path='/Chennai' element={< Places k="6" value="Chennai" />}></Route>
                    </Routes>
                    </div>
                </BrowserRouter>
        </div>
    )
}

export default  Router;