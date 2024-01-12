import { useRouteError } from "react-router-dom";

export default function RouterErrorPage() {
  const error = useRouteError() as { message?: string; statusText?: string };
  console.error(error);

  return (
    <div id="error-page">
      <h1>你，里侧除外！</h1>
      <p>芬尼尔狼如是说</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
