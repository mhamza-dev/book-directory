import { useRouteError } from "react-router-dom";

interface CustomError {
  status?: number;
  statusText?: string;
  message?: string;
}
export default function ErrorPage() {
  const error = useRouteError() as CustomError;

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
