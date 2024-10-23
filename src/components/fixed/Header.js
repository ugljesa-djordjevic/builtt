import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header({ numOfProducts }) {
    let cart = JSON.parse(localStorage.getItem('cart-content'));
    return (
        <header className="top_header">
            <Link to="/">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="116" height="51" viewBox="0 0 116 51" fill="none"><g clipPath="url(#a)"><path fill="#012734" d="M52.403 10.16h5.349v27.835h-5.35v-3.493h-.108c-1.474 2.128-4.366 4.256-9.17 4.256-5.13 0-9.279-2.948-9.279-9.333V10.16h5.35v17.792c0 3.766 1.637 6.276 5.676 6.276 4.584 0 7.532-2.784 7.532-6.986V10.158v.001Zm11.352 27.833V10.157h5.35v27.836h-5.35ZM69.08.775v5.3h-5.3v-5.3h5.3Zm6.027 37.218V.586h5.349v37.407h-5.35Zm23.906-4.311v4.311c-1.365.273-2.237.328-3.384.328-4.586 0-7.368-1.747-7.368-8.187V14.58h-4.04v-4.42h4.04V.601h5.349v9.558h5.349v4.42h-5.35v15.719c0 2.948.819 3.602 3.112 3.602.927 0 1.365-.054 2.292-.218Zm16.973 0v4.311c-1.365.273-2.238.328-3.385.328-4.584 0-7.368-1.747-7.368-8.187V14.58h-4.039v-4.42h4.039V.601h5.349v9.558h5.349v4.42h-5.349v15.719c0 2.948.82 3.602 3.112 3.602.927 0 1.365-.054 2.292-.218ZM3.506 4.395v.311h.438v-.31h-.438Zm20.416 15.976v-.095c2.85-.965 5.36-2.945 5.36-7.194 0-5.5-4.153-8.687-11.247-8.687H8.814v4.586h9.462c3.619 0 5.453 1.834 5.453 4.875 0 3.04-1.495 4.874-5.84 4.874H8.816V8.98h-5.31v25.343h5.31V22.931H19.24c3.62 0 5.841 2.077 5.841 5.696 0 3.234-1.449 5.696-6.565 5.696H8.814v4.586h10.088c7.144 0 11.73-3.475 11.73-10.088 0-5.166-3.09-7.818-6.711-8.448l.001-.002Z"></path><path fill="#86969C" d="M.785.484h5.299v5.3h-5.3v-5.3Z"></path><path fill="#7B868A" d="M16.463 43.75c1.3 0 2.29 1.02 2.29 2.7 0 1.68-.99 2.69-2.29 2.69-.8 0-1.29-.36-1.57-.77h-.02v2.4h-.98V43.9h.98v.6h.02c.28-.36.77-.75 1.57-.75Zm-.16 4.58c.96 0 1.42-.88 1.42-1.88 0-1-.46-1.88-1.42-1.88-.88 0-1.42.72-1.42 1.88 0 1.15.54 1.88 1.42 1.88Zm5.773.82c-1.59 0-2.55-1.1-2.55-2.7 0-1.59.96-2.71 2.56-2.71 1.58 0 2.54 1.11 2.54 2.7 0 1.6-.96 2.71-2.55 2.71Zm.01-.81c1.04 0 1.52-.83 1.52-1.89 0-1.07-.48-1.89-1.52-1.89-1.06 0-1.54.82-1.54 1.89 0 1.06.48 1.89 1.54 1.89Zm5.577.66h-1.01l-1.58-5.1h1.06l1.08 3.95h.02l1.06-3.95h.99l1.06 3.95h.02l1.09-3.95h1.02l-1.58 5.1h-1.01l-1.1-3.93h-.02l-1.1 3.93Zm10.201-2.66c0 .14 0 .29-.01.37h-3.92c.02.85.52 1.64 1.53 1.64.9 0 1.25-.58 1.34-.92h1c-.27.98-1.02 1.72-2.36 1.72-1.62 0-2.52-1.15-2.52-2.71 0-1.6.96-2.7 2.52-2.7 1.55 0 2.42 1.02 2.42 2.6Zm-3.93-.4h2.91c0-.8-.56-1.4-1.43-1.4-.82 0-1.42.56-1.48 1.4Zm7.328-2.16c.18 0 .32.01.47.03v.94c-.12-.02-.21-.03-.33-.03-.89 0-1.53.67-1.53 1.64V49h-.98v-5.1h.98v.97h.02c.27-.64.68-1.09 1.37-1.09Zm5.771 2.56c0 .14 0 .29-.01.37h-3.92c.02.85.52 1.64 1.53 1.64.9 0 1.25-.58 1.34-.92h1c-.27.98-1.02 1.72-2.36 1.72-1.62 0-2.52-1.15-2.52-2.71 0-1.6.96-2.7 2.52-2.7 1.55 0 2.42 1.02 2.42 2.6Zm-3.93-.4h2.91c0-.8-.56-1.4-1.43-1.4-.82 0-1.42.56-1.48 1.4Zm8.578-1.42v-2.67h.98V49h-.98v-.6h-.02c-.28.36-.77.74-1.57.74-1.3 0-2.29-1.01-2.29-2.69s.99-2.7 2.29-2.7c.8 0 1.29.37 1.57.77h.02Zm-1.43 3.81c.88 0 1.42-.73 1.42-1.88 0-1.16-.54-1.88-1.42-1.88-.96 0-1.43.88-1.43 1.88 0 1 .47 1.88 1.43 1.88Zm8.573-4.58c1.3 0 2.29 1.02 2.29 2.7 0 1.68-.99 2.69-2.29 2.69-.8 0-1.29-.36-1.57-.77h-.02V49h-.98v-7.15h.98v2.65h.02c.28-.36.77-.75 1.57-.75Zm-.16 4.58c.96 0 1.42-.88 1.42-1.88 0-1-.46-1.88-1.42-1.88-.88 0-1.42.72-1.42 1.88 0 1.15.54 1.88 1.42 1.88Zm4.017 2.46c-.22 0-.37-.02-.63-.07v-.8c.17.02.26.03.42.03.39 0 .85-.2 1.05-1l-2.06-5.05h1.07l1.49 3.9h.02l1.4-3.9h1.03l-2.02 5.22c-.49 1.26-.98 1.67-1.77 1.67ZM72.215 49h-2.74v-7.15h2.72c1.98 0 3.18 1.28 3.18 3.58S74.195 49 72.215 49Zm-1.64-.95h1.57c1.66 0 2.09-1.24 2.09-2.62 0-1.38-.43-2.63-2.09-2.63h-1.57v5.25Zm10.593-1.71c0 .14 0 .29-.01.37h-3.92c.02.85.52 1.64 1.53 1.64.9 0 1.25-.58 1.34-.92h1c-.27.98-1.02 1.72-2.36 1.72-1.62 0-2.52-1.15-2.52-2.71 0-1.6.96-2.7 2.52-2.7 1.55 0 2.42 1.02 2.42 2.6Zm-3.93-.4h2.91c0-.8-.56-1.4-1.43-1.4-.82 0-1.42.56-1.48 1.4Zm8.558-1.44v-.6h.98v4.7c0 1.54-.93 2.23-2.39 2.23s-2.19-.7-2.29-1.62h1.02c.1.46.44.82 1.27.82.93 0 1.41-.41 1.41-1.37v-.69h-.02c-.28.41-.75.77-1.57.77-1.27 0-2.25-.86-2.25-2.49 0-1.64.98-2.5 2.25-2.5.82 0 1.29.39 1.57.75h.02Zm-1.41 3.43c.88 0 1.4-.57 1.4-1.68 0-1.12-.52-1.68-1.4-1.68-.96 0-1.41.72-1.41 1.68s.45 1.68 1.41 1.68Zm5.964 1.22c-1.59 0-2.55-1.1-2.55-2.7 0-1.59.96-2.71 2.56-2.71 1.58 0 2.54 1.11 2.54 2.7 0 1.6-.96 2.71-2.55 2.71Zm.01-.81c1.04 0 1.52-.83 1.52-1.89 0-1.07-.48-1.89-1.52-1.89-1.06 0-1.54.82-1.54 1.89 0 1.06.48 1.89 1.54 1.89Zm5.944-4.56c.18 0 .32.01.47.03v.94c-.12-.02-.21-.03-.33-.03-.89 0-1.53.67-1.53 1.64V49h-.98v-5.1h.98v.97h.02c.27-.64.68-1.09 1.37-1.09Zm4.731.74v-2.67h.98V49h-.98v-.6h-.02c-.28.36-.77.74-1.57.74-1.3 0-2.29-1.01-2.29-2.69s.99-2.7 2.29-2.7c.8 0 1.29.37 1.57.77h.02Zm-1.43 3.81c.88 0 1.42-.73 1.42-1.88 0-1.16-.54-1.88-1.42-1.88-.96 0-1.43.88-1.43 1.88 0 1 .47 1.88 1.43 1.88Zm4.763-5.34h-1.11v-1.06h1.11v1.06Zm-.07 6.01h-.98v-5.1h.98V49Zm2.71.14c-1.02 0-1.67-.59-1.67-1.46 0-1.14.86-1.48 2.13-1.72.8-.15 1.29-.25 1.29-.75 0-.37-.22-.68-.97-.68-.89 0-1.16.28-1.21.96h-1c.05-.98.69-1.75 2.25-1.75 1.05 0 1.89.44 1.89 1.76v2.34c0 .37.05.56.24.56.03 0 .06 0 .12-.01v.6a2.2 2.2 0 0 1-.5.06c-.49 0-.75-.19-.81-.77h-.02c-.33.53-.91.86-1.74.86Zm.22-.79c.88 0 1.53-.45 1.53-1.34v-.73c-.16.15-.6.26-1.12.37-.9.18-1.28.43-1.28.96 0 .48.26.74.87.74Zm6.563-4.6c.94 0 1.7.54 1.7 1.71V49h-.98v-3.27c0-.68-.3-1.14-1.04-1.14-.84 0-1.38.51-1.38 1.28V49h-.98v-5.1h.98v.64h.02c.27-.39.8-.79 1.68-.79Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h116v51H0z"></path></clipPath></defs></svg>            
            </Link>
            <Link className="cart-icon" to="/cart">
                <svg width="26" height="26" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3716 1.66896L8.11852 4.17236L5.3685 7.17234L4.63135 6.49662L7.37979 3.49832L9.62828 1L10.3716 1.66896Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6284 1.66896L14.8815 4.17236L17.6315 7.17234L18.3687 6.49662L15.6202 3.49832L13.3717 1L12.6284 1.66896Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.33449L3 21.3345H20L23 6.33449H0ZM1.2198 7.33449L3.8198 20.3345H19.1802L21.7802 7.33449H1.2198Z" fill="black"/>
                </svg>
                <span>{numOfProducts}</span>
            </Link>
        </header>
    );
  }
  
  export default Header;
  