* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  background: #050816;
  color: #f9fafb;
}

a {
  color: inherit;
  text-decoration: none;
}

/* NAV */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
  background: rgba(5, 8, 22, 0.95);
  border-bottom: 1px solid rgba(148, 163, 184, 0.3);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-weight: 700;
  font-size: 1.3rem;
}

.nav nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav nav a {
  font-size: 0.95rem;
  opacity: 0.85;
}

.nav nav a:hover {
  opacity: 1;
}

/* HERO */
.hero {
  padding: 4rem 5vw;
  text-align: center;
}

.hero-text h1 {
  font-size: 2.3rem;
  margin-bottom: 1rem;
}

.hero-text p {
  max-width: 600px;
  margin: 0.5rem auto 1.5rem;
  opacity: 0.9;
}

.sub {
  font-size: 0.85rem;
  opacity: 0.8;
}

/* BUTTONS */
.btn {
  border-radius: 999px;
  padding: 0.6rem 1.4rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
}

.btn.primary {
  background: #22c55e;
  color: #022c22;
}

.btn.secondary {
  background: #1f2937;
  color: #e5e7eb;
}

.btn.outline {
  background: transparent;
  border: 1px solid #4b5563;
  color: #e5e7eb;
}

.btn.small {
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
}

.btn.full {
  width: 100%;
}

/* SECTIONS */
.section {
  padding: 3rem 5vw;
}

.section h2 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

/* GRID */
.grid, .pricing-grid, .dash-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #020617;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.card h3 {
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.5rem;
  margin: 0.5rem 0 1rem;
}

.highlight {
  border-color: #22c55e;
}

/* AUTH */
.auth {
  max-width: 420px;
  margin: 0 auto;
  text-align: center;
}

.auth-toggle {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.auth-tab {
  flex: 1;
  border-radius: 999px;
  border: 1px solid #4b5563;
  background: transparent;
  color: #e5e7eb;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  font-size: 0.85rem;
}

.auth-tab.active {
  background: #1f2937;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.auth-form input {
  padding: 0.6rem 0.8rem;
  border-radius: 0.7rem;
  border: 1px solid #4b5563;
  background: #020617;
  color: #f9fafb;
}

.auth-form input:focus {
  outline: none;
  border-color: #22c55e;
}

.auth-msg {
  font-size: 0.8rem;
  min-height: 1rem;
}

.hidden {
  display: none !important;
}

/* DASHBOARD */
.dashboard {
  max-width: 900px;
  margin: 0 auto;
}

.dash-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.user-info {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.9;
}

.list {
  list-style: none;
  margin-top: 0.5rem;
}

.list li {
  padding: 0.4rem 0.3rem;
  border-bottom: 1px solid rgba(31, 41, 55, 0.8);
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.list li button {
  font-size: 0.75rem;
}

.small {
  font-size: 0.8rem;
  opacity: 0.85;
  margin-top: 0.4rem;
}

.entries-card {
  margin-top: 1.5rem;
}

.entry-form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.75rem 0;
}

.entry-form input {
  padding: 0.4rem 0.6rem;
  border-radius: 0.6rem;
  border: 1px solid #4b5563;
  background: #020617;
  color: #f9fafb;
  font-size: 0.85rem;
}

.entries-list li {
  align-items: flex-start;
  flex-direction: column;
}

.entries-list .meta {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .hero-text h1 {
    font-size: 1.8rem;
  }

  .nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  .entry-form {
    flex-direction: column;
  }
}
