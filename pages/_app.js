import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/_authentication.scss';
import '../components/DataCard/_DataCard.scss';
import '../components/Header/_Header.scss';
import '../components/UserCard/_UserCard.scss';
import '../components/Table/_Table.scss';
import '../styles/_dashboard.scss';
import '../components/Sidebar/_Sidebar.scss';
import '../components/AdminCard/_Admin-card.scss';
import '../components/Layout/_Authenticated.scss';
import '../components/Card/_Card.scss';
import '../components/Chart/_BarChart.scss';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
