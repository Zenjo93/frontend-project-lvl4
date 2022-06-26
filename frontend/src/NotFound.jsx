import 'bootstrap/dist/css/bootstrap.css';

const NotFound = () => (
  <div className="d-flex flex-column h-100">
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
      </div>
    </nav>
    <div className="text-center">
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p className="text-muted">
        Но вы можете перейти&nbsp;
        <a href="/">на главную страницу</a>
      </p>
    </div>
  </div>
);

export default NotFound;

