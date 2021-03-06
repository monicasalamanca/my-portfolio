import Page from '../../components/Page';
import HomeComponent from '../../components/HomeComponent';
import withLocale from '../../hocs/withLocale';

const Home = (props) => {

  return (
    <div id="App">
      <Page titleKey="homePageTitle">
        <HomeComponent />
      </Page>
    </div>
  )
}

export default withLocale(Home);