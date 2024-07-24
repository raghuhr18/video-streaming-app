import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from './store';
import {Provider} from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage';
import VideoContainer from './components/VideoContainer';

const appRouter = createBrowserRouter([
  {path: "/",
   element: <Body />,
   children: [
    {
      path: "/",
      element: <VideoContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    },
   ],
  },
])

function App() {
  return (
    <div className="App">
      <Provider store= {store}>
          <Head />
          <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}
export default App;
