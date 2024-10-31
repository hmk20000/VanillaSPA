import Component from "../core/Components";
class ErrorBoundary extends Component {
  template() {
    return `
      <div>
        <h1>오류 발생!</h1>
        <p>${this.props.error.message}</p>
      </div>
    `;
  }
}

export default ErrorBoundary;