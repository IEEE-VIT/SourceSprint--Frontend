import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './registration.css';

const validators = {
  name: v => v.trim().length > 1,
  github: v => /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(v.trim()),
  regno: v => v.trim().length >= 5,
  email: v => /^[^\s@]+@vitstudent\.ac\.in$/i.test(v.trim()),
};

const errorMessages = {
  name: 'Please enter your full name.',
  github: 'Enter a valid GitHub username (used for the leaderboard).',
  regno: 'Please enter your registration number.',
  email: 'Enter a valid VIT student email (@vitstudent.ac.in).',
};

export default function RegistrationPage() {
  const canvasRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', github: '', regno: '', email: '' });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isFieldValid = (field) => validators[field](formData[field] || '');
  const isFormValid = Object.keys(validators).every(isFieldValid);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setApiError('');
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, github: true, regno: true, email: true });
    if (!isFormValid) return;

    setLoading(true);
    setApiError('');

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    axios.post(`${backendUrl}/register/new`, {
      name: formData.name,
      email: formData.email,
      github: formData.github,
      regno: formData.regno,
      phone: '0000000000', // Default fallback as backend schema requires a phone number
      vit: 'yes' // Default fallback to satisfy backend schema enum requirement
    })
    .then((response) => {
      setLoading(false);
      const data = response.data;
      
      if (data.isNotParticipant === true || data.msg === 'User is not a participant') {
        setApiError('This email is not registered in our participant list. Please use the email you used to register for SourceSprint.');
      } else if (data.msg === 'User already exists') {
        setApiError('You have already registered for SourceSprint! You can proceed to log in with GitHub.');
      } else if (data.error) {
        setApiError('An error occurred. Please check your connection and try again.');
      } else {
        setSubmitted(true);
      }
    })
    .catch((error) => {
      setLoading(false);
      console.error('Registration failed:', error);
      setApiError('An error occurred. Please check your connection and try again.');
    });
  };

  /* ---------------- Starfield background (canvas) ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, rafId;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight * 2;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const bgStars = [];
    const BG_COUNT = 220;
    for (let i = 0; i < BG_COUNT; i++) {
      const bx = Math.random() * w, by = Math.random() * h;
      bgStars.push({
        baseX: bx, baseY: by, x: bx, y: by, offX: 0, offY: 0,
        r: Math.random() * 1.6 + 0.4,
        baseAlpha: Math.random() * 0.5 + 0.3,
        twinkle: Math.random() < 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    const denseStars = [];
    const DENSE_COUNT = 90;
    for (let i = 0; i < DENSE_COUNT; i++) {
      const isAccent = Math.random() < 0.12;
      const bx = Math.random() * w, by = Math.random() * h;
      denseStars.push({
        baseX: bx, baseY: by, x: bx, y: by, offX: 0, offY: 0,
        r: Math.random() * 1.8 + 0.6,
        color: isAccent ? '242,163,65' : '255,255,255',
        baseAlpha: Math.random() * 0.5 + 0.4,
        twinkle: Math.random() < 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.025 + 0.01,
      });
    }

    let mouseX = null, mouseY = null;
    const INFLUENCE_RADIUS = 170;
    const MAX_PUSH = 26;
    const EASE = 0.07;

    function onMouseMove(e) { mouseX = e.pageX; mouseY = e.pageY; }
    function onMouseLeave() { mouseX = null; mouseY = null; }

    function updateStarPosition(s) {
      let targetOffX = 0, targetOffY = 0;
      if (mouseX !== null) {
        const dx = s.baseX - mouseX;
        const dy = s.baseY - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < INFLUENCE_RADIUS && dist > 0.01) {
          const push = ((INFLUENCE_RADIUS - dist) / INFLUENCE_RADIUS) * MAX_PUSH;
          targetOffX = (dx / dist) * push;
          targetOffY = (dy / dist) * push;
        }
      }
      s.offX += (targetOffX - s.offX) * EASE;
      s.offY += (targetOffY - s.offY) * EASE;
      s.x = s.baseX + s.offX;
      s.y = s.baseY + s.offY;
    }

    function drawDot(x, y, r, alpha, colorRGB) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorRGB},${alpha.toFixed(3)})`;
      ctx.fill();
    }

    function drawStar(s, t, colorRGB) {
      updateStarPosition(s);
      let alpha = s.baseAlpha;
      if (s.twinkle) alpha = s.baseAlpha * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
      drawDot(s.x, s.y, s.r, alpha, colorRGB || s.color || '255,255,255');
    }

    function relayout() {
      for (const s of bgStars) {
        s.baseX = Math.random() * w; s.baseY = Math.random() * h;
        s.x = s.baseX; s.y = s.baseY; s.offX = 0; s.offY = 0;
      }
      for (const s of denseStars) {
        s.baseX = Math.random() * w; s.baseY = Math.random() * h;
        s.x = s.baseX; s.y = s.baseY; s.offX = 0; s.offY = 0;
      }
    }

    function onResize() { resize(); relayout(); }

    function loop(ts) {
      ctx.clearRect(0, 0, w, h);
      for (const s of bgStars) drawStar(s, ts / 1000, '255,255,255');
      for (const s of denseStars) drawStar(s, ts / 1000);
      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="reg-page">
      <canvas ref={canvasRef} className="stars-canvas" />

      <Link to="/" className="home-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Home
      </Link>

      <main>
        <div className="form-wrapper">
          <div className="page-heading">
            <h1>REGISTER</h1>
            <p>Secure your spot at SourceSprint, sprint into open source.</p>
          </div>

          <div className="card">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className={`field ${touched.name && !isFieldValid('name') ? 'has-error' : ''}`}>
                  <label>Full Name <span className="req">*</span></label>
                  <input
                    type="text" name="name" placeholder="Enter your full name"
                    value={formData.name} onChange={handleChange} onBlur={handleBlur}
                    className={touched.name && !isFieldValid('name') ? 'error' : ''}
                  />
                  <div className="error-msg">{errorMessages.name}</div>
                </div>

                <div className={`field ${touched.github && !isFieldValid('github') ? 'has-error' : ''}`}>
                  <label>GitHub ID <span className="req">*</span></label>
                  <input
                    type="text" name="github" placeholder="e.g. octocat"
                    value={formData.github} onChange={handleChange} onBlur={handleBlur}
                    className={touched.github && !isFieldValid('github') ? 'error' : ''}
                  />
                  <div className="error-msg">{errorMessages.github}</div>
                </div>

                <div className={`field ${touched.regno && !isFieldValid('regno') ? 'has-error' : ''}`}>
                  <label>Registration Number <span className="req">*</span></label>
                  <input
                    type="text" name="regno" placeholder="e.g. 21BCE1234"
                    value={formData.regno} onChange={handleChange} onBlur={handleBlur}
                    className={touched.regno && !isFieldValid('regno') ? 'error' : ''}
                  />
                  <div className="error-msg">{errorMessages.regno}</div>
                </div>

                <div className={`field ${touched.email && !isFieldValid('email') ? 'has-error' : ''}`}>
                  <label>VIT Student Email ID <span className="req">*</span></label>
                  <input
                    type="email" name="email" placeholder="yourname@vitstudent.ac.in"
                    value={formData.email} onChange={handleChange} onBlur={handleBlur}
                    className={touched.email && !isFieldValid('email') ? 'error' : ''}
                  />
                  <div className="error-msg">{errorMessages.email}</div>
                </div>

                <button type="submit" className="submit-btn" disabled={!isFormValid || loading}>
                  {loading ? 'Registering...' : 'Register Now'}
                </button>

                {apiError && (
                  <div className="error-card">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="error-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div className="error-content-wrapper">
                      <span className="error-text">{apiError}</span>
                      {apiError.includes('already registered') && (
                        <a 
                          href={`${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/github/login`}
                          className="error-action-link"
                        >
                          Log in with GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="success">
                <div className="check-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E8A045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2>Registered!</h2>
                <p>Thanks for registering for SourceSprint 🎉<br />You can now return home and log in with GitHub to start tracking your progress.</p>
                <Link to="/" className="back-btn">Back to Home</Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
