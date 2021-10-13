import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  console.log(props.isLoggedIn);
  return (
        <Route>
            {() => (props.isLoggedIn ? <Component{...props}/> : <Redirect to="/sign-in"/>)
            }
        </Route>
  );
}

export default ProtectedRoute;
