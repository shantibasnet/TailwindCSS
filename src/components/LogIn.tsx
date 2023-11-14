import { useState } from 'react';
import { ILog } from '../types/logType';
import Home from './Home';

function LogIn() {
  const [formData, setFormData] = useState<ILog>({
    username: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowForm(false);
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='flex justify-center py-5 px-8 rounded-full font-semibold'>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username/Email"
                required
              />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <button type='submit'>Log In</button>
        </form>
      ) : null} 

      {isSubmitted && (
      <Home/>
  
      )}
      
    </div>
  );
}

export default LogIn;
