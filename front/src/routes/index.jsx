import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

//Pages
import Accueil from '../pages/Accueil'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Error from '../pages/Error'

//Components
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Transactions from '../pages/Transactions'

//Redux
import { Provider } from 'react-redux'
import { store } from '../redux'

function RoutesPath() {

  return (
    <Provider store={store}>
    <Router>
      <div id='body'>
      <Banner />
        <Switch>
          <Route exact path="/" element={<Accueil />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/transactions/:typeTransaction" element={<Transactions />}></Route>
        </Switch>
      <Footer />
      </div>
    </Router>
    </Provider>
  )
}

export default RoutesPath