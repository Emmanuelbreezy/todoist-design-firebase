import React from 'react';
import Layout from '../../hoc/Layout/layout';
import Content from '../../components/UI/content';
import { ThemeProvider } from '../../context/theme-context';

const App = () => { 
  return (
    <ThemeProvider>
      <Layout>
         <Content />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
