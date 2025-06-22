import { Routes, Route } from "react-router-dom";
import SignupForm from "./_auth/Forms/SignupForm";
import SigninForm from "./_auth/Forms/SigninForm";
import { Home } from "./_root/pages";
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screeen">
      <Routes>

        {/*public roots */}

        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
        </Route>

        {/*private roots */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />  {/* The starting page */} 
        </Route>
                
      </Routes>
    </main>
  );
};

export default App;
