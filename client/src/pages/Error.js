import { useRouteError } from 'react-router-dom';
import PageContent from '../components/UI/PageContent';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An Error has occured!';
  let message = 'Something went wrong.';

  if (error.status === 500) message = error.data.message;
  if (error.status === 400) {
    title = 'Not Found';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
