// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // src/index.js
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // // Simple Error Boundary to catch render-time crashes
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false, error: null };
// //   }

// //   static getDerivedStateFromError(error) {
// //     return { hasError: true, error };
// //   }

// //   render() {
// //     if (this.state.hasError) {
// //       return (
// //         <div style={{ padding: '2rem', textAlign: 'center' }}>
// //           <h1>Oops—something broke.</h1>
// //           <pre>{this.state.error?.toString()}</pre>
// //         </div>
// //       );
// //     }
// //     return this.props.children;
// //   }
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <ErrorBoundary>
// //       <App />
// //     </ErrorBoundary>
// //   </React.StrictMode>
// // );

// // reportWebVitals();

// // // // // // // src/index.js
// // // // // // import React from 'react';
// // // // // // import ReactDOM from 'react-dom/client';
// // // // // // import App from './App';
// // // // // // import reportWebVitals from './reportWebVitals';

// // // // // // // Error Boundary to catch and display rendering errors
// // // // // // class ErrorBoundary extends React.Component {
// // // // // //   constructor(props) {
// // // // // //     super(props);
// // // // // //     this.state = { hasError: false, error: null };
// // // // // //   }

// // // // // //   static getDerivedStateFromError(error) {
// // // // // //     return { hasError: true, error };
// // // // // //   }

// // // // // //   render() {
// // // // // //     if (this.state.hasError) {
// // // // // //       return (
// // // // // //         <div style={{ padding: '2rem', textAlign: 'center' }}>
// // // // // //           <h1>Oops! An error occurred.</h1>
// // // // // //           <pre>{this.state.error?.toString()}</pre>
// // // // // //         </div>
// // // // // //       );
// // // // // //     }
// // // // // //     return this.props.children;
// // // // // //   }
// // // // // // }

// // // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // // root.render(
// // // // // //   <React.StrictMode>
// // // // // //     <ErrorBoundary>
// // // // // //       <App />
// // // // // //     </ErrorBoundary>
// // // // // //   </React.StrictMode>
// // // // // // );

// // // // // // reportWebVitals();
// // // // // // src/index.js
// // // // // import React from 'react';
// // // // // import ReactDOM from 'react-dom/client';
// // // // // import App from './App';
// // // // // import reportWebVitals from './reportWebVitals';

// // // // // // Global Error Boundary
// // // // // class ErrorBoundary extends React.Component {
// // // // //   constructor(props) {
// // // // //     super(props);
// // // // //     this.state = { hasError: false, error: null };
// // // // //   }

// // // // //   static getDerivedStateFromError(error) {
// // // // //     return { hasError: true, error };
// // // // //   }

// // // // //   render() {
// // // // //     if (this.state.hasError) {
// // // // //       return (
// // // // //         <div style={{ textAlign: 'center', padding: '2rem' }}>
// // // // //           <h1>Oops! An error occurred.</h1>
// // // // //           <pre>{this.state.error?.toString()}</pre>
// // // // //         </div>
// // // // //       );
// // // // //     }
// // // // //     return this.props.children;
// // // // //   }
// // // // // }

// // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // root.render(
// // // // //   <React.StrictMode>
// // // // //     <ErrorBoundary>
// // // // //       <App />
// // // // //     </ErrorBoundary>
// // // // //   </React.StrictMode>
// // // // // );

// // // // // reportWebVitals();


// // // // // src/index.js
// // // // import React from 'react';
// // // // import ReactDOM from 'react-dom/client';
// // // // import { BrowserRouter } from 'react-router-dom';
// // // // import App from './App';
// // // // import reportWebVitals from './reportWebVitals';

// // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // root.render(
// // // //   <BrowserRouter>
// // // //     <React.StrictMode>
// // // //       <App />
// // // //     </React.StrictMode>
// // // //   </BrowserRouter>
// // // // );

// // // // reportWebVitals();

// // // // / src/index.js
// // // import React from 'react';
// // // import ReactDOM from 'react-dom/client';
// // // import { BrowserRouter } from 'react-router-dom';
// // // import App from './App';
// // // import reportWebVitals from './reportWebVitals';

// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(
// // //   <BrowserRouter>
// // //     <React.StrictMode>
// // //       <App />
// // //     </React.StrictMode>
// // //   </BrowserRouter>
// // // );

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <App />
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );

// // reportWebVitals();


// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <App />
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );

// // reportWebVitals();


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Ensure root element exists before rendering
if (!rootElement) {
  throw new Error("Root element with id 'root' not found. Check public/index.html");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance logging
reportWebVitals();
