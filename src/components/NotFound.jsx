import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = ({ content }) => (
  <section className="section section--page notfound">
    <div className="container center">
      <p className="notfound__code gradient-text">404</p>
      <h1 className="section-title">{content.notFound.title}</h1>
      <p className="section-sub">{content.notFound.desc}</p>
      <Link to="/" className="btn btn--primary btn--lg"><Home size={18} /> {content.notFound.btn}</Link>
    </div>
  </section>
);

export default NotFound;
