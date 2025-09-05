import React, { useState } from 'react';

const LoginForm = ({
  onSubmit,
  buttonLabel = 'Login',
  companyName = 'Virtukart',
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = { username: '', password: '' };
    let isValid = true;
    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ username, password });
      setUsername('');
      setPassword('');
      setErrors({ username: '', password: '' });
      setShowPassword(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}
          >
            {companyName}
          </h1>
          <p style={{ color: '#6b7280', fontWeight: '500', marginTop: '8px' }}>
            Sign in to your account
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label
              htmlFor="username"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Username <span style={{ color: '#ec4899' }}>*</span>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '90%',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid black',
                transition: 'all 0.15s',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px #818cf8')}
              onBlur={(e) =>
                (e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)')
              }
              placeholder="Enter username"
              autoComplete="username"
            />
            {errors.username && (
              <span
                style={{
                  color: '#ec4899',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginTop: '4px',
                  display: 'block',
                }}
              >
                {errors.username}
              </span>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <label
              htmlFor="password"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Password <span style={{ color: '#ec4899' }}>*</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '90%',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid black',
                transition: 'all 0.15s',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px #818cf8')}
              onBlur={(e) =>
                (e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)')
              }
              placeholder="Enter password"
              autoComplete="current-password"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: 'absolute',
                right: '16px',
                top: '70%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#9ca3af',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#6366f1')}
              onMouseLeave={(e) => (e.target.style.color = '#9ca3af')}
              tabIndex={0}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              role="button"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  style={{ height: '20px', width: '20px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  style={{ height: '20px', width: '20px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </span>
            {errors.password && (
              <span
                style={{
                  color: '#ec4899',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginTop: '4px',
                  display: 'block',
                }}
              >
                {errors.password}
              </span>
            )}
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              background: '#6366f1',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => (e.target.style.background = '#4f46e5')}
            onMouseLeave={(e) => (e.target.style.background = '#6366f1')}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px #a5b4fc')}
            onBlur={(e) =>
              (e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)')
            }
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
