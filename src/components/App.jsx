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
          element={<PrivateRoute redirectTo="/" component={<Home />} />}
        />
        <Route
          path="/phonebook"
          element={<PrivateRoute redirectTo="/" component={<Phonebook />} />}
        />
        <Route
          path="/phonebook/:id"
          element={<PrivateRoute redirectTo="/" component={<ContactInfo />} />}
        />
        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="/" component={<AddNewContact />} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute redirectTo="/" component={<EditNewContact />} />
          }
        />
        <Route
          path="/youtube"
          element={<PrivateRoute redirectTo="/" component={<Youtube />} />}
        />
        <Route
          path="/filmoteka"
          element={<PrivateRoute redirectTo="/" component={<Filmoteka />} />}
        />
        <Route
          path="/camera"
          element={<PrivateRoute redirectTo="/" component={<Camera />} />}
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/home" component={<SignIn />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/home" component={<SignUp />} />
          }
        />
      </Route>
    </Routes>
  );
}
