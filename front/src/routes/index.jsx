import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

//Pages
import Accueil from '../pages/Accueil'
import SignIn from '../pages/SignIn'
import User from '../pages/User'
import Error from '../pages/Error'

//Components
import Banner from '../components/Banner'
import Footer from '../components/Footer'


function RoutesPath() {
  return (
    <Router>
      <body>
      <Banner />
        <Switch>
          <Route exact path="/" element={<Accueil />}></Route>
          <Route exact path="/login" element={<SignIn />}></Route>
          <Route exact path="/profile" element={<User />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Switch>
      <Footer />
      </body>
    </Router>
  )
}

export default RoutesPath