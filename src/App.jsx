import LoginForm from './components/LoginForm';

function App() {
  const handleSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };
  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
