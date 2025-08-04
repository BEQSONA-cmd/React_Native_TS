import { MyAppProvider } from './src/components/appContexts';
import Layout from './src/app/layout';

export default function App() {
  return (
    <MyAppProvider>
      <Layout />
    </MyAppProvider>
  );
}
