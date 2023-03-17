import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/operations';
import SharedLayout from './sharedLayout/sharedLayout';
import PrivateRoute from './redirect/privateRoutes';
import RestrictedRoute from './redirect/restrictedRoutes';

const ScreenLock = lazy(() => import('../pages/screenLock/screenLock'));
const Home = lazy(() => import('../pages/home/home'));
const Phonebook = lazy(() => import('../pages/phoneBook/phooneBook'));
const ContactInfo = lazy(() => import('../pages/contactInfo/contactInfo'));
const EditNewContact = lazy(() => import('../pages/editContact/editContact'));
const Youtube = lazy(() => import('../pages/youtube/youtube'));
const Filmoteka = lazy(() => import('../pages/filmoteka/filmoteka'));
const Camera = lazy(() => import('../pages/camera/camera'));
const SignIn = lazy(() => import('../pages/signIn/signIn'));
const SignUp = lazy(() => import('../pages/signUp/signUp'));
const AddNewContact = lazy(() =>
  import('../pages/addNewContact/addNewContact')
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<ScreenLock />} />
        <Route
          path="/home"
          element={<PrivateRoute component={Home} redirectTo="/" />}
        />
        <Route
          path="/phonebook"
          element={<PrivateRoute component={Phonebook} redirectTo="/" />}
        />
        <Route
          path="/phonebook/:id"
          element={<PrivateRoute component={ContactInfo} redirectTo="/" />}
        />
        <Route
          path="/add"
          element={<PrivateRoute component={AddNewContact} redirectTo="/" />}
        />

        <Route
          path="/edit/:id"
          element={<PrivateRoute component={EditNewContact} redirectTo="/" />}
        />
        <Route
          path="/youtube"
          element={<PrivateRoute component={Youtube} redirectTo="/" />}
        />
        <Route path="/filmoteka" element={<Filmoteka />} />
        <Route path="/camera" element={<Camera />} />
        {/* <Route
          path="/google"
          element={<PrivateRoute component={Google} redirectTo="/" />}
        /> */}
        <Route
          path="/signin"
          element={<RestrictedRoute component={SignIn} redirectTo="/home" />}
        />
        <Route
          path="/signup"
          element={<RestrictedRoute component={SignUp} redirectTo="/home" />}
        />
      </Route>
    </Routes>
  );
}
