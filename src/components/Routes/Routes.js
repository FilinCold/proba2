import React from 'react';
import User from "../Users/User";
import Posts from "../Posts/Posts";
import MyArticles from "../MyArticles/MyArticles";
import AddArticles from "../AddArticles/AddArticles";
import Profile from "../Profile/Profile";
import {Route, Switch} from "react-router/modules";


const routes = [
  {
    path: '/',
    component: User,
    routes: [
      {
        path: '/allarticles',
        component: Posts
      },
      {
        path: '/myarticles',
        component: MyArticles
      },
      {
        path: '/addarticles',
        component: AddArticles
      },
      {
        path: '/profile',
        component: Profile
      }
    ]
  },
  {
    path: '/',
    component: Posts
  },
]

const RouteConfigExample = () => {
  return (
    <div>
      <Switch>
        {
          routes.map((route,i) => {
           return <RouteWithSubRoutes key={i} {...route}/>
          })
        }
      </Switch>
    </div>
  )
}

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => {
       return <route.component {...props} routes={route.routes}/>
      }}
    />
  )
}

export default RouteConfigExample;