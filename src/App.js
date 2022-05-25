import { AuthProvider } from './context/authContext';
import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <div className="content-pages">
      <AuthProvider> 
        <MyRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
