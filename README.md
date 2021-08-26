# Ahmed Faraz's notes on concepts of React Router @6.0.0-beta.2 version

This project is to learn and implement core concepts of react-router@6 beta version which is going to include next version of react-router@5 and @reach/router

# Install (history) and (react-router-dom@6 beta) using

npm i history@5 react-router-dom@6.0.0-beta.2

# This is App Component

import { [**Importing necessary elements for routing from react-router-dom**]
BrowserRouter as Router [**Main parent element to apply routing in all the child available**],
Routes [**All Route elements will be defined in Routes component**],
Route [**Each route will be defined in Route element along with react component**],
Link [**Link element to redirect to any other link or change pages | WITHOUT ACTIVE CLASS PROPERTY**],
NavLink [**NavLink element is same as Link element but | **WITH** ACTIVE CLASS PROPERTY**]
}

### App (

### {Router}

#### {Routes}

##### {Route path="/" element={{Home/}} /}

##### {Route path="about" element={{About/}} /}

##### {Route path="products" element={{Products /}} }

###### {Route path="/" element={{ProductIndex/}} /} [renders at /products | will also come with {Outlet/} inside Products comp]

###### {Route path=":productID" element={{ProductDetails/}} /} [renders at /products/[id] | will also come with {Outlet/} inside Products comp]

##### {/Route}

#### {/Routes}

### {/Router}

### )

# Hooks related to router

useParams(); [**Get parameters from url inside the component**]
useNavigate(); [**Redirect to any url programmatically**]
useLocation(); [**Get the current location of url | Uses only inside context of Router elemet**]
useResolvedPath(); [**Get the resolved informantion in form of OBJECT from input url by like {pathname: "/about", search: "", hash: ""} | Uses only inside context of Router elemet**]
useMatch(); [**It returns OBJECT {path: "products", pathname: "/products", params: {…}} if given URL matches with page url else it returns NULL**]

[Also refer: Getting started with React Router v6](https://github.com/remix-run/react-router/blob/dev/docs/installation/getting-started.md)
