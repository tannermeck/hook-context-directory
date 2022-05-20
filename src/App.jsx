import useForm from './hooks/useForm';

export default function App() {
  const { formState, handleChange } = useForm({ firstName: '', lastName: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <p>{formState.firstName}</p>
      <p>{formState.lastName}</p>
    </>
  );
}
